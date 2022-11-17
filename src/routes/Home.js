import React from 'react'
import Navbar from '../components/Navbar'
import MainImg from "../components/MainImg"
import Footer from "../components/Footer"
import Work from "../components/Work"

const Home = () => {
  return (
    <div>
        <Navbar/>
        <MainImg/>
        <Work />
        <Footer/>
    </div>
  )
}

export default Home