import React from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  return (
    <nav className="w-full h-[4rem] bg-white text-black shadow-md z-40">
      <div className="container relative flex items-center justify-between mx-auto">

        <h1 className="  text-2xl font-bold uppercase p-[1.2rem] text-white
         bg-[#E60035] lg:ml-[2rem]">
          BestCar
        </h1>

        <ul className="items-center hidden pr-10 font-semibold cursor-pointer lg:flex">
          <li className="px-6 py-4 duration-500 underlineHover">
            <Link to="/Home" smooth={true} offset={200}>Home</Link>
          </li>
          <li className="px-6 py-4 duration-500 underlineHover">
            <Link to="/About" smooth={true} offset={200} duration={500}>About Us</Link>
          </li>
          <li className="px-6 py-4 duration-500 underlineHover">
            <Link to="/Pricing" smooth={true} offset={-100} duration={500}>Ride</Link>
          </li>
          <li className="px-6 py-4 duration-500 underlineHover">
            <Link to="/Contact" smooth={true} offset={-100} duration={500}>Services</Link>
          </li>
          <li className="px-6 py-4 duration-500 underlineHover">
            <Link to="/Contact" smooth={true} offset={-100} duration={500}>Reviews</Link>
          </li>
        </ul>

        {/* phone & tablet */}
        <button className="lg:hidden group">
          <GiHamburgerMenu className="mr-5 text-2xl" />

          <div className="absolute top-0 flex items-center w-8/12 h-screen ml-auto text-black transition-all duration-500 bg-white opacity-0 md:w-5/12 right-full group-focus:right-0 group-focus:opacity-100">
            <ul className="flex flex-col items-center justify-center w-[98%] font-semibold m-2">
              <li className="w-full px-6 py-4 duration-500 uppercase hover:bg-[#7D7ED7]">
                <Link to="/Home" smooth={true} duration={400}>
                  Home
                </Link>
              </li>
              <li className="w-full px-6 py-4 duration-500 uppercase hover:bg-[#7D7ED7] rounded-lg">
                <Link to="/About" smooth={true} duration={400}>
                  About
                </Link>
              </li>
              <li className="w-full px-6 py-4 duration-500 uppercase hover:bg-[#7D7ED7] rounded-lg">
                <Link to="mission" smooth={true} offset={-200} duration={400}>
                  Ride
                </Link>
              </li>
              <li className="w-full px-6 py-4 uppercase duration-500 hover:bg-[#7D7ED7] rounded-lg">
                <Link to="team" smooth={true} offset={-200} duration={400}>
                  Services
                </Link>
              </li>
              <li className="w-full px-6 py-4 uppercase duration-500 hover:bg-[#7D7ED7] rounded-lg">
                <Link to="team" smooth={true} offset={-200} duration={400}>
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
        </button>
      </div>
    </nav>
  );
}

export default Header;
