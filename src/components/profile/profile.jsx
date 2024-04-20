import React from 'react';
import styles from './profile.module.css';
import MyPost from './user/myPost/myPost';
import User from './user/user';


const Profile = () => {
    return (
        <main className={styles.profile}>
            <div className={styles.bg}>
            </div>
            <User/>
            <MyPost/>
        </main>
    );
}

export default Profile;
