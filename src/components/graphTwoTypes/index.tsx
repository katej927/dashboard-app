import { useRecoilState } from 'recoil';
import { graph1stSelectedOptionState, graph2ndSelectedOptionState } from 'routes/dashboard/states';
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
import { convertData, solution } from './utils';
import { PRIMARY_OPTIONS } from 'assets';
import { COLORS } from 'styles/graph';

const GraghTwoTypes = () => {
  const [firstOption, setFirstOption] = useRecoilState(graph1stSelectedOptionState);
  const [secondOption, setSecondOption] = useRecoilState(graph2ndSelectedOptionState);

  return (
    <article>
      <GraphDropDown selectedOption={firstOption} optionList={PRIMARY_OPTIONS} updateOption={setFirstOption} />
      <GraphDropDown selectedOption={secondOption} optionList={solution(firstOption)} updateOption={setSecondOption} />
      <VictoryChart height={320} width={960} containerComponent={<VictoryVoronoiContainer />}>
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
      </VictoryChart>
    </article>
  );
};

export default GraghTwoTypes;
