import React from 'react'
import { Redirect, Route } from 'react-router'
// import MoonLoader from "react-spinners/MoonLoader"
import useAuth from '../customhook/useAuth'

const Privateroute = ({children,...rest}) => {
    const {user,isLoading}= useAuth()
    // console.log(user,children)
    if(isLoading){
        return( <div className="text-center bg-dark">
        <div className=" mx-auto spinner-border text-light" role="status">
        <span className="visually-hidden"></span>
        </div>
        </div>
        )
    }
    return (
        <Route
        {...rest}
        render={({location})=>user?.email?
         children:<Redirect to={{pathname:"/login", state:{from:location}}}
         ></Redirect>}
        >
            
        </Route>
    )
}

export default Privateroute