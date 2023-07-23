import React ,{useRef} from 'react'
import {BsPersonCircle} from 'react-icons/bs'
function SignIn() {
  const data = useRef({  email: '',  password: '' })

  return (
    <div className='flex justify-center align-center  w-[100vw] h-[100vh] '>
      <div className='w-[22rem] h-[22rem]  '>

      <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mt-12">
        <h1 className="text-2xl font-semibold mb-6 text-center text-orange-500">Sign In</h1>
        <div className="flex flex-col gap-4">
          <label htmlFor="email" className="font-semibold">
            Email:
          </label>
          <input
            type="text"
            id="email"
            className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onBlur={(e) => {
              data.current = { ...data.current, password: e.target.value };
            }}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-btn text-white font-semibold py-2 px-4 rounded-md  transition-colors mt-4"
        >
          Sign In
        </button>
      </form>
      </div>

    </div>
  )
}

export default SignIn