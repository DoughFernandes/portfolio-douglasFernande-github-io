'use client';

import { container } from '@animation/animation';
import stylesGlobal from '@scss/global.module.scss';
import useProfile from '@src/hooks/useProfile';
import { motion } from 'framer-motion';
import styles from './experience.module.scss';

export default function ExperiencesMobile() {
  const { profile } = useProfile();

  return (
    <>
      <motion.main variants={container} initial='hidden' animate='visible' className={stylesGlobal.container}>
        <section className={styles.experience}>
          <p>A página está em desenvolvimento, Obrigado pela compreensão.</p>
        </section>
      </motion.main>
    </>
  );
}
