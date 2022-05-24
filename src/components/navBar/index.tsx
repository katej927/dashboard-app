import styles from './navBar.module.scss';
import { ProfileIcon, AlarmIcon, SettingIcon } from 'assets/svgs';

const NavBar = () => {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.iconWrapper}>
        <AlarmIcon />
      </div>
      <div className={styles.iconWrapper}>
        <SettingIcon />
      </div>
      <div className={styles.iconWrapper}>
        <ProfileIcon />
      </div>
      <p className={styles.userName}>원티드님</p>
    </header>
  );
};

export default NavBar;
