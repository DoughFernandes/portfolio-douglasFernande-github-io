'use client';

import { container, item, itemX } from '@animation/animation';
import stylesGlobal from '@scss/global.module.scss';
import ContatoIcons from '@src/components/Contact';
import Skills from '@src/components/Skills';
import useProfile from '@src/hooks/useProfile';
import { motion } from 'framer-motion';
import styles from './lobby.module.scss';

export default function Lobby() {
  const { profile } = useProfile();

  const photo = profile?.foto;

  return (
    <motion.main
      variants={container}
      initial='hidden'
      animate='visible'
      className={stylesGlobal.container}
    >
      <section className={styles.home}>
        <motion.figure
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={styles.logo__container}
        >
          {profile?.foto ? (
            <img src={photo} alt='Logo do site' width={320} height={250} />
          ) : (
            <div className={styles.logo}>DG</div>
          )}
        </motion.figure>

        <motion.section title='title' variants={itemX} className={styles.title}>
          <h1>
            Soluções & <b>Criatividade</b>
          </h1>
          <small> Desenvolvedora Front-end</small>
        </motion.section>

        <motion.section variants={item} className={styles.description}>
          <p>Douglas Fernandes, 28 anos / São Paulo-SP</p>
          <ContatoIcons />
        </motion.section>

        <motion.section variants={itemX} className={styles.skills}>
          <p>Conhecimento nas principais tecnologias do mercado</p>
          <Skills />
        </motion.section>
      </section>
    </motion.main>
  );
}
