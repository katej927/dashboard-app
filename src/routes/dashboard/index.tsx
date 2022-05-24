import GraghTwoTypes from 'components/graphTwoTypes';
import integratedAdStatus from 'dummies/integratedAdStatus.json';

const Dashboard = () => {
  const { daily } = integratedAdStatus.report;

  return (
    <div>
      <GraghTwoTypes integratedAdInfo={daily} />
    </div>
  );
};

export default Dashboard;
