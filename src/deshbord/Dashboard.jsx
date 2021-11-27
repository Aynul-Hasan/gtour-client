import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Dashboard = () => {
    const [data, setdata] = useState({
        title:"",price:"",desc:"",image:''
    })
 
    let name,value;
    const getData=(e)=>{
        e.preventDefault()
        // console.log(e)
        name=e.target.name;
        value=e.target.value
 
        setdata({...data,[name]:value})
    }
    const addservice=async()=>{
        if(!data.title||!data.price||!data.desc||!data.image){
            return toast.error('Fill the all finld', {
             position: "top-center",
             autoClose: 5000,
             });
 
        }
         try{
             const res= await axios.post('https://grim-treat-11847.herokuapp.com/service',data)
             if(res.status===201){
                window.location.reload()
             }
         }catch(err){
 
         }
    }
 
    return (
        <>
            <div className="tour-container">
               <h1 className="text-center text-white tour-margin">Dashboard</h1>
           </div> 
           <div className="container-fluid bg-dark">
               <div className="row mx-5">
                   <div className="col-lg-6">
                       <h1 className="text-center text-white">Add tour package</h1>
                       <div>
                           <input onChange={getData} name="title" value={data.title} type="text" placeholder="title" className="order-input" />
                           <input onChange={getData} name="price" value={data.price} type="number" placeholder="price" className="order-input" />
                           <input onChange={getData} name="desc" value={data.desc} type="text" placeholder="decription" className="order-input" />
                           <input onChange={getData} name="image" value={data.image} type="text" placeholder="image url" className="order-input" />
                           <button onClick={addservice} className="order-btn">Add tour</button>
                           <ToastContainer/>
                       </div>

                   </div>
                   <div className="col-lg-6 pt-5">
                       
                        <Link to="/allorder" className='nav-link text-white'>
                        <button className="order-btn mt-5">all order</button>
                       </Link>
                   </div>
               </div>
           </div>
        </>
    )
}

export default Dashboard
