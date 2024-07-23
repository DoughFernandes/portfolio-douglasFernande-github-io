'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './header.module.scss';

import logo from '@public/photos/profile.png';

import { DisplaySize } from '@hooks/Display';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '@hooks/thema';

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
            <Link href='/'>
              Home
            </Link>
          </li>
          <li>
            <Link href='/pages/about'>
              Sobre mim
            </Link>
          </li>
          <li>
            <Link href='/pages/contact'>
              Contato
            </Link>
          </li>
          <li>
            <Link href='/pages/project'>
              Projetos
            </Link>
          </li>
        </ul>
      </nav>
      <figure className={styles.desktop__figure}>
        <Image
          src={logo}
          alt='Imagem de perfil do portfolio'
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
};
