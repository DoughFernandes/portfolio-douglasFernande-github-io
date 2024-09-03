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
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  useEffect(() => {
    if (profile?.portfolio) {
      setProjects(profile.portfolio);
    }
  }, [profile]);

  if (!projects.length) return <Loading />;

  const handleCardClick = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  const animationProps = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
    transition: { duration: 0.3, ease: 'easeInOut', delay: 0.5 }
  };

  return (
    <motion.main variants={container} initial='hidden' animate='visible' className={stylesGlobal.container}>
      <section className={styles.containerCards}>
        <h1>Seja bem-vindo</h1>
        <small>Obrigado por visitar meu portfólio! Fico muito feliz em compartilhar meus projetos com você.</small>

        <motion.section layout className={styles.containerProjects}>
          {projects.map((project, index) => (
            <motion.section
              key={project.titulo}
              layout
              initial={{ borderRadius: 8 }}
              animate={{ borderRadius: expandedProject === index ? 12 : 8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className={`${styles.project} ${expandedProject === index ? styles.projectExpanded : ''}`}
            >
              {expandedProject !== index && (
                <header onClick={() => handleCardClick(index)} className={styles.projectHeader}>
                  <h2>{project.subtitulo}</h2>
                </header>
              )}

              {expandedProject === index && (
                <motion.section {...animationProps} className={styles.projectDetails}>
                  <header onClick={() => handleCardClick(index)} className={styles.projectHeaderExpanded}>
                    <h2>{project.titulo}</h2>
                  </header>
                  <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} onClick={() => setExpandedProject(null)} className={styles.closeButton}>
                    X
                  </motion.button>
                  <motion.figure {...animationProps}>
                    <img src={project.imagem} alt={`Imagem do projeto ${project.titulo}`} />
                  </motion.figure>
                  <motion.p {...animationProps}>{project.descricao}</motion.p>
                  <button type='button' className={styles.verProjetos}>
                    <a target='_blank' href={project.link}>Click para ver o projeto</a>
                  </button>
                  <motion.ul {...animationProps}>
                    {Object.entries(project.ferramentas).map(([tool, iconUrl]) => (
                      <>
                        <li key={tool}>
                          <img className={styles.icon} src={iconUrl} alt={`Ícone de ${tool}`} />
                        </li>
                      </>
                    ))}
                  </motion.ul>
                </motion.section>
              )}
            </motion.section>
          ))}
        </motion.section>
      </section>
    </motion.main>
  );
}
