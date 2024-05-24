import React, { useRef } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa6';

function SignUp() {
  const data = useRef({
    name: '',
    email: '',
    address: '',
    phone: '',
    password: '',
  });
  const navigate = useNavigate();

  let handleSignup = async (e) => {
    e.preventDefault()
    let v = data.current
    const res = await axios.post('http://127.0.0.1:8000/api/signUp', {
      name: v.name,
      email: v.email,
      password: v.password,
    });
    navigate('/signIn')
  }

  return (
    <div className="flex justify-center min-h-screen bg-gray-100 mt-14 md:mt-0 lg:items-center">
      <div className="flex flex-col-reverse items-center justify-center w-full bg-white rounded-lg shadow-lg lg:flex-row lg:w-2/3 lg:h-2/3">
        {/* Image Section */}
        <div className="relative w-full h-64 lg:w-full lg:h-auto">
          <img src="/services/login.jpeg" alt="Background" className="object-cover w-full h-full rounded-t-lg lg:rounded-l-lg lg:rounded-t-none" />
        </div>

        {/* Form Section */}
        <div className="w-full p-8 lg:w-1/2">
          <div className="flex justify-center mb-8">
          </div>
          <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">USER SIGNUP</h2>
          <form onSubmit={handleSignup} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 font-semibold text-gray-800">
                Name:
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                onChange={(e) => {
                  data.current = { ...data.current, name: e.target.value };
                }}
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-semibold text-gray-800">
                Email:
              </label>
              <input
                type="text"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                onChange={(e) => {
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
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                onChange={(e) => {
                  data.current = { ...data.current, password: e.target.value };
                }}
              />
            </div>
            <button type='submit'
             className="relative flex items-center justify-center w-full px-4 py-2 mt-4 text-lg
              font-semibold text-white transition-colors bg-red-500  border-transparent rounded
               shadow 
               before:ease  h-12  uppercasegap-2 mr-auto ml-auto  overflow-hidden
               border border-[#E60035] 
              before:absolute before:left-0 before:-ml-2
                before:h-48 before:w-full before:origin-top-right before:-translate-x-full 
                before:translate-y-12 before:-rotate-90 before:bg-black before:transition-all before:duration-300
                 hover:text-white hover:shadow-[#E60035] hover:bg-[#E60035] hover:before:-rotate-180
               ">
              <span>Sign Up</span>
              <FaArrowRight className="ml-2" />
            </button>
          </form>
          <p className="mt-4 text-sm text-center text-gray-500">
            Already have an account?{' '}
            <Link to="/signIn" className="font-semibold text-red-500 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
