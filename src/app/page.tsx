'use client';

import { container, item, subItem } from '@animation/animation';
import ContatoIcons from '@components/Contact';
import { MobileNav } from '@components/Mobile/Nav/index';
import { DisplaySize } from '@hooks/Display';
import profile from '@public/photos/profile.png';
import Skills from '@src/components/Skills';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './scss/page.module.scss';

export default function Home() {
  const { isMobile } = DisplaySize();

  if (isMobile) {
    return (
      <main className={styles.container}>
        <motion.section
          className={styles.page__mobile}
          variants={container}
          initial='hidden'
          animate='visible'
        >
          <motion.section variants={item} className={styles.mobile__title}>
            <h1>
              Soluções Criativas &<b>Desenvolvimento Front-end</b>
            </h1>
            <p>Douglas Fernandes, São Paulo-SP, Desenvolvedora Front-end.</p>
          </motion.section>
          <motion.section variants={item}>ICONS</motion.section>
          <motion.button variants={item}>Button</motion.button>
        </motion.section>
        <MobileNav />
      </main>
    );
  }

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
