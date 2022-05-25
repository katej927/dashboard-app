import cs from './trandDataItem.module.scss';

const TrendDataItem = () => {
  return (
    <div className={cs.gridItem}>
      <title>광고비</title>
      <div className={cs.itemValue}>
        <strong> 3,000,000</strong>
        <div>
          <div className={cs.triangleUp} />
          <span> 500,000</span>
        </div>
      </div>
    </div>
  );
};

export default TrendDataItem;
