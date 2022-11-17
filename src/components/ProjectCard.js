import "./ProjectCardStyles.css";
import pricetracker from "../assets/pricetracker.PNG";

import React from "react";
import { NavLink } from "react-router-dom";


/*
Here for ProjectCard, we pass the image, buttons, title and details as props so that we can put values dynamically from WorkCardData.js.
WorkCardData.js file will work as a data file / work as an api (creates data for each project I want to display). We will render this ProjectCard in the Work.js file.
*/
const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="price tracker image" />
      <h2 className="project-title">{props.projectTitle}</h2>
      <div className="project-details">
        <p>{props.projectDetails}</p>
        <div className="project-buttons">
          <a href={props.view} target="_blank" rel="noopener noreferrer" className="btn">
            View
          </a>
          <a href={props.source} target="_blank" rel="noopener noreferrer" className="btn">
            Source (Github)
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
