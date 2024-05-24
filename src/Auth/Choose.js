import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { IoSettingsOutline } from "react-icons/io5";

function Choose() {
  return (
    <div>

{/* <img src="/icons/settings.png" alt="Settings Icon" className="absolute top-[5rem] left-[5rem] w-28 h-28 animate-spin-slow" />
<img src="/icons/settings.png" alt="Settings Icon" className="absolute top-[7.5rem] left-[7.5rem] w-20 h-20 animate-spin-slow" /> */}

<IoSettingsOutline className="absolute top-[5rem] left-[5rem] text-[#E60035] w-28 h-28 animate-spin-slow"/>
<IoSettingsOutline className="absolute top-[10rem] left-[10rem] text-[#E60035] w-20 h-20 animate-spin-slow"/>

    <div className="flex items-center justify-center h-screen gap-6 ">
      {/* Sign Up Card */}
      <div
        class="relative grid h-[31rem] w-full max-w-[28rem] flex-col 
        items-end justify-center 
  overflow-hidden rounded-xl bg-white bg-clip-border 
  text-center text-gray-700">
        <div
          className="absolute inset-0 w-full h-full m-0 overflow-hidden text-gray-700 bg-transparent bg-center bg-cover rounded-none shadow-none bg-signUp bg-clip-border"
        >
          <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
        </div>
        <div class="relative p-6 px-6 py-14 md:px-12">
          <h2 class="mb-6 block font-sans text-2xl  leading-[1.5] uppercase font-extrabold tracking-normal text-white antialiased">
            Strategic guidance for your business success
          </h2>
          <button class="before:ease relative h-12 w-40 uppercase font-semibold flex justify-center items-center gap-2 mr-auto ml-auto  overflow-hidden
               border border-[#E60035] text-white 
                shadow-2xl before:absolute before:left-0 before:-ml-2
                before:h-48 before:w-48 before:origin-top-right before:-translate-x-full 
                before:translate-y-12 before:-rotate-90 before:bg-black before:transition-all before:duration-300
                 hover:text-white hover:shadow-[#E60035] hover:bg-[#E60035] hover:before:-rotate-180">

            <span className="relative z-10">
              <Link to="/signUp">Sign Up</Link>

            </span>
            <FaArrowRight className="relative z-10" />
          </button>


        </div>
      </div>

      <div
            class="relative grid h-[31rem] w-full max-w-[28rem] flex-col items-end justify-center 
  overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
            <div
              className="absolute inset-0 w-full h-full m-0 overflow-hidden text-gray-700 bg-transparent bg-center bg-cover rounded-none shadow-none bg-login bg-clip-border"
            >
              <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
            </div>
            <div class="relative p-6 px-6 py-14 md:px-12">
              <h2 class="mb-6 block font-sans text-2xl  leading-[1.5] uppercase font-extrabold tracking-normal text-white antialiased">
                Dependable Car Repair Solutions Services
              </h2>
              <button class="before:ease relative h-12 w-40 uppercase font-semibold flex justify-center items-center gap-2 mr-auto ml-auto  overflow-hidden
               border border-[#E60035] text-white 
                shadow-2xl before:absolute before:left-0 before:-ml-2
                before:h-48 before:w-48 before:origin-top-right before:-translate-x-full 
                before:translate-y-12 before:-rotate-90 before:bg-black before:transition-all before:duration-300
                 hover:text-white hover:shadow-[#E60035] hover:bg-[#E60035] hover:before:-rotate-180">

                <span className="relative z-10"> 
      <Link to="/signIn">Login</Link>
                
                </span>
                <FaArrowRight className="relative z-10" />
              </button>


            </div>
          </div>

    </div>
    </div>
  );
}

export default Choose;
