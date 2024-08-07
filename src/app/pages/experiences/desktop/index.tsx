'use client';

import { container } from '@animation/animation';
import stylesGlobal from '@scss/global.module.scss';
import useProfile from '@src/hooks/useProfile';
import { motion } from 'framer-motion';
import styles from './desktop.module.scss';

export default function ExperiencesDesktop() {
  const { profile } = useProfile();

  return (
    <>
      <motion.main
        variants={container}
        initial='hidden'
        animate='visible'
        className={stylesGlobal.container}
      >
        <section className={styles.experiences}>
          <section>1</section>
          <section>2</section>
        </section>
      </motion.main>
    </>
  );
}
