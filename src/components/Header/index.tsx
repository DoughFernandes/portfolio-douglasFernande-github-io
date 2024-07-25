'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { DisplaySize } from '@hooks/Display';
import { useTheme } from '@hooks/thema';
import useProfile from '@src/hooks/useProfile';
import Link from 'next/link';
import { FaMoon, FaSun } from 'react-icons/fa';
import { collapseVariants, collapselist, listItem } from './animation/animation';
import styles from './header.module.scss';

export const Header = () => {
  const { isMobile } = DisplaySize();
  const { isDarkTheme, toggleTheme } = useTheme();
  const { profile } = useProfile();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCollapse = () => {
    setIsExpanded(!isExpanded);
  };

  const renderMobileHeader = () => (
    <header className={styles.mobile__header}>
      <button type='button' title='button' onClick={toggleCollapse}>
        <img src={profile?.foto} alt={`logo de perfil ${profile?.nome}`} />
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.figure
            className={styles.mobile__figure}
            initial='close'
            animate='open'
            exit='close'
            variants={collapseVariants}
          >
            <motion.nav
              className={styles.mobile__nav}
              initial='close'
              animate='open'
              exit='close'
              variants={collapselist}
            >
              <ul>
                {['Home', 'Sobre mim', 'Contato', 'Projetos'].map((text, index) => (
                  <motion.li key={index} variants={listItem}>
                    <FaMoon />
                    <Link href={`/pages/${text.replace(' ', '/').toLowerCase()}/mobile`}>{text}</Link>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          </motion.figure>
        )}
      </AnimatePresence>

      <a title='icon theme' onClick={toggleTheme}>
        {isDarkTheme ? <FaSun /> : <FaMoon />}
      </a>
    </header>
  );

  const renderDesktopHeader = () => (
    <header className={styles.desktop__header}>
      <nav className={styles.desktop__nav}>
        <ul>
          {['Home', 'Sobre mim', 'Contato', 'Projetos'].map((text, index) => (
            <li key={index}>
              <Link href={`/pages/${text.replace(' ', '/').toLowerCase()}/desktop`}>{text}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <figure className={styles.desktop__figure}>
        <img src={profile?.foto} alt={`logo de perfil ${profile?.nome}`} />
        <a title='icon theme' onClick={toggleTheme}>
          {isDarkTheme ? <FaSun /> : <FaMoon />}
        </a>
      </figure>
    </header>
  );

  return isMobile ? renderMobileHeader() : renderDesktopHeader();
};
