import { useQuery } from 'react-query';

import styles from './integrated.module.scss';
import { IPeriod } from 'types/period';
import WhiteSection from 'components/whiteSection';
import { periodState } from 'states';
import TrendDataStatus from './trendData';
import { getTrendData } from 'services/trendData';
import { calTrendData } from 'utils/calTrendStatusData';
import { ITrendDataGrid } from 'types/trendData';
import { useRecoilValue } from 'recoil';
import GraghTwoTypes from './graphTwoTypes';

const IntegratedAd = () => {
  const date = useRecoilValue<IPeriod>(periodState);

  const { data } = useQuery(['trendData', date], () => getTrendData(date).then((res) => res.data), {
    staleTime: 1000 * 6 * 5,
  });
  const trendData: ITrendDataGrid = calTrendData(data);

  return (
    <main>
      <p className={styles.title}>통합 광고 현황</p>
      <WhiteSection>
        <div className={styles.integratedAdWrapper}>
          <TrendDataStatus trendData={trendData} />
          <GraghTwoTypes integratedAdInfo={data?.curData.report.daily} />
        </div>
      </WhiteSection>
    </main>
  );
};

export default IntegratedAd;
