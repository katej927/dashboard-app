import WhiteSection from 'components/whiteSection';
import MediaChannelGraph from './mediaChannelGraph';

import styles from './mediaChannel.module.scss';

const mediaChannel = () => {
  return (
    <main>
      <p className={styles.title}>매체 현황</p>
      <WhiteSection>
        <MediaChannelGraph />
        {/* MediaChannelTable */}
      </WhiteSection>
    </main>
  );
};

export default mediaChannel;
