import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

export default function Services() {
  return (
    <div id='Services' className="relative flex items-center justify-center w-full h-full py-16 bg-gray-100"> {/* Add py-16 for padding */}
      <div>

        {/* Paragraphs */}
        <div className='flex flex-col items-center justify-center '>
          <p className="text-[#E60035] text-lg justify-center p-2 font-semibold flex items-center">
            <div className='w-12 h-[3px] mr-3 bg-[#E60035] '></div>
            KNOW ABOUT US
            <div className='w-12 h-[3px] ml-3 bg-[#E60035] '></div>

          </p>

          <h1 className='max-w-2xl p-2 ml-auto mr-auto text-4xl font-extrabold text-center uppercase'>Strategic Solutions For A Thriving Future</h1>
        </div>


        <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 place-items-center lg:grid-cols-3">

          <div
            class="relative grid h-[31rem] w-full max-w-[28rem] flex-col items-end justify-center 
  overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
            <div
              className="absolute inset-0 w-full h-full m-0 overflow-hidden text-gray-700 bg-transparent bg-center bg-cover rounded-none shadow-none bg-service1 bg-clip-border"
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

                <span className="relative z-10">  Read More</span>
                <FaArrowRight className="relative z-10" />
              </button>


            </div>
          </div>
          <div
            class="relative grid h-[31rem] w-full max-w-[28rem] flex-col items-end justify-center 
  overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
            <div
              className="absolute inset-0 w-full h-full m-0 overflow-hidden text-gray-700 bg-transparent bg-center bg-cover rounded-none shadow-none bg-service2 bg-clip-border"
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

                <span className="relative z-10">  Read More</span>
                <FaArrowRight className="relative z-10" />
              </button>


            </div>
          </div>
          <div
            class="relative grid h-[31rem] w-full max-w-[28rem] flex-col items-end justify-center 
  overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
            <div
              className="absolute inset-0 w-full h-full m-0 overflow-hidden text-gray-700 bg-transparent bg-center bg-cover rounded-none shadow-none bg-service3 bg-clip-border"
            >
              <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
            </div>
            <div class="relative p-6 px-6 py-14 md:px-12">
              <h2 class="mb-6 block font-sans text-2xl  leading-[1.5] uppercase font-extrabold tracking-normal text-white antialiased">
                Precision Auto Works Solutions Services              </h2>
              <button className="before:ease relative h-12 w-40
               uppercase font-semibold flex justify-center
                items-center gap-2 mr-auto ml-auto  overflow-hidden
               border border-[#E60035] text-white 
                shadow-2xl before:absolute before:left-0 before:-ml-2
                before:h-48 before:w-48 before:origin-top-right before:-translate-x-full 
                before:translate-y-12 before:-rotate-90 before:bg-black before:transition-all before:duration-300
                 hover:text-white hover:shadow-[#E60035]
                  hover:bg-[#E60035] hover:before:-rotate-180">

                <span className="relative z-10">  Read More</span>
                <FaArrowRight className="relative z-10" />
              </button>



            </div>
          </div>





        </div>
      </div>
    </div>
  );
}

