import "./FooterStyles.css";

import React from 'react'
import {FaLinkedin, FaMapMarker} from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer"> 
        <div className="footer-container">
            <div className="contact">
              <div className="location">
                  <FaMapMarker size = {20} style={{color: "white", marginRight: "32px"}}/>
                  <div>
                    <p>Auckland, New Zealand</p>
                  </div>
              </div>
              {/* <div className = "linkdein">
                <FaLinkedin size = {20} style={{color: "white", marginRight: "32px"}}/>
              </div> */}
            </div>
            <div className ="aboutme">
              <h4>About me</h4>
              <p>I am an ambitious 3rd year student at the University of Auckland majoring in Computer Science and IT Management (Business Analytics).</p>
              <p>Continually learning and improving drives me to be passionate about learning.</p>
              <div className = "linkdein">
                <a href = "https://www.linkedin.com/in/andrew-ham00/" target="_blank" rel="noopener noreferrer"><FaLinkedin size = {35} style={{color: "white", marginRight: "32px"}}/></a>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer