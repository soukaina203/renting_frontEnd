import React from 'react'
import { Link } from 'react-router-dom'
import { IoSettingsOutline } from 'react-icons/io5'
import { FaArrowRight } from 'react-icons/fa6'

function Dashboard() {
  return (
    <div className='min-h-screen bg-gray-100'>
      <IoSettingsOutline className="absolute hidden text-red-600 md:w-24 md:h-24 md:block top-20 left-20 lg:w-28 lg:h-28 animate-spin-slow"/>
      <IoSettingsOutline className="absolute hidden text-red-600 md:block md:w-14 md:h-14 lg:w-20 lg:h-20 top-40 left-40 animate-spin-slow"/>

      <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-4 md:flex-row">
        {/* Processed Rentals Card */}
        <div className="relative grid flex-col items-end justify-center w-full h-[28rem] max-w-xs overflow-hidden text-center text-gray-700 bg-white shadow-lg  md:max-w-sm lg:max-w-md rounded-xl">
          <div className="absolute inset-0 w-full h-full bg-center bg-cover bg-signUp">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/80 via-black/50"></div>
          </div>
          <div className="relative p-6 px-6 py-14 md:px-12">
            <h2 className="mb-6 text-3xl font-extrabold text-white uppercase">
              Processed Rentals
            </h2>
            <Link to="/admin/rentals/processed">
            <button className="relative flex items-center justify-center w-40 h-12 gap-2 mx-auto overflow-hidden font-semibold text-white uppercase border border-red-600 shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-black before:transition-all before:duration-300 hover:text-white hover:shadow-red-600 hover:bg-red-600 hover:before:-rotate-180">
              <span className="relative z-10">
               Go To
              </span>
              <FaArrowRight className="relative z-10" />
            </button>
            </Link>
          </div>
        </div>

        {/* Unprocessed Rentals Card */}
        <div className="relative grid flex-col items-end justify-center w-full h-[28rem]  max-w-xs overflow-hidden text-center text-gray-700 bg-white shadow-lg md:max-w-sm lg:max-w-md rounded-xl">
          <div className="absolute inset-0 w-full h-full bg-center bg-cover bg-login">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/80 via-black/50"></div>
          </div>
          <div className="relative p-6 px-6 py-14 md:px-12">
            <h2 className="mb-6 text-3xl font-extrabold text-white uppercase">
              Unprocessed Rentals
            </h2>
            <Link to="/admin/rentals/unprocessed">
            <button className="relative flex items-center justify-center w-40 h-12 gap-2 mx-auto overflow-hidden font-semibold text-white uppercase border border-red-600 shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-black before:transition-all before:duration-300 hover:text-white hover:shadow-red-600 hover:bg-red-600 hover:before:-rotate-180">
              <span className="relative z-10">
             Go To
              </span>
              <FaArrowRight className="relative z-10" />
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
