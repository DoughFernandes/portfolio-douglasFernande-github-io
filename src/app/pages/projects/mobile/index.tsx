'use client';

import { container } from '@animation/animation';
import stylesGlobal from '@scss/global.module.scss';
import Loading from '@src/components/Loading';
import useProfile from '@src/hooks/useProfile';
import { Profile } from '@src/interface/types';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './mobile.module.scss';

export default function Projects() {
  const { profile } = useProfile() as { profile: Profile };
  const [projects, setProjects] = useState<Profile['portfolio']>([]);

  useEffect(() => {
    if (profile?.portfolio) {
      setProjects(profile.portfolio);
    }
  }, [profile]);

  if (!projects.length) {
    return <Loading />;
  }

  return (
    <motion.main
      variants={container}
      initial='hidden'
      animate='visible'
      className={stylesGlobal.container}
    >
      <section className={styles.containerCarousel}>
        <h1>Seja bem-vindo 😍😍</h1>
        <small>
          Obrigado por visitar meu portfólio! Fico muito feliz em compartilhar meus projetos com
          você.
        </small>
        {projects.map((project, index) => (
          <section key={index} className={styles.carousel}>
            <h1>{project.titulo}</h1>
            <figure className={styles.figureContainer}>
              <img src={project.imagem} alt='Imagem do projeto' />
            </figure>
            {/* <ul>
              <p>{project.descricao}</p>
              {Object.entries(project.ferramentas).map(([tool, iconUrl]) => (
                <li key={tool}>
                  <img src={iconUrl} alt={`Ícone de ${tool}`} />
                </li>
              ))}
            </ul> */}
          </section>
        ))}
      </section>
    </motion.main>
  );
}
