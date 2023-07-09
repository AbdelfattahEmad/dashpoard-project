import React from 'react'
import classes from "./Plans.module.css"
import Button from 'react-bootstrap/Button';


const Plans = () => {
  return (
    <div className={classes.Plans_Container}>
        
        <h2> Plans </h2>

        <div className={classes.Plans_Head}>

            <div className={classes.Plans_card}>
                <div className={classes.Rate_green}>
                    <h6> Free</h6>
                    <span> 0,00 $ </span>
                </div>

                <div className={classes.PLans_Link}>
                    <ul>
                        <li> Access All Text Lessons </li>
                        <li> Access All Videos Lessons</li>
                        <li>Appear on dashBoard </li>
                        <li> Browser Content With out Ads</li>
                        <li> Access All Assinghments </li>
                        <li> Get daily Brights </li>
                        <li> Access All Videos Lessons</li>
                        <li>Appear on dashBoard </li>


                    </ul>
                </div>

                <Button variant="success">Join</Button>{' '}



            </div>


            <div className={classes.Plans_card}>
                <div className={classes.Rate_Blue}>
                    <h6>Basic</h6>
                    <span> 8,30 $ </span>
                </div>

                <div className={classes.PLans_Link}>
                    <ul>
                        <li> Access All Text Lessons </li>
                        <li> Access All Videos Lessons</li>
                        <li>Appear on dashBoard </li>
                        <li> Browser Content With out Ads</li>
                        <li> Access All Assinghments </li>
                        <li> Get daily Brights </li>
                        <li> Access All Videos Lessons</li>
                        <li>Appear on dashBoard </li>


                    </ul>
                </div>

                <Button variant="primary">Join</Button>{' '}




            </div>


            <div className={classes.Plans_card}>
                <div className={classes.Rate_Yellow}>
                    <h6>Premium</h6>
                    <span> 17,50 $ </span>
                </div>

                <div className={classes.PLans_Link}>
                    <ul>
                        <li> Access All Text Lessons </li>
                        <li> Access All Videos Lessons</li>
                        <li>Appear on dashBoard </li>
                        <li> Browser Content With out Ads</li>
                        <li> Access All Assinghments </li>
                        <li> Get daily Brights </li>
                        <li> Access All Videos Lessons</li>
                        <li>Appear on dashBoard </li>


                    </ul>
                </div>

                <Button variant="warning">Join</Button>{' '}





            </div>

        </div>

    </div>
  )
}

export default Plans