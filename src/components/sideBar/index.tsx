import styles from './sideBar.module.scss';

const SideBar = () => {
  return (
    <nav className={styles.sideBarWrapper}>
      <img src='https://lever.me/img/logo-black.svg' alt='logo' />
      <div className={styles.underLine} />
      <section className={styles.serviceWrapper}>
        <p className={styles.title}>서비스</p>
      </section>
      <section className={styles.adCenterWrapper}>
        <p className={styles.title}>광고 센터</p>
        <button type='button'>대시보드</button>
        <button type='button'>광고관리</button>
      </section>
    </nav>
  );
};

export default SideBar;
