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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
       <div className="flex">
          {/* Div with orange background */}
          <div className="h-[27rem] w-[30rem] mr-[-0.8rem] bg-orange-500">

          {/* Welcome heading */}
          <h1 className="flex-1 text-[30px] font-semibold mb-6 text-center text-white mt-[8rem] ">Welcome To Our Website</h1>
          <p className="flex-1 text-[20px] w-[16rem] ml-[7rem] font-semibold mb-6 text-center text-white mt-[-1rem] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,</p>
        </div>
        </div>
      <div className="bg-white shadow-md  p-6 h-[27rem] w-[20rem] ">
        {/* <h1 className="text-2xl font-semibold mb-6 text-center text-orange-500">Sign Up</h1> */}
        <form className="h-[25rem] w-[17rem]" onSubmit={handleSignup}>
          <h1 className='text-center font-bold text-orange-500 '>USER SIGNUP</h1>
          <div>
            <label htmlFor="name" className="font-semibold block mb-1">
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 px-1 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => {
                data.current = { ...data.current, name: e.target.value };
              }}
            />
          </div>
          <div>
            <label htmlFor="email" className="font-semibold block mb-1">
              Email:
            </label>
            <input
              type="text"
              id="email"
              className="w-full border border-gray-300 px-1 py-1  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => {
                data.current = { ...data.current, email: e.target.value };
              }}
            />
          </div>
          
         
          <div>
            <label htmlFor="password" className="font-semibold block mb-1">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 px-1 py-1  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => {
                data.current = { ...data.current, password: e.target.value };
              }}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold px-1 py-1  rounded-md hover:bg-blue-600 transition-colors mt-4"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
