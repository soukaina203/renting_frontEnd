import React, { useRef, useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

axios.defaults.withCredentials = true;

function SignIn() {
  const data = useRef({ email: '', password: '' })
  const [msg, setMsg] = useState('')
  const navigate = useNavigate();

  let handleLogin = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://127.0.0.1:8000/api/login', {
      email: data.current.email,
      password: data.current.password,
    });


    console.log(res.data)
    
    if (res.data.token!==undefined) {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('userName', res.data.user.name);
      localStorage.setItem('userId', res.data.user.id);
      localStorage.setItem('status', res.data.isAdmin);//is admin
      setMsg('')
      if(res.data.isAdmin==='a'){

        navigate('/dashboard')
      }else{
        navigate('/welcome')

      }

    } else {
      setMsg('incorrect email or password ')
    }

  }
  return (
    <div className="flex justify-center min-h-screen bg-gray-100 mt-14 md:mt-0 lg:items-center">
      <div className="flex">
        {/* Div with orange background */}
        <div className="h-[27rem] w-[30rem] mr-[-0.8rem] bg-btn hidden lg:block">

          {/* Welcome heading */}
          <h1 className="flex-1 text-[30px] font-semibold mb-6 text-center text-white mt-[8rem] ">Welcome Back To Our Website</h1>
          <p className="flex-1 text-[20px] w-[16rem] ml-[7rem] font-semibold mb-6 text-center text-white mt-[-1rem] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,</p>
        </div>
      </div>
      
      <div className="bg-white shadow-md  p-6 h-[23rem] w-[16rem] md:mt-[3rem] lg:mt-0 md:h-[27rem] md:w-[20rem]">
        {/* <h1 className="mb-6 text-2xl font-semibold text-center text-orange-500">Sign Up</h1> */}
        <form className="h-[25rem] w-[14rem]  md:w-[17rem] md:h-[20rem]  md:mt-8  " onSubmit={handleLogin}>
          <h1 className='font-bold text-center text-btn'>USER LOGIN</h1>
          <div className="flex flex-col gap-4 mt-12">
            <label htmlFor="email" className="font-semibold">
              Email:
            </label>
            <input
              type="text"
              required
              id="email"
              className="px-1 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onBlur={(e) => {
                data.current = { ...data.current, email: e.target.value };
              }}
            />
          </div>
          <div className="flex flex-col gap-4 mt-2">
            <label htmlFor="password" className="font-semibold">
              Password:
            </label>
            <input
              type="password"
              id="password"
              required
              className="px-1 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onBlur={(e) => {
                data.current = { ...data.current, password: e.target.value };
              }}
            />
          </div>
          <button
            type="submit"
            className="w-full px-1 py-1 mt-10 font-semibold text-white transition-colors rounded-md bg-btn"
          >
            Login
          </button>
              <h1 className='mt-6 ml-6 font-bold text-red-500'>  {msg}</h1>
        </form>
      </div>
    </div>

  )
}

export default SignIn
