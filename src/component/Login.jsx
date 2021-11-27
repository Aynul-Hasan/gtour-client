import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../customhook/useAuth';
import { useHistory, useLocation } from 'react-router'


const Login = () => {
    const location = useLocation();
    const histrioy= useHistory();
    const {singIngoogle ,setUser,setisLoading}=useAuth();
    const heandleGoogleLogin=async()=>{
        try{
           const res= await singIngoogle()
          if(res?.user){
           setUser(res?.user)
           setisLoading(false)
           histrioy.push(location?.state?.from.pathname||'/')
          }
        }catch(err){
  
        }
   }
    return (
        <>
         <div className="tour-container">
               <h1 className="text-center text-white tour-margin">Login</h1>
           </div> 
           <div className="bg-dark py-5">
               <h5 className="text-white text-center">Login with Google</h5>
           <div className="text-center"><button onClick={heandleGoogleLogin} className="google-btn " ><img src="./img/google.png" alt="" width="30" /></button></div>
           <hr />
           <Link to="/singup" className="nav-link text-white text-center">Create an new account?</Link>
           </div>


        </>
    )
}

export default Login
