


import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose, MdOutlineRateReview } from "react-icons/md";
import { BiSolidHome } from "react-icons/bi";
import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { GrProjects, GrServices } from "react-icons/gr";
import { FaCar } from "react-icons/fa";
function Header() {

  const [isClicked, setClicked] = useState({ menuIcon: true, exitIcon: false });
  const [isOpen, setIsopen] = useState(false)
  let Toggle = () => {
    isClicked.menuIcon ? setClicked({ menuIcon: false, exitIcon: true }) : setClicked({ menuIcon: true, exitIcon: false });

  };
  let dropDawn = () => {
    console.log(isOpen)
    isOpen ? setIsopen(false) : setIsopen(true)
  }
  return (
    <div className="fixed bottom-0 w-full border-t-[2px] h-[3rem]  lg:h-[4rem] z-20 flex justify-between md:fixed md:top-0 md:w-[100%] bg-white1">
      <img src="imgs/jeep.png" className="font-bold p-5 mt-[-0.8rem] w-[4.8rem] h-[4.8rem] z-50" alt="" />
      <button className="text-2xl absolute bottom-[0.6rem] right-2  z-40" onClick={() => { Toggle(); }}>
        {isClicked.menuIcon ? (<GiHamburgerMenu className="lg:hidden" />) : (<MdOutlineClose className="lg:hidden " />)}
      </button>

      {isClicked.menuIcon}
      {isClicked.menuIcon ? " "
        :
        <div className={`flex justify-center h-10 z-20 	fixed bottom-[2.5rem] p-8 w-full animate-showUp bg-white1 lg:hidden  md:top-7 `}>
          <ul className="flex gap-7 md:mt-[-1rem]">
            <li>
              <a href="#Home" className='icon-link  hover:text-bg-darkRed duration-500' title="Home">
                <BiSolidHome className="text-[26px]" />
              </a>
            </li>
            <li>
              <a href="#About" className='icon-link hover:text-bg-darkRed duration-500' title="About">
                <BsFillPersonFill className="text-[26px]" />
              </a>
            </li>
            <li>
              <a href="#Ride" className='icon-link hover:text-bg-darkRed duration-500' title="Ride">
                <FaCar className="text-[26px]" />
              </a>
            </li>
            <li>
              <a href="#Services" className='icon-link hover:text-bg-darkRed duration-500' title="Services">
                <GrServices className="text-[26px]" />
              </a>
            </li>
            <li>
              <a href="#Reviews" className='icon-link hover:text-bg-darkRed duration-500' title="Reviews">
                <MdOutlineRateReview className="text-[26px]" />
              </a>
            </li>
          </ul>
        </div>



      }
      {/* For Large Screens */}
      <div className="hidden    lg:flex absolute top-0  z-20 justify-center w-[100%] h-[4rem]  
         items-center font-semibold  lg:text-[17px]">
        <ul className="flex flex-row gap-11   lg:text-[19px]">

          <a href="#Home" className='underlineHover'>Home </a>
          <a href="#About" className='underlineHover'>About</a>
          <a href="#Ride" className='underlineHover'>Ride</a>
          <a href="#Services" className='underlineHover'>Services</a>
          <a href="#Reviews" className='underlineHover'>Reviews</a>

        </ul>
      </div>
      <div>

      <div className="relative top-[0.3rem]  right-[2.5rem] md:right-[3rem] md:top-2 lg:top-3 lg:right-2 z-40
      ">
            <button type="button" onClick={()=>{
                dropDawn()

            }}
              className=" w-[6rem] md:w-[8rem] flex  justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1
                   ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button"
             
              aria-expanded="true" aria-haspopup="true">
            <p > 
              Discover
              </p>  
              <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
          {isOpen ?


            <div class="absolute bottom-[3rem] right-[2rem] w-[7rem] md:right-0 md:top-4  z-40 mt-2 md:w-48 md:origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
              <div class="py-1" role="none">
                <a href="/signIn" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Sign Up</a>
                <a href="/signUp" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Sign In</a>

              </div>
            </div>
            : ""}
      </div>

    </div>
  );
}

export default Header;
