import React from 'react'
import classes from "./friends.module.css"
import { faDiagramProject, faMap, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import abdo from "../../../assets/images/abdo.jpg"
import Button from 'react-bootstrap/Button';
import a1 from "../../../assets/images/a1.jpg"
import a2 from "../../../assets/images/a2.jpg"
import a3 from "../../../assets/images/a3.jpg"
import a4 from "../../../assets/images/a4.jpg"
import a5 from "../../../assets/images/a5.jpg"






const Friends = () => {
  return (
    <div className={classes.Container_Friends}>

        <h1>Friends</h1>

        <div className={classes.Friends}>

        <div className={classes.Friend_card}>


            <div className={ classes.icons}>
                <FontAwesomeIcon icon={faPhone} style={{color: "#696b6d", padding :4}} />
                <FontAwesomeIcon icon={faEnvelope} style={{color: "#696b6d", padding :4}} />


            </div>


            <div className={classes.image}>

            <img src={abdo} alt={abdo} />
            <h3 >AbdelFatah Emad</h3>
            <p className={classes.EEE}>Java Script Developer</p>
            </div>
            <hr />
            <div className={ classes.Details}>
                
                <span className='d-flex p-1'>
                <FontAwesomeIcon icon={faUser} style={{color: "#828282",padding :5}} /> 
                150 Friend
                     </span>

                     <span className='d-flex p-1'>
                <FontAwesomeIcon icon={faDiagramProject} style={{color: "#828282", padding :5}} />
                300 Project
                     </span>

                     <span className='d-flex p-1'>
                     <FontAwesomeIcon icon={faMap} style={{color: "#828282", padding :5}} />
                150 Friend
                     </span>



            </div>
            <hr />
            <div className={classes.button}>
                <p className={classes.EEE}> joined in  17 / 11 </p>

                <span>
                <Button variant="primary">Primary</Button>{' '}
                <Button variant="danger">Danger</Button>{' '}
                </span>
            </div>

        </div>


        <div className={classes.Friend_card}>


            <div className={ classes.icons}>
                <FontAwesomeIcon icon={faPhone} style={{color: "#696b6d", padding :4}} />
                <FontAwesomeIcon icon={faEnvelope} style={{color: "#696b6d", padding :4}} />


            </div>


            <div className={classes.image}>

            <img src={a5} alt={abdo} />
            <h3 >Mohamed Emad</h3>
            <p className={classes.EEE}>Java Script Developer</p>
            </div>
            <hr />
            <div className={ classes.Details}>
                <span className='d-flex p-1'>
                <FontAwesomeIcon icon={faUser} style={{color: "#828282",padding :5}} /> 
                150 Friend
                    </span>

                    <span className='d-flex p-1'>
                <FontAwesomeIcon icon={faDiagramProject} style={{color: "#828282", padding :5}} />
                300 Project
                    </span>

                    <span className='d-flex p-1'>
                    <FontAwesomeIcon icon={faMap} style={{color: "#828282", padding :5}} />
                150 Friend
                    </span>



            </div>
            <hr />
            <div className={classes.button}>
                <p className={classes.EEE}> joined in  17 / 11 </p>

                <span>
                <Button variant="primary">Primary</Button>{' '}
                <Button variant="danger">Danger</Button>{' '}
                </span>
            </div>

        </div>


        <div className={classes.Friend_card}>


            <div className={ classes.icons}>
            <FontAwesomeIcon icon={faPhone} style={{color: "#696b6d", padding :4}} />
            <FontAwesomeIcon icon={faEnvelope} style={{color: "#696b6d", padding :4}} />


            </div>


            <div className={classes.image}>

            <img src={a2} alt={abdo} />
            <h3 >Ali MOhamed</h3>
            <p className={classes.EEE}>Java Script Developer</p>
            </div>
            <hr />
            <div className={ classes.Details}>
                <span className='d-flex p-1'>
                <FontAwesomeIcon icon={faUser} style={{color: "#828282",padding :5}} /> 
                150 Friend
                     </span>

                     <span className='d-flex p-1'>
                <FontAwesomeIcon icon={faDiagramProject} style={{color: "#828282", padding :5}} />
                300 Project
                     </span>

                     <span className='d-flex p-1'>
                     <FontAwesomeIcon icon={faMap} style={{color: "#828282", padding :5}} />
                150 Friend
                     </span>



            </div>
            <hr />
            <div className={classes.button}>
                <p className={classes.EEE}> joined in  17 / 11 </p>

                <span>
                <Button variant="primary">Primary</Button>{' '}
                <Button variant="danger">Danger</Button>{' '}
                </span>
            </div>

        </div>

        </div>

        <div className={classes.Friends}>

            <div className={classes.Friend_card}>


                <div className={ classes.icons}>
                <FontAwesomeIcon icon={faPhone} style={{color: "#696b6d", padding :4}} />
                <FontAwesomeIcon icon={faEnvelope} style={{color: "#696b6d", padding :4}} />


                </div>


                <div className={classes.image}>

                <img src={a1} alt={abdo} />
                <h3 >mohamed Gomaa</h3>
                <p className={classes.EEE}>Java Script Developer</p>
                </div>
                <hr />
                <div className={ classes.Details}>
                    <span className='d-flex p-1'>
                    <FontAwesomeIcon icon={faUser} style={{color: "#828282",padding :5}} /> 
                    150 Friend
                        </span>

                        <span className='d-flex p-1'>
                    <FontAwesomeIcon icon={faDiagramProject} style={{color: "#828282", padding :5}} />
                    300 Project
                        </span>

                        <span className='d-flex p-1'>
                        <FontAwesomeIcon icon={faMap} style={{color: "#828282", padding :5}} />
                    150 Friend
                        </span>



                </div>
                <hr />
                <div className={classes.button}>
                    <p className={classes.EEE}> joined in  17 / 11 </p>

                    <span>
                    <Button variant="primary">Primary</Button>{' '}
                    <Button variant="danger">Danger</Button>{' '}
                    </span>
                </div>

            </div>


            <div className={classes.Friend_card}>


            <div className={ classes.icons}>
            <FontAwesomeIcon icon={faPhone} style={{color: "#696b6d", padding :4}} />
            <FontAwesomeIcon icon={faEnvelope} style={{color: "#696b6d", padding :4}} />


            </div>


            <div className={classes.image}>

            <img src={abdo} alt={abdo} />
            <h3 >said Fawzi</h3>
            <p className={classes.EEE}>Java Script Developer</p>
            </div>
            <hr />
            <div className={ classes.Details}>
            <span className='d-flex p-1'>
            <FontAwesomeIcon icon={faUser} style={{color: "#828282",padding :5}} /> 
            150 Friend
            </span>

            <span className='d-flex p-1'>
            <FontAwesomeIcon icon={faDiagramProject} style={{color: "#828282", padding :5}} />
            300 Project
            </span>

            <span className='d-flex p-1'>
            <FontAwesomeIcon icon={faMap} style={{color: "#828282", padding :5}} />
            150 Friend
            </span>



            </div>
            <hr />
            <div className={classes.button}>
            <p className={classes.EEE}> joined in  17 / 11 </p>

            <span>
            <Button variant="primary">Primary</Button>{' '}
            <Button variant="danger">Danger</Button>{' '}
            </span>
            </div>

            </div>


                <div className={classes.Friend_card}>


                    <div className={ classes.icons}>
                    <FontAwesomeIcon icon={faPhone} style={{color: "#696b6d", padding :4}} />
                    <FontAwesomeIcon icon={faEnvelope} style={{color: "#696b6d", padding :4}} />


                    </div>


                    <div className={classes.image}>

                    <img src={a2} alt={abdo} />
                    <h3 >Mohamed sabry</h3>
                    <p className={classes.EEE}>Java Script Developer</p>
                    </div>
                    <hr />
                    <div className={ classes.Details}>
                        <span className='d-flex p-1'>
                        <FontAwesomeIcon icon={faUser} style={{color: "#828282",padding :5}} /> 
                        150 Friend
                            </span>

                            <span className='d-flex p-1'>
                        <FontAwesomeIcon icon={faDiagramProject} style={{color: "#828282", padding :5}} />
                        300 Project
                            </span>

                            <span className='d-flex p-1'>
                            <FontAwesomeIcon icon={faMap} style={{color: "#828282", padding :5}} />
                        150 Friend
                            </span>



                    </div>
                    <hr />
                    <div className={classes.button}>
                        <p className={classes.EEE}> joined in  17 / 11 </p>

                        <span>
                        <Button variant="primary">Primary</Button>{' '}
                        <Button variant="danger">Danger</Button>{' '}
                        </span>
                    </div>

                </div>

        </div>

            <div className={classes.Friends}>

                 <div className={classes.Friend_card}>


                <div className={ classes.icons}>
                <FontAwesomeIcon icon={faPhone} style={{color: "#696b6d", padding :4}} />
                <FontAwesomeIcon icon={faEnvelope} style={{color: "#696b6d", padding :4}} />


                </div>


                <div className={classes.image}>

                <img src={a3} alt={abdo} />
                <h3 >SaMEH Sabry</h3>
                <p className={classes.EEE}>Java Script Developer</p>
                </div>
                    <hr />
                <div className={ classes.Details}>
                    <span className='d-flex p-1'>
                    <FontAwesomeIcon icon={faUser} style={{color: "#828282",padding :5}} /> 
                    150 Friend
                        </span>

                        <span className='d-flex p-1'>
                    <FontAwesomeIcon icon={faDiagramProject} style={{color: "#828282", padding :5}} />
                    300 Project
                        </span>

                        <span className='d-flex p-1'>
                        <FontAwesomeIcon icon={faMap} style={{color: "#828282", padding :5}} />
                    150 Friend
                        </span>



                </div>
                 <hr />
                <div className={classes.button}>
                    <p className={classes.EEE}> joined in  17 / 11 </p>

                    <span>
                    <Button variant="primary">Primary</Button>{' '}
                    <Button variant="danger">Danger</Button>{' '}
                    </span>
                </div>

                 </div>


                <div className={classes.Friend_card}>


                <div className={ classes.icons}>
                <FontAwesomeIcon icon={faPhone} style={{color: "#696b6d", padding :4}} />
                <FontAwesomeIcon icon={faEnvelope} style={{color: "#696b6d", padding :4}} />


                </div>


                <div className={classes.image}>

                <img src={a4} alt={abdo} />
                <h3 > Emad AbdelFatah</h3>
                <p className={classes.EEE}>Java Script Developer</p>
                </div>
                <hr />

                <div className={ classes.Details}>
                <span className='d-flex p-1'>
                <FontAwesomeIcon icon={faUser} style={{color: "#828282",padding :5}} /> 
                150 Friend
                </span>

                <span className='d-flex p-1'>
                <FontAwesomeIcon icon={faDiagramProject} style={{color: "#828282", padding :5}} />
                300 Project
                </span>

                <span className='d-flex p-1'>
                <FontAwesomeIcon icon={faMap} style={{color: "#828282", padding :5}} />
                150 Friend
                </span>



                </div>

                <hr />

                <div className={classes.button}>
                <p className={classes.EEE}> joined in  17 / 11 </p>

                <span>
                <Button variant="primary">Primary</Button>{' '}
                <Button variant="danger">Danger</Button>{' '}
                </span>
                </div>

                </div>


                <div className={classes.Friend_card}>


                    <div className={ classes.icons}>
                    <FontAwesomeIcon icon={faPhone} style={{color: "#696b6d", padding :4}} />
                    <FontAwesomeIcon icon={faEnvelope} style={{color: "#696b6d", padding :4}} />


                    </div>


                    <div className={classes.image}>

                    <img src={a5} alt={abdo} />
                    <h3> MosTafa Elsisi </h3>
                    <p className={classes.EEE}>Java Script Developer</p>
                    </div>
                    <hr />
                    <div className={ classes.Details}>
                        <span className='d-flex p-1'>
                        <FontAwesomeIcon icon={faUser} style={{color: "#828282",padding :5}} /> 
                        150 Friend
                            </span>

                            <span className='d-flex p-1'>
                        <FontAwesomeIcon icon={faDiagramProject} style={{color: "#828282", padding :5}} />
                        300 Project
                            </span>

                            <span className='d-flex p-1'>
                            <FontAwesomeIcon icon={faMap} style={{color: "#828282", padding :5}} />
                        150 Friend
                            </span>



                    </div>
                    <hr />
                    <div className={classes.button}>
                        <p className={classes.EEE}> joined in  17 / 11 </p>

                        <span>
                        <Button variant="primary">Primary</Button>{' '}
                        <Button variant="danger">Danger</Button>{' '}
                        </span>
                    </div>

                </div>

            </div>

           
    </div>
  )
}

export default Friends