import styles from './navBar.module.scss';
import { ProfileIcon, CircleIcon } from 'assets/svgs';

const NavBar = () => {
  return (
    <header className={styles.headerWrapper}>
      <ProfileIcon />
      <p className={styles.userName}>원티드님</p>
    </header>
  );
};

export default NavBar;
