import React from 'react'
import classes from "./Courses.module.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import course1 from "../../../assets/images/course1.avif"
import course2 from "../../../assets/images/course2.avif"
import course3 from "../../../assets/images/course3.png"
import course4 from "../../../assets/images/course4.jpg"
import course5 from "../../../assets/images/course5.png"
import course6 from "../../../assets/images/course6.jpg"
import course7 from "../../../assets/images/course7.webp"
import course8 from "../../../assets/images/course8.png"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

const Courses = () => {
  return (
    <div className={classes.container_Courses}>
        <h2> Courses</h2>

        <div className={classes.Head_Cards}>
            


        <div className={classes.Cards}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={course1} />
      <Card.Body>
        <Card.Title>Data structure and Algrothems</Card.Title>
        <Card.Text className={classes.EEE}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Course Info</Button>
        <hr/>
        <span className='d-flex align-items-center justify-content-between'> 
            <span> <FontAwesomeIcon icon={faUser} style={{color: "#58595a",}} /> 800 </span>
            <span> 150$</span>

        </span>
      </Card.Body>
    </Card>



        </div>


        <div className={classes.Cards}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={course2} />
      <Card.Body>
        <Card.Title>Responsive web Design</Card.Title>
        <Card.Text className={classes.EEE}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Course Info</Button>
        <hr/>
        <span className='d-flex align-items-center justify-content-between'> 
            <span> <FontAwesomeIcon icon={faUser} style={{color: "#58595a",}} /> 800 </span>
            <span> 150$</span>

        </span>
      </Card.Body>
    </Card>



        </div>



        <div className={classes.Cards}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={course3} />
      <Card.Body>
        <Card.Title>Data structure and Algrothems</Card.Title>
        <Card.Text className={classes.EEE}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Course Info</Button>
        <hr/>
        <span className='d-flex align-items-center justify-content-between'> 
            <span> <FontAwesomeIcon icon={faUser} style={{color: "#58595a",}} /> 800 </span>
            <span> 150$</span>

        </span>
      </Card.Body>
    </Card>



        </div>

        <div className={classes.Cards}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={course4} />
      <Card.Body>
        <Card.Title>Mastring paython</Card.Title>
        <Card.Text className={classes.EEE}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Course Info</Button>
        <hr/>
        <span className='d-flex align-items-center justify-content-between'> 
            <span> <FontAwesomeIcon icon={faUser} style={{color: "#58595a",}} /> 800 </span>
            <span> 150$</span>

        </span>
      </Card.Body>
    </Card>



        </div>

        </div>



        <div className={classes.Head_Cards}>
            


            <div className={classes.Cards}>
            <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={course5} />
          <Card.Body>
            <Card.Title>css Course</Card.Title>
            <Card.Text className={classes.EEE}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Course Info</Button>
            <hr/>
            <span className='d-flex align-items-center justify-content-between'> 
                <span> <FontAwesomeIcon icon={faUser} style={{color: "#58595a",}} /> 800 </span>
                <span> 150$</span>
    
            </span>
          </Card.Body>
        </Card>
    
    
    
            </div>

            <div className={classes.Cards}>
            <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={course6} />
          <Card.Body>
            <Card.Title>Html Course</Card.Title>
            <Card.Text className={classes.EEE}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Course Info</Button>
            <hr/>
            <span className='d-flex align-items-center justify-content-between'> 
                <span> <FontAwesomeIcon icon={faUser} style={{color: "#58595a",}} /> 800 </span>
                <span> 150$</span>
    
            </span>
          </Card.Body>
        </Card>
    
    
    
            </div>

    
    
            <div className={classes.Cards}>
            <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={course7} />
          <Card.Body>
            <Card.Title>Php Course</Card.Title>
            <Card.Text className={classes.EEE}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Course Info</Button>
            <hr/>
            <span className='d-flex align-items-center justify-content-between'> 
                <span> <FontAwesomeIcon icon={faUser} style={{color: "#58595a",}} /> 800 </span>
                <span> 150$</span>
    
            </span>
          </Card.Body>
        </Card>
    
    
    
            </div>
    
    
    
            <div className={classes.Cards}>
            <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={course8} />
          <Card.Body>
            <Card.Title>Data structure and Algrothems</Card.Title>
            <Card.Text className={classes.EEE}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Course Info</Button>
            <hr/>
            <span className='d-flex align-items-center justify-content-between'> 
                <span> <FontAwesomeIcon icon={faUser} style={{color: "#58595a",}} /> 800 </span>
                <span> 150$</span>
    
            </span>
          </Card.Body>
        </Card>
    
    
    
            </div>
    
    
    
            </div>
    

    </div>
  )
}

export default Courses