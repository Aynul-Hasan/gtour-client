import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../customhook/useAuth'

const Navbar = () => {
    const {user,logout}=useAuth()
    return (
        <>
            <nav className="navbar pt-0 navbar-expand-lg navbar-light ">
            <div className="container-fluid">
                
                <Link className="navbar-brand fw-bolder ms-5 common-color"  to="/">GTour</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
                    <li className="nav-item me-5 fw-bolder">
                    <Link className="nav-link active common-color" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item me-5 fw-bolder">
                    <Link className="nav-link common-color" to="/tour">Tours</Link>
                    </li>

                    <li className="nav-item me-5 fw-bolder">
                    <Link className="nav-link common-color" to="/about">About us</Link>
                    </li>
                    <li className="nav-item me-5 fw-bolder">
                    <Link className="nav-link common-color" to="/deshlogin">Dashboard</Link>
                    </li>
                    {user?<li className="nav-item me-5 fw-bolder">
                    <Link className="nav-link common-color" to="/myorder">My orders</Link>
                    </li>:''}
                    
                </ul>
                {/* <Link to="/login"><button className="login-btn">Login</button></Link> */}
                {user?.email?<button onClick={logout} className="login-btn">LogOut</button>:
                 <Link className="nav-link text-center " to="/login"><button className="login-btn w-100">Login</button></Link>}
                </div>
            </div>
            </nav>
        </>
    )
}

export default Navbar
