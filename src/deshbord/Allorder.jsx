import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import OrderCard from '../component/private/OrderCard'
import useAuth from '../customhook/useAuth'
import Managecard from './Managecard'

const Allorder = () => {
    const [card, setcard] = useState([])
    const {isloding}=useAuth
    useEffect(() => {
        const callCard=async()=>{
            // const data= {email:user.email}
            try{
                // console.log(data)

                const res= await axios.get(`https://grim-treat-11847.herokuapp.com/order`)
                setcard(res.data)
            }catch(err){

            }
        }
        callCard()
    }, [])
    console.log(card)
    return (
        <>
             <div className="tour-container">
               <h1 className="text-center text-white tour-margin">Dashboard</h1>
           </div> 
            <div className="container-fluid bg-dark" >
               {/* {card===[]? "":<h1 className="text-white text-center">Order ematy</h1>} */}
                <div className="row">
                {isloding?<div className="text-center">
                        <div className=" mx-auto spinner-border text-light" role="status">
                        <span className="visually-hidden"></span>
                        </div>
                    </div>:""}
                        {card.map((data)=><Managecard key={data._id} data={data}/>)}

                </div>
                <Link to="/dashboard" className='nav-link text-white'>
                        <button className="order-btn mt-5">Go dashboard</button>
                       </Link>
            </div>
        </>
    )
}

export default Allorder
