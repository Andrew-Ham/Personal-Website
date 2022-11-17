import "./MainImgStyles.css";

import React from 'react';
import main from "../assets/main1.jpg";
import {Link} from "react-router-dom";

const MainImg = () => {
  return <div className="main">
        <div className = "mask">
            <img className = "mainimg" src={main} alt = "mainimg"/>
        </div>
        <div className = "content"> 
            <p>HELLO, I'M ANDREW. </p>
            <p>I AM AN ASPIRING</p>
            <h1>FULLSTACK DEVELOPER</h1>
            <div className>
                <Link to="/project" className="btn">PROJECTS</Link>
                <Link to="/contact" className="btn btn-light">CONTACT</Link>
            </div>
        </div>
        
    </div>
}

export default MainImg