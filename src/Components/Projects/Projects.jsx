import React from 'react';

import projects from '../Data/projects.json';
import styles from './Projects.module.css';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.project_container}>
                {projects.map((project, id) => {
                    return <ProjectCard key={id} project={project} />;
                })}
            </div>
        </section>
    );
};
