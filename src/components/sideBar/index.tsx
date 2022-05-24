import cn from 'classnames';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './sideBar.module.scss';
import { AdIcon, DashbordIcon, GuideIcon, MainLogo } from 'assets/svgs';

const SideBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleClickAdCenterBtn = (route: string) => {
    navigate(route);
  };

  return (
    <aside className={styles.sideBarWrapper}>
      <section>
        <div>
          <MainLogo />
          <div className={styles.underLine} />
        </div>
        <div className={styles.serviceWrapper}>
          <p className={styles.title}>서비스</p>
          <div className={styles.dropDown}>매드업</div>
        </div>
        <div className={styles.adCenterWrapper}>
          <p className={styles.title}>광고 센터</p>
          <button
            type='button'
            className={cn({ [styles.isClicked]: pathname === '/' })}
            onClick={() => handleClickAdCenterBtn('/')}
          >
            <DashbordIcon fill={pathname === '/' ? '#586CF5' : '#3A474E'} />
            <p>대시보드</p>
          </button>
          <button
            type='button'
            className={cn({ [styles.isClicked]: pathname === '/admanagement' })}
            onClick={() => handleClickAdCenterBtn('/admanagement')}
          >
            <AdIcon fill={pathname === '/admanagement' ? '#586CF5' : '#3A474E'} />
            <p>광고관리</p>
          </button>
        </div>
      </section>
      <section>
        <div className={styles.useGuideWrapper}>
          <GuideIcon />
          <div>
            <p className={styles.guideTitle}>레버 이용 가이드</p>
            <p className={styles.guideText}>시작하기 전에 알아보기</p>
          </div>
        </div>
        <div className={styles.footerWrapper}>
          <p>레버는 함께 만들어갑니다.</p>
          <p className={styles.underLineText}>이용약관</p>
        </div>
      </section>
    </aside>
  );
};

export default SideBar;
