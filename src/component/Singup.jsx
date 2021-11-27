import React from 'react'
import { Link } from 'react-router-dom'


const Singup = () => {
    return (
        <>
        <div className="tour-container">
               <h1 className="text-center text-white tour-margin">Singup</h1>
           </div> 
           <div className="bg-dark py-5">
               <h5 className="text-white text-center">Singup with Google</h5>
           <div className="text-center"><button onClick className="google-btn " ><img src="./img/google.png" alt="" width="30" /></button></div>
           <hr />
           <Link to="/login" className="nav-link text-center text-white">Alraedy have a account?</Link>
           </div>
            
        </>
    )
}

export default Singup
