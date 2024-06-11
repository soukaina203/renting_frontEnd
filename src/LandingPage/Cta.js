import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { Zoom } from 'react-reveal'
import { Link } from 'react-router-dom'

function Cta() {
    return (
        <Zoom>
        <div className="relative w-full h-full bg-no-repeat bg-cover bg-hero">
            <div className="absolute inset-0 bg-red-700 opacity-50"></div>
            <div className='flex items-center justify-center '>

                <div className='relative z-10 flex flex-col items-center lg:gap-[12rem] lg:mt-7 justify-between md:flex-row '>
                    <div className='relative z-10 flex flex-col  pt-[3rem] md:mb-5 lg:mb-8'>

                        <p className="flex items-center ml-auto mr-auto font-semibold text-center text-white justify-centerp-2 font-Yantramanav-Black md:ml-0 md:mr-0 md:text-left">
                            CONTACT US
                            <div className='w-12 h-[3px]  md:ml-3  bg-white '></div>
                        </p>
                        <h1 className='max-w-2xl p-2 text-4xl font-extrabold text-center text-white uppercase lg:pt-3 lg:p-0 md:text-left'>Where Engines Roar and Problems Soar</h1>

                    </div>
                    <Link to='/signIn' >

                    <button class="before:ease relative h-16 mb-3 lg:mb-0  w-40 mt-[3rem] uppercase font-semibold flex justify-center items-center gap-2 mr-auto ml-auto  overflow-hidden
               border border-[#E60035] text-white 
                shadow-2xl before:absolute before:left-0 before:-ml-2
                before:h-48 before:w-48 before:origin-top-right before:-translate-x-full 
                before:translate-y-12 before:-rotate-90 before:bg-[#E60035] before:transition-all before:duration-300
                 hover:text-[#E60035] hover:shadow-[#E60035] hover:before:-rotate-180">

                        <span className="relative z-10 ">  Read More</span>
                        <FaArrowRight className="relative z-10" />
                    </button>
                    </Link>
                </div>

            </div>
        </div>
        </Zoom>

    )
}

export default Cta
