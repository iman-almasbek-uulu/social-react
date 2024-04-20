import React from 'react';
import styles from './header.module.css';

const Header = () => {
    return         <header className={`${styles.header} pad-lef-40`}>
        <img className={styles.logo} src="../logo2.png" alt='logo' />
    </header>
}

export default Header;