'use client';

import { MobileNav } from '../components/Mobile/Nav/index';
import { DisplaySize } from '../hooks/Display';
import Image from 'next/image';

import styles from './scss/page.module.scss';
import profile from '@public/photos/profile.png';
import ContatoIcons from '@/components/Contact';

export default function Home() {
  const { isMobile } = DisplaySize();

  if (isMobile) {
    return (
      <main className={styles.container}>
      <section className={styles.page__mobile}>
        <section className={styles.mobile__title}>
          <h1>
            Soluções Criativas &<b>Desenvolvimento Front-end</b>
          </h1>
          <p>Douglas Fernandes, ão Paulo-SP, Desenvolvedora Front-end.</p>
        </section>
        <section>ICONS</section>
        <button>Button</button>
      </section>
      <MobileNav />
    </main>
    )
  }

  return (
    <main className={styles.container}>
      <section className={styles.page__desktop}>
        <figure className={styles.desktop__title}>
          <Image
            src={profile}
            alt="Imagem de perfil"
            width={250}
            height={250}
          />
          <figcaption className={styles.desktop__description}>
            <h1>
              Soluções Criativas &<b>Desenvolvimento Front-end</b>
            </h1>
            <small>Douglas Fernandes, ão Paulo-SP, Desenvolvedora Front-end.</small>
            <ContatoIcons />
          </figcaption>
        </figure>
        <section className={styles.desktop__Skills}>
          MEUS CONHECIMENTOS
        </section>
        <footer className={styles.footer}>Footer</footer>
      </section>
    </main>
  );
}
