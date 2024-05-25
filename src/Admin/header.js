import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { MdOutlinePersonOutline } from "react-icons/md";

function HeaderAdmin() {
  const [admin, setAdmin] = useState({ id: localStorage.getItem('userId'), name: localStorage.getItem("userName") })
  return (

    <nav className="w-full h-[4rem] bg-white text-black shadow-md z-40">
      <div className="container relative flex items-center justify-between mx-auto">
        <h1 className="text-2xl font-bold  p-[1.2rem] text-white bg-[#E60035] lg:ml-[2rem]">
          BestCar
        </h1>

        <ul className="items-center hidden pr-10 font-semibold cursor-pointer lg:flex">
          <li className="w-full px-6 py-4 duration-500 underlineHover ">
            <Link to="/admin/users">Users</Link>
          </li>
          <li className="w-full px-6 py-4 duration-500 rounded-lg underlineHover">
            <Link to="/admin/rentals">Rentals</Link>
          </li>
          <li className="w-full px-6 py-4 duration-500 rounded-lg underlineHover">
            <Link to="/admin/cars">Cars</Link>
          </li>
          <li className="w-full px-6 py-4 duration-500 rounded-lg underlineHover">
            <Link to="/admin/reviews">Reviews</Link>
          </li>
        </ul>

        <button className="lg:hidden group">
          <GiHamburgerMenu className="mr-5 text-2xl" />
          <div className="absolute top-0 flex items-center w-8/12 h-screen ml-auto text-black transition-all duration-500 bg-white opacity-0 md:w-5/12 right-full group-focus:right-0 group-focus:opacity-100">
            <ul className="flex flex-col items-center justify-center w-[98%] font-semibold m-2">
              <li className="w-full px-6 py-4 duration-500 underlineHover ">
                <Link to="/Home">Users</Link>
              </li>
              <li className="w-full px-6 py-4 duration-500 rounded-lg underlineHover">
                <Link to="/About">Rentals</Link>
              </li>
              <li className="w-full px-6 py-4 duration-500 rounded-lg underlineHover">
                <Link to="mission">Cars</Link>
              </li>
              <li className="w-full px-6 py-4 duration-500 rounded-lg underlineHover">
                <Link to="team">Reviews</Link>
              </li>

            </ul>
          </div>
        </button>

        <button className='p-2 text-gray-500 rounded '><Link to={`/editProfile/${admin.id}`}><MdOutlinePersonOutline className='w-8 h-8 text-[#E60035] ' />
        </Link></button>

      </div>
    </nav>
  )
}

export default HeaderAdmin
