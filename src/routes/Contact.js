import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import MainImg2 from '../components/MainImg2'
import ContactForm from "../components/ContactForm"

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <MainImg2 heading="CONTACT" subheading="I would love for a chat!" />
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Contact