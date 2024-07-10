'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './header.module.scss';

import sun from '@public/svg/sun.svg';
import moon from '@public/svg/moon.svg';

export const Header = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (isDarkTheme) {
      body.classList.add(styles.darkTheme);
      body.classList.remove(styles.lightTheme);
    } else {
      body.classList.add(styles.lightTheme);
      body.classList.remove(styles.darkTheme);
    }
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Sobre mim</a>
          </li>
          <li>
            <a href='#'>Contato</a>
          </li>
        </ul>
      </nav>

      <figure className={styles.figure}>
        <Image src={sun} alt='Logotipo do portifolio' width={20} height={20} />
        <a title='icon moon' href='#' onClick={toggleTheme}>
          <Image src={moon} alt='Ícone de lua' width={20} height={20} />
        </a>
      </figure>
    </header>
  );
};
