'use client';

import { item } from '@animation/animation';
import { motion } from 'framer-motion';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <motion.span variants={item}>
        © 2024. Todos os Direitos Reservados. Douglas Fernandes. Desenvolvido
        por
      </motion.span>
      <a href='https://github.com/DoughFernandes'> Douglas Fernandes</a>.
    </footer>
  );
};

export default Footer;
