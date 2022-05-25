import { useQuery } from 'react-query';

import styles from './integrated.module.scss';
import { IPeriod } from 'types/period';
import WhiteSection from 'components/whiteSection';
import { periodState } from '../../../states';
import TrendDataStatus from './trendData';
import { getTrendData } from '../../../services/trendData';
import { calTrendData } from '../../../utils/calTrendStatusData';
import { ITrendDataGrid } from 'types/trendData';
import { useRecoilValue } from 'recoil';

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
        {/* child로 하나의 Element만 전달 가능하다고 해서 div로 한번 감았습니다. 논의 후 수정하면 될 것 같아요! */}
        <div>
          <TrendDataStatus trendData={trendData} />
          {/* <TrendDataStatus /> */}
        </div>
      </WhiteSection>
    </main>
  );
};

export default IntegratedAd;
