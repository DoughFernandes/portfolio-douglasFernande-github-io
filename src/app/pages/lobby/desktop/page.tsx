'use client';

import { container, item, itemX } from '@animation/animation';
import stylesGlobal from '@scss/global.module.scss';
import CursorDot from '@src/components/BolinhaBody';
import ContatoIcons from '@src/components/Contact';
import Skills from '@src/components/Skills';
import useProfile from '@src/hooks/useProfile';
import { motion } from 'framer-motion';
import styles from './desktop.module.scss';

export default function LobbyDesktop() {
  const { profile } = useProfile();

  return (
    <>
      <CursorDot />
      <motion.main variants={container} initial='hidden' animate='visible' className={stylesGlobal.container}>
        <section className={styles.home}>
          <section className={styles.title}>
            <motion.figure variants={item}>
              <img src={profile?.foto} alt='foto de perfil' />
            </motion.figure>

            <motion.section className={styles.description}>
              <h1>
                Soluções & <b>Criatividade</b>
              </h1>
              <small> Desenvolvedor Front-end</small>

              <motion.section variants={item} className={styles.about}>
                <p>Douglas Fernandes, 28 anos / São Paulo-SP</p>
                <ContatoIcons />
              </motion.section>
            </motion.section>
          </section>
        </section>

        <motion.section variants={itemX} className={styles.skills}>
          <p>Conhecimento nas principais tecnologias do mercado</p>
          <Skills />
        </motion.section>
      </motion.main>
    </>
  );
}
