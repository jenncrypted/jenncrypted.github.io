import { useState } from 'react';
import styles from './ProjectCard.module.css';
import { getImageUrl } from '../../utils';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export const ProjectCard = ({ project }) => {
  const { title, imageSrc, description, skills, demo, GitHub } = project;
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  if (!skills) return null;

  return (
    <motion.div
      className={styles.project_card_container}
      variants={cardVariants}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 250, damping: 20 }}
    >
      {!isHovering && (
        <img className={styles.imageSrc} src={imageSrc} alt='projectImg' />
      )}

      {isHovering && (
        <div className={styles.contentWrapper}>
          <h3 className={styles.title}>{title}</h3>
          <ul className={styles.skills}>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <div className={styles.clickMessage}>View project details</div>
        </div>
      )}
    </motion.div>
  );
};
