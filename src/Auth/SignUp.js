import React, { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function SignUp() {
  const data = useRef({
    name: '',
    email: '',
    address: '',
    phone: '',
    password: '',
  });
  const navigate = useNavigate();

  let handleSignup= async (e)=>{
    e.preventDefault()
    let v=data.current
    const res = await axios.post('http://127.0.0.1:8000/api/signUp', {
      name:v.name,
      email: v.email,
      password: v.password,
    });
    navigate('/signIn')


  }

  return (
    <div className="flex justify-center min-h-screen bg-gray-100 mt-14 md:mt-0 lg:items-center">
       <div className="flex">
          {/* Div with orange background */}
          <div className="h-[27rem] w-[30rem] mr-[-0.8rem] bg-orange-500  hidden lg:block">

          {/* Welcome heading */}
          <h1 className="flex-1 text-[30px] font-semibold mb-6 text-center text-white mt-[8rem] ">Welcome To Our Website</h1>
          <p className="flex-1 text-[20px] w-[16rem] ml-[7rem] font-semibold mb-6 text-center text-white mt-[-1rem] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,</p>
        </div>
        </div>
        <div className="bg-white shadow-md  p-6 h-[23rem] w-[16rem] md:mt-[3rem] lg:mt-0 md:h-[27rem] md:w-[20rem]">
        {/* <h1 className="mb-6 text-2xl font-semibold text-center text-orange-500">Sign Up</h1> */}
        <form className="h-[25rem] w-[14rem]  md:w-[17rem] md:h-[20rem]  md:mt-8  "
         onSubmit={handleSignup}>

          <h1 className='mb-5 font-bold text-center text-orange-500'>USER SIGNUP</h1>
          <div>
            <label htmlFor="name" className="block mb-1 font-semibold">
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-1 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => {
                data.current = { ...data.current, name: e.target.value };
              }}
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-semibold">
              Email:
            </label>
            <input
              type="text"
              id="email"
              className="w-full px-1 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => {
                data.current = { ...data.current, email: e.target.value };
              }}
            />
          </div>
          
         
          <div>
            <label htmlFor="password" className="block mb-1 font-semibold">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-1 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => {
                data.current = { ...data.current, password: e.target.value };
              }}
            />
          </div>
          <button
            type="submit"
            className="w-full px-1 py-1 mt-8 font-semibold text-white transition-colors bg-orange-500 rounded-md hover:bg-orange-600"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
