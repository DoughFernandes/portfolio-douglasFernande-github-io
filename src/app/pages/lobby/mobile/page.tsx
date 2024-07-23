'use client';

import { container, item, itemX } from '@animation/animation';
import ContatoIcons from '@components/Contact';
import stylesGlobal from '@scss/global.module.scss';
import Footer from '@src/components/Footer';
import { MobileNav } from '@src/components/Mobile/Nav';
import Skills from '@src/components/Skills';
import { motion } from 'framer-motion';
import styles from './lobby.module.scss';

export default function Lobby() {
  return (
    <>
      <motion.main
        variants={container}
        initial='hidden'
        animate='visible'
        className={stylesGlobal.container}
      >
        <motion.section className={styles.page__mobile}>

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

        </motion.section>
        
      </motion.main>
      <Footer />
      <MobileNav />
    </>
  );
}
