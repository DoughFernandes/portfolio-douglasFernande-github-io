'use client';

import { container } from '@animation/animation';
import stylesGlobal from '@scss/global.module.scss';
import useProfile from '@src/hooks/useProfile';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './desktop.module.scss';

export default function ProjectsDesktop() {
  const { profile } = useProfile();
  const [current, setCurrent] = useState(0);
  const [projects, setProjects] = useState<{ ferramentas: { [key: string]: string; }; link: string; imagem: string; titulo: string; descricao: string }[]>([]);

  useEffect(() => {
    if (profile?.portfolio) {
      setProjects(profile.portfolio);
    }
  }, [profile]);

  const length = projects.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const selectSlide = (index: number) => {
    setCurrent(index);
  };

  if (!projects.length) {
    return <div>Carregando...</div>;
  }

  const { imagem, titulo, descricao, ferramentas } = projects[current];

  return (
    <motion.main variants={container} initial='hidden' animate='visible' className={stylesGlobal.container}>
      <section className={styles.carousel} aria-label='Carrossel de projetos'>
        <div className={styles.mainContent}>
          <div className={styles.mainImageContainer}>
            <button className={styles.arrowLeft} onClick={prevSlide} aria-label='Imagem anterior' aria-controls='project-carousel'>
              &#9664;
            </button>
            <a href={projects[current].link} target='_blank' rel='noopener noreferrer'>
              <AnimatePresence initial={false}>
                <motion.img
                  id='project-carousel'
                  key={current}
                  src={imagem}
                  alt={`Imagem do projeto: ${titulo}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={styles.mainImage}
                />
              </AnimatePresence>
            </a>
            <header className={styles.header}>
              <h1>{titulo}</h1>
              <p>{descricao}</p>
              <ul className={styles.toolList}>
                {Object.entries(ferramentas).map(([tool, iconUrl]) => (
                  <li key={tool} className={styles.toolItem}>
                    <img src={iconUrl} alt={`Ícone de ${tool}`} className={styles.toolIcon} />
                    <span>{tool}</span>
                  </li>
                ))}
              </ul>
            </header>
            <button className={styles.arrowRight} onClick={nextSlide} aria-label='Próxima imagem' aria-controls='project-carousel'>
              &#9654;
            </button>
          </div>

          <div className={styles.thumbnailContainer} role='group' aria-label='Miniaturas de projetos'>
            {projects.map((project, index) => (
              <motion.img
                key={index}
                src={project.imagem}
                alt={`Miniatura do projeto: ${project.titulo}`}
                onClick={() => selectSlide(index)}
                className={`${styles.thumbnail} ${index === current ? styles.active : ''}`}
                role='button'
                aria-pressed={index === current}
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && selectSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  );
}
