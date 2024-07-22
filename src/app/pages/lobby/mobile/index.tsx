'use client';

import { container, item } from '@animation/animation';
import { motion } from 'framer-motion';
import styles from './lobbyMobile.module.scss';

export default function LobbyMobile() {
  return (
    <motion.main
      variants={container}
      initial='hidden'
      animate='visible'
      className={styles.container}
    >
      <motion.section
        className={styles.page__mobile}
        variants={container}
        initial='hidden'
        animate='visible'
      >
        <motion.section variants={item} className={styles.mobile__title}>
          <h1>
            Soluções Criativas &<b>Desenvolvimento Front-end</b>
          </h1>
          <p>Douglas Fernandes, São Paulo-SP, Desenvolvedora Front-end.</p>
        </motion.section>
        <motion.section variants={item}>ICONS</motion.section>
        <motion.button variants={item}>Button</motion.button>
      </motion.section>
    </motion.main>
  );
}
