import AdItem from '../adItem';
import styles from './adList.module.scss';

interface IProps {
  adList: IAdManagementList;
}

const AdList = ({ adList }: IProps) => {
  const adTitle = adList.adType === 'web' ? '웹광고' : '앱광고';
  const adStatus = adList.status === 'active' ? '진행중' : '중단됨';

  return (
    <ul className={styles.adListWrapper}>
      <li>
        <p className={styles.listTitle}>{`${adTitle}_${adList.title}`}</p>
        <AdItem title='상태' value={adStatus} type='' />
        <AdItem title='광고 생성일' value={adList.startDate} type='' />
        <AdItem title='일 희망 예산' value={adList.budget / 10000} type='만원' />
        <AdItem title='광고 수익률' value={adList.report.roas} type='%' />
        <AdItem title='매출' value={Math.floor(adList.report.convValue / 10000).toLocaleString()} type='만원' />
        <AdItem title='광고 비용' value={Math.floor(adList.report.cost / 10000).toLocaleString()} type='만원' />
      </li>
      <button type='button'>수정하기</button>
    </ul>
  );
};

export default AdList;
