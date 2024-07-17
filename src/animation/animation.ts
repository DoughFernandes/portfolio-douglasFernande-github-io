export const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.5,
    },
  },
};

export const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.5,
    },
  },
};

export const subItem = {
  hidden: { x: 30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1.5,
    },
  },
};

export const scaleRotate = {
  visible: {
    scale: [1, 1.5, 1.3, 1.5, 1, 0.5, 1],
    rotate: [0, 0, 270, 360, 0],
    borderRadius: [10, 200, 20, 20, 1000],
    transition: {
      duration: 3,
      ease: "easeInOut",
      delay: 2,
    },
  },
};
