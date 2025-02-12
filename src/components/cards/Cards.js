import "./Cards.css";
import React from 'react';
import {Link} from "react-router-dom";

const Cards = () => {
  return (
    <div className="projects">Cards
        <div className= "projects-container">
            <div className="project">
                <h3>Podróże historyczne po Polsce</h3>
                <span className="bar"></span>
                <p className="btc">historyczne</p>
                <p>starożytne</p>
                <p>śladami </p>
                <p>oo</p>
                <p>igg  ig</p>
                <Link to="/contact" className="btn">skontaktuj sie</Link>
            </div>

            <div className="project">
                <h3>Podroże po Europie i Azji Mn</h3>
                <span className="bar"></span>
                <p className="btc">100 dol</p>
                <p>kjjjn</p>
                <p>ooopo</p>
                <p>oo</p>
                <p>igg  ig</p>
                <Link to="/contact" className="btn">skontaktuj sie</Link>
            </div>

            <div className="project">
                <h3>Pielgrzymki</h3>
                <span className="bar"></span>
                <p className="btc">100 dol</p>
                <p>kjjjn</p>
                <p>ooopo</p>
                <p>oo</p>
                <p>igg  ig</p>
                <Link to="/contact" className="btn">skontaktuj sie</Link>
            </div>

        </div>
    </div>
  )
}

export default Cards;
