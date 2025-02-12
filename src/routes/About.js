import React from 'react';

import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Hero2 from "../components/hero/Hero2";

const About = () => {
  return (
    <div>      
      <Navbar/>
      <Hero2 heading="About" text=""/>
      <Footer/>
      </div>
  )
}

export default About;