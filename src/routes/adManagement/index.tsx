import WhiteSection from 'components/whiteSection';
import styles from './adManagement.module.scss';
import AdList from './adList';
import { useQuery } from 'react-query';
import { getAdManagementData } from 'services/trendData';
import DropDown from 'components/dropDown';

const DROP_DOWN_LIST = ['전체 광고', '진행중인 광고', '중지 광고'];

const AdManagement = () => {
  const { data } = useQuery('adManagement', getAdManagementData);

  return (
    <main>
      <p className={styles.title}>광고관리</p>
      <WhiteSection>
        <div className={styles.wrapper}>
          <section className={styles.buttonWrapper}>
            <div>
              <DropDown value='전체 광고' dropDownList={DROP_DOWN_LIST} />
            </div>
            <button className={styles.adMakerBtn} type='button'>
              광고 만들기
            </button>
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
