import "./ProjectCardStyles.css"
import ProjectCard from "./ProjectCard"
import WorkCardData from "./WorkCardData"

import React from 'react'



/* 
We have to import ProjectCard and WorkCardData (the data we created) so that we can display it.
We map WorkCardData so that we pass in proper props. We fetch data according to index number. 
*/
const Work = () => {
  return (
    <div className = "work-container">
        <h1 className = "project-heading">Projects</h1>
        <div className = "project-container">
            {WorkCardData.map((value,index) => {
                return (
                    <ProjectCard 
                    key={index}
                    imgsrc = {value.imgsrc}
                    projectTitle = {value.projectTitle}
                    projectDetails = {value.projectDetails}
                    view = {value.view}
                    source = {value.source}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Work