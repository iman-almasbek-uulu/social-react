import React from "react";
import styles from './g.module.css';

const Groups = () => {

    return (
        <ul className={styles.chat_list}>
            <li className={styles.chat_item}>best</li>
            <li className={styles.chat_item}>чокнутые</li>
            <li className={styles.chat_item}>ебнутые</li>
            <li className={styles.chat_item}>смышленные</li>
        </ul>

    )
}

export default Groups;