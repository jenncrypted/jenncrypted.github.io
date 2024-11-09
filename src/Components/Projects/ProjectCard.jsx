import React from 'react';
import styles from './ProjectCard.module.css';
import { getImageUrl } from '../../utils';
import { useState } from 'react';

export const ProjectCard = ({ project }) => {
    const { title, imageSrc, description, skills, demo, source } = project;
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        console.log('over');
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        console.log('out');
        setIsHovering(false);
    };

    if (skills) {
        return (
            <div className={styles.project_card_container}>
                {!isHovering && (
                    <img
                        className={styles.logoCrypto}
                        src={imageSrc}
                        alt='logoCrypto'
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    ></img>
                )}
                {isHovering && (
                    <div onMouseLeave={() => setIsHovering(false)}>
                        <h3 className={styles.title}>{title}</h3>
                        <div className={styles.description}>
                            <p>{description}</p>
                            <ul className={styles.skills}>
                                {skills.map((skill, id) => {
                                    <li className={styles.skills} key={id}>
                                        {skill}
                                    </li>;
                                })}
                            </ul>
                        </div>
                        <div className={styles.links}>
                            <a href={demo} target='_blank' className={styles.link_demo}>
                                {' '}
                                Demo
                            </a>
                            <a href='https://github.com/jepaba' target='_blank' className={styles.link_source}>
                                Source
                            </a>
                        </div>
                    </div>
                )}
            </div>
        );
    }
};
