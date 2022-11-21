import "./AboutContentStyles.css"
import {Link} from "react-router-dom";
import profile from "../assets/profile.PNG";
import profilebig from "../assets/profilebig.jpg";
import profile2 from "../assets/profile-2.jpg";
import uoa from "../assets/uoa.png";

import React from 'react'
import placeholder from "../assets/placeholder.PNG"

const AboutContent = () => {
  return (
    <div className = "about">
        <div className="left">
            <h1>Hi, I'm Andrew Ham.</h1>
            <div className = "profile">
                <img src = {profile} alt = "profile" />
            </div>
            <p>I am in my final year at University of Auckland majoring in Computer Science and IT management. </p>
            <p>I am studying hard towards being a proficient fullstack developer!</p>
            <Link to="/contact">
                <button className = "btn">Contact</button>
            </Link>
        </div>
        <div className = "right">
            <div className = "img-container">
                <div className = "img-stack top">
                    <img src = {uoa} className ="img" alt ="placeholderimg"/>
                </div>
                {/* <div className = "img-stack bottom">
                    <img src = {placeholder} className ="img" alt ="placeholderimg"/>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default AboutContent