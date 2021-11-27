import React from 'react'
import useCard from '../customhook/useCard'
import Card from './share/Card'

const Tour = () => {
    const {card,isloding}=useCard()
    return (
        <>
           <div className="tour-container">
               <h1 className="text-center text-white tour-margin">Our Tour package.</h1>
           </div>
           <div className=" container-fluid bg-dark">
               <div className="row mx-5 py-5 g-4">
               {isloding?<div className="text-center">
                        <div className=" mx-auto spinner-border text-light" role="status">
                        <span className="visually-hidden"></span>
                        </div>
                    </div>:""}
                    {card.map((data)=><Card data={data} key={data._id} />)}
               </div>
           </div>
        </>
    )
}

export default Tour
