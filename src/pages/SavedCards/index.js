import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {add_card, remove_card} from '../../Store/action'
import { Card } from '../../styles/globalStyles'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function SavedCards(props) {
  
   const [savedData, setSavedData] = useState([])
    const handleDelete = (id, text)=>{
      props.remove_card(id)
      toast(text,{ autoClose: 1000 });
    }

      useEffect(()=>{
        setSavedData(props.card)
      },[props.card])

  return (
    <div className='container py-5'>
        <h1>Saved Cards</h1>
        <hr/>
        <div className='row' >
        
        {savedData? savedData.map((item, i)=>(  
              <div className='col-12 col-sm-6 col-md-4 my-3' key={item.id}>
                <Card className="card" style={{width: '18rem'}}>
                    <ul className="card-body list-unstyled">
                      <li>First Name :<span className='ms-2'>{item.firstName}</span></li>
                      <li>Last Name :<span className='ms-2'>{item.lastName}</span></li>
                      <li>Gender :<span className='ms-2'>{item.gender}</span></li>
                      <li>Age :<span className='ms-2'>{item.age}</span></li>
                      <li>Email :<span className='ms-2'>{item.email}</span></li>
                    </ul>
                    <button type="button" className="btn btn-danger" onClick={()=>handleDelete(item.id, "Deleted Successfuly!")}>Delete</button>

                </Card>
            </div>
            ))
              
            :
            <h2>No data to show</h2>
            }
        </div>
        <ToastContainer/>
    </div>
  )
}

export default connect((Cards)=>{
    return {card:Cards}
},{add_card, remove_card}) (SavedCards)