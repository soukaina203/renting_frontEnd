import React from 'react'
import About from './About'
import Header from './Header'
import Home from './Home'
import Ride from './Ride'
import Services from './Services'
import Reviews from './Reviews'
import Properties from './properties'
function LandingPage() {
  return (
    <div className='flex flex-col '>
      <Header />
      <Home />
      <Properties />
      <About />
      {/*
      <Ride />
      <Services />
      <Reviews /> */}

    </div>
  )
}

export default LandingPage
