import WhiteSection from 'components/whiteSection';
import styles from './adManagement.module.scss';
import AdList from './adList';
import { useQuery } from 'react-query';
import { getAdManagementData } from 'services/trendData';

const AdManagement = () => {
  const { data } = useQuery('adManagement', getAdManagementData);

  return (
    <main>
      <p className={styles.title}>광고관리</p>
      <WhiteSection minWidth='fit-content'>
        <div className={styles.wrapper}>
          <section className={styles.buttonWrapper}>
            <div className={styles.adDropDown}>전체 광고</div>
            <button type='button'>광고 만들기</button>
          </section>
          <section className={styles.adManagementWrapper}>
            {data?.map((adList: IAdManagementList) => (
              <AdList key={adList.id} adList={adList} />
            ))}
          </section>
        </div>
      </WhiteSection>
    </main>
  );
};

export default AdManagement;
