'use client';

import Image from 'next/image';
import styles from './header.module.scss';

import logo from '@public/photos/logo.png';
import moon from '@public/svg/moon.svg';
import sun from '@public/svg/sun.svg';

import { DisplaySize } from '@/hooks/Display';
import { useTheme } from '@/hooks/thema';

export const Header = () => {
  const { isMobile } = DisplaySize();
  const { isDarkTheme, toggleTheme } = useTheme();

  if (isMobile) {
    return (
      <header className={styles.mobileHeader}>
        <figure className={styles.figure}>
          <Image
            src={logo}
            alt='Logotipo do portifolio'
            width={50}
            height={50}
          />
          <a title='icon theme' href='#' onClick={toggleTheme}>
            <Image
              src={isDarkTheme ? sun : moon}
              alt='Ícone de tema'
              width={20}
              height={20}
            />
          </a>
        </figure>
      </header>
    );
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href='.home'>Home</a>
          </li>
          <li>
            <a href='./about'>Sobre mim</a>
          </li>
          <li>
            <a href='contatc'>Contato</a>
          </li>
        </ul>
      </nav>
      <figure className={styles.figure}>
        <Image src={logo} alt='Logotipo do portifolio' width={50} height={50} />
        <a title='icon theme' href='#' onClick={toggleTheme}>
          <Image
            src={isDarkTheme ? sun : moon}
            alt='Ícone de tema'
            width={20}
            height={20}
          />
        </a>
      </figure>
    </header>
  );
};
