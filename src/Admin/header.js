import React from 'react'
import { Link } from 'react-router-dom'
function HeaderAdmin() {
  return (
    <div>
          <div className='flex flex-row font-body gap-[2.8rem] font-semibold bg-white1 w-[100vw] z-10 sticky top-0'>
  <img src="/imgs/jeep.png" alt="" className="w-[50px] h-[50px] mt-[15px] ml-[10px] "/>

      <ul className='flex gap-5 mt-[29.2px] ml-[8.5rem] relative right-[-20rem] '>
        <li><a href="#Home" className='underlineHover'>Cars</a></li>
        <li><a href="#About" className='underlineHover'>Users</a></li>
        <li><a href="#Ride" className='underlineHover'>Rentals</a></li>
      </ul>
      <div className="flex flex-row gap-1 mt-4 relative right-[-43rem] text-[19px]">

      <button className='p-2 bg-btn  rounded text-slate-50 '><Link to="signIn">Log Out</Link></button>
      </div>
    </div>
    </div>
  )
}

export default HeaderAdmin
