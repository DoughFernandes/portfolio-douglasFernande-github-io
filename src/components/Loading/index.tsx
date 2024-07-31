import { motion } from 'framer-motion';
import styles from './loading.module.scss';

const Loading = () => {
  return (
    <motion.section initial={{ opacity: 0 }} transition={{ duration: 2 }} animate={{ opacity: 1 }} className={styles.loading__container}>
      <div className={styles.alert}>
        <h2>Atenção:</h2>
        <span>Estamos constantemente atualizando nosso portfólio para oferecer a melhor experiência possível. Se você encontrar algum erro ou problema, pedimos desculpas pelo inconveniente. Agradecemos seu feedback para que possamos continuar melhorando. Muito obrigado!</span>
        <a rel='noopener' target='_blank' href='https://github.com/DoughFernandes/PortfolioDouglasFernande.github.io'>
          FeedBack
        </a>
      </div>
      <div className={styles.loader}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
    </motion.section>
  );
};

export default Loading;
