import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { periodState } from 'states';

import NavBar from 'components/navBar';
import SideBar from 'components/sideBar';
import Loading from 'components/loading';
import styles from './layout.module.scss';

const Layout = () => {
  const location = useLocation();
  const period = useRecoilValue(periodState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [period, location.pathname]);

  return (
    <div className={styles.layoutWrapper}>
      {loading && <Loading loading={loading} />}
      <SideBar />
      <div className={styles.mainWrapper}>
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
