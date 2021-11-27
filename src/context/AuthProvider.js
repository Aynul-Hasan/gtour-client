import React, { createContext } from 'react'
import useFirebase from '../customhook/usefirwbase'
export const AuthContext=createContext()
const AuthProvider = ({children}) => {
    console.log(children)
    const allcontext= useFirebase();
    return (
        <AuthContext.Provider value={allcontext}>
           {children} 
        </AuthContext.Provider>
    )
}

export default AuthProvider