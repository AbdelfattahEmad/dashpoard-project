import { faFile, faUser } from '@fortawesome/free-regular-svg-icons'
import { faBook, faChartLine, faDiagramProject, faEarthAmericas, faGear, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom';
import classes from './sidebar.module.css';
import { faUsersLine } from '@fortawesome/free-solid-svg-icons'


 const Sidebar = () => {
  return (
    <aside className={classes.sidebar}>
        <div className={classes.logo}>
          <h1>LoGo</h1>
          <FontAwesomeIcon icon={faUsersLine} size="2xl" style={{color: "#090a0b",}} />
        </div>


        <ul className={classes.sidebar__nav}>
            <li className={classes.sidebar__item}>
                <Link className='active' to="Dashpoard" style={{textDecoration :"none" , display : "flex"}}>
                    <FontAwesomeIcon icon={faChartLine}  style={{color: "#0f0f10",}} />
                    <span className='p-left'>Dashboard </span>
                            
                </Link>
            </li>

            <li className={classes.sidebar__item}>
                <Link to="setting" style={{textDecoration :"none" , display : "flex"}}>
                    <FontAwesomeIcon icon={faGear} style={{color: "#0f0f10",}} />
                    <span className='p-left' >setting</span>
                </Link>
            </li>

            <li className={classes.sidebar__item}>
                <Link to="profile" style={{textDecoration :"none", display : "flex"}}>
                <FontAwesomeIcon icon={faUser} style={{color: "#0f0f10",}} />
                    <span className='p-left' >profile</span>  
                    </Link>
            </li>

            <li className={classes.sidebar__item}>
                <Link to="projects" style={{textDecoration :"none" , display : "flex"}}>
                <FontAwesomeIcon icon={faDiagramProject} style={{color: "#0f0f10",}} />
                        <span className='p-left'>projects</span>
                    </Link>
            </li>

            <li className={classes.sidebar__item}>
                <Link to="courses" style={{textDecoration :"none" , display : "flex"}}>
                <FontAwesomeIcon icon={faBook} style={{color: "#0f0f10",}} />
                    <span className='p-left' >Courses</span> 
                    </Link>
            </li>

            <li className={classes.sidebar__item}>
                <Link to="friends" style={{textDecoration :"none" , display : "flex"}}>
                <FontAwesomeIcon icon={faUserGroup}  style={{color: "#0f0f10",}}/>
                    <span className='p-left'>Friends</span>
                </Link>

            </li>

            <li className={classes.sidebar__item}>
            <Link to="files" style={{textDecoration :"none" , display : "flex"}}>
            <FontAwesomeIcon icon={faFile}  style={{color: "#0f0f10",}} />
                <span className='p-left'>Files</span> 
                </Link>

            </li>

            <li className={classes.sidebar__item}>
            <Link className='link' to="plans" style={{textDecoration :"none" , display : "flex"}}>
            <FontAwesomeIcon icon={faEarthAmericas} style={{color: "#0f0f10",}} />
            <span className='p-left'> Plans</span>

                </Link>

            </li>

        </ul>
    </aside>
  )
}
export default Sidebar
