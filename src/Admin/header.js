import React, { useEffect, useRef, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { MdOutlinePersonOutline } from "react-icons/md";
import axios from 'axios';
import { apiUrl } from '../environnement/environnement.prod';

function HeaderAdmin() {
  const [admin, setAdmin] = useState({ id: localStorage.getItem('userId'), name: localStorage.getItem("userName") })
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [userPhoto,setUserPhoto]=useState(null)
  const [user, setuser] = useState({
    id: localStorage.getItem('userId'),
    name: localStorage.getItem("userName")
  })
  const dropDawn = () => {
    setIsOpen(prevState => !prevState);
  };

  let getUser =async ()=>{
    const res = await axios.get(`${apiUrl}/user/${user.id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    console.log(res.data)
    console.log("-===========")
    setUserPhoto(res.data.user.photo)
  }
  useEffect(() => {
    console.log(user.id)
    getUser()
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

  let idUser = localStorage.getItem("userId")

  return (

    <nav className="w-full h-[4rem] bg-white text-black shadow-md z-40">
      <div className="container relative flex items-center justify-between mx-auto">
        <h1 className="text-2xl font-bold uppercase p-[1.2rem] text-white
         bg-[#E60035] lg:ml-[2rem] font-Yantramanav-Black">
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

        <button className="z-40 lg:hidden group">
        <GiHamburgerMenu className="text-2xl " />
        <div className="absolute top-0 flex items-center w-8/12 h-screen ml-auto text-black transition-all duration-500 bg-white opacity-0 md:w-5/12 right-full group-focus:right-0 group-focus:opacity-100">
            <ul className="flex flex-col items-center justify-center w-[98%] font-semibold ">
              <li className="block px-6 py-4 duration-500 w-fit underlineHover ">
                <Link to="/Home">Users</Link>
              </li>
              <li className="block px-6 py-4 duration-500 rounded-lg w-fit underlineHover">
                <Link to="/About">Rentals</Link>
              </li>
              <li className="block px-6 py-4 duration-500 rounded-lg w-fit underlineHover">
                <Link to="mission">Cars</Link>
              </li>
              <li className="block px-6 py-4 duration-500 rounded-lg w-fit underlineHover">
                <Link to="team">Reviews</Link>
              </li>

              <li className="block px-6 py-4 duration-500 rounded-lg w-fit underlineHover">
                <Link to={`/admin/editProfile/${user.id}`}>Profile</Link>
              </li>
              <li className="block px-6 py-4 duration-500 rounded-lg w-fit underlineHover">
                <Link to="/logout">Log out</Link>
              </li>
            </ul>
          </div>
        </button>
        <div className="relative hidden text-left lg:inline-block" ref={dropdownRef}>

          <button className='p-2 text-gray-500 rounded '
            onClick={dropDawn}>
              <img src={userPhoto!==null ?  `${apiUrl}/images/${userPhoto}`:
               "/imgs/noProfile.jpg"} className='w-8 h-8 rounded-full ' alt=''/>
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
                  href={`/admin/editProfile/${user.id}`}
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

export default HeaderAdmin
