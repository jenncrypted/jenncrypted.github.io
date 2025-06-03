// import './Hero.css';
import styles from './Hero.module.css';
import ExperienceImage from './image.png';
import memoji from './memoji.png';
import { motion } from 'framer-motion';
import { FaGithub, FaFileAlt } from 'react-icons/fa';


export const Hero = () => {
    return (
        <section className={styles.Hero}>
       <div className={styles.glow}>
  <div className={styles.glow} style={{ top: '10%', left: '15%' }} />
  <div className={styles.glow} style={{ top: '50%', left: '70%' }} />
</div>
            <div className={styles.content}>
                <motion.div className={styles.memoji_container}
                initial={{ scale: 0.5, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 1, ease: 'easeOut' }}>

                    <img className={styles.memoji} src={memoji} alt='memoji'></img>
                </motion.div>
                <h1>WELCOME</h1>
                <h2 className={styles.title}>Jennifer's Portfolio</h2>
                <h3>
                    Frontend Developer
                </h3>
                <div>
                    <div className={styles.email_button}>
                       <a href="https://github.com/jenncrypted" target="_blank" rel="noreferrer">
                        <FaGithub className={styles.icon} title="GitHub" />
                    </a>
                    </div>
                    <div className={styles.cv_button}>
                        <a href="/jenncrypted.github.io/cv-JenniferPaz.pdf" target="_blank" rel="noopener noreferrer">
                        <FaFileAlt className={styles.icon} title="Download CV" />
                    </a>
                    </div>
                </div>
                <section>
                    <h2 className={styles.experience}>
                        <strong>EXPERIENCE WITH</strong>
                    </h2>
                    <div id='projects' className={styles.ExperienceImage}>
                        <img src={ExperienceImage} alt='image_experience'></img>
                    </div>
                </section>
            </div>
        </section>
    );
};
