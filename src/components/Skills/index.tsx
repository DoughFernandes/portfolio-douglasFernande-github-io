'use client';

import useProfile from '@src/hooks/useProfile';
import styles from './skills.module.scss';

const Skills = () => {
  const { profile } = useProfile();

  return (
    <section className={styles.skills__container}>
      {profile && (
        <ul>
          {Object.entries(profile?.habilidades_tecnicas).map(([name, url]) => (
            <li key={name}>
              <img content='' src={url} alt={`imagen de habilidade tecnica ${name}`} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Skills;
