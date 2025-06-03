import { useState } from 'react';
import styles from './Navbar.module.css';




export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.Navbar}>
            
            <div className={styles.menu}>
                <button className={styles.menuIcon} onClick={toggleMenu}>
                    ☰ 
                </button>

                <ul className={`${styles.menuItems} ${isOpen ? styles.open : ''}`}>
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href='#about'>About </a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};
