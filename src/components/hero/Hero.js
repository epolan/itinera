import React from 'react';
import './Hero.css';
import bg from "../../assets/macedonia.JPG";
import {Link} from "react-router-dom";


const Hero = () => {
  return (
    <div className='hero'>
  
    
    <div className="content">
      <div className="title">
        <h2>itinera ad praeteritum podróże do przeszłości journeys into the past </h2>
      </div>


        <div>
          <Link to="/project" className='btn'>Projects </Link>
          <Link to="/contact" className='btn btn-light'>Contact </Link>
          
        </div>
      </div>
      <section>
      <p>lorem ipsum</p>
      <p>lorem ipsum</p>
      <p>lorem ipsum</p>
      <p>lorem ipsum</p>
      
      </section>
    
    </div>
  )
}

export default Hero;
