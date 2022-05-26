import styles from './navBar.module.scss';
import { ProfileIcon, AlarmIcon, SettingIcon, DotIcon } from 'assets/svgs';

const NavBar = () => {
  return (
    <header className={styles.headerWrapper}>
      <div>
        <AlarmIcon className={styles.iconWrapper} />
        <DotIcon className={styles.iconDot} />
      </div>
      <SettingIcon className={styles.iconWrapper} />
      <ProfileIcon className={styles.iconWrapper} />
      <p>원티드님</p>
    </header>
  );
};

export default NavBar;
