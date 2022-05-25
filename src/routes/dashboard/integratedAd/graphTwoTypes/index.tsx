import { useState } from 'react';
import {
  VictoryChart,
  VictoryVoronoiContainer,
  VictoryGroup,
  VictoryTooltip,
  VictoryLine,
  VictoryScatter,
  VictoryAxis,
} from 'victory';
import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';

import { GraphDropDown } from './_shared';
import { filter1stOpt, convertData } from './utils';
import { PRIMARY_OPTIONS, PERIOD_OPTIONS } from './constants';
import { COLORS } from 'styles/graph';
import { IDay } from 'types/integratedAd';

interface Props {
  integratedAdInfo: IDay[];
}

const GraghTwoTypes = ({ integratedAdInfo }: Props) => {
  const [firstOption, setFirstOption] = useState(PRIMARY_OPTIONS[0]);
  const [secondOption, setSecondOption] = useState(PRIMARY_OPTIONS[1]);
  const [periodOption, setPeriodOption] = useState(PERIOD_OPTIONS[0]);

  const {
    unit: unit1stOption,
    formatedData: data1stOption,
    maxValue: max1stOption,
  } = convertData(integratedAdInfo, firstOption) ?? {};

  const {
    unit: unit2ndOption,
    formatedData: data2ndOption,
    maxValue: max2ndOption,
  } = convertData(integratedAdInfo, secondOption) ?? {};

  dayjs.extend(weekday);

  console.log('dayjs().add(7, day)', dayjs('2019-01-25').valueOf(), dayjs('2022-05-24').weekday());

  const BTNS_PROPS = [
    { selectedOption: firstOption, optionList: PRIMARY_OPTIONS, updateOption: setFirstOption, isPeriodBtn: false },
    {
      selectedOption: secondOption,
      optionList: filter1stOpt(firstOption),
      updateOption: setSecondOption,
      isPeriodBtn: false,
    },
    { selectedOption: periodOption, optionList: PERIOD_OPTIONS, updateOption: setPeriodOption, isPeriodBtn: true },
  ];

  return (
    <article style={{ padding: '50px' }}>
      {BTNS_PROPS.map((btn) => {
        const { selectedOption, optionList, updateOption, isPeriodBtn } = btn;
        return (
          <GraphDropDown
            key={selectedOption}
            selectedOption={selectedOption}
            optionList={optionList}
            updateOption={updateOption}
            isPeriodBtn={isPeriodBtn}
          />
        );
      })}
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
        domainPadding={{ x: 50, y: 30 }}
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
          tickFormat={(x) => dayjs(x).format('MM월 DD일')}
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
              tickLabels: { fontSize: 12, padding: 40, fill: '#cccccc', textAnchor: 'start' },
              ticks: { stroke: '#eeeeee', size: 0 },
              grid: { stroke: '#eeeeee' },
            }}
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
        />
        {secondOption !== '없음' && (
          <VictoryLine
            key={secondOption}
            data={data2ndOption}
            style={{ data: { stroke: COLORS.GRAPH_02 }, labels: { fontSize: 10 } }}
            y={(datum) => datum.y / ((max2ndOption ?? 1) * 2)}
            labelComponent={<VictoryTooltip dy={0} centerOffset={{ x: 25 }} />}
          />
        )}
      </VictoryChart>
    </article>
  );
};

export default GraghTwoTypes;
