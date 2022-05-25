import { useEffect, useState } from 'react';

import cs from './trendDataStatus.module.scss';
import TrendDataItem from './trendDataItem';
import { calTrendData } from 'utils/calTrendStatusData';
import { IDaily, ITrendDataGrid } from 'types/trendData';
import { INIT_TREND_GRID_VIEW_DATA } from '../../../../constant/trendData';

interface Props {
  curData?: IDaily[];
  prevData?: IDaily[];
}

const TrendDataStatus = ({ curData, prevData }: Props) => {
  const [data, setData] = useState<ITrendDataGrid>(INIT_TREND_GRID_VIEW_DATA);

  useEffect(() => {
    if (!curData || !prevData) return;
    const calData = calTrendData(curData, prevData);
    setData(calData);
  }, [curData, prevData]);

  return (
    <div className={cs.mainGrid}>
      <TrendDataItem title='ROAS' data={data.roas} type='%' />
      <TrendDataItem title='광고비' data={data.cost} type='원' />
      <TrendDataItem title='노출수' data={data.imp} type='회' />
      <TrendDataItem title='클릭수' data={data.click} type='회' />
      <TrendDataItem title='전환수' data={data.conversion} type='회' />
      <TrendDataItem title='매출' data={data.convValue} type='원' />
    </div>
  );
};

export default TrendDataStatus;
