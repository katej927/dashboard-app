import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import { periodState } from 'states';

import { ITrendDataGrid } from 'types/trendData';
import { IPeriod } from 'types/period';

import WhiteSection from 'components/whiteSection';
import TrendDataStatus from './trendData';
import GraghTwoTypes from './graphTwoTypes';

import { getTrendData } from 'services/trendData';
import { calTrendData } from 'utils/calTrendStatusData';

import styles from './integrated.module.scss';

const IntegratedAd = () => {
  const date = useRecoilValue<IPeriod>(periodState);

  const { data, isLoading } = useQuery(['trendData', date], () => getTrendData(date).then((res) => res.data), {
    staleTime: 1000 * 6 * 5,
  });
  const trendData: ITrendDataGrid = calTrendData(data);

  return (
    <main>
      <p className={styles.title}>통합 광고 현황</p>
      <WhiteSection minWidth='50rem'>
        <div className={styles.integratedAdWrapper}>
          <TrendDataStatus trendData={trendData} isLoading={isLoading} />
          <GraghTwoTypes integratedAdInfo={data?.curData.report.daily} isLoading={isLoading} />
        </div>
      </WhiteSection>
    </main>
  );
};

export default IntegratedAd;
