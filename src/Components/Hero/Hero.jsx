// import './Hero.css';
import styles from './Hero.module.css';
import ExperienceImage from './image.png';
import memoji from './memoji.png';
import { motion } from 'framer-motion';


export const Hero = () => {
    return (
        <section className={styles.Hero}>
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
                        <a href='mailto:jenniferpaz11@hotmail.com' target='_blank'>
                            Get in touch
                        </a>
                    </div>
                    <div className={styles.cv_button}>
                        <a href='/'>Download CV</a>
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
