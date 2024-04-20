import React from 'react';
import styles from './user.module.css';
const User = () => {
    return (
        <div className={styles.user}>
            <div className={styles.logo}>
                <img src='../logo.png' alt='avatar' />
                <div className={styles.descr}>
                    <h2 className={styles.title}>Пользователь</h2>
                    <p className={styles.item}>ФИО: Алмасбек уулу Иман</p>
                    <p className={styles.item}>ГОД рожение: 2003</p>
                    <p className={styles.item}>Жительство: Кочкор</p>
                    <p className={styles.item}>Телефон: 0702893489</p>
                </div>
            </div>
        </div>
    );
}

export default User;
