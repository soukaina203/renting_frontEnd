import React from 'react'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <div className='flex flex-row font-body gap-[2.8rem] font-semibold bg-white1 w-[100vw] z-10 sticky top-0'>
  <img src="/imgs/jeep.png" alt="" className="w-[50px] h-[50px] mt-[15px] ml-[10px] "/>

      <ul className='flex gap-5 mt-[29.2px] ml-10 relative right-[-20rem] '>
        <li><a href="#Home" className='underlineHover'>Home</a></li>
        <li><a href="#Ride" className='underlineHover'>Ride</a></li>
        <li><a href="#Services" className='underlineHover'>Services</a></li>
        <li><a href="#About" className='underlineHover'>About</a></li>
        <li><a href="#Reviews" className='underlineHover' >Reviews</a></li>
      </ul>
      <div className="flex flex-row gap-1 mt-4 relative right-[-35rem] text-[19px]">

      <button className='p-2 '><Link to="signUp">Sign Up</Link></button>
      <button className='p-2 bg-blue-600 rounded text-slate-50'><Link to="signIn">Sign In</Link></button>
      </div>
    </div>
  )
}

export default Header