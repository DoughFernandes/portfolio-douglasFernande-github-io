'use client';

import { container, item, itemX } from '@animation/animation';
import stylesGlobal from '@scss/global.module.scss';
import Loading from '@src/components/Loading';
import useProfile from '@src/hooks/useProfile';
import { Profile } from '@src/interface/types';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './desktop.module.scss';

export default function ProjectsDesktop() {
  const { profile } = useProfile() as { profile: Profile };
  const [current, setCurrent] = useState<number>(0);
  const [projects, setProjects] = useState<Profile['portfolio']>([]);

  useEffect(() => {
    if (profile?.portfolio) {
      setProjects(profile.portfolio);
    }
  }, [profile]);

  const length = projects.length;

  const nextSlide = () => setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  const selectSlide = (index: number) => setCurrent(index);

  if (!projects.length) {
    return <Loading />;
  }

  const { imagem, titulo, descricao, ferramentas, link } = projects[current];

  return (
    <motion.main
      variants={container}
      initial='hidden'
      animate='visible'
      className={stylesGlobal.container}
    >
      <section className={styles.carousel} aria-label='Carrossel de projetos'>
        <section className={styles.mainContent}>
          <motion.section className={styles.mainProjectContainer} variants={item}>
            <button
              className={styles.arrowLeft}
              onClick={prevSlide}
              aria-label='Imagem anterior'
              aria-controls='project-carousel'
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && prevSlide()}
            >
              &#9664;
            </button>

            <section className={styles.mainProjectDescriptions}>
              <a
                href={link}
                target='_blank'
                rel='noopener noreferrer'
                className={styles.mainImageContainer}
              >
                <AnimatePresence mode='wait'>
                  <motion.img
                    key={current}
                    src={imagem}
                    alt={`Imagem do projeto: ${titulo}`}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.4 }}
                    className={styles.mainImage}
                  />
                </AnimatePresence>
              </a>

              <motion.header
                className={styles.header}
                key={current}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.5 }}
              >
                <h1>{titulo}</h1>
                <p>{descricao}</p>
                <ul className={styles.toolList}>
                  {Object.entries(ferramentas).map(([tool, iconUrl]) => (
                    <li key={tool} className={styles.toolItem}>
                      <img src={iconUrl} alt={`Ícone de ${tool}`} className={styles.toolIcon} />
                    </li>
                  ))}
                </ul>
              </motion.header>
            </section>

            <button
              className={styles.arrowRight}
              onClick={nextSlide}
              aria-label='Próxima imagem'
              aria-controls='project-carousel'
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && nextSlide()}
            >
              &#9654;
            </button>
          </motion.section>

          <motion.section
            className={styles.thumbnailContainer}
            variants={itemX}
            role='group'
            aria-label='Miniaturas de projetos'
          >
            {projects.map((project, index) => (
              <figure key={index} className={styles.thumbnailFigure}>
                <motion.img
                  src={project.imagem}
                  alt={`Miniatura do projeto: ${project.titulo}`}
                  onClick={() => selectSlide(index)}
                  className={`${styles.thumbnail} ${index === current ? styles.active : ''}`}
                  role='button'
                  aria-pressed={index === current}
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && selectSlide(index)}
                  initial={{ scale: 0.9 }}
                  animate={{ scale: index === current ? 1.1 : 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <figcaption>{project.subtitulo}</figcaption>
              </figure>
            ))}
          </motion.section>
        </section>
      </section>
    </motion.main>
  );
}
