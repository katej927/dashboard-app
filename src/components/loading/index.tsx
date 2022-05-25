import ReactLoading from 'react-loading';

import styles from './loading.module.scss';

interface Props {
  loading: boolean;
}

const Loading = (loading: Props) => {
  return (
    <div className={styles.loadingWrapper}>
      {loading && <ReactLoading type='spin' color='#007be9' height={300} width={300} />}
    </div>
  );
};

export default Loading;
