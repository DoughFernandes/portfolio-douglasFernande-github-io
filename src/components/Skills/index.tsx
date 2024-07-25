'use client';

import useProfile from '@src/hooks/useProfile';
import styles from './skills.module.scss';

const Skills = () => {
  const { profile } = useProfile();

  return (
    <section className={styles.skills__container}>
      {profile && (
        <ul>
          {Object.entries(profile?.habilidades_tecnicas || {}).map(([name, url]) => (
            <li key={name}>
              <img src={url} alt={name} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Skills;

