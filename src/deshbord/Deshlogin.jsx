import React, { useState } from 'react'
import { useHistory } from 'react-router'

const Deshlogin = () => {
    const history=useHistory()
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    
    const loginhandle=()=>{
        history.push('/dashboard')
        if(email==="aunul@gmail.com"&& password==="1111"){
            history.push('/dashboard')

        }

    }
    return (
        <>
                 <div className="tour-container">
               <h1 className="text-center text-white tour-margin">Dashboard Login</h1>
           </div> 
                <div className="container-fluid bg-dark">
                    <div className="row">
                        <div className="col-lg-6">
                            
                          {/* <input className="order-input"  onChange={(e)=>setemail(e.target.value)} value={email} type="email" placeholder="email" />
                           <input className="order-input" onChange={(e)=>setpassword(e.target.value)} value={password}   type="password" name="password" placeholder="password"/> */}
                           <button onClick={loginhandle} className="tour-buy-btn">Login</button>
                        </div>
                    </div>
                </div>
        </>
    )

}

export default Deshlogin
