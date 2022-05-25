import WhiteSection from 'components/whiteSection';
import MediaChannelGraph from './mediaChannelGraph';
import MediaChannelTable from './mediaChannelTable';

import styles from './mediaChannel.module.scss';

const MediaChannel = () => {
  return (
    <main>
      <p className={styles.title}>매체 현황</p>
      <WhiteSection>
        <div className={styles.mediaChannelWrapper}>
          <MediaChannelGraph />
          <MediaChannelTable />
        </div>
      </WhiteSection>
    </main>
  );
};

export default MediaChannel;
