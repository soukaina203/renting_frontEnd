import React, { useRef } from 'react';

function SignUp() {
  const data = useRef({
    name: '',
    email: '',
    address: '',
    phone: '',
    password: '',
  });

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
        <form className="h-[25rem] w-[17rem]">
          <h1 className='text-center font-bold text-btn '>USER SIGNUP</h1>
          <div>
            <label htmlFor="name" className="font-semibold block mb-1">
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 px-1 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onBlur={(e) => {
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
              onBlur={(e) => {
                data.current = { ...data.current, email: e.target.value };
              }}
            />
          </div>
          <div>
            <label htmlFor="address" className="font-semibold block mb-1">
              Address:
            </label>
            <input
              type="text"
              id="address"
              className="w-full border border-gray-300 px-1 py-1  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onBlur={(e) => {
                data.current = { ...data.current, address: e.target.value };
              }}
            />
          </div>
          <div>
            <label htmlFor="phone" className="font-semibold block mb-1">
              Phone:
            </label>
            <input
              type="text"
              id="phone"
              className="w-full border border-gray-300 px-1 py-1  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onBlur={(e) => {
                data.current = { ...data.current, phone: e.target.value };
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
              onBlur={(e) => {
                data.current = { ...data.current, password: e.target.value };
              }}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-btn text-white font-semibold px-1 py-1  rounded-md hover:bg-blue-600 transition-colors mt-4"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
