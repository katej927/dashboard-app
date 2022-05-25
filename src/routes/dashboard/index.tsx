import 'react-datepicker/dist/react-datepicker.css';
import PeriodSelector from './periodSelector';
import MediaChannel from './mediaChannel';
import IntegratedAd from './integratedAd';

import styles from './dashboard.module.scss';

const Dashboard = () => {
  return (
    <div className={styles.dashboardWrapper}>
      <h1>대시보드</h1>
      <main>
        <PeriodSelector />
        <IntegratedAd />
        <MediaChannel />
      </main>
    </div>
  );
};

export default Dashboard;
