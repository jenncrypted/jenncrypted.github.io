import { Contact } from '../Contact/Contact';
import styles from './Footer.module.css';
export const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.innerHeightRestrictedContainer}>
                <div id='contact' className={styles.textContainer}>
                    <h1>Let’s work together!</h1>
                    <h2>jenniferpaz11@hotmail.com</h2>
                </div>
                <Contact></Contact>
            </div>
        </div>
    );
};
