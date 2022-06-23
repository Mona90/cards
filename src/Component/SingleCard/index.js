import React, { useContext, useState } from 'react'
import { connect } from 'react-redux'
import { dataContext } from '../../App'
import { add_card, remove_card } from '../../Store/action'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card } from '../../styles/globalStyles';

function SingleCard(props) {
    const {data, setData} = useContext(dataContext)

    const [hide, setHide] = useState(false)

    const handleDelete = (id, text)=>{
        const newCards = data.filter(selected => selected.id !== id)
        console.log('get removed data', newCards)
        setData(newCards)
        toast(text,{ autoClose: 1000 });
    }

    const  handleClick = (i, item, text)=>{
      props.add_card(i, item.firstName,item.lastName,item.gender,item.age,item.email)
       toast(text,{ autoClose: 1000 });
    }

    return (
    <>
    {data? data.map((item, i)=>(  
          <div className='col-12 col-sm-6 col-md-4 my-3 ' key={i}>
            <Card className="card">
                <ul className="card-body list-unstyled">
                      <li>First Name :<span className='ms-2'>{item.firstName}</span></li>
                      <li>Last Name :<span className='ms-2'>{item.lastName}</span></li>
                      <li>Gender :<span className='ms-2'>{item.gender}</span></li>
                      <li>Age :<span className='ms-2'>{item.age}</span></li>
                      <li>Email :<span className='ms-2'>{item.email}</span></li>
                </ul>
                <div className='d-flex mb-3 px-3'>
                 <button type="button" className="btn btn-dark me-3" onClick={()=> handleClick(i,item,'Added Sucessfuly!')} >Save</button>
                  <button type="button" className="btn btn-danger" onClick={()=>handleDelete(i, "Deleted Successfuly!")}>Delete</button>

                </div>
            </Card>
         </div>
         ))
          
         :
         <h2>No data to show</h2>
         }
         <ToastContainer />
    </>
  )
}

export default connect(state=>{
    return {card:state}
  },{add_card, remove_card})(SingleCard)