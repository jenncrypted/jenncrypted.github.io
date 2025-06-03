// src/Components/Projects/ProjectModal.jsx
import styles from './ProjectModal.module.css';


export const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>×</button>
                <h2 className={styles.title}>{project.title}</h2>
                <p className={styles.description}>{project.description}</p>
                <h3 className={styles.skills}>{project.skills}</h3>
                <div className={styles.links}>
                    <a href={project.demo} target='_blank' className={styles.link_demo} rel='noreferrer'>
    Demo
</a>
                        <a href={project.GitHub} target='_blank' className={styles.link_GitHub}>
                                GitHub
                        </a>
                </div>
            </div>
        </div>
    );
};
