import React from 'react'
import About from './About'
import Header from './Header'
import Home from './Home'
import Ride from './Ride'
import Services from './Services'
import Reviews from './Reviews'
import Properties from './properties'
import Cta from './Cta'
import Footer from './Footer'
function LandingPage() {
  return (
    <div className='flex flex-col w-full h-full '>
      <Header />
      <Home />
      <Properties />
      <About />
      <Ride />
    <Cta /> 
    <Services />
    <Footer />
    </div>
  )
}

export default LandingPage
