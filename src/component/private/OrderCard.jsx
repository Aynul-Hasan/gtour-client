
import axios from 'axios'
import React, { useState } from 'react'
import useCard from '../../customhook/useCard'

const OrderCard = ({data}) => {
    const {card}=useCard()
    const res= card.filter((d)=>d._id===data.tourid)
    // const [order, setorder] = useState([])
    console.log(res,data._id)
    const deleteHandle=async()=>{
        try{
            const isdelete =window.confirm('Are you sure , you want to cancel')
            if(isdelete){
                const res= await axios.delete(`https://grim-treat-11847.herokuapp.com/order/user/${data._id}`)
                console.log(res)
                window.location.reload()
            }
            
           
        }catch(err){

        }

    }
    return (
        <>
             <div className="col-lg-6 py-5">
                   <div className="card mb-3" >
                    <div className="row g-0">
                        <div className="col-md-4 position-relative">

                        <button className="panding-btn">{data.status}</button>
                        <img src={res[0]?.image} className="img-fluid rounded-start h-100" alt="..."/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title mb-2">Package name:{res[0]?.title}</h5>
                            <p className="fw-bold">name:{data.name}</p>
                        
                            
                            <button onClick={deleteHandle} className="tour-buy-btn">Cancel Package</button>
                        </div>
                        </div>
                    </div>
                    </div>
                   </div>
        </>
    )
}

export default OrderCard
