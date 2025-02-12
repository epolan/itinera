import "./Hero2.css";

import  React, {
  Component
} from 'react';

class Hero2 extends  Component  {
  render() {
    return (
      <div className="main">
          <div className="heading">
              <h1>{this.props.heading}</h1>
              <p>{this.props.text} </p>
        <p>na pątnicze szlaki</p>
          </div>      
      </div>
    );
  }
 
}

export default Hero2;
