import './Navbar.module.css';
import styles from './Navbar.module.css';

export const Navbar = () => {
    return (
        <nav className={styles.Navbar}>
            <div className={styles.logo}> 
                    <img src="/logo.png" alt="logo-web"></img>
                </div>
            <a className={styles.title} href='/'></a>
            <div className={styles.menu}>
                <ul className={styles.menuItems}>
                    <li>
                        <a className={styles.selected} href='#projects'>
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href='#about'>About</a>
                    </li>
                    <li>
                        <a href='#contact'>Contact</a>
                    </li>
                     <li>
                        <a href='#' className={styles.menuIcon} onClick="onClickMenu()"></a>
                            <img></img>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
