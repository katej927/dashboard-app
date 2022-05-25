import 'react-datepicker/dist/react-datepicker.css';
import PeriodSelector from './periodSelector';
import MediaChannel from './mediaChannel';
import IntegratedAd from './integratedAd';

const Dashboard = () => {
  return (
    <main>
      <PeriodSelector />
      <IntegratedAd />
      <MediaChannel />
    </main>
  );
};

export default Dashboard;
