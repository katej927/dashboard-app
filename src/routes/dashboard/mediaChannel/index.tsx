import WhiteSection from 'components/whiteSection';
import MediaChannelGraph from './mediaChannelGraph';

import styles from './mediaChannel.module.scss';
import { fetchMediaChannelData } from 'services/fetchMediaChannelData';
import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import { periodState } from 'states';

const MediaChannel = () => {
  const date = useRecoilValue(periodState);
  const { isLoading, data } = useQuery(
    ['mediaChannelData', date],
    () => fetchMediaChannelData(date).then((res) => res.data),
    {
      staleTime: 1000 * 6 * 5,
    }
  );

  return (
    <main>
      <p className={styles.title}>매체 현황</p>
      <WhiteSection>
        <MediaChannelGraph data={data} />
        {/* MediaChannelTable */}
      </WhiteSection>
    </main>
  );
};

export default MediaChannel;
