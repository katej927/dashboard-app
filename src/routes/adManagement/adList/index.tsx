import styles from './adList.module.scss';

interface IProps {
  adList: IAdManagementList;
}

const AdList = ({ adList }: IProps) => {
  return (
    <ul className={styles.adListWrapper}>
      <li>
        <p className={styles.listTitle}>{adList.title}</p>
        <div className={styles.listWrapper}>
          <p className={styles.listKey}>상태</p>
          <div className={styles.listValue}>{adList.status}</div>
        </div>
        <div className={styles.listWrapper}>
          <p className={styles.listKey}>광고 생성일</p>
          <div className={styles.listValue}>{adList.startDate}</div>
        </div>
        <div className={styles.listWrapper}>
          <p className={styles.listKey}>일 희망 예산</p>
          <div className={styles.listValue}>{adList.budget}</div>
        </div>
        <div className={styles.listWrapper}>
          <p className={styles.listKey}>광고 수익률</p>
          <div className={styles.listValue}>{adList.report.roas}</div>
        </div>
        <div className={styles.listWrapper}>
          <p className={styles.listKey}>매출</p>
          <div className={styles.listValue}>{adList.report.cost}</div>
        </div>
        <div className={styles.listWrapper}>
          <p className={styles.listKey}>광고 비용</p>
          <div className={styles.listValue}>{adList.report.convValue}</div>
        </div>
      </li>
      <button type='button'>수정하기</button>
    </ul>
  );
};

export default AdList;
