import React, { useState } from 'react'
import { useParams } from 'react-router';
import useAuth from '../../customhook/useAuth';
import {useHistory} from 'react-router-dom'
import useCard from '../../customhook/useCard';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const Order = () => {
    const history= useHistory()
    const {card}=useCard()
    const {id}=useParams()
    // const [sr, setsr] = useState('')
    const service= card.filter((data)=>data._id===id)
    // setsr(service[0])
    const {user}= useAuth()
   const [data, setdata] = useState({
       name:user.displayName,email:user.email,address:'', date:'',phone:'',tourid:id,status:"pandding"
   })

   let name,value;
   const getData=(e)=>{
       e.preventDefault()
       // console.log(e)
       name=e.target.name;
       value=e.target.value

       setdata({...data,[name]:value})
   }

   const orderHandle=async()=>{
       if(!data.address||!data.date||!data.phone||!data.name||!data.email){
           return toast.error('Fill the all finld', {
            position: "top-center",
            autoClose: 5000,
            });

       }
        try{
            const res= await axios.post('https://grim-treat-11847.herokuapp.com/order',data)
            if(res.status===201){
                history.push('/myorder')
            }
        }catch(err){

        }
   }
    return (
        <>
            <div className="tour-container">
               <h1 className="text-center text-white tour-margin">{`order/${service[0]?.title}`}</h1>
           </div> 
           <div className="container-fluid bg-dark">
               <div className="row mx-5">
                   <div className="col-lg-6 py-5">
                       <img src={service[0]?.image} className="img-fluid rounded-2" alt="" />
                   </div>
                   <div className="col-lg-6 py-5">
                    <input className="order-input" onChange={getData} type="text" name="name" value={data.name} placeholder="Name" />
                    <input className="order-input" onChange={getData} type="email" name="email" value={data.email} placeholder="Email" id="" />
                    <input className="order-input" onChange={getData} type="text" name="address" value={data.address} placeholder="Address" />
                    <input className="order-input" onChange={getData} type="date" value={data.date} name="date" />
                    <input className="order-input" onChange={getData} type="number" name="phone" value={data.phone} placeholder="Phone" id="" />
                    <button onClick={orderHandle} className="order-btn">BOOK this tour</button>
                    <ToastContainer/>
                   </div>
               </div>


               
           </div>
        </>
    )
}

export default Order
