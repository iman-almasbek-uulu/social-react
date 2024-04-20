import React from 'react';
import styles from './posts.module.css';


const Posts = (props) => {

    console.log(props.message);
    return (
        <li className={styles.item}>
            <img src='https://masterpiecer-images.s3.yandex.net/8d73ce257d8611eea814d659965eed18:upscaled' alt='logo' />
            <span className={styles.descr}>{props.message}</span>
            <span className={styles.like}>{props.like} like</span>
        </li>
    );
}

export default Posts;
