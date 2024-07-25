import { Variants } from 'framer-motion';

export const collapseVariants: Variants = {
  close: {
    top: '1%',
    left: '5%',
    height: '0px',
    width: '0px',
    borderRadius: '1rem',
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
      when: 'afterChildren',
      delay: 0.5
    }
  },
  open: {
    top: '1%',
    left: '5%',
    height: '50vh',
    width: '90%',
    position: 'absolute',
    borderRadius: '1rem',
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
      when: 'beforeChildren'
    }
  }
};

export const collapselist: Variants = {
  close: {
    opacity: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
      staggerDirection: -1
    }
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
      delayChildren: 0.5
    }
  }
};

export const listItem: Variants = {
  close: {
    opacity: 0,
    x: -50,
    transition: {
      duration: 0.2
    }
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.1
    }
  }
};

export const positionLogo: Variants = {
  close: {
    top: '1%',
    left: '5%',
    height: '30',
    width: '30',
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut'
    }
  },
  open: {
    top: '5%',
    left: '12%',
    height: '40px',
    width: '40px',
    scale: 1.2,
    transition: {
      duration: 0.5,
      ease: 'easeInOut'
    }
  }
};
