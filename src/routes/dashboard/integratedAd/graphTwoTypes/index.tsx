import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { periodState } from 'states';
import {
  VictoryScatter,
  VictoryChart,
  VictoryVoronoiContainer,
  VictoryTooltip,
  VictoryLine,
  VictoryAxis,
  VictoryLabel,
} from 'victory';
import dayjs from 'dayjs';

import { GraphDropDown, filterGraphOpt, convertData, filterPeriodOpt, convertNumToUnit, properties } from './_shared';
import { PRIMARY_OPTIONS } from './_shared/constants';
import styles from './graphTwoType.module.scss';
import { IDay } from 'types/integratedAd';

interface Props {
  integratedAdInfo: IDay[];
  isLoading: boolean;
}

const GraghTwoTypes = ({ integratedAdInfo, isLoading }: Props) => {
  const period = useRecoilValue(periodState);
  const [firstOption, setFirstOption] = useState(PRIMARY_OPTIONS[0]);
  const [secondOption, setSecondOption] = useState(PRIMARY_OPTIONS[1]);
  const [periodOption, setPeriodOption] = useState(filterPeriodOpt(period)[0]);

  const {
    unit: unit1stOption,
    formatedData: data1stOption,
    maxValue: max1stOption,
  } = convertData(integratedAdInfo, firstOption, periodOption) ?? {};

  const {
    unit: unit2ndOption,
    formatedData: data2ndOption,
    maxValue: max2ndOption,
  } = convertData(integratedAdInfo, secondOption, periodOption) ?? {};

  const BTNS_PROPERTIES = [
    {
      selectedOption: firstOption,
      optionList: filterGraphOpt(secondOption),
      updateOption: setFirstOption,
      isPeriodBtn: false,
    },
    {
      selectedOption: secondOption,
      optionList: filterGraphOpt(firstOption).concat('없음'),
      updateOption: setSecondOption,
      isPeriodBtn: false,
    },
  ];

  return (
    <article className={styles.wrapper}>
      <div className={styles.btnWrapper}>
        <div className={styles.dataBtnWrapper}>
          {BTNS_PROPERTIES.map((btn, idx) => {
            const { selectedOption, optionList, updateOption, isPeriodBtn } = btn;
            return (
              <GraphDropDown
                key={selectedOption}
                selectedOption={selectedOption}
                optionList={optionList}
                updateOption={updateOption}
                isPeriodBtn={isPeriodBtn}
                idx={idx}
              />
            );
          })}
        </div>
        <GraphDropDown
          key={periodOption}
          selectedOption={periodOption}
          optionList={filterPeriodOpt(period)}
          updateOption={setPeriodOption}
          isPeriodBtn
        />
      </div>
      <VictoryChart
        standalone
        containerComponent={
          <VictoryVoronoiContainer
            labels={({ datum }) => {
              return datum.y;
            }}
          />
        }
        {...properties.chart}
      >
        <VictoryAxis
          tickFormat={(x) => (periodOption === '일간' ? dayjs(x).format('MM월 DD일') : x)}
          {...properties.yAxis}
        />
        <VictoryAxis
          key={firstOption}
          dependentAxis
          tickFormat={(t) => {
            return `${convertNumToUnit(t * (max1stOption ?? 1))}${unit1stOption}`;
          }}
          tickLabelComponent={<VictoryLabel verticalAnchor='start' textAnchor='start' {...properties.label1} />}
          {...properties.xAxis1}
        />
        {secondOption !== '없음' && (
          <VictoryAxis
            dependentAxis
            key={secondOption}
            offsetX={960}
            tickFormat={(t) => {
              return `${convertNumToUnit(t * (max2ndOption ?? 1) * 2)}${unit2ndOption}`;
            }}
            tickLabelComponent={<VictoryLabel verticalAnchor='start' textAnchor='start' {...properties.label2} />}
            {...properties.xAxis2}
          />
        )}
        {!isLoading && (
          <VictoryLine
            key={firstOption}
            data={data1stOption}
            y={(datum) => datum.y / (max1stOption ?? 1)}
            labelComponent={<VictoryTooltip {...properties.tooltip} />}
            {...properties.line1}
          />
        )}
        {!isLoading && secondOption !== '없음' && (
          <VictoryLine
            key={secondOption}
            data={data2ndOption}
            y={(datum) => datum.y / ((max2ndOption ?? 1) * 2)}
            labelComponent={<VictoryTooltip style={{ fontSize: 20, fill: 'red' }} />}
            {...properties.line2}
          />
        )}
      </VictoryChart>
    </article>
  );
};

export default GraghTwoTypes;
