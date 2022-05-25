import { useRecoilValue } from 'recoil';
import { useQuery } from 'react-query';

import { periodState } from 'states';
import { fetchMediaChannelData } from 'hook/fetchMediaChannelData';
import { formatMediaChannelTableData } from 'utils/formatMediaChannelTableData';

import styles from './mediaChannelTable.module.scss';

const MediaChannelTable = () => {
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
  const { google, facebook, naver, kakao, total } = formatMediaChannelTableData(data);

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.mediaChannelTable}>
        <thead>
          <tr>
            <th> </th>
            <th>광고비</th>
            <th>매출</th>
            <th>ROAS</th>
            <th>노출수</th>
            <th>클릭 수</th>
            <th>클릭률 (CTR)</th>
            <th>클릭당비용 (CPC)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>카카오</td>
            {kakao.map((el) => (
              <td key={el.key}>{Math.floor(el.value).toLocaleString()}</td>
            ))}
          </tr>
          <tr>
            <td>페이스북</td>
            {facebook.map((el) => (
              <td key={el.key}>{Math.floor(el.value).toLocaleString()}</td>
            ))}
          </tr>
          <tr>
            <td>네이버</td>
            {naver.map((el) => (
              <td key={el.key}>{Math.floor(el.value).toLocaleString()}</td>
            ))}
          </tr>
          <tr>
            <td>구글</td>
            {google.map((el) => (
              <td key={el.key}>{Math.floor(el.value).toLocaleString()}</td>
            ))}
          </tr>

          <tr>
            <td>총계</td>
            {total.map((el) => (
              <td key={el.key}>{Math.floor(el.value).toLocaleString()}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MediaChannelTable;
