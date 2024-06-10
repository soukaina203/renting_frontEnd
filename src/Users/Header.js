import React, { useEffect, useRef, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlinePersonOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'
export default function HeaderUser() {
  const [isClicked, setClicked] = useState({ menuIcon: true, exitIcon: false });
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [user, setuser] = useState({
    id: localStorage.getItem('userId'),
    name: localStorage.getItem("userName")
  })

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

    <nav className="w-full h-[4rem] bg-white text-black shadow-md z-40">
      <div className="container relative flex items-center justify-between mx-auto">
        <h1 className="text-2xl font-bold  p-[1.2rem] text-white bg-[#E60035] lg:ml-[2rem]">
          BestCar
        </h1>

        <ul className="items-center hidden font-semibold cursor-pointer lg:flex">
          <li className="px-6 py-4 duration-500 underlineHover">
            <Link to="/user/rentals">Your Rentals </Link>
          </li>
          <li className="px-6 py-4 duration-500 rounded-lg underlineHover">
            <Link to="/user/review/create">Make A Review</Link>
          </li>
          <li className="px-6 py-4 duration-500 rounded-lg underlineHover">
            <Link to="/user/welcome">Cars</Link>
          </li>


        </ul>

        <button className="z-40 lg:hidden group">
          <GiHamburgerMenu className="absolute text-2xl top-6 right-12" />
          <div className="absolute top-0 flex items-center w-8/12 h-screen ml-auto text-black transition-all duration-500 bg-white opacity-0 md:w-5/12 right-full group-focus:right-0 group-focus:opacity-100">
            <ul className="flex flex-col items-center justify-center w-[98%] font-semibold m-2">
              <li className="w-full px-6 py-4 duration-500 underlineHover ">
                <Link to="/user/users">Your Rentals </Link>
              </li>
              <li className="w-full px-6 py-4 duration-500 rounded-lg underlineHover">
                <Link to="/user/rentals">Make A Review</Link>
              </li>
              <li className="w-full px-6 py-4 duration-500 rounded-lg underlineHover">
                <Link to="/user/cars">Cars</Link>
              </li>

            </ul>
          </div>
        </button>
        <div className="relative hidden text-left lg:inline-block" ref={dropdownRef}>

          <button className='p-2 text-gray-500 rounded '
            onClick={dropDawn}><MdOutlinePersonOutline className='w-8 h-8 text-[#E60035] ' />
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
                  href={`/user/editProfile/${user.id}`}
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-0"
                >
                  Profile
                </a>
                <a
                  href="/logout"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-1"
                >
                  Log Out
                </a>
              </div>
            </div>
          )}
        </div>



      </div>
    </nav>
  )
}


