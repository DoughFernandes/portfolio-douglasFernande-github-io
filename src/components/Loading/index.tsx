import styles from './loading.module.scss';

const Loading = () => {
  return (
    <section className={styles.loading__container}>
      <div className={styles.loader}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
    </section>
  );
};

export default Loading;
