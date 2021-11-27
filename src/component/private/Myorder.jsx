import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useAuth from '../../customhook/useAuth'
import OrderCard from './OrderCard'

const Myorder = () => {
    const {user,isloding}= useAuth()
    const [card, setcard] = useState([])
    useEffect(() => {
        const callCard=async()=>{
            const data= {email:user.email}
            try{
                // console.log(data)

                const res= await axios.get(`https://grim-treat-11847.herokuapp.com/order/user/${user.email}`)
                setcard(res.data)
            }catch(err){

            }
        }
        callCard()
    }, [])
    // console.log(card)
    return (
        <>
         <div className="tour-container">
               <h1 className="text-center text-white tour-margin">My Order.</h1>
           </div> 
           <div className="container-fluid bg-dark">
               <div className="row">
               {isloding?<div className="text-center">
                        <div className=" mx-auto spinner-border text-light" role="status">
                        <span className="visually-hidden"></span>
                        </div>
                    </div>:""}
                    {card.map((data)=><OrderCard data={data} key={data._id}/>)}
               </div>
           </div>
        </>
    )
}

export default Myorder
