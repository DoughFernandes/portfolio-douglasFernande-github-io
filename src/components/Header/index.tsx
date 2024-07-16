'use client';

import Image from 'next/image';
import styles from './header.module.scss';

import logo from '@public/photos/profile.png';

import { DisplaySize } from '@/hooks/Display';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../../hooks/thema';

export const Header = () => {
  const { isMobile } = DisplaySize();
  const { isDarkTheme, toggleTheme } = useTheme();

  if (isMobile) {
    return (
      <header className={styles.mobile__header}>
        <figure className={styles.mobile__figure}>
          <Image
            src={logo}
            alt='Logotipo do portifolio'
            width={30}
            height={30}
            priority
          />
          <a title='icon theme' onClick={toggleTheme}>
            {isDarkTheme ? <FaSun /> : <FaMoon />}
          </a>
        </figure>
      </header>
    );
  }

  return (
    <header className={styles.desktop__header}>
      <nav className={styles.desktop__nav}>
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
      <figure className={styles.desktop__figure}>
        <Image
          src={logo}
          alt='Imagen de perfil do portfolio'
          width={50}
          height={50}
          priority
        />
        <a title='icon theme' onClick={toggleTheme}>
          {isDarkTheme ? <FaSun /> : <FaMoon />}
        </a>
      </figure>
    </header>
  );
};
