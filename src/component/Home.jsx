import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../customhook/useAuth'
import useCard from '../customhook/useCard'
import Card from './share/Card'

const Home = () => {
    const {user}=useAuth()
    const {card ,isloding}= useCard()
    const cardSlice= card.slice(4)
    console.log(cardSlice)
    return (
        <>
            <div className="home-container">
                    <h1 className="home-h1">Koyoto, Japan</h1>
                    <p className="home-p">do you want to go?</p>
                    <button className="home-btn">
                    Want a personal tour?
                    </button>
                    <button className="home-btn">
                        Choose Tour
                    </button>
            </div>
            <div className=" container-fluid bg-dark py-5">
                <h1 className="text-center text-white">Popular Destinations</h1>
                <p className="text-center text-muted">World's best tourist destinations.</p>
                <div className="row mx-4">
                    <div className="col-lg-3">
                        <div className="card border-0  w-100">
                            <img src="./img/Tokyo_.jpg" alt="" />
                            <h5 className="home-card-h5 ms-4">Tokoyo</h5>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card border-0  w-100">
                            <img src="./img/slouw.jpg" alt="" />
                            <h5 className="home-card-h5 ms-4">Seoul</h5>
                        </div>
                    </div>  <div className="col-lg-3">
                        <div className="card border-0  w-100">
                            <img src="./img/tower.jpg" alt="" />
                            <h5 className="home-card-h5 ms-4">Paris</h5>
                        </div>
                    </div>  <div className="col-lg-3">
                        <div className="card border-0  w-100">
                            <img src="./img/london.jpg" alt="" />
                            <h5 className="home-card-h5 ms-4">London</h5>
                        </div>
                    </div>
                </div>
            </div>
            {/* service */}
            <div className="container-fluid bg-dark py-5">
                <h1 className="text-center text-white">Best Value Trips</h1>
                <p className="text-muted text-center">Best offers trips from us.</p>
                <div className="row mx-3 g-4">
                    {isloding?<div className="text-center">
                        <div className=" mx-auto spinner-border text-light" role="status">
                        <span className="visually-hidden"></span>
                        </div>
                    </div>:""}
                    {cardSlice.map((data)=> <Card data={data} key={data._id}></Card>)}
                </div>
               <Link className="nav-link" to="/tour"> <button className="home-service-btn">See more <i className="fas ms-3 fa-arrow-right"></i></button></Link>
            </div>
            <div className=" video-contanier bg-dark" data-jarallax-video="https://www.youtube.com/embed/JPe2mwq96cw">
        
               <video src="./img/Spectacular_Norway_-_from_the_air(480p).mp4" autoPlay loop muted></video>
            </div>
            
        </>
    )
}

export default Home
