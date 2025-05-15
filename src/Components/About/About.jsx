import './About.module.css';
import styles from './About.module.css';

export const About = () => {
    return (
        <section>
            <h1 id='about' className={styles.About}>
                About
            </h1>
            <div className={styles.about_container}>
                <p>I'm a web development enthusiast with a growing expertise in React, passionate about creating dynamic, user-friendly applications. I focus on leveraging React’s powerful component architecture and state management to build seamless, engaging user experiences. I'm always exploring new tools and techniques to bring fresh ideas to life, constantly learning and refining my skills to deliver clean, impactful solutions.
                </p>
            </div>
        </section>
    );
};
