import styles from './navBar.module.scss';
import { ProfileIcon, AlarmIcon, SettingIcon } from 'assets/svgs';

const NavBar = () => {
  return (
    <header className={styles.headerWrapper}>
      <AlarmIcon className={styles.iconWrapper} />
      <SettingIcon className={styles.iconWrapper} />
      <ProfileIcon className={styles.iconWrapper} />
      <p>원티드님</p>
    </header>
  );
};

export default NavBar;
