import React from 'react'

const About = () => {
    return (
        <>
         <div className="tour-container">
               <h1 className="text-center text-white tour-margin">About US.</h1>
           </div>
           <div className="container-fluid bg-dark text-center mb-0">
               <h1 className="mb-0 text-white py-5">This adventure <br /> isn’t about change but it seems to <br /> be an inevitability.</h1>
                <p  className="mb-0 pb-5 text-muted text-white">Meh synth Schlitz, tempor duis single-origin coffee ea <br /> next level ethnic fingerstache fanny pack nostrud .Photo booth anim 8-bit hella, <br /> PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. <br /> Seitan High Life reprehenderit consectetur cupidatat kogi. Et leggings fanny pack, elit <br /> bespoke vinyl art party Pitchfork selfies master cleanse.</p>
                <div className="row mx-5">
                    <h1 className="text-white text-center mb-5">Meet our team.</h1>
                    <div className="col-lg-3">
                        <img src="./img/member-1.jpeg" className="rounded-circle " width='200' alt="" />
                        <div className="text-white">
                            <strong>John Bennett</strong>
                            <p className="text-muted fw-bold">CEO</p>
                        </div>
                        
                    </div>
                    <div className="col-lg-3">
                        <img src="./img/member-2.jpeg" className="rounded-circle " width='200' alt="" />
                        <div className="text-white">
                            <strong>Oliver Doe</strong>
                            <p className="text-muted fw-bold">Europe Tour Expert</p>
                        </div>
                        
                    </div>
                    <div className="col-lg-3">
                        <img src="./img/member-3.jpeg" className="rounded-circle " width='200' alt="" />
                        <div className="text-white">
                            <strong>Christina Hardy</strong>
                            <p className="text-muted fw-bold">Marketing Manager</p>
                        </div>
                        
                    </div>
                    <div className="col-lg-3">
                        <img src="./img/member-4.jpeg" className="rounded-circle " width='200' alt="" />
                        <div className="text-white">
                            <strong>Jessica Lee</strong>
                            <p className="text-muted fw-bold">Asia Tour Expert</p>
                        </div>
                        
                    </div>
                </div>
           </div>
            
        </>
    )
}

export default About
