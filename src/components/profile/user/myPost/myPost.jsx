import React from 'react';
import styles from './myPost.module.css';
import Posts from './posts/posts';


const MyPost = () => {
    return (
        <div>
            <div className={styles.myPost}>
                <h3 className={styles.title}>My Posts</h3>
                <textarea className={styles.text}></textarea>
                <button className={styles.btn}>add</button>
            </div>
            <div className={styles.posts}>
                <ul className={styles.list}>
                    <Posts message="Hello world!" like="1"/>
                    <Posts message="how are you" like="179"/>
                    <Posts message="Thanks very much" like="17"/>
                </ul>
            </div>
        </div>


    );
}

export default MyPost;
