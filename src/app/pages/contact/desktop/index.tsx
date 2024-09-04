'use client';

import { container, item, itemX } from '@animation/animation';
import stylesGlobal from '@scss/global.module.scss';
import ContatoIcons from '@src/components/Contact';
import { motion } from 'framer-motion';
import styles from './desktop.module.scss';
import CursorDot from '@src/components/BolinhaBody';

export default function Contact() {
  return (
    <>
    <CursorDot />
      <motion.main variants={container} initial='hidden' animate='visible' className={stylesGlobal.container}>
        <section className={styles.contact}>
          <motion.h1 variants={item}>Contate-me</motion.h1>
          <motion.p variants={itemX}>Estou disponível para novos desafios e colaborações. Entre em contato comigo pelas minhas redes sociais ou via WhatsApp 😁😉</motion.p>
          <motion.section variants={item} className={styles.icons}>
            <ContatoIcons />
          </motion.section>
        </section>
      </motion.main>
    </>
  );
}
