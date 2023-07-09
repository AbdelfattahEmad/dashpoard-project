import React from 'react'
import Form from 'react-bootstrap/Form';
import classes from "../setting/setting.module.css"
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import twd from "../../../assets/images/twd.png"
import fbd from "../../../assets/images/fbd.webp"
import youd from "../../../assets/images/youd.png"
import ind from "../../../assets/images/ind.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarcode } from '@fortawesome/free-solid-svg-icons';


const Setting = () => {
  return (

    <div className={classes.Container_Setting}>
            <h2>Settings</h2>


          <div className={classes.Head_Box}>

                  
          <div  className={classes.BoxOne}>

            <div className={classes.SiteControl}>
            <div className={classes.Adress}>
              <h2>Site Control</h2>
              <p className={classes.EEE}>Control The WebSite if there is  </p>
              
                </div>

    <div className='Toggle'>
      <Form>
      <Form.Check // prettier-ignore
          type="switch"
          id="custom-switch"
      />
      </Form>
    </div>

          </div>

          <div className='TextArea'>
          <FloatingLabel controlId="floatingTextarea2" label="Comments">
          <Form.Control
            placeholder="leave message Content"
            style={{ height: '100px' }}
          />
          </FloatingLabel>


          </div>

            </div>


            <div  className={classes.BoxTwo}>

          <div className={classes.GenralInfo}>
          <div className={classes.Adress}>
          <h2>Genral Info</h2>
          <p className={classes.EEE}>Genral information abour you Account  </p>
            </div>

            <div className={classes.forms}>
              <input className='p-2 mb-3 m-2' type='email' placeholder='first Name' />
              <input className='p-2 mb-3 m-2' type='email' placeholder='last Name' />
              <input className='p-2 mb-3 m-2' type='email' placeholder='Email' />
            </div>

            <Button className='pt-2' variant="light">Charge</Button>




          </div>



            </div>


            <div  className={classes.BoxThree}>

              <div className={classes.Adress}>
              <h2>Security Info</h2>
              <p className={classes.EEE}>Genral information abour you Account  </p>
            </div>


            <div className={classes.Password}>
              <div>
                <h5> password</h5>
                <p className={classes.EEE}>last Change on 21/3023</p>

              </div>

              <Button variant="primary">Change</Button>{' '}




            </div>
            <hr />


            <div className={classes.Password}>
              <div>
                <h5>Two Factor Authontcation</h5>
                <p className={classes.EEE}>Disable /Enable The feature</p>

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
            <hr />

            

            <div className={classes.Password}>
              <div className='pb-4'>
                <h5>Devices</h5>
                <p className={classes.EEE}>cheak the Login Devices List</p>
              </div>

              <Button variant="light">Devices</Button>






            </div>


            </div>

          </div>



        <div className={classes.Head_Box}>

                            
            <div  className={classes.BoxFour}>

              <div className={classes.SocialConrtol}>
              <div className={classes.Adress}>
                <h2>Social Info</h2>
                <p className={classes.EEE}>Social Media Information</p>
                  </div>


                <div className={classes.Social}>
                  <img src={twd} alt='twiter' />
                  <p>Twiter Username</p>
                </div>

                <div className={classes.Social}>
                  <img src={fbd} alt='FaceBook' />
                  <p>FaceBook Username</p>
                </div>

                <div className={classes.Social}>
                  <img src={youd} alt='YouTube' />
                  <p>YouTube Username</p>
                </div>

                <div className={classes.Social}>
                  <img src={ind} alt='LinkedIn' />
                  <p>LinkedIn Username</p>
                </div>

            </div>

              </div>




            <div  className={classes.BoxFive}>

            <div className={classes.WidgetsInfo}>
            <div className={classes.Adress}>
            <h2>Widgets Conrtols</h2>
            <p className={classes.EEE}>Show/Hide Widget</p>
              </div>

              <div className={classes.WidgetButton}>
              <Form.Check aria-label="option 1" />
              <p>Quick Draft</p>

              </div>

              <div className={classes.WidgetButton}>
              <Form.Check aria-label="option 1" />
              <p>Yearly Targets</p>

              </div>

              <div className={classes.WidgetButton}>
              <Form.Check aria-label="option 1" />
              <p>Ticket statictks</p>

              </div>

              <div className={classes.WidgetButton}>
              <Form.Check aria-label="option 1" />
              <p>Latest News</p>

              </div>

              <div className={classes.WidgetButton}>
              <Form.Check aria-label="option 1" />
              <p>Latest Tasks</p>

              </div>

              <div className={classes.WidgetButton}>
              <Form.Check aria-label="option 1" />
              <p>Top Search items</p>

              </div>










            </div>



              </div>


            <div  className={classes.BoxSix}>

              <div className={classes.Adress}>
              <h2>BackUp Mangers</h2>
              <p className={classes.EEE}>Conrol Backup Time at Location </p>
            </div>


            <div className={classes.Backup}>
              <Form.Check type="radio" aria-label="radio 1" />
                <p>Daily</p>

            </div>

            <div className={classes.Backup}>
              <Form.Check type="radio" aria-label="radio 1" />
                <p>Weekly</p>

            </div>

            <div className={classes.Backup}>
              <Form.Check type="radio" aria-label="radio 1" />
                <p>Monthely</p>

            </div>

            <hr />

            <div className={classes.icon}>

                <div className={classes.item}>
                <FontAwesomeIcon icon={faBarcode} style={{color: "#4a4c4f",}} />
                <h6>Megaman</h6>

                </div>

                <div className={classes.item}>
                <FontAwesomeIcon icon={faBarcode} style={{color: "#4a4c4f",}} />
                <h6>Zero</h6>

                </div>

                <div className={classes.item}>
                <FontAwesomeIcon icon={faBarcode} style={{color: "#4a4c4f",}} />
                <h6>Sigmaa</h6>

                </div>


            </div>






            </div>




          </div>

    </div>
  )
}

export default Setting