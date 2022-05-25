import styles from './adList.module.scss';

const DATA = {
  id: 1,
  adType: 'web',
  title: '매드업 레버 광고 1234',
  budget: 500000,
  status: 'active',
  startDate: '2020-10-19',
  endDate: null,
  report: {
    cost: 267144117,
    convValue: 1157942685,
    roas: 433,
  },
};

const AdList = () => {
  return (
    <ul>
      <li>
        <p className={styles.listTitle}>{DATA.title}</p>
        <div className={styles.listWrapper}>
          <p className={styles.listKey}>상태</p>
          <div className={styles.listValue}>{DATA.status}</div>
        </div>
        <div className={styles.listWrapper}>
          <p className={styles.listKey}>광고 생성일</p>
          <div className={styles.listValue}>{DATA.startDate}</div>
        </div>
        <div className={styles.listWrapper}>
          <p className={styles.listKey}>일 희망 예산</p>
          <div className={styles.listValue}>{DATA.budget}</div>
        </div>
        <div className={styles.listWrapper}>
          <p className={styles.listKey}>광고 수익률</p>
          <div className={styles.listValue}>{DATA.report.roas}</div>
        </div>
        <div className={styles.listWrapper}>
          <p className={styles.listKey}>매출</p>
          <div className={styles.listValue}>{DATA.report.cost}</div>
        </div>
        <div className={styles.listWrapper}>
          <p className={styles.listKey}>광고 비용</p>
          <div className={styles.listValue}>{DATA.report.convValue}</div>
        </div>
      </li>
      <button type='button'>수정하기</button>
    </ul>
  );
};

export default AdList;
