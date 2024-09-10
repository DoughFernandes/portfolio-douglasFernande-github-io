'use client';

import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import styles from './Bolinha.module.scss';

interface Position {
  x: number;
  y: number;
}

const CursorDot: React.FC = () => {
  const [positions, setPositions] = useState<Position[]>([]);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const moveDot = (e: MouseEvent) => {
      setPositions((prevPositions) => [{ x: e.clientX, y: e.clientY }, ...prevPositions.slice(0, 20)]);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener('mousemove', moveDot);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveDot);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      {positions.map((pos, index) => (
        <motion.div
          key={index}
          className={styles.dot}
          style={{ left: pos.x, top: pos.y }}
          animate={{
            scale: isClicked ? 2 : 1
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        />
      ))}
    </>
  );
};

export default CursorDot;
