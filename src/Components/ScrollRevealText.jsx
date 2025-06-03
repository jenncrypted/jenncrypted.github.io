import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ScrollRevealText = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  );
};

export default ScrollRevealText;