import projects from '../Data/projects.json';
import styles from './Projects.module.css';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { useState } from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};


export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    return (
        <section className={styles.container}>
  <h2 className={styles.title}>Projects</h2>

  <motion.div
    className={styles.project_container}
    variants={containerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.3 }}
  >
    {projects.map((project, id) => (
      <motion.div
        className={styles.projectCardWrapper}
        key={id}
        variants={cardVariants}
        onClick={() => setSelectedProject(project)}
      >
        <ProjectCard project={project} />
      </motion.div>
    ))}
  </motion.div>

  <ProjectModal
    project={selectedProject}
    onClose={() => setSelectedProject(null)}
  />
</section>

    );
};