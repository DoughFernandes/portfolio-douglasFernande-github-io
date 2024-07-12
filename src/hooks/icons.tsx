import { useEffect, useState } from 'react';
import { useTheme } from './thema';

const iconsPath = {
  light: {
    home: '/icons/mobile/light/light-home.svg',
    about: '/icons/mobile/light/light-about.svg',
    contact: '/icons/mobile/light/light-contact.svg',
    projects: '/icons/mobile/light/light-projects.svg',
  },
  dark: {
    home: '/icons/mobile/dark/dark-home.svg',
    about: '/icons/mobile/dark/dark-about.svg',
    contact: '/icons/mobile/dark/dark-contact.svg',
    projects: '/icons/mobile/dark/dark-projects.svg',
  },
};

interface IProps {
  title: string;
  href: string;
  icon: string;
}

export const useIconsTheme = () => {
  const [icons, setIcons] = useState<IProps[]>([]);
  const { themeMode: toggleTheme } = useTheme();

  useEffect(() => {
    const iconsLight = [
      { title: 'Home', href: '/home', icon: iconsPath.light.home },
      { title: 'About', href: '/about', icon: iconsPath.light.about },
      { title: 'Contact', href: '/contact', icon: iconsPath.light.contact },
      { title: 'Projects', href: '/projects', icon: iconsPath.light.projects },
    ];

    const iconsDark = [
      { title: 'Home', href: '/home', icon: iconsPath.dark.home },
      { title: 'About', href: '/about', icon: iconsPath.dark.about },
      { title: 'Contact', href: '/contact', icon: iconsPath.dark.contact },
      { title: 'Projects', href: '/projects', icon: iconsPath.dark.projects },
    ];

    setIcons(toggleTheme === 'light' ? iconsLight : iconsDark);
  }, [toggleTheme]);

  return icons;
};
