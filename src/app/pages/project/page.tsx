
'use client';

import { container, item } from '@animation/animation';
import { motion } from 'framer-motion';
import styles from './project.module.scss';

export default function Projects() {
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
