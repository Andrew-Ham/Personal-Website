import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import MainImg2 from '../components/MainImg2'
import Work from '../components/Work'



/*
Using props. Variable heading has String "PROJECTS.". Same as variable subheading
In our project page we want to show our project cards (each project displayed). So for creating these cards we need to create a frame.
We are creating the frame inside Work.js 
Inside Work.js we have a container/box. And inside this box we want to create a card which is from ProjectCard.js 
Inside ProjectCard.js we have the img, title etc to display a specific project. 
This is why we created a local API -> WorkCardData.js so we can fetch this data in ProjectCard (but mapping occurs in Work.js)
*/ 

const Project = () => {
  return (
    <div>
      <Navbar/>
      <MainImg2 heading="PROJECTS." subheading = "Personal projects I've worked on"/> 
      <Work/>
      <Footer/>
    </div>
  )
}


export default Project