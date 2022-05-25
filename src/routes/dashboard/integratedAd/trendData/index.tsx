import cs from './trendDataStatus.module.scss';
import TrendDataItem from './trendDataItem';
import { ITrendDataGrid } from 'types/trendData';

interface Props {
  trendData: ITrendDataGrid;
}

const TrendDataStatus = ({ trendData }: Props) => {
  return (
    <div className={cs.mainGrid}>
      <TrendDataItem title='ROAS' data={trendData.roas} type='%' />
      <TrendDataItem title='광고비' data={trendData.cost} type='원' />
      <TrendDataItem title='노출수' data={trendData.imp} type='회' />
      <TrendDataItem title='클릭수' data={trendData.click} type='회' />
      <TrendDataItem title='전환수' data={trendData.conversion} type='회' />
      <TrendDataItem title='매출' data={trendData.convValue} type='원' />
    </div>
  );
};

export default TrendDataStatus;
