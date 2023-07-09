import React from 'react'
import classes from "../Profile/profile.module.css"
import abdo from "../../../assets/images/abdo.jpg"
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import Home from "../../../assets/images/Home.png"
import cap from "../../../assets/images/cap.png"
import right from "../../../assets/images/right.png"




const Profile = () => {
  return (


    
    <div className={classes.Container_Profile}>

            <h2>Profile</h2>
            
          <div className={classes.Head_Profile}>

            <div className={classes.Profil_img}>
              <img src={abdo} />
              <h4> Abdelfatah Eldali</h4>
              <p className={classes.EEE} >level 20</p>
              <Form.Range />
              <div>
                <FontAwesomeIcon icon={faStar} style={{"--fa-primary-color": "#aac71a", "--fa-secondary-color": "#b3c214","padding" : "2px"}} />
                <FontAwesomeIcon icon={faStar} style={{"--fa-primary-color": "#aac71a", "--fa-secondary-color": "#b3c214","padding" : "2px"}} />
                <FontAwesomeIcon icon={faStar} style={{"--fa-primary-color": "#aac71a", "--fa-secondary-color": "#b3c214","padding" : "2px"}} />
                <FontAwesomeIcon icon={faStar} style={{"--fa-primary-color": "#aac71a", "--fa-secondary-color": "#b3c214","padding" : "2px"}} />
                <FontAwesomeIcon icon={faStar} style={{"--fa-primary-color": "#aac71a", "--fa-secondary-color": "#b3c214","padding" : "2px"}} />
              </div>

            </div>


            <div className={classes.Profile_content}>


              <div className={classes.Head_content}>

                  <div className="names m-4"> 
                    <h6>Genral information</h6>
                    <h6> <span className={classes.EEE}>fullName :</span> osama Mohamed</h6>
                  </div>

                  <div className='type m-5'>
                  <p><span className={classes.EEE}>Gender : </span>Male</p>
                  </div>

                  <div className='country m-5'>
                  <p> <span className={classes.EEE}>Country : </span>Egypt</p>

                  </div>


                  <div className={classes.Toggle}>
                <Form>
                <Form.Check // prettier-ignore
                  type="switch"
                  id="custom-switch"
                />
              </Form>


                  </div>


              </div>
              


              <div className={classes.Head_content}>

                    <div className="names m-4"> 
                      <h6>Personal information</h6>
                      <h6> <span className={classes.EEE}>Email : </span> Aboda@gmail</h6>
                    </div>
                    <div className='type m-5'>
                    <p><span className={classes.EEE}>phone :</span>01069650234</p>
                    </div>

                    <div className='country m-5'>
                    <p> <span className={classes.EEE}> Date of Birth :</span> 1 /1 /2000</p>

                    </div>


                        <div className={classes.Toggle}>
                        <Form>
                        <Form.Check // prettier-ignore
                        type="switch"
                        id="custom-switch"
                        />
                        </Form>


                        </div>


              </div>


              <div className={classes.Head_content}>

                <div className="names m-4"> 
                  <h6>Jop information</h6>
                  <h6> <span className={classes.EEE}> Title :</span> FullStack Devolober </h6>
                </div>

                <div className='type m-5'>
                <p><span className={classes.EEE}>Programing Lang : </span>Java Script </p>
                </div>

                <div className='country m-5'>
                <p> <span className={classes.EEE}>Year of Exprince : </span>15 Years</p>

                </div>


              <div className={classes.Toggle}>
              <Form>
              <Form.Check // prettier-ignore
              type="switch"
              id="custom-switch"
              />
              </Form>


              </div>


              </div>



          <div className={classes.Head_content}>
            <div className="names m-4"> 
              <h6>Bailling information</h6>
              <h6> <span className={classes.EEE}> Payment Method :</span> Paypal</h6>
            </div>

            <div className='type m-5'>
            <p><span className={classes.EEE}>Email :</span>email@website.com </p>
            </div>

            <div className='country m-5'>
            <p> <span className={classes.EEE}>Subscription :</span>Monthly</p>

            </div>


            <div className={classes.Toggle}>
            <Form>
            <Form.Check // prettier-ignore
            type="switch"
            id="custom-switch"
            />
            </Form>


              </div>


              </div>


            </div>

          </div>


          <div className={classes.container_Two}>

            <div className={classes.skills}>
              <h2 className='p-2'>My Skills </h2>
              <p className={classes.EEE}>Complete skiils list</p>

              <div className={classes.Skills_types}>
                <span className={classes.skill}> Html</span>
                <span className={classes.skill}> Pujs</span>
                <hr/>


              </div>

              <hr />

              <div className={classes.Skills_types}>
                <span className={classes.skill}> Html</span>
                <span className={classes.skill}> css</span>
                <span className={classes.skill}> scss</span>

                <hr/>


              </div>

              <hr />


              <div className={classes.Skills_types}>
                <span className={classes.skill}> Java Script</span>
                <span className={classes.skill}>Type Script</span>
                <hr/>


              </div>

              <hr />


              <div className={classes.Skills_types}>
                <span className={classes.skill}>Vue js </span>

                <span className={classes.skill}>React Js</span>
                <hr/>


              </div>

              <hr />

              <div className={classes.Skills_types}>
                <span className={classes.skill}>Php </span>

                <span className={classes.skill}>Lavrel</span>
                <hr/>
              </div>

            </div>

            <div className={classes.Activity}>
              <h2> Latest Activity </h2>
              <p className={classes.EEE}> Latest Activity Done By The User</p>

              <div className={classes.items}>
              <img src={Home} alt='aboda'/>
              <span>
                <span className='d-flex align-items-center justify-content-between'>
                  <h6>Store</h6>
                  <p>13.5</p>
                   </span>
              
              <p className={classes.EEE}>elements must have an alt prop, either with decorative</p>
              </span>
              </div>
              <hr className='m-0'/>

              <div className={classes.items}>
              <img src={cap} alt='aboda' />
              <span>
                <span className='d-flex align-items-center justify-content-between'>
                  <h6>Academy</h6>
                  <p>16.5</p>
                   </span>
              
              <p className={classes.EEE}>elements must have an alt prop, either with decorative</p>
              </span>
              </div>
              <hr className='m-0'/>


              <div className={classes.items}>
              <img src={right} alt='aboda' />
              <span>
                <span className='d-flex align-items-center justify-content-between'>
                  <h6>Badges</h6>
                  <p>18.5</p>
                   </span>
              
              <p className={classes.EEE}>elements must have an alt prop, either with decorative</p>
              </span>
              </div>
              <hr className='m-0'/>


              <div className={classes.items}>
              <img src={Home} alt='aboda' />
              <span>
                <span className='d-flex align-items-center justify-content-between'>
                  <h6>Store</h6>
                  <p>13.5</p>
                   </span>
              
              <p className={classes.EEE}>elements must have an alt prop, either with decorative</p>
              </span>
              </div>
            </div>
          </div>
          
    </div>
    


  )
}

export default Profile