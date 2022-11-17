import "./ContactFormStyles.css"
import {FaLinkedin} from "react-icons/fa";

import React from 'react'

const ContactForm = () => {
  return (
    <div className = "form">
      <div className = "contactintro">
        <p>Please connect with me on Linkdein (link to my personal page below)!</p>
        <div className = "linkdein">
          <a href = "https://www.linkedin.com/in/andrew-ham00/" target="_blank" rel="noopener noreferrer"><FaLinkedin size = {35} style={{color: "white", marginRight: "32px"}}/></a>
        </div>
        <p> Or fill out the form below and I will do my best to respond via email!</p>
        </div>
        <form>
            <label>Your name</label>
            <input type = "text"></input>
            <label>Email</label>
            <input type = "email"></input>
            <label>Subject</label>
            <input type = "text"></input>
            <label>Message</label>
            <textarea row="7" placeholder="Please enter your message here"/>
            <button className = "btn">Submit</button>

            
        </form>
    </div>
  )
}

export default ContactForm