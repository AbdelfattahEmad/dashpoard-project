import React from 'react'
import classes from "../Projects/Projects.module.css"
import a1 from "../../../assets/images/a1.jpg"
import a2 from "../../../assets/images/a2.jpg"
import a3 from "../../../assets/images/a3.jpg"
import Form from 'react-bootstrap/Form';




const Projects = () => {
  return (
    <div className={classes.container_projects}>
        
        <div className={classes.Project_Adress}> 
        <h1>Projects</h1>
        </div>

        <div className={classes.Projects_items}>

            <div className={classes.project}>
                <h4>Eldali DashBoard</h4>
                <p className={classes.EEE}>img elements must have an alt prop, either with meaningful text,</p>
                <div className={classes.image}>
                    <img src={a1}  alt="abdo" />
                    <img src={a2}  alt="abdo" />
                    <img src={a3}  alt="abdo" />
                    <img src={a2}  alt="abdo" />
                    <img src={a1}  alt="abdo" />
                </div>
                <div className={classes.Button}>
                    <span> Programing</span>
                    <span> Design</span>
                    <span>Hosting</span>
                    <span>Markiting</span>
                </div>
                <hr/>
                <div className={classes.rang}>
                    <span style={{"width" :"80%"}}> <Form.Range /></span>
                
                    <p>2500 $</p>

                </div>


            </div>

            <div className={classes.project}>
                <h4>Elzero Dashboard</h4>
                <p className={classes.EEE}>img elements must have an alt prop, either with meaningful text,</p>
                <div className={classes.image}>
                    <img src={a3}  alt="abdo" />
                    <img src={a2}  alt="abdo" />
                    <img src={a1}  alt="abdo" />
                    <img src={a1}  alt="abdo" />
                    <img src={a2}  alt="abdo" />
                </div>

                <div className={classes.Button}>
                    <span> Programing</span>
                    <span> Design</span>
                    <span>Hosting</span>
                    <span>Markiting</span>
                </div>

                <hr/>
                
                <div className={classes.rang}>
                    <span style={{"width" :"80%"}}> <Form.Range /></span>
                
                    <p>1800 $</p>

                </div>


            </div>

            
        </div>

        </div>
  )
}

export default Projects