'use client';

import Image from 'next/image';
import styles from './nav.module.scss';
import { useIconsTheme } from '@/hooks/icons';

export const MobileNav = () => {
  const useIcons = useIconsTheme();

  return (
    <nav className={styles.nav__mobile}>
      <ul className={styles.menu__mobile}>
        {useIcons.map(item => (
          <li key={item.title} className={styles.menu__item}>
            <a
              className={styles.menu__link}
              title={item.title}
              href={item.href}
            >
              <Image
                src={item.icon}
                alt={`${item.title} icon`}
                width={24}
                height={24}
                className={styles.menu__icon}
              />
              <span className={styles.menu__text}>{item.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

