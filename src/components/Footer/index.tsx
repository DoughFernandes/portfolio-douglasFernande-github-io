'use client'

import { motion } from "framer-motion";
import { item } from '@animation/animation';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <motion.footer variants={item} className={styles.footer}>
      <span>© 2024. Todos os Direitos Reservados. Douglas Fernandes. Desenvolvido por <a href="https://github.com/DoughFernandes">Douglas Fernandes</a>.</span>
    </motion.footer>
  );
};

export default Footer;
