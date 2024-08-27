'use client';

import { container } from '@animation/animation';
import stylesGlobal from '@scss/global.module.scss';
import useProfile from '@src/hooks/useProfile';
import {
  AnimatePresence,
  motion
} from 'framer-motion';
import { useState, useEffect } from 'react';
import styles from './desktop.module.scss';

export default function ProjectsDesktop() {
  const { profile } = useProfile();
  const [current, setCurrent] = useState(0);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    if (profile?.portfolio) {
      const projectImages = profile.portfolio.map(project => project.imagem);
      setImages(projectImages);
    }
  }, [profile]);

  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const selectSlide = (index: number) => {
    setCurrent(index);
  };

  if (!images.length) {
    return <div>Carregando...</div>;
  }

  return (
    <motion.main
      variants={container}
      initial='hidden'
      animate='visible'
      className={stylesGlobal.container}
    >
      <div className={styles.carousel}>
        <div className={styles.mainImageContainer}>
          <div
            className={styles.arrowLeft}
            onClick={prevSlide}
          >
            &#9664;
          </div>
          <AnimatePresence initial={false}>
            <motion.img
              key={current}
              src={images[current]}
              alt='Project Image'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={styles.mainImage}
            />
          </AnimatePresence>
          <div
            className={styles.arrowRight}
            onClick={nextSlide}
          >
            &#9654;
          </div>
        </div>

        <div className={styles.thumbnailContainer}>
          {images.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => selectSlide(index)}
              className={`${styles.thumbnail} ${index === current ? styles.active : ''}`}
            />
          ))}
        </div>
      </div>
    </motion.main>
  );
}
