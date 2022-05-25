import ReactLoading from 'react-loading';

import styles from './loading.module.scss';

const Loading = (loading: any) => {
  return (
    <div className={styles.loadingWrapper}>
      {loading && <ReactLoading type='spin' color='#007be9' height={300} width={300} />}
    </div>
  );
};

export default Loading;
