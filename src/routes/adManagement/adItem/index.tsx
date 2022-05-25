import styles from './adItem.module.scss';

interface IProps {
  title: string;
  value: string | number;
  type: string;
}

const AdItem = ({ title, value, type }: IProps) => {
  return (
    <div className={styles.listWrapper}>
      <p className={styles.listKey}>{title}</p>
      <div className={styles.listValue}>{`${value}${type}`}</div>
    </div>
  );
};

export default AdItem;
