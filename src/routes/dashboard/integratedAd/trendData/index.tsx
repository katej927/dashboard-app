import TrendDataItem from './trendDataItem';
import cs from './trendDataStatus.module.scss';

const TrendDataStatus = () => {
  return (
    <div className={cs.mainGrid}>
      <TrendDataItem />
      <TrendDataItem />
      <TrendDataItem />
      <TrendDataItem />
      <TrendDataItem />
      <TrendDataItem />
    </div>
  );
};

export default TrendDataStatus;
