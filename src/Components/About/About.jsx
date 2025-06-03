import styles from './About.module.css';
import { motion } from "framer-motion";


export const About = () => {
   return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <h1 id="about" className={styles.About}>
                About me
            </h1>
             <motion.div
                className={styles.about_container}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
            >
                <p>
                    Hi, my name is Jennifer Paz. With a background in International Relations, I've developed strong communication, analytical, and problem solving skills, all of which have proven invaluable as I transition into the world of web development.
                    Currently, I’m focused on growing as a frontend developer, specializing in building responsive, user-focused interfaces using JavaScript and React.
                    I'm passionate about continuous learning and excited to apply both my academic and technical strengths to meaningful projects.
                </p>
            </motion.div>
        </motion.section>
    );
};
