import WhiteSection from 'components/whiteSection';
import styles from './integrated.module.scss';

import TrendDataStatus from './trendData';

const integratedAd = () => {
  return (
    <main>
      <p className={styles.title}>통합 광고 현황</p>
      <WhiteSection>
        {/* child로 하나의 Element만 전달 가능하다고 해서 div로 한번 감았습니다. 논의 후 수정하면 될 것 같아요! */}
        <div>
          <TrendDataStatus />
          {/* <TrendDataStatus /> */}
        </div>
      </WhiteSection>
    </main>
  );
};

export default integratedAd;
