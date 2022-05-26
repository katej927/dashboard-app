import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import AdList from './adList';
import styles from './adManagement.module.scss';
import { getAdManagementData } from 'services/trendData';
import WhiteSection from 'components/whiteSection';
import DropDown from 'components/dropDown';

const DROP_DOWN_LIST = ['전체 광고', '진행중인 광고', '중지 광고'];

const AdManagement = () => {
  const { data, isLoading } = useQuery('adManagement', getAdManagementData);

  const [adManagementList, setAdManagementList] = useState(data);

  useEffect(() => {
    if (!isLoading) {
      setAdManagementList(data);
    }
  }, [data, isLoading]);

  const handleFilterDropDownList = (item: string) => {
    if (item === '전체 광고') setAdManagementList(data);
    if (item === '진행중인 광고') setAdManagementList(data.filter((el: IAdManagementList) => el.status === 'active'));
    if (item === '중지 광고') setAdManagementList(data.filter((el: IAdManagementList) => el.status === 'ended'));
  };

  return (
    <main>
      <p className={styles.title}>광고관리</p>
      <WhiteSection minWidth='fit-content'>
        <div className={styles.wrapper}>
          <section className={styles.buttonWrapper}>
            <div>
              <DropDown
                value='전체 광고'
                dropDownList={DROP_DOWN_LIST}
                handleFilterDropDownList={handleFilterDropDownList}
              />
            </div>
            <button className={styles.adMakerBtn} type='button'>
              광고 만들기
            </button>
          </section>
          <section className={styles.adManagementWrapper}>
            {adManagementList?.map((adList: IAdManagementList) => (
              <AdList key={adList.id} adList={adList} />
            ))}
          </section>
        </div>
      </WhiteSection>
    </main>
  );
};

export default AdManagement;
