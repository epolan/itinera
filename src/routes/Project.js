import React from 'react';

import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Hero2 from "../components/hero/Hero2";
import Cards from "../components/cards/Cards";
import WorkCard from "../components/cards/WorkCard";


const Project = () => {
  return (
    <div>      
      <Navbar/>
      <Hero2 heading="vade mecum" text="do świata przodków i ich dziedzictwa"/>
      <WorkCard />
      <Cards />
      <Footer/>
      </div>
  )
}

export default Project;

