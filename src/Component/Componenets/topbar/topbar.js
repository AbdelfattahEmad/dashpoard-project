import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './topbar.module.css';
import { faBell } from '@fortawesome/free-regular-svg-icons'
import abdo from "../../../assets/images/abdo.jpg";


export const Topbar = () => {
  return (
    <div className={classes.topbar}>
        <div className={classes.topbar__Search}> 
            <input type='search' placeholder='Type Keyword' />
        </div>
        
        <div className={classes.topbar__icons}>
            <FontAwesomeIcon icon={faBell} size="xl" style={{color: "#0a0a0b",}} />
            <span className={classes.topbar__notifcation}></span>
            <img  src={abdo}/>
        </div>
    </div>
  )
}
