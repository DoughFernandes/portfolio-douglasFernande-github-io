import styles from './header.module.scss';
import globalStyles from '@scss/global.module.scss';
import Image from 'next/image';

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Sobre min</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>

      <figure className={styles.figure}>
      <Image
          src=''
          alt='Logotipo do portifolio'
          width={50}
          height={50}
        />
        <Image
          src=''
          alt='Logotipo do portifolio'
          width={50}
          height={50}
        />
      </figure>
    </header>
  )
};
