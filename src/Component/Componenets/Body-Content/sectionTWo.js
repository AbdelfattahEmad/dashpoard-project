import React from 'react'
import classes from './Body.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircle, faCircleDot, faCode, faComments, faDollarSign, faGripLinesVertical, faHeart, faSpinner,
     faSquareXmark, faTableCells, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import TableSection from '../Table/Table';
import aqa from "../../../assets/images/aqa.jpg"
import zzz from "../../../assets/images/zzz.jpg"
import pdf from "../../../assets/images/pdf.avif"
import pdf2 from "../../../assets/images/pdf2.jpg"
import pdf3 from "../../../assets/images/pdf3.jpg"
import pdf4 from "../../../assets/images/pdf4.webp"
import aaa from "../../../assets/images/aaa.jpg"            
import abdo from "../../../assets/images/abdo.jpg"
import twiiiter from "../../../assets/images/twiiiter.png"
import fc  from "../../../assets/images/fc.png"
import  you from "../../../assets/images/you.png"
import linkedin  from "../../../assets/images/linkedin.webp"




const SectionTwo = () => {
    
    const rate2 = 90;
    const rate4 = 15;


    return(

<div className='CONTAINER'>

<div className={classes.Body_container}>
        <div className='adress'>    
            <h1>Dashboard</h1>
        </div>
    </div>

        <div className={classes.sectionTwo}>
            <div className={classes.BoxOne}>

            <div className={classes.Head_Box}> 

            <div className={classes.Welcome}>
                <span className={classes.name}> 
                    <h4>Welcome</h4>
                        <h5>Abdelfatah</h5>
                </span>
                    
            </div>   

                
            <div className={classes.information}>
                    <div className={classes.information_item}>s
                        <div>
                            <h4>Abdelfatah </h4>
                            <span>Develober</span>
                        </div>

                        <div>
                            <h4>80</h4>
                            <span>Project</span>
                        </div>

                        <div>
                            <h4>$800</h4>
                            <span>Earend</span>
                        </div>

                    </div>
                

                    </div>




            </div>

            </div>

            <div className={classes.BoxTwo}>
                <h1>Yearly Target </h1>
                <p>Targets oF The Year</p>
                
                <div className={classes.BoxRow}>

                    <div className={classes.icon}>

                        <div className={classes.box_icon}>
                        <FontAwesomeIcon className={classes.icon_item} icon={faDollarSign} />
                        </div>

                        <div className={classes.details}>
                        <p>money</p>
                        <p>30.000</p>

                        </div>

                        <div className={classes.Progress}>
                        <ProgressBar style={{height : 20 , width:200}} rate={ rate4} label={`${rate4}%`}  />
                        </div>
                        
                    
                    </div>



                    <div className={classes.icon}>

                        <div className={classes.box_icon2 }>
                                <FontAwesomeIcon className={classes.icon_item} icon={faCode} />
                        </div>

                        <div className={classes.details}>
                        <p>Projects</p>
                        <p>50</p>

                        </div>

                        <div className={classes.Progress}>
                        <ProgressBar variant="warning" style={{height : 20 , width:200}} rate={ rate2} label={`${rate2}%`}  />
                        </div>


                    </div>



                    <div className={classes.icon}>

                            <div className={classes.box_icon3}>
                                    <FontAwesomeIcon className={classes.icon_item} icon={faDollarSign} />
                            </div>

                                <div className={classes.details}>
                                <p>team</p>
                                <p>12</p>

                                </div>

                                <div className={classes.Progress}>
                                <ProgressBar  variant="success" style={{height : 20 , width:200}} rate={ rate4} label={`${rate4}%`}  />
                                </div>


                    </div>


                </div>

            </div>

            <div className={classes.BoxThree}>
                <h1>Ticket statistics </h1>
                <p> Every Things About Support Tickets</p>

                <div className={classes.Box_ticket}> 

                    <div className={classes.container_Box}>
                    <div className={classes.icon_ticket}>
                    <FontAwesomeIcon icon={faTableCells} style={{color: "#46511f",}} />
                    </div>
                    <h5>2500</h5>
                    <p>total</p>
                    </div>


                    <div className={classes.container_Box}>
                    <div className={classes.icon_ticket}>
                    <FontAwesomeIcon icon={faSpinner} style={{color: "#1355c9",}} />
                    </div>
                    <h5>500</h5>
                    <p>pending</p>
                    </div>

                    <div className={classes.container_Box}>
                    <div className={classes.icon_ticket}>
                    <FontAwesomeIcon icon={faCheck} style={{color: "#0edd37",}} />
                    </div>
                    <h5>1900</h5>
                    <p>Closed</p>
                    </div>


                    <div className={classes.container_Box}>
                    <div className={classes.icon_ticket}>
                    <FontAwesomeIcon icon={faSquareXmark} style={{color: "#e41111",}} />
                    </div>
                    <h5>100</h5>
                    <p>Deleted</p>
                    </div>





                </div>
            </div>
        </div>

        <div className={classes.sectionFour}>

            <div className={classes.Box_Four}>
                <h1>Quick Draft</h1>
                <p>What a Draft of Your Ideas  ?</p>

        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="Title" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="Year taught" />
        </Form.Group>

        </Form>
        <Button variant="light">Save</Button>

            </div>


            <div className={classes.Box_five}>


                <div className={classes.img_Box}>
                <img src={aqa} />

                <span>
                <h5>Created sass section</h5>
                <p>What a Draft of Your Ideas  ?</p>

                </span>

                </div> 
                

                <div className={classes.img_Box} >
                <img src={zzz} />
                <span>
                <h5>changed The Design</h5>
                <p>What a Draft of Your Ideas  ?</p>
                </span>
                </div>

                <div className={classes.img_Box} >
                <img src={aaa} />
                <span>
                <h5>Team increased </h5>
                <p>What a Draft of Your Ideas  ?</p>
                </span>
                </div>



            </div>

            <div className={classes.sectionSix}>
                <h4>latest tasks</h4>


            <div className={classes.HeadContent}>

                <div className={ classes.adress}>
                <h4>Record One New Video </h4>
                <p> Record Paython Create Exe Project</p>
                </div>

                <div className={classes.DeleteIcon}>
            <   FontAwesomeIcon icon={faTrashCan} />

                </div>


            </div>  



            <div className={classes.HeadContent}>

                <div className={ classes.adress}>
                <h4>Record One New Video </h4>
                <p> Record Paython Create Exe Project</p>
                </div>

                <div className={classes.DeleteIcon}>
                <   FontAwesomeIcon icon={faTrashCan} />

                </div>


            </div>



            <div className={classes.HeadContent}>

                <div className={ classes.adress}>
                <h4>Record One New Video </h4>
                <p> Record Paython Create Exe Project</p>
                </div>

                <div className={classes.DeleteIcon}>
                <FontAwesomeIcon icon={faTrashCan} />
                </div>
            </div>



            <div>

            </div>

            </div>

        </div>


        <div className={classes.Container_Item}>

        <div className={classes.sectionSeven}>
            <h5>Top Searches Iteam</h5>


            <div className={classes.Head_search}>
                <p className={classes.pragraph}>Keyword</p>
                <p className={classes.pragraph}>Search Count</p>
                
            </div>


            <div className={classes.Head_search}>
                <p>Java Script</p>
                <div>120</div>
                
            </div>


            <div className={classes.Head_search}>
                <p>Php</p>
                <div>100</div>
                
            </div>


            <div className={classes.Head_search}>
                <p>Code</p>
                <div>10</div>
                
            </div>

            <div className={classes.Head_search}>
                <p>Design</p>
                <div>5</div>
                
            </div>

            <div className={classes.Head_search}>
                <p>Logic</p>
                <div>2</div>
                
            </div>

        </div>

        <div className={classes.sectionEight}>
            <h5>Latest uploads</h5>


            <div className={classes.Head_Uploads}>

                <div className={classes.image}>
                    <img src={pdf} />
                    <p>my-File-Pdf</p>

                   
                    
                </div>
                <div className={classes.number}>
                    500
                </div>
                
            </div>

            <div className={classes.Head_Uploads}>

                <div className={classes.image}>
                    <img src={pdf2} />
                    <p>my-Video-Pdf-file</p>

                
                    
                </div>
                <div className={classes.number}>
                   150
                </div>

            </div>

            <div className={classes.Head_Uploads}>

                <div className={classes.image}>
                    <img src={pdf3} />
                    <p>my-Dll-File-Pdf</p>


                    
                </div>
                <div className={classes.number}>
                    250
                </div>

            </div>


            <div className={classes.Head_Uploads}>

                <div className={classes.image}>
                    <img src={pdf4} />
                    <p>my-Eps-File-Pdf</p>


                    
                </div>
                <div className={classes.number}>
                   100
                </div>

            </div>
            





        </div>

        <div className={classes.sectionNine}>
            <h5>Latest uploads</h5>
            <div className={classes.progress}>

                <div className={classes.icon}>
                <FontAwesomeIcon icon={faCircleDot} />
                </div>
                <div>
                Got The Project
                </div>
                

            </div> 
            
            <div className={classes.progress}>

                <div className={classes.icon}>
                <FontAwesomeIcon icon={faCircleDot} />
                </div>
                <div>
                Started The Project
                </div>


            </div>
            <div className={classes.progress}>

                <div className={classes.icon}>
                <FontAwesomeIcon icon={faCircleDot} />
                </div>
                <div>
                The project about The finish
                </div>


            </div>
            <div className={classes.progress}>

                <div className={classes.icon}>
                <FontAwesomeIcon icon={faCircleDot} />
                </div>
                <div>
                Test The Project 
                </div>


            </div>
            <div className={classes.progress}>

                <div className={classes.icon}>
                <FontAwesomeIcon icon={faCircleDot} />
                </div>
                <div>
               finish The Project And Get Money
                </div>


            </div>











        </div>

        </div>



        <div className={classes.Container_Reminds}>

            <div className={classes.Reminds_Item}>
                <h4>Reminders</h4>


                <div className={classes.Remind_Box}> 

                <FontAwesomeIcon icon={faCircle}   style={{color: "#094dc3", margin : 10}}/>
                <FontAwesomeIcon icon={faGripLinesVertical} size="2xl" style={{color: "#094dc3", margin : 10}} />

                <div className={classes.details}>
                    <p>Cheak My Tasks List</p>
                    <p className={classes.p}>25/12/2019 - 9pm</p>
                </div>
                </div>

                <div className={classes.Remind_Box}> 

                <FontAwesomeIcon icon={faCircle} style={{color: "#1de60f", margin : 10}} />

                    <FontAwesomeIcon icon={faGripLinesVertical} size="2xl" style={{color: "#21f267", margin : 10}} />

                    <div className={classes.details}>
                        <p>Cheak My Tasks List</p>
                        <p className={classes.p}>25/12/2019 - 9pm</p>
                    </div>
                </div>

                <div className={classes.Remind_Box}> 

                    <FontAwesomeIcon icon={faCircle} style={{color: "#e76208", margin : 10}} />

                        <FontAwesomeIcon icon={faGripLinesVertical} size="2xl" style={{color: "#e76208", margin : 10}} />

                        <div className={classes.details}>
                            <p>Cheak My Tasks List</p>
                            <p className={classes.p}>25/12/2019 - 9pm</p>
                        </div>
                </div>

                <div className={classes.Remind_Box}> 

                <FontAwesomeIcon icon={faCircle} style={{color: "#fd0808", margin : 10}} />

                <FontAwesomeIcon icon={faGripLinesVertical} size="2xl" style={{color: "#fd0808", margin : 10}} />
                    <div className={classes.details}>
                        <p>Cheak My Tasks List</p>
                        <p className={classes.p}>25/12/2019 - 9pm</p>
                    </div>
                 </div>


                





            </div>

            <div className={classes.Profile}>
                <h5>Latest Post</h5>

                <div className={classes.image}>
                    <img src={abdo} alt='Aboda' />

                    <div className={classes.name}>
                    <h6>Aboda Eldalii</h6> 
                    <p>About 3 Hours Ago </p>
                    </div>
                    
                </div>
                <hr />
                <p>elements must have an alt prop, either with meaningful text, or an empty string for decorative
                
                </p>
                <hr/>
                <div className={classes.icon}>
                    <div className={classes.iconOne}>
                    <FontAwesomeIcon icon={faHeart} style={{color: "#dddedf", }} />
                    <p>1.8K</p> 

                    </div>
                    <div className={classes.iconTwo}>
                    <FontAwesomeIcon icon={faComments} style={{color: "#dddedf",}} />
                    <p>752</p> 
                        </div>
    

                </div>

            </div>

            <div className={classes.Social}>
                <h5>Social Media</h5>
                <div className={classes.Head_social}>


                    <div className={classes.Twitter}>
                        <div className={classes.image}>
                            <img src={twiiiter}  />
                            <h6>1.6 k follwers</h6>
                        </div>

                        <Button variant="primary">Follow</Button>


                    </div>



                    <div className={classes.FaceBook}>
                        <div className={classes.image}>
                            <img src={fc}  />
                            <h6>2.8 k follwers</h6>

                        </div>
                        <Button variant="primary">Like</Button>
                    </div>


                    <div className={classes.YouTupe}>
                        <div className={classes.image}>
                            <img src={you}  />
                            <h6>2 M subs</h6>

                        </div>

                        <Button variant="danger">Subscribe</Button>


                    </div>

                    <div className={classes.Linked}>
                        <div className={classes.image}>
                            <img src={linkedin}  />
                            <h6>3 M Follwers</h6>

                        </div>

                        <Button variant="primary">Follow</Button>


                    </div>




                </div>




            </div>





        </div>

        <div className='Tabel p-5'>
            <TableSection/> 

        </div>



        
</div>



  )
}

export default SectionTwo 