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

// <motion.ul
//   className="container"
//   variants={container}
//   initial="hidden"
//   animate="visible"
// >
//   {[0, 1, 2, 3].map((index) => (
//     <motion.li key={index} className="item" variants={item} />
//   ))}
// </motion.ul>
