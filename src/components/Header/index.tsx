'use client';

import { DisplaySize } from '@hooks/Display';
import { useTheme } from '@hooks/thema';
import useProfile from '@src/hooks/useProfile';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaCreativeCommonsNd, FaEnvelope, FaHome, FaMoon, FaProjectDiagram, FaSun, FaTimes, FaUser } from 'react-icons/fa';
import { collapseVariants, collapselist, listItem, positionLogo } from './animation/animation';
import styles from './header.module.scss';

const navMenu = [
  { title: 'Home', icon: FaHome, link: '/' },
  {
    title: 'Sobre mim',
    icon: FaUser,
    link: '/pages/about'
  },
  {
    title: 'Contato',
    icon: FaEnvelope,
    link: '/pages/contact'
  },
  {
    title: 'Projetos',
    icon: FaProjectDiagram,
    link: '/pages/projects'
  },
  {
    title: 'Experiência',
    icon: FaCreativeCommonsNd,
    link: '/pages/experiences'
  }
];

export const Header = () => {
  const { isMobile } = DisplaySize();
  const { isDarkTheme, toggleTheme } = useTheme();
  const { profile } = useProfile();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCollapse = () => {
    setIsExpanded(!isExpanded);
  };

  const handleLinkClick = () => {
    setIsExpanded(false);
  };

  const renderMobileHeader = () => (
    <header className={styles.mobile__header}>
      <motion.button type='button' title='Menu' onClick={toggleCollapse} initial='close' animate={isExpanded ? 'open' : 'close'} variants={positionLogo} aria-expanded={isExpanded}>
        {isExpanded ? <FaTimes /> : <FaBars />}
      </motion.button>

      <AnimatePresence>
        {isExpanded && (
          <motion.figure className={styles.mobile__figure} initial='close' animate='open' exit='close' variants={collapseVariants}>
            <motion.nav className={styles.mobile__nav} initial='close' animate='open' exit='close' variants={collapselist}>
              <ul>
                {navMenu.map(({ title, icon: Icon, link }, index) => (
                  <motion.li key={index} variants={listItem} whileHover={{ scale: 1.1 }}>
                    <Icon />
                    <Link href={link} onClick={handleLinkClick}>
                      {title}
                    </Link>
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
          {navMenu.map(({ title, link }, index) => (
            <motion.li key={index} className={styles.navItem} whileHover={{ scale: 1.1 }}>
              <Link href={link}>{title}</Link>
            </motion.li>
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
