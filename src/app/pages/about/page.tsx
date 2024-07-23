'use client';

import { container, item } from '@animation/animation';
import useProfile from '@src/hooks/useProfile';
import { motion } from 'framer-motion';
import styles from './about.module.scss';

export default function Skills() {
  const { data } = useProfile();

  return (
    <motion.main
      variants={container}
      initial='hidden'
      animate='visible'
      className={styles.container}
    >
      <motion.section variants={item} className={styles.desktop__title}>
        <div>
          {data && (
            <div>
              <p>Nome: {data.name}</p>
              <p>Email: {data.email}</p>
              <p>Job: {data.job}</p>
              {Array.isArray(data.skills?.hardSkills) &&
                data.skills.hardSkills.map((skill, index) => (
                  <section key={index}>
                    <p>{skill.name}</p>
                    <img width={50} src={skill.logo} alt={skill.name} />
                  </section>
                ))}
            </div>
          )}
        </div>
      </motion.section>
    </motion.main>
  );
}
