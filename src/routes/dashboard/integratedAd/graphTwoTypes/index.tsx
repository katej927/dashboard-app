import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { periodState } from 'states';
import {
  VictoryChart,
  VictoryVoronoiContainer,
  VictoryGroup,
  VictoryTooltip,
  VictoryLine,
  VictoryScatter,
  VictoryAxis,
  VictoryLabel,
} from 'victory';
import dayjs from 'dayjs';

import { GraphDropDown, filterGraphOpt, convertData, filterPeriodOpt } from './_shared';
import { PRIMARY_OPTIONS } from './_shared/constants';
import { COLORS } from 'styles/graph';
import styles from './graphTwoType.module.scss';
import { IDay } from 'types/integratedAd';

interface Props {
  integratedAdInfo: IDay[];
}

const GraghTwoTypes = ({ integratedAdInfo }: Props) => {
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
      {/* <VictoryChart height={320} width={960} containerComponent={<VictoryVoronoiContainer />}>
        <VictoryGroup
          color={COLORS.GRAPH_01}
          labels={({ datum }) => datum.y}
          labelComponent={<VictoryTooltip style={{ fontSize: 10 }} />}
          data={convertData('conv')}
        >
          <VictoryLine animate={{ duration: 2000, onLoad: { duration: 1000 } }} />
          <VictoryScatter size={({ active }) => active && 8} />
        </VictoryGroup>
        <VictoryGroup
          color={COLORS.GRAPH_02}
          labels={({ datum }) => datum.y}
          labelComponent={<VictoryTooltip style={{ fontSize: 10 }} />}
          data={convertData('click')}
        >
          <VictoryLine animate={{ duration: 2000, onLoad: { duration: 1000 } }} />
          <VictoryScatter size={({ active }) => active && 8} />
        </VictoryGroup>
      </VictoryChart> */}
      <VictoryChart
        domainPadding={{ x: 80, y: 30 }}
        height={400}
        width={960}
        containerComponent={
          <VictoryVoronoiContainer
            labels={({ datum }) => {
              return datum.y;
            }}
          />
        }
      >
        <VictoryAxis
          tickCount={7}
          tickFormat={(x) => (periodOption === '일간' ? dayjs(x).format('MM월 DD일') : x)}
          style={{
            axis: { strokeWidth: 0.5, fill: 'black' },
            tickLabels: { fontSize: 12, padding: 10, fill: '#cccccc' },
            ticks: { stroke: 'grey', size: 0 },
          }}
        />
        <VictoryAxis
          key={firstOption}
          dependentAxis
          tickValues={[0.25, 0.5, 0.75, 1]}
          tickFormat={(t) => {
            return `${t * (max1stOption ?? 1)}${unit1stOption}`;
          }}
          style={{
            axis: { stroke: 'transparent' },
            tickLabels: { fontSize: 12, padding: 10, fill: '#cccccc' },
            ticks: { stroke: '#eeeeee', size: 0 },
            grid: { stroke: '#eeeeee' },
          }}
          tickLabelComponent={<VictoryLabel verticalAnchor='start' textAnchor='start' dy={5} dx={8} />}
        />
        {secondOption !== '없음' && (
          <VictoryAxis
            dependentAxis
            key={secondOption}
            offsetX={960}
            tickValues={[0.25, 0.5, 0.75, 1]}
            tickFormat={(t) => {
              return `${t * (max2ndOption ?? 1) * 2}${unit2ndOption}`;
            }}
            style={{
              axis: { stroke: 'trasparent' },
              tickLabels: { fontSize: 12, padding: 110, fill: '#cccccc', textAnchor: 'start' },
              ticks: { stroke: '#eeeeee', size: 0 },
              grid: { stroke: '#eeeeee' },
            }}
            tickLabelComponent={<VictoryLabel verticalAnchor='start' textAnchor='start' dy={5} dx={8} />}
          />
        )}
        <VictoryLine
          key={firstOption}
          data={data1stOption}
          style={{
            data: {
              stroke: COLORS.GRAPH_01,
            },
            labels: { fontSize: 10 },
          }}
          y={(datum) => datum.y / (max1stOption ?? 1)}
          labelComponent={<VictoryTooltip dy={0} centerOffset={{ x: 25 }} />}
          animate={{ duration: 2000, onLoad: { duration: 1000 } }}
        />
        {secondOption !== '없음' && (
          <VictoryLine
            key={secondOption}
            data={data2ndOption}
            style={{ data: { stroke: COLORS.GRAPH_02 }, labels: { fontSize: 10 } }}
            y={(datum) => datum.y / ((max2ndOption ?? 1) * 2)}
            labelComponent={<VictoryTooltip dy={0} centerOffset={{ x: 25 }} />}
            animate={{ duration: 2000, onLoad: { duration: 1000 } }}
          />
        )}
      </VictoryChart>
    </article>
  );
};

export default GraghTwoTypes;
