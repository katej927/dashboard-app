import WhiteSection from 'components/whiteSection';
import MediaChannelGraph from './mediaChannelGraph';
import MediaChannelTable from './mediaChannelTable';

import styles from './mediaChannel.module.scss';
import { fetchMediaChannelData } from 'services/fetchMediaChannelData';
import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import { periodState } from 'states';
import { IPeriod } from 'types/period';

const MediaChannel = () => {
  const date = useRecoilValue<IPeriod>(periodState);
  const { isLoading, data } = useQuery(
    ['mediaChannelData', date],
    () => fetchMediaChannelData(date).then((res) => res.data),
    {
      staleTime: 1000,
    }
  );
  console.log({ isLoading });

  return (
    <main>
      <p className={styles.title}>매체 현황</p>
      <WhiteSection>
        <div className={styles.mediaChannelWrapper}>
          <MediaChannelGraph data={data} />
          <MediaChannelTable data={data} />
        </div>
      </WhiteSection>
    </main>
  );
};

export default MediaChannel;
