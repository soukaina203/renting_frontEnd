import React, { useRef, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa6';
import { Zoom } from 'react-reveal';
import { apiUrl } from '../environnement/environnement.prod';

axios.defaults.withCredentials = true;

function SignIn() {
  const [showPoppup, setShowpoppup] = useState(false)

  const data = useRef({ email: '', password: '' })
  const [msg, setMsg] = useState('')
  const navigate = useNavigate();

  let handleLogin = async (e) => {
    e.preventDefault();

    const res = await axios.post(`${apiUrl}/login`, {
      email: data.current.email,
      password: data.current.password,
    });


    console.log(res.data)


    if (res.data !== -1) {
      console.log("hello1")
      setShowpoppup(false)
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('userName', res.data.user.name);
      localStorage.setItem('userId', res.data.user.id);
      localStorage.setItem('userPhoto', res.data.user.photo);
      localStorage.setItem('status', res.data.isAdmin);//is admin
      setMsg('')
      console.log("==========")
      console.log(res.data)
      if (res.data.isAdmin === 'a') {

        navigate('/admin/users')
      } else {
        navigate('/user/welcome')

      }
    } else {
      console.log("hello2")

      setShowpoppup(true)
    }


   

  }
  return (
    <div className="flex justify-center min-h-screen bg-gray-100 mt-14 md:mt-0 lg:items-center">
      <Zoom>
        <div className="flex flex-col-reverse items-center justify-center w-full bg-white rounded-lg shadow-lg lg:flex-row lg:w-2/3 lg:h-2/3">
          <div className="relative w-full h-64 lg:w-full lg:h-auto">
            <img src="/services/login3.jpeg" alt="Background" className="object-cover w-full h-full rounded-t-lg lg:rounded-l-lg lg:rounded-t-none" />
          </div>

          <div className="w-full p-8 lg:w-1/2">
            <div className="flex justify-center mb-8">
            </div>
            <h2 className="mb-6 text-2xl font-bold text-center text-gray-800 uppercase">Login</h2>
            <form onSubmit={handleLogin} className="space-y-4">

              <div>
                <label htmlFor="email" className="block mb-1 font-semibold text-gray-800">
                  Email:
                </label>
                <input
                  type="text"
                  required
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"

                  onBlur={(e) => {
                    data.current = { ...data.current, email: e.target.value };
                  }}
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-1 font-semibold text-gray-800">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                  onBlur={(e) => {
                    data.current = { ...data.current, password: e.target.value };
                  }}
                />
              </div>
              <button className="before:ease relative h-12 w-40 uppercase font-semibold flex
             justify-center items-center gap-2 mr-auto ml-auto overflow-hidden border
              border-[#E60035] text-white group
              shadow-2xl before:absolute before:left-0 
              before:-ml-2 before:h-48 before:w-48 before:origin-top-right
               before:-translate-x-full before:translate-y-12 before:-rotate-90
                before:bg-white before:transition-all before:duration-300 hover:text-white
                 hover:shadow-[#E60035] hover:bg-[#E60035] hover:before:-rotate-180">

                <span className='relative text-[#E60035] z-20 group-hover:text-white'>
                  Sign In

                </span>
                <FaArrowRight className="relative text-[#E60035] z-20 group-hover:text-white ml-2" />
              </button>

            </form>
            <p className="mt-4 text-sm text-center text-gray-500">
              Already have an account?{' '}
              <Link to="/signUp" className="font-semibold text-red-500 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </Zoom>

      <div>
        {/* Popup */}
        {showPoppup === true ?
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="relative w-full max-w-md max-h-full p-2">
                <Zoom>
                <div className="relative bg-white rounded-lg h-[12rem] shadow ">
                  <button type="button"
                  
                  onClick={()=>{
                    setShowpoppup(false)
                  } }
                  className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200  rounded-lg text-sm w-8 h-8 ms-auto 
                  inline-flex justify-center items-center 
                  " data-modal-hide="popup-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                  <div className="p-4 text-center md:p-5">
                    <svg className="w-12 h-12 mx-auto mb-4 text-gray-400 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <h3 className="mb-5 text-xl font-semibold ">Email Or Password is incorrect</h3>

                    <button       
                  onClick={()=>{
                    setShowpoppup(false)
                  } } class="before:ease relative h-12 mb-3 w-40 uppercase flex justify-center items-center gap-2 mr-auto ml-auto  overflow-hidden
               border border-[#E60035] text-red-500 font-Yantramanav-Black  text-[1.1rem]
                shadow-2xl before:absolute before:left-0 before:-ml-2
                before:h-48 before:w-48 before:origin-top-right before:-translate-x-full 
                before:translate-y-12 before:-rotate-90 before:bg-white  before:transition-all before:duration-300
                 hover:text-white hover:shadow-[#E60035] hover:bg-[#E60035] hover:before:-rotate-180">

                    <span className="relative z-10">  OK , Got it</span>
                    <FaArrowRight className="relative z-10" />
                  </button>



               


                  </div>
                </div>
                </Zoom>
              </div>
            </div>
          : ""
        }
      </div>
    </div>
  )
}

export default SignIn
