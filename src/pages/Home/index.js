import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { bake_cookie, read_cookie } from 'sfcookies'
import { dataContext } from '../../App'
import SingleCard from '../../Component/SingleCard'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'


const Home = (props) => {
  const {data, setData} = useContext(dataContext)
   const userNumber = 10
   
    useEffect(()=>{
      axios.get(`https://randomuser.me/api/?results=${userNumber}`)
      .then(res=>{
        const resData = res.data.results
        setData(resData)
          const arr = []
          resData.map((el,i)=>{
            const test = {
              id : i,
              firstName : el.name.first,
              secondName: el.name.last,
              gender: el.gender,
              age: el.dob.age,
              email: el.email
            }
            arr.push(test)
          })
          setData(arr)


      })
    },[])
  
  return (
    <div className='container py-5'>
       <Link to='/saved-Cards' style={styles.linkStyle}>Go to Saved Cards <HiOutlineArrowNarrowRight className='ms-2'/></Link>
       <div className='row justify-content-center'>
         <SingleCard items={data} />
       </div>
    </div>
  )
}
const styles = {
  linkStyle:{
    display: 'block',
    textAlign: 'right',
    fontSize: '18px !important',
    color: '#221ce6',
  }
}
export default Home