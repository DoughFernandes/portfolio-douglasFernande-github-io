'use client';

import { container, item, itemX } from '@animation/animation';
import stylesGlobal from '@scss/global.module.scss';
import ContatoIcons from '@src/components/Contact';
import Footer from '@src/components/Footer';
import Skills from '@src/components/Skills';
import useProfile from '@src/hooks/useProfile';
import { motion } from 'framer-motion';
import styles from './desktop.module.scss';

export default function LobbyDesktop() {
  const { profile } = useProfile();

  return (
    <>
      <motion.main
        variants={container}
        initial='hidden'
        animate='visible'
        className={stylesGlobal.container}
      >
        <motion.section className={styles.page__desktop}>
          <section className={styles.title}>
            {profile?.foto && (
              <figure>
                <img src={profile.foto} alt='Logo do site' />
              </figure>
            )}

            <motion.section variants={item} className={styles.description}>
              <motion.h1 variants={item}>
                Soluções & <b>Criatividade</b>
              </motion.h1>
              <small> Desenvolvimento Front-end</small>
              <p>Douglas Fernandes, São Paulo-SP, Desenvolvedora Front-end.</p>
              <ContatoIcons />
            </motion.section>
          </section>

          <motion.section variants={itemX} className={styles.skills}>
            <p>Conhecimento nas principais tecnologias do mercado</p>
            <Skills />
          </motion.section>
        </motion.section>
      </motion.main>
      <Footer />
    </>
  );
}
