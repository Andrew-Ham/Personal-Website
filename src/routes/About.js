import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import MainImg2 from '../components/MainImg2'
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <div>
      <Navbar/>
      <MainImg2 heading="ABOUT ME" subheading="Ambitious student passionate on learning and becoming a fullstack developer." />
      <AboutContent />
      <Footer/>
    </div>
  )
}

export default About