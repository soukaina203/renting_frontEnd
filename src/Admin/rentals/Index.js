import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillCar } from 'react-icons/ai'
import { BiCheckboxChecked } from 'react-icons/bi'
import { ImCross } from 'react-icons/im'
import HeaderAdmin from '../header'
function Dashboard() {
  return (
    <div className='h-[100vh] bg-white1'>
      <HeaderAdmin />
      <div class="flex justify-center mt-[10rem] ">
        <div class="font-bold border-[2px] border-btn text-btn rounded hover:bg-btn hover:text-white flex items-center flex-col justify-center w-52 h-40 m-4 transition-all duration-300">

          <div class="text-[3rem] mr-2  relative top-5">
            <Link to='/rentals/unprocessed'>
              <ImCross />
            </Link>
          </div>
          <Link to='/rentals/unprocessed' class="text-xl mt-[2rem]  relative top-[21px]">Unprocessed Rentals</Link>
        </div>
        <div class="font-bold border-[2px] border-btn text-btn rounded hover:bg-btn hover:text-white flex items-center flex-col justify-center w-52 h-40 m-4 transition-all duration-300">

          <div class="text-[5rem] mr-2 relative top-5">
          <Link to='/rentals/processed'>

          <BiCheckboxChecked />
            </Link>
          </div>
          <Link to='/rentals/processed' className="text-xl mt-[2rem]  ">Processed Rentals</Link>
        </div>
        
      </div>


    </div>
  )
}

export default Dashboard
