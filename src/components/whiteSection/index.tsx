import styles from './whiteSection.module.scss';

interface IProps {
  children: JSX.Element;
  minWidth: string;
}

const WhiteSection = ({ children, minWidth }: IProps) => {
  return (
    <section className={styles.whiteBoxWrapper} style={{ minWidth }}>
      {children}
    </section>
  );
};

export default WhiteSection;
