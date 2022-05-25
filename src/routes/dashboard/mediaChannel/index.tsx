import WhiteSection from 'components/whiteSection';
import MediaChannelGraph from './mediaChannelGraph';

import styles from './mediaChannel.module.scss';
import { fetchMediaChannelData } from 'hook/fetchMediaChannelData';
import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import { periodState } from 'states';

const MediaChannel = () => {
  const { startDate, endDate } = useRecoilValue(periodState);
  const { isLoading, data } = useQuery(
    ['mediaChannelData', { startDate, endDate }],
    () => fetchMediaChannelData({ startDate, endDate }),
    {
      staleTime: Infinity,
      refetchOnWindowFocus: true,
      keepPreviousData: true,
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
