'use client';

import { container } from '@animation/animation';
import stylesGlobal from '@scss/global.module.scss';
import CursorDot from '@src/components/BolinhaBody';
import useProfile from '@src/hooks/useProfile';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { FaBuildingColumns } from 'react-icons/fa6';
import styles from './desktop.module.scss';

export default function ExperiencesDesktop() {
  const { profile } = useProfile();
  const [openCourses, setOpenCourses] = useState<number | null>(null);

  const toggleCourseDetails = (index: number) => {
    setOpenCourses(openCourses === index ? null : index);
  };

  return (
    <>
      <CursorDot />
      <motion.main variants={container} initial='hidden' animate='visible' className={stylesGlobal.container}>
        <section className={styles.experiences}>
          <section className={styles.education}>
            <section className={styles.formacao}>
              <h2>Formação</h2>
              <FaBuildingColumns />
              <small>Ensino médio - Completo</small>
            </section>
            <section>
              <h2>Experiências</h2>
              {profile?.experiencia_profissional.map((experiencia, index) => (
                <motion.div key={index} className={styles.formation} whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                  <h3>{experiencia.cargo}</h3>
                  <p>{experiencia.empresa}</p>
                  <small>{experiencia.periodo}</small>
                  <p>{experiencia.descricao}</p>
                </motion.div>
              ))}
            </section>
          </section>

          <section className={styles.courses}>
            <h2>Cursos</h2>
            {profile?.educacao.map((curso, index) => (
              <motion.button key={index} className={styles.show__Details_Button} onClick={() => toggleCourseDetails(index)} whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                <h3>{curso.instituicao}</h3>
                <AnimatePresence>
                  {openCourses === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p>{curso.curso}</p>
                      <small>{curso.periodo}</small>
                      <p>{curso.descricao}</p>
                      <span>
                        <a href={curso.url} target='_blank' rel='noopener noreferrer'>
                          Ver mais
                        </a>
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            ))}
          </section>
        </section>
      </motion.main>
    </>
  );
}
