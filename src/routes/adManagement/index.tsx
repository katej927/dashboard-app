import React from 'react';
import WhiteSection from 'components/whiteSection';
import styles from './adManagement.module.scss';
import AdList from './adList';

const AdManagement = () => {
  return (
    <main>
      <p className={styles.title}>광고관리</p>
      <WhiteSection>
        <div className={styles.wrapper}>
          <section className={styles.buttonWrapper}>
            <div>전체 광고</div>
            <button type='button'>광고 만들기</button>
          </section>
          <section className={styles.adManagementWrapper}>
            <AdList />
          </section>
        </div>
      </WhiteSection>
    </main>
  );
};

export default AdManagement;
