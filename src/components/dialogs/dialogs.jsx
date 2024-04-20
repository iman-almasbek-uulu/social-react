import React from "react";
import styles from './dialogs.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./messenger/friends";

const Dialogs = ()  => {

    return (
            <div className={styles.dialogs}>
                <div className={styles.chat}>
                    <h2 className={styles.title}>Messenger</h2>
                    <div className={styles.switch}>
                        <NavLink to="/messenger/friends">Frineds</NavLink>
                        <NavLink to="/messenger/groups">Groups</NavLink>
                    </div>
                    <div className={styles.chat_msg}>
                        <input className={styles.search} type="text" placeholder="search..."/>
                        
                         <ul className={styles.chat_list}>
                             <Friends name='Iman' id='1'/>
                             <Friends name='Iman' id='2'/>
                             <Friends name='Iman' id='3'/>
                             <Friends name='Iman' id='4'/>
                             <Friends name='Iman' id='5'/>
                         </ul>
                    </div>

                </div>
                <div className={styles.message}>
                    
                </div>
            </div>        


    )
} 

export default Dialogs;