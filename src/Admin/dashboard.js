import React from 'react'
import { Link } from 'react-router-dom'
import HeaderAdmin from './header'
import { AiFillCar } from 'react-icons/ai'
import { MdCarRental } from 'react-icons/md'
import { AiOutlineUser } from 'react-icons/ai'
function Dashboard() {
  return (
    <div className='h-[100vh] bg-white1'>
      <HeaderAdmin />
      <div class="flex justify-center mt-[10rem] ">
        <div class="font-bold border-[2px] border-btn text-btn rounded hover:bg-btn hover:text-white flex items-center flex-col justify-center w-40 h-40 m-4 transition-all duration-300">

          <div class="text-[5rem] mr-2">
            <Link to='/admin/cars'>
              <AiFillCar />
            </Link>
          </div>
          <Link to='/admin/cars' class="text-xl">CARS</Link>
        </div>
        <div class="font-bold border-[2px] border-btn text-btn rounded hover:bg-btn hover:text-white flex items-center flex-col justify-center w-40 h-40 m-4 transition-all duration-300">

          <div class="text-[5rem] mr-2">
          <Link to='/Rentals'>

            <MdCarRental />
            </Link>
          </div>
          <Link to='/Rentals' class="text-xl">RENTALS</Link>
        </div>
        <div class="font-bold border-[2px] border-btn text-btn rounded hover:bg-btn hover:text-white flex items-center flex-col justify-center w-40 h-40 m-4 transition-all duration-300">

          <div class="text-[5rem] mr-2">
            <Link to="/Users">
            <AiOutlineUser />
            </Link>
          </div>
          <Link to='/Users' class="text-xl">USERS</Link>
        </div>
      </div>


    </div>
  )
}

export default Dashboard
