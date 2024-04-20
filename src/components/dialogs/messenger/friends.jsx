import React from "react";
import styles from './g.module.css';
import { NavLink } from "react-router-dom";



const Friends = (props) => {
    let dialogId = '/messenger/' + props.id;
    return (
        <li className={styles.chat_item}>
            <NavLink to={dialogId}> {props.name} </NavLink> 
        </li>
    )
}

export default Friends;