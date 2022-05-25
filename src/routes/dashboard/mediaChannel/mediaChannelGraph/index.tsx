import { useQuery } from 'react-query';
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryLegend,
  VictoryStack,
  VictoryTheme,
  VictoryTooltip,
} from 'victory';
import { fetchMediaChannelData } from 'hook/fetchMediaChannelData';
import { formatMediaChannelGraphData } from 'utils/formatMediaChannelGraphData';

import GRAPH_STYLE from './GRAPH_STYLE';
import styles from './mediaChannelGraph.module.scss';

const tickFormat = ['광고비', '매출', '노출 수', '클릭 수', '전환 수'];

const MediaChannelGraph = () => {
  const { startDate, endDate } = { startDate: '2022-02-01', endDate: '2022-04-20' };
  const { isLoading, data } = useQuery(
    [
      'mediaChannelData',
      { startDate, endDate },
      {
        enabled: !!startDate && !!endDate,
        staleTime: Infinity,
        refetchOnWindowFocus: true,
        keepPreviousData: true,
      },
    ],
    () => fetchMediaChannelData({ startDate, endDate })
  );

  const { google, facebook, naver, kakao } = formatMediaChannelGraphData(data);

  return (
    <div className={styles.chartWrapper}>
      <VictoryChart
        domainPadding={20}
        theme={VictoryTheme.grayscale}
        animate={GRAPH_STYLE.animate}
        {...GRAPH_STYLE.chart}
      >
        <VictoryAxis tickValues={[1, 2, 3, 4, 5]} tickFormat={tickFormat} style={GRAPH_STYLE.axis} />
        <VictoryAxis dependentAxis tickFormat={(x) => `${x}%`} style={GRAPH_STYLE.dependentAxis} />
        <VictoryStack colorScale={['#AC8AF8', '#85DA47', '#4FADF7', '#FFEB00']}>
          <VictoryBar
            data={google}
            labelComponent={<VictoryTooltip {...GRAPH_STYLE.tooltip} />}
            {...GRAPH_STYLE.bottom}
          />
          <VictoryBar
            data={naver}
            labelComponent={<VictoryTooltip {...GRAPH_STYLE.tooltip} />}
            {...GRAPH_STYLE.bottom}
          />
          <VictoryBar
            data={facebook}
            labelComponent={<VictoryTooltip {...GRAPH_STYLE.tooltip} />}
            {...GRAPH_STYLE.bottom}
          />
          <VictoryBar data={kakao} labelComponent={<VictoryTooltip {...GRAPH_STYLE.tooltip} />} {...GRAPH_STYLE.top} />
        </VictoryStack>
        <VictoryLegend orientation='horizontal' {...GRAPH_STYLE.legend} />
      </VictoryChart>
    </div>
  );
};

export default MediaChannelGraph;
