import React from 'react'
import { Link } from 'react-router-dom'
import HeaderAdmin from './header'
import { AiFillCar } from 'react-icons/ai'
import { MdCarRental } from 'react-icons/md'
import { AiOutlineUser } from 'react-icons/ai'
function Dashboard() {
  let admin=localStorage.getItem("userName")
  return (
    <div className='h-[100vh] '>
      <HeaderAdmin />
      <div className="text-center mt-[14rem] ">
        <h1 className="text-2xl font-bold text-[#E60035] uppercase">Welcome Admin {admin} </h1>
      </div>


    </div>
  )
}

export default Dashboard
