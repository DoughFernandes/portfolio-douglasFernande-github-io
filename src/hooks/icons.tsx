'use client';

import { useEffect, useState } from 'react';
import { FaEnvelope, FaHome, FaUser, FaWindowRestore } from 'react-icons/fa';
import { useTheme } from './thema';
const iconsPath = {
  light: {
    home: <FaHome />,
    about: <FaUser />,
    contact: <FaEnvelope />,
    projects: <FaWindowRestore />,
  },
  dark: {
    home: <FaHome style={{ color: 'var(--icons-color)' }} />,
    about: <FaUser style={{ color: 'var(--icons-color)' }} />,
    contact: <FaEnvelope style={{ color: 'var(--icons-color)' }} />,
    projects: <FaWindowRestore style={{ color: 'var(--icons-color)' }} />,
  },
};

interface IProps {
  title: string;
  href: string;
  icon: JSX.Element;
}

export const useIconsTheme = () => {
  const [icons, setIcons] = useState<IProps[]>([]);
  const { themeMode: toggleTheme } = useTheme();

  useEffect(() => {
    const iconsLight = [
      { title: 'Home', href: '/', icon: iconsPath.light.home },
      {
        title: 'About',
        href: '/pages/about',
        icon: iconsPath.light.about,
      },
      {
        title: 'Contact',
        href: '/pages/contact',
        icon: iconsPath.light.contact,
      },
      {
        title: 'Projects',
        href: '/pages/project',
        icon: iconsPath.light.projects,
      },
    ];

    const iconsDark = [
      { title: 'Home', href: '/', icon: iconsPath.dark.home },
      {
        title: 'About',
        href: '/pages/about',
        icon: iconsPath.dark.about,
      },
      {
        title: 'Contact',
        href: '/pages/contact',
        icon: iconsPath.dark.contact,
      },
      {
        title: 'Projects',
        href: '/pages/projects',
        icon: iconsPath.dark.projects,
      },
    ];

    setIcons(toggleTheme === 'light' ? iconsLight : iconsDark);
  }, [toggleTheme]);

  return icons;
};
