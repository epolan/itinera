import React from "react";
import './Itinera.css';
import { Link } from "react-router-dom";

function Itinera() {

  return (
    <div className="itinera" >
      <p> to itinera</p>
      <Link to="about">Click to view our about page</Link>
      <Link to="contact">Click to view our contact page</Link>
    </div>
  );
}

export default Itinera;