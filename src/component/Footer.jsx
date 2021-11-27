import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="container-fluid p-0 bg-dark m-0">
                <div className="row m-0 p-5  ">
                    <div className="col-lg-3">
                    <Link className=" nav-link text-white fw-bolder p-0" to="/"><h2>G<span className="">Tour</span></h2></Link>
                   
                        <p className='text-white'>London is a megalopolis of people, ideas and frenetic energy. The capital and largest city of the United Kingdom.</p>
                        <hr />

                    <div className="d-flex justify-content-around">
                        <p className=" text-white"><i className="fab fa-2x fa-facebook-f"></i></p>
                        <p className=" text-white"><i className="fab fa-2x fa-twitter "></i></p>
                        <p className=" text-white"><i className="fab fa-2x fa-google-plus-g  "></i></p>
                        <p className=" text-white"><i className="fab fa-2x  fa-instagram"></i></p>
                    </div>

                    </div>
                    <div className="col-lg-3 mx-auto">
                        <h4 className="text-white">Quick Links</h4>
                        <div className="common-border" ></div>
                        <div>
                            <ul className="list-unstyled">
                                <li>
                                    <Link  className="nav-link text-white " to="/">Home</Link>
                                </li>
                                <li>
                                    <Link className="nav-link text-white "  to="/about">AboutUs</Link>
                                </li>
                                <li>
                                    <Link className="nav-link text-white "  to="/tour">Tours</Link>
                                </li>
                                <li>
                                    <Link className="nav-link text-white "  to="/contact">contact</Link>
                                </li>
                            </ul>
                            </div>
                    </div>
                    <div className="col-lg-3">
                            <h4 className="text-white">Our Address</h4>
                           
                            <div>
                                <p className="d-flex text-white"><i className="fas me-3 common-color fa-map-marker-alt"></i><span>60 Grant Ave. Central New Road 0708, UK</span></p>
                                <p className="d-flex text-white"><i className="fas me-3 common-color fa-phone-alt"></i><span>+880 1723 801 729</span></p>
                                <p className="d-flex text-white"><i className="fas me-3 common-color fa-envelope"></i><span>enviroco@gmail.com</span></p>
                            </div>
                    </div>
                    <div className="col-lg-3">
                        <h5 className="text-white"> Recent Trips.</h5>
                        <div className="row">
                            <div className="col-lg-4 col-4"><img className=" img-fluid  rounded-2 mb-4 " width="200" src="./img/28760131762_e4a64b20c4_q.jpg" alt="" /></div>
                            <div className="col-lg-4 col-4"><img className=" img-fluid  rounded-2 mb-4 " width="200" src="./img/footer-2.jpg" alt="" /></div>
                            <div className="col-lg-4 col-4"><img className=" img-fluid  rounded-2 mb-4 " width="200" src="./img/footer-3.jpg" alt="" /></div>
                            <div className="col-lg-4 col-4"><img className=" img-fluid  rounded-2 mb-4 " width="200" src="./img/footer-4.jpg" alt="" /></div>
                            <div className="col-lg-4 col-4"><img className=" img-fluid  rounded-2 mb-4 " width="200" src="./img/footer-5.jpg" alt="" /></div>
                            <div className="col-lg-4 col-4"><img className=" img-fluid  rounded-2 mb-4 " width="200" src="./img/footer-6.jpg" alt="" /></div>
                        </div>
                    </div>
                </div>
                    <hr />
                    <p></p>
            </div>
        </>
    )
}

export default Footer