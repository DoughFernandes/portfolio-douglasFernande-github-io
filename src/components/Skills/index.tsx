'use client';

import useProfile from '@src/hooks/useProfile';
import styles from "./skills.module.scss";

const Skills = () => {
  const { data } = useProfile();

  return (
    <section className={styles.skills__container}>
      {data && (
        <ul>
          {Array.isArray(data.skills?.hardSkills) &&
            data.skills.hardSkills.map((skill, index) => (
              <li key={index}>
                <img width={50} src={skill.logo} alt={skill.name} />
              </li>
            ))}
        </ul>
      )}
    </section>
  );
};

export default Skills;
