import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

function Home() {
  return (
    <section className="relative flex items-center justify-center h-screen overflow-hidden text-white lg:justify-start">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/one.jpg" alt="Background" className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="absolute z-10 max-w-screen-xl p-4 mx-auto lg:left-[12%] lg:py-16 lg:px-12 text-center lg:text-left">
        <p className="text-thin text-[18px] text-[#E60035]">Welcome to BESTCAR</p>
        <h1 className="mt-4 text-6xl font-extrabold lg:text-6xl">
          Revive, Repair, <br className='hidden lg:block' />
          Relish the Ride!
        </h1>

        
        <p className="mt-6 text-lg lg:max-w-[29rem] lg:text-[20px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Minus, quaerat. Assumenda in corrupti earum quod nostrum.
        </p>
        <div className="flex flex-col gap-3 m-5 mt-8 space-y-4 md:flex-row lg:space-y-0 lg:space-x-4">

          <button className="w-full lg:hidden  p-3 font-semibold bg-[#E60035] lg:w-auto">
            Learn More
          </button>

          <button class="before:ease lg:flex hidden   relative h-12 w-40 uppercase font-semibold  justify-center items-center gap-2  overflow-hidden
               border border-[#E60035] text-white 
                shadow-2xl before:absolute before:left-0 before:-ml-2
                before:h-48 before:w-48 before:origin-top-right before:-translate-x-full 
                before:translate-y-12 before:-rotate-90 before:bg-black before:transition-all before:duration-300
                 hover:text-white hover:shadow-[#E60035]
                  hover:bg-[#E60035] hover:before:-rotate-180">

                <span className="relative z-10">  Learn More</span>
                <FaArrowRight className="relative z-10" />
              </button>

          <div className="w-full p-1 border-2 border-[#E60035] lg:border-none lg:ml-4 lg:w-auto">
            <p>Requesting A Call</p>
            <p className="font-bold">(629) 555-0129</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
