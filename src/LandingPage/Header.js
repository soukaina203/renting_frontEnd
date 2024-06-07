import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const [isClicked, setClicked] = useState({ menuIcon: true, exitIcon: false });
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const Toggle = () => {
    isClicked.menuIcon ? setClicked({ menuIcon: false, exitIcon: true }) : setClicked({ menuIcon: true, exitIcon: false });
  };

  const dropDawn = () => {
    setIsOpen(prevState => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="w-full h-[4rem] fixed lg:relative bg-white text-black shadow-md z-40">
      <div className="container flex items-center justify-between m-auto ">
        <h1 className="text-2xl font-bold uppercase p-[1.2rem] text-white
         bg-[#E60035] lg:ml-[2rem]">
          BestCar
        </h1>

        <ul className="items-center hidden pr-10 font-semibold cursor-pointer lg:flex">
          <li className="px-6 py-4 duration-500 underlineHover">
            <Link to="home" smooth={true} offset={-100} duration={500} >Home</Link>
          </li>
          <li className="px-6 py-4 duration-500 underlineHover">
            <Link to="About" smooth={true} offset={-100} duration={500}>About Us</Link>
          </li>
          <li className="px-6 py-4 duration-500 underlineHover">
            <Link to="Ride" smooth={true} offset={-100} duration={500}>Ride</Link>
          </li>
          <li className="px-6 py-4 duration-500 underlineHover">
            <Link to="Services" smooth={true} offset={-100} duration={500}>Services</Link>
          </li>
          <li className="px-6 py-4 duration-500 underlineHover">
            <Link to="Reviews" smooth={true} offset={-100} duration={500}>Reviews</Link>
          </li>
        </ul>

        <button className="lg:hidden group">
          <GiHamburgerMenu className="text-2xl " />
          <div className="absolute top-0 flex items-center w-8/12 h-screen ml-auto text-black transition-all duration-500 bg-white opacity-0 md:w-5/12 right-full group-focus:right-0 group-focus:opacity-100">
            <ul className="flex flex-col items-center justify-center w-[98%] font-semibold m-2">
            <li className="px-6 py-4 duration-500 underlineHover">
            <Link to="home" smooth={true} offset={-100} duration={500} >Home</Link>
          </li>
          <li className="px-6 py-4 duration-500 underlineHover">
            <Link to="About" smooth={true} offset={-100} duration={500}>About Us</Link>
          </li>
          <li className="px-6 py-4 duration-500 underlineHover">
            <Link to="Ride" smooth={true} offset={-100} duration={500}>Ride</Link>
          </li>
          <li className="px-6 py-4 duration-500 underlineHover">
            <Link to="Services" smooth={true} offset={-100} duration={500}>Services</Link>
          </li>
          <li className="px-6 py-4 duration-500 underlineHover">
            <Link to="Reviews" smooth={true} offset={-100} duration={500}>Reviews</Link>
          </li>


              <li className="w-full px-6 py-4 uppercase duration-500 underlineHover ">
                <RouterLink to="/signUp"> Sign Up</RouterLink>
              </li>
              <li className="w-full px-6 py-4 uppercase duration-500 underlineHover">
                <RouterLink to="/signIn">
                Sign In

                </RouterLink>
              </li>
            </ul>
          </div>
        </button>

        <div className="relative hidden text-left lg:inline-block" ref={dropdownRef}>
          <button
            type="button"
            onClick={dropDawn}
            className="w-[6rem] md:w-[8rem] flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            id="menu-button"
            aria-expanded={isOpen}
            aria-haspopup="true"
          >
            <p>Discover</p>
            <svg
              className="w-5 h-5 -mr-1 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {isOpen && (
            <div
              className="absolute right-0 z-40 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <div className="py-1" role="none">
                <a
                  href="/signUp"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-0"
                >
                  Sign Up
                </a>
                <a
                  href="/signIn"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-1"
                >
                  Sign In
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;