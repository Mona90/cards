import React from 'react'
import { connect } from 'react-redux'
import {add_card, remove_card} from '../../Store/action'
import { Card } from '../../styles/globalStyles'


function SavedCards(props) {
  return (
    <div className='container py-5'>
        <h1>Saved Cards</h1>
        <hr/>
        <div className='row' >
        
        {props.card? (props.card.map((item, i)=>(  
              <div className='col-12 col-sm-6 col-md-4 my-3' key={i}>
                <Card className="card" style={{width: '18rem'}}>
                    <ul className="card-body list-unstyled">
                      <li>First Name :<span className='ms-2'>{item.firstName}</span></li>
                      <li>Last Name :<span className='ms-2'>{item.lastName}</span></li>
                      <li>Gender :<span className='ms-2'>{item.gender}</span></li>
                      <li>Age :<span className='ms-2'>{item.age}</span></li>
                      <li>Email :<span className='ms-2'>{item.email}</span></li>
                    </ul>
                </Card>
            </div>
            )))
              
            :
            <h2>No data to show</h2>
            }
        </div>
    </div>
  )
}

export default connect((Cards)=>{
    return {card:Cards}
},{add_card, remove_card}) (SavedCards)