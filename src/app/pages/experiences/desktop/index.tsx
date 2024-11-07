'use client';

import { container } from '@animation/animation';
import stylesGlobal from '@scss/global.module.scss';
import CursorDot from '@src/components/BolinhaBody';
import useProfile from '@src/hooks/useProfile';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { FaBuildingColumns } from 'react-icons/fa6';
import { CoursesSectionProps, ExperienceSectionProps, ProfileInterface } from '../typagem';
import styles from './desktop.module.scss';

const EducationSection = () => (
  <section className={styles.formation_education}>
    <h2>Formação</h2>
    <div>
      <FaBuildingColumns />
      <small>Ensino médio - Completo</small>
    </div>
  </section>
);

const ExperienceSection = ({ experiencia_profissional }: ExperienceSectionProps) => (
  <motion.section
    className={styles.formation_experiencia}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h2>Experiências</h2>
    {experiencia_profissional?.map((experiencia, index) => (
      <motion.div key={index} className={styles.formation} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
        <h3>{experiencia.cargo}</h3>
        <p>{experiencia.empresa}</p>
        <small>{experiencia.periodo}</small>
        <p>{experiencia.descricao}</p>
      </motion.div>
    ))}
  </motion.section>
);

const CoursesSection = ({ educacao, openCourses, toggleCourseDetails }: CoursesSectionProps) => (
  <section>
    <h2>Cursos</h2>
    {educacao?.map((curso, index) => (
      <motion.button
        key={index}
        className={styles.show__Details_Button}
        onClick={() => toggleCourseDetails(index)}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        aria-expanded={openCourses === index}
      >
        <h3>{curso.instituicao}</h3>
        <AnimatePresence>
          {openCourses === index && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
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
);

export default function ExperiencesDesktop() {
  const { profile }: { profile: ProfileInterface | null } = useProfile();
  const [openCourses, setOpenCourses] = useState<number | null>(null);

  const toggleCourseDetails = (index: number) => {
    setOpenCourses(openCourses === index ? null : index);
  };

  return (
    <>
      <CursorDot />
      <motion.main variants={container} initial='hidden' animate='visible' className={stylesGlobal.container}>
        <section className={styles.experiences}>
          <EducationSection />
          <div className={styles.contanier_formation}>
            <ExperienceSection experiencia_profissional={profile?.experiencia_profissional} />
            <CoursesSection
              educacao={profile?.educacao}
              openCourses={openCourses}
              toggleCourseDetails={toggleCourseDetails}
            />
          </div>
        </section>
      </motion.main>
    </>
  );
}
