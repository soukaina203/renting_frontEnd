import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

function Cta() {
    return (
        <div className="relative w-full h-[12rem] bg-hero bg-cover bg-no-repeat">
            <div className="absolute inset-0 bg-red-700 opacity-50"></div>

            <div className='relative z-10 flex items-center '>
                <div className='relative z-10 flex flex-col pl-[8rem] pt-[3rem] justify-start'>

                <p className="flex items-center p-2 font-semibold text-white">
                    CONTACT US
                    <div className='w-12 h-[3px] ml-3 bg-white '></div>
                </p>
                <h1 className='max-w-2xl p-2 text-4xl font-extrabold text-left text-white uppercase'>Where Engines Roar and Problems Soar</h1>

                </div>

                <button class="before:ease relative h-16  w-40 mt-[3rem] uppercase font-semibold flex justify-center items-center gap-2 mr-auto ml-auto  overflow-hidden
               border border-[#E60035] text-white 
                shadow-2xl before:absolute before:left-0 before:-ml-2
                before:h-48 before:w-48 before:origin-top-right before:-translate-x-full 
                before:translate-y-12 before:-rotate-90 before:bg-[#E60035] before:transition-all before:duration-300
                 hover:text-[#E60035] hover:shadow-[#E60035] hover:before:-rotate-180">

                    <span className="relative z-10">  Read More</span>
                    <FaArrowRight className="relative z-10" />
                </button>

            </div>
        </div>

    )
}

export default Cta
