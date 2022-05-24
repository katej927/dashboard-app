import { useRecoilState } from 'recoil';
import { graph1stSelectedOptionState, graph2ndSelectedOptionState } from 'states';
import {
  VictoryChart,
  VictoryVoronoiContainer,
  VictoryGroup,
  VictoryTooltip,
  VictoryLine,
  VictoryScatter,
  VictoryAxis,
} from 'victory';

import { GraphDropDown } from 'components/common';
import { filter1stOpt, convertData } from './utils';
import { PRIMARY_OPTIONS } from './constants';
import { COLORS } from 'styles/graph';
import { IDay } from 'types/integratedAd';

interface Props {
  integratedAdInfo: IDay[];
}

const GraghTwoTypes = ({ integratedAdInfo }: Props) => {
  const [firstOption, setFirstOption] = useRecoilState(graph1stSelectedOptionState);
  const [secondOption, setSecondOption] = useRecoilState(graph2ndSelectedOptionState);

  const { unit } = convertData(integratedAdInfo, firstOption) ?? {};
  // const {
  //   unit: unit2ndOption,
  //   formatedData: data2ndOption,
  //   maxValue: max2ndOption,
  // } = convertData(integratedAdInfo, secondOption);

  // console.log(
  //   'unit1stOption',
  //   unit1stOption,
  //   'data1stOption',
  //   data1stOption,
  //   'max1stOption',
  //   max1stOption,
  //   'unit2ndOption',
  //   unit2ndOption,
  //   'data2ndOption',
  //   data2ndOption,
  //   'max2ndOption',
  //   max2ndOption
  // );

  // const max1stOption = Math.max(...convertData('conv').map((obj) => obj.y));
  // const max2ndOption = Math.max(...convertData('click').map((obj) => obj.y));
  // console.log('convertData', Math.max(...convertData('conv').map((obj) => obj.y)));

  console.log();

  return (
    <article style={{ padding: '50px' }}>
      <GraphDropDown selectedOption={firstOption} optionList={PRIMARY_OPTIONS} updateOption={setFirstOption} />
      <GraphDropDown
        selectedOption={secondOption}
        optionList={filter1stOpt(firstOption)}
        updateOption={setSecondOption}
      />
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
          style={{
            axis: { strokeWidth: 0.5, fill: 'black' },
            tickLabels: { fontSize: 12, padding: 10, fill: '#cccccc' },
            ticks: { stroke: 'grey', size: 0 },
          }}
        />
        <VictoryAxis
          key='conv'
          dependentAxis
          tickValues={[0.25, 0.5, 0.75, 1]}
          tickFormat={(t) => {
            return t * max1stOption;
          }}
          // tickFormat={(t) => {
          //   return t * 1200;
          // }}
          style={{
            axis: { stroke: 'transparent' },
            tickLabels: { fontSize: 12, padding: 10, fill: '#cccccc' },
            ticks: { stroke: '#eeeeee', size: 0 },
            grid: { stroke: '#eeeeee' },
          }}
        />
        <VictoryAxis
          dependentAxis
          key='click'
          offsetX={960}
          tickValues={[0.25, 0.5, 0.75, 1]}
          // tickFormat={(t) => {
          //   return t * max2ndOption * 2;
          // }}
          tickFormat={(t) => {
            return t * 470000 * 2;
          }}
          style={{
            axis: { stroke: 'trasparent' },
            tickLabels: { fontSize: 12, padding: 40, fill: '#cccccc', textAnchor: 'start' },
            ticks: { stroke: '#eeeeee', size: 0 },
            grid: { stroke: '#eeeeee' },
          }}
        />
        <VictoryLine
          key='conv'
          data={data1stOption}
          style={{
            data: {
              stroke: COLORS.GRAPH_01,
            },
            labels: { fontSize: 10 },
          }}
          // y={(datum) => datum.y / max1stOption}
          y={(datum) => datum.y / 1200}
          labelComponent={<VictoryTooltip dy={0} centerOffset={{ x: 25 }} />}
        />
        <VictoryLine
          key='click'
          data={data2ndOption}
          style={{ data: { stroke: COLORS.GRAPH_02 }, labels: { fontSize: 10 } }}
          // y={(datum) => datum.y / (max2ndOption * 2)}
          y={(datum) => datum.y / (470000 * 2)}
          labelComponent={<VictoryTooltip dy={0} centerOffset={{ x: 25 }} />}
        />
      </VictoryChart>
    </article>
  );
};

export default GraghTwoTypes;
