import 'react-datepicker/dist/react-datepicker.css';
import PeriodSelector from './periodSelector';
import MediaChannel from './mediaChannel';

const Dashboard = () => {
  return (
    <main>
      <PeriodSelector />
      <MediaChannel />
    </main>
  );
};

export default Dashboard;
