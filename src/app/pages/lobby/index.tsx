'use client';

import { container, item, subItem } from '@animation/animation';
import ContatoIcons from '@components/Contact';
import profile from '@public/photos/profile.png';
import Skills from '@src/components/Skills';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './lobby.module.scss';

export default function Lobby() {
  return (
    <motion.main
      variants={container}
      initial='hidden'
      animate='visible'
      className={styles.container}
    >
      <motion.section className={styles.page__desktop}>
        <motion.section variants={item} className={styles.desktop__title}>
          <figure className={styles.desktop__logo}>
            <Image
              src={profile}
              alt='Imagem de perfil'
              width={250}
              height={250}
            />
          </figure>
          <motion.section
            variants={subItem}
            className={styles.desktop__description}
          >
            <h1>
              Soluções Criativas &<small> Desenvolvimento Front-end</small>
            </h1>
            <small>
              Douglas Fernandes, São Paulo-SP, Desenvolvedora Front-end.
            </small>
            <ContatoIcons />
          </motion.section>
        </motion.section>
        <motion.section variants={item} className={styles.desktop__Skills}>
          <p>Conhecimento nas principais tecnologias do mercado</p>
          <Skills />
        </motion.section>
      </motion.section>
    </motion.main>
  );
}
