import "./NavbarStyles.css"

import React from 'react'
import {Link} from "react-router-dom"
import {FaBars, FaTimes} from "react-icons/fa"; /*Fa is ICONS. Bars is an icon for dropdown, times is for the close dropdown! */
import { useState } from "react";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";

const Navbar = () => {
    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const[colour, setColour] = useState(false);
    const changeColour = () => {
      if(window.scrollY >= 100) {
        setColour(true);
      } else {
        setColour(false); 
      }
    };
    window.addEventListener("scroll", changeColour)

  return (
    <div className={colour ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      {/* Code below handle click on navdrop down. Important : we remove the '.' from nav-menu.active to keep the original css of nav-menu */}
      <ul className = {click ? "nav-menu active" : "nav-menu"}>  
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className = "navdropdown" onClick={handleClick}> 
        {click ? (<FaTimes size ={20} style={{color:"white"}}/>): (<FaBars size ={20} style={{color:"white"}}/>  )}
        {/* * ^ We only want the closing icon to appear when the navdropdown is pressed so here we have if/else logic */ }
      </div>
    </div>
  );
}

export default Navbar