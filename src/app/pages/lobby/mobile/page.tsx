'use client';

import { container } from '@animation/animation';
import stylesGlobal from '@scss/global.module.scss';
import { motion } from 'framer-motion';

export default function Lobby() {
  return (
    <>
      <motion.main
        variants={container}
        initial='hidden'
        animate='visible'
        className={stylesGlobal.container}
      >
        {/* <motion.section className={styles.page__mobile}>
          <motion.section variants={item} className={styles.title}>
            <motion.section variants={itemX} className={styles.description}>
              <h1>
                Soluções & <b>Criatividade</b>
              </h1>
              <small> Desenvolvimento Front-end</small>
              <p>Douglas Fernandes, São Paulo-SP, Desenvolvedora Front-end.</p>
              <ContatoIcons />
            </motion.section>
          </motion.section>

          <motion.section variants={itemX} className={styles.skills}>
            <p>Conhecimento nas principais tecnologias do mercado</p>
            <Skills />
          </motion.section>
        </motion.section> */}
      </motion.main>
    </>
  );
}
