import GraghTwoTypes from 'routes/dashboard/integratedAd/graphTwoTypes';
import integratedAdStatus from 'dummies/integratedAdStatus.json';
import 'react-datepicker/dist/react-datepicker.css';
import PeriodSelector from './periodSelector';
import MediaChannel from './mediaChannel';

const Dashboard = () => {
  const { daily } = integratedAdStatus.report;
  return (
    <main>
      <PeriodSelector />
      <GraghTwoTypes integratedAdInfo={daily} />
      <MediaChannel />
    </main>
  );
};

export default Dashboard;
