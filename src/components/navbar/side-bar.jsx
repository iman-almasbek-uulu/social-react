import React from "react";
import styles from './navbar.module.css';
import { NavLink } from "react-router-dom";


const SideBar = () => {
    return  (
            <nav className={styles.navbar}>
                <ul className={styles.list}>
                    <li className={styles.item}><NavLink  to="/profile" className={({isActive}) =>`${isActive ? styles.active : ''}`}>profile </NavLink></li>
                    <li className={styles.item}><NavLink activeClassName={styles.active} to="/dialogs#">message</NavLink></li>
                    <li className={styles.item}><NavLink activeClassName={styles.active} to="/news">News</NavLink></li>
                    <li className={styles.item}><NavLink activeClassName={styles.active} to="/music">Music</NavLink></li>
                    <li className={styles.item}><NavLink activeClassName={styles.active} to="/setting">Setting</NavLink></li>
                </ul>
            </nav>
        );
    }

export default SideBar;


