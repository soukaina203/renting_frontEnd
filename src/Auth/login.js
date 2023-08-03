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


    console.log(res.data.isAdmin  )
    
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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex">
        {/* Div with orange background */}
        <div className="h-[27rem] w-[30rem] mr-[-0.8rem] bg-btn">

          {/* Welcome heading */}
          <h1 className="flex-1 text-[30px] font-semibold mb-6 text-center text-white mt-[8rem] ">Welcome Back To Our Website</h1>
          <p className="flex-1 text-[20px] w-[16rem] ml-[7rem] font-semibold mb-6 text-center text-white mt-[-1rem] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,</p>
        </div>
      </div>
      <div className="bg-white shadow-md  p-6 h-[27rem] w-[20rem] ">
        {/* <h1 className="text-2xl font-semibold mb-6 text-center text-orange-500">Sign Up</h1> */}
        <form className="h-[25rem] w-[17rem] mt-16" onSubmit={handleLogin}>
          <h1 className='text-center font-bold text-btn '>USER LOGIN</h1>
          <div className="flex flex-col gap-4">
            <label htmlFor="email" className="font-semibold">
              Email:
            </label>
            <input
              type="text"
              required
              id="email"
              className="border border-gray-300 py-1 px-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onBlur={(e) => {
                data.current = { ...data.current, email: e.target.value };
              }}
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="password" className="font-semibold">
              Password:
            </label>
            <input
              type="password"
              id="password"
              required
              className="border border-gray-300 py-1 px-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onBlur={(e) => {
                data.current = { ...data.current, password: e.target.value };
              }}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-btn text-white font-semibold py-1 px-1 rounded-md  transition-colors mt-4"
          >
            login
          </button>
              <h1 className='text-red-500 font-bold ml-6 mt-6'>  {msg}</h1>
        </form>
      </div>
    </div>

  )
}

export default SignIn
