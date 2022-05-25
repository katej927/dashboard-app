import { Outlet } from 'react-router-dom';
import NavBar from 'components/navBar';
import SideBar from 'components/sideBar';
import styles from './layout.module.scss';

const Layout = () => {
  return (
    <div className={styles.layoutWrapper}>
      <SideBar />
      <div className={styles.mainWrapper}>
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
