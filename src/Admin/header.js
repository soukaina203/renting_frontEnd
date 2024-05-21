import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'
function HeaderAdmin() {
  const [admin,setAdmin]=useState({id:localStorage.getItem('userId'),name:localStorage.getItem("userName")})
  return (
    <div className='bg-slate-400'>
  <div className='hidden lg:flex justify-between font-body items-center w-[100%] h-[4rem]  font-semibold bg-white1  z-10 sticky top-0'>
  <img src="/imgs/jeep.png" alt="" className="w-[50px] h-[50px] ml-[10px] "/>

      <ul className='flex gap-[2rem]'>
        <li><a href="/admin/cars" className='underlineHover'>Cars</a></li>
        <li><a href="/users" className='underlineHover'>Users</a></li>
        <li><a href="/rentals" className='underlineHover'>Rentals</a></li>
        <li><a href="/reviews" className='underlineHover'>Reviews</a></li>
      </ul>

      <div className="flex flex-row gap-1  text-[19px]">
      <button className='p-2 text-gray-500 rounded '><Link to={`/editProfile/${admin.id}`}>{admin.name} </Link></button>
      <button className='p-2 text-gray-500 rounded '><Link to="/logout">Log Out</Link></button>
      </div>

    </div>


    <button className=" lg:hidden group">
          <GiHamburgerMenu className="mr-5 text-2xl" />



          <div className="absolute top-0 w-8/12 h-screen ml-auto mr-auto text-white transition-all duration-500 opacity-0 bg-slate-600 md:w-5/12 right-full group-focus:right-0 group-focus:opacity-100">
            <ul className="flex flex-col gap-6 items-center justify-center h-[15rem] pr-10 mt-12 text-base font-semibold bg-orange-500 cursor-pointer">
            <li><a href="/admin/cars" className='w-full px-6 py-4 ml-auto mr-auto mb-14 underlineHover'>Cars</a></li>
        <li><a href="/users" className='w-full px-6 py-4 ml-auto mr-auto '>Users</a></li>
        <li><a href="/rentals" className='w-full px-6 py-4 ml-auto mr-auto '>Rentals</a></li>
        <li><a href="/reviews" className='w-full px-6 py-4 ml-auto mr-auto '>Reviews</a></li>
            </ul>
          </div>
         

        </button>
    </div>
  )
}

export default HeaderAdmin
