'use client';

import { container, item, itemX } from '@animation/animation';
import stylesGlobal from '@scss/global.module.scss';
import useProfile from '@src/hooks/useProfile';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { FaBuildingColumns } from 'react-icons/fa6';
import { CoursesSectionProps, ExperienceSectionProps, ProfileInterface } from '../typagem';
import styles from './experience.module.scss';

const EducationSection = () => (
  <section className={styles.formacao}>
    <h2>Formação</h2>
    <FaBuildingColumns />
    <small>Ensino médio - Completo</small>
  </section>
);

const ExperienceSection = ({ experiencia_profissional }: ExperienceSectionProps) => (
  <section>
    <h2>Experiências</h2>
    {experiencia_profissional?.map((experiencia, index) => (
      <motion.div key={index} className={styles.formation} whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
        <h3>{experiencia.cargo}</h3>
        <p>{experiencia.empresa}</p>
        <small>{experiencia.periodo}</small>
        <p>{experiencia.descricao}</p>
      </motion.div>
    ))}
  </section>
);

const CoursesSection = ({ educacao, openCourses, toggleCourseDetails }: CoursesSectionProps) => (
  <motion.section className={styles.courses} variants={itemX}>
    <h2>Cursos</h2>
    {educacao?.map((curso, index) => (
      <motion.button
        key={index}
        className={styles.show__Details_Button}
        onClick={() => toggleCourseDetails(index)}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
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
  </motion.section>
);

export default function ExperiencesMobile() {
  const { profile }: { profile: ProfileInterface | null } = useProfile();
  const [openCourses, setOpenCourses] = useState<number | null>(null);

  const toggleCourseDetails = (index: number) => {
    setOpenCourses(openCourses === index ? null : index);
  };

  return (
    <motion.main variants={container} initial='hidden' animate='visible' className={stylesGlobal.container}>
      <section className={styles.experiences}>
        <motion.section className={styles.education} variants={item}>
          {/* Seção de Formação */}
          <EducationSection />
          {/* Seção de Experiências Profissionais */}
          <ExperienceSection experiencia_profissional={profile?.experiencia_profissional} />
        </motion.section>

        {/* Seção de Cursos */}
        <CoursesSection
          educacao={profile?.educacao}
          openCourses={openCourses}
          toggleCourseDetails={toggleCourseDetails}
        />
      </section>
    </motion.main>
  );
}
