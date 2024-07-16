import styles from '@scss/global.module.scss';
import { useEffect, useState } from "react";

export const useTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const html = document.documentElement.classList;
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);

    setIsDarkTheme(prefersDark);
    html.toggle(styles.darkTheme, prefersDark);
    html.toggle(styles.lightTheme, !prefersDark);

  }, []);

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => {
      const newTheme = !prevTheme;
      const html = document.documentElement.classList;
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
      html.toggle(styles.darkTheme, newTheme);
      html.toggle(styles.lightTheme, !newTheme);
      return newTheme;
    });
  };

  return {
    isDarkTheme,
    themeMode: isDarkTheme ? 'dark' : 'light',
    toggleTheme,
  }
};
