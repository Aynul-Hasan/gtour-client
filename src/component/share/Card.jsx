import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({data}) => {
    return (
        <>
        <div className="col-lg-4">
        <div className="card border-0">
            <img src={data.image} className="card-img-top" alt="..."/>
            <button className="card-btn">${data.price}</button>
            <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.desc}</p>
               
                <Link className="nav-link" to={`/order/${data._id}`}><button className="tour-buy-btn"><i className="fas me-3 fa-shopping-bag"></i> Buy Package</button></Link>
            </div>
            </div>  

        </div>

        </>
    )
}

export default Card
