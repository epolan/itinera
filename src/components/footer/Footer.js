import "./Footer.css";
import React from 'react';
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaVimeo, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={30} style={{color:"#581845", marginRight:"2rem"}}/>
                    <div >
                        <p>Poland</p>
                    </div>
                </div>

                <div className="email"><h4>               <FaMailBulk size={30} style={{color:"#581845", marginRight:"2rem"}}/>
                epolan@op.pl</h4>
                 </div>
            </div>

            <div className="center">
                <div className="phone"><h4><FaPhone size={30} style={{color:" #581845 ", marginRight:"2rem"}}/>+48 609501787</h4></div>

                <div className="social">
                    <h4><FaFacebook size={30} style={{color:"#581845", marginRight:"1rem"}}/>
                    epface</h4>
                </div>
            </div>

            <div className="right">
                <div className="social">
                    <h4>               <FaVimeo size={30} style={{color:"#581845", marginRight:"1rem"}}/>
                    epolavimeo@op</h4>
                    <h4>               <FaLinkedin size={30} style={{color:"#581845", marginRight:"1rem"}}/>
                    epolan@op</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer