'use client';

import { container, item } from '@animation/animation';
import { motion } from 'framer-motion';
import styles from './contact.module.scss';

export default function Contact() {
  return (
    <motion.main
      variants={container}
      initial='hidden'
      animate='visible'
      className={styles.container}
    >
      <motion.section variants={item} className={styles.desktop__title}>
        Contact
      </motion.section>
    </motion.main>
  );
}
