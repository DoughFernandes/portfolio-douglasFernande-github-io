import styles from '@scss/global.module.scss';
import { useEffect, useState } from "react";

export const useTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const body = document.body.classList;

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);

    setIsDarkTheme(prefersDark);
    body.toggle(styles.darkTheme, prefersDark);
    body.toggle(styles.lightTheme, !prefersDark);

  }, []);

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => {
      const newTheme = !prevTheme;
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
      body.toggle(styles.darkTheme, newTheme);
      body.toggle(styles.lightTheme, !newTheme);
      return newTheme;
    });
  };

  return {
    isDarkTheme,
    themeMode: isDarkTheme ? 'dark' : 'light',
    toggleTheme,
  }
};
