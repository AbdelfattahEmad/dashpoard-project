import React from 'react'
import Table from 'react-bootstrap/Table';
import classes from './Table.css';
import abdo from "../../../assets/images/abdo.jpg"
import a1 from "../../../assets/images/a1.jpg"
import a2 from "../../../assets/images/a2.jpg"
import a3 from "../../../assets/images/a3.jpg"
import a4 from "../../../assets/images/a4.jpg"
import a5 from "../../../assets/images/a5.jpg"
import a6 from "../../../assets/images/a6.png"
import a7 from "../../../assets/images/a7.png"


const TableSection = () => {
  return (

<div className={classes.Container_Table}>

<Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Name</th>
          <th>Finish Date</th>
          <th>Client</th>
          <th>Price</th>
          <th>Team</th>
          <th>Status</th>
        </tr>

      </thead>



      <tbody>
        <tr>
          <td>Abdelfatah</td>
          <td> 10 May</td>
          <td>Menistery</td>
          <td>$ 53000</td>
          <td>
             <img className='rounded-circle' width="30px" alt='Avatar' src={abdo}/>
           </td>
          <td>Pending</td>
        </tr>


        <tr>
          <td>Mohamed</td>
          <td> 10 Oct</td>
          <td>Eldali Company</td>
          <td>1 m</td>
          <td>
          <img className='rounded-circle p-1' alt='Avatar' width="30px" src={a1}/> 
          <img className='rounded-circle p-1' alt='Avatar' width="30px" src={a2}/> 
          </td>
          <td>in Progress</td>

        </tr>


        <tr>
          <td>Emad</td>
          <td > 1 june</td>
          <td> elzero Company</td>
          <td> $2000</td>

          <td>
          <img className='rounded-circle p-1' alt='Avatar' width="30px" src={a5}/> 
          <img className='rounded-circle p-1' alt='Avatar' width="30px" src={a6}/> 
          </td>

          <td>completed</td>
        </tr>


        <tr>
          <td>Ali</td>
          <td>1 March</td>
          <td> United Copmany</td>
          <td>$ 80000</td>

          <td>
          <img className='rounded-circle p-1' alt='Avatar' width="30px" src={a7}/> 
          <img className='rounded-circle p-1' alt='Avatar' width="30px" src={a3}/> 
          </td>

          <td>Rejected</td>
        </tr>

        <tr>
          <td>Said</td>
          <td>15 Dec</td>
          <td> City Company</td>
          <td>$ 2000</td>
          <td>
          <img className='rounded-circle p-1' alt='Avatar' width="30px" src={a5}/> 
          <img className='rounded-circle p-1' alt='Avatar' width="30px" src={a6}/> 
          <img className='rounded-circle p-1' alt='Avatar' width="30px" src={a1}/> 

          </td>
          <td>completed</td>
        </tr>

        <tr>
          <td>Gomaa</td>
          <td>12 Nov</td>
          <td>Sezun Company</td>
          <td>$ 2000</td>
          <td>
          <img className='rounded-circle p-1' alt='Avatar' width="30px" src={a4}/> 
          <img className='rounded-circle p-1' alt='Avatar' width="30px" src={a5}/> 
          <img className='rounded-circle p-1' alt='Avatar' width="30px" src={a6}/> 
          <img className='rounded-circle p-1' alt='Avatar' width="30px" src={a7}/> 

          </td>
          <td>Completed</td>

        </tr>


      </tbody>



    </Table>


        
        </div>
  )
}

export default TableSection