import cs from './trandDataItem.module.scss';
import { ITrendDataGridItem } from 'types/trendData';

interface Props {
  title: string;
  data: ITrendDataGridItem;
  type: '원' | '%' | '회';
}

const TrendDataItem = ({ title, data, type }: Props) => {
  return (
    <div className={cs.gridItem}>
      <title>{title}</title>
      <div className={cs.itemValue}>
        <strong>{` ${data.value} ${type}`}</strong>
        <div>
          <div className={data.compare ? cs.triangleUp : cs.triangleDown} />
          <span>{` ${data.compValue} ${type}`}</span>
        </div>
      </div>
    </div>
  );
};

export default TrendDataItem;
