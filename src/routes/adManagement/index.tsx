import WhiteSection from 'components/whiteSection';
import React from 'react';
import styles from './adManagement.module.scss';

const AdManagement = () => {
  return (
    <main>
      <p className={styles.title}>광고관리</p>
      <WhiteSection>
        <div>전체 관리</div>
      </WhiteSection>
    </main>
  );
};

export default AdManagement;
