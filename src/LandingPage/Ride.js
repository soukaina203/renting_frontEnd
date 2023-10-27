import React from 'react'

import {FaMapMarkerAlt} from 'react-icons/fa'
import {PiNotepad} from 'react-icons/pi'
import {AiFillCar} from 'react-icons/ai'
function Ride() {
    return (
<div id='Ride' className='w-full h-[60rem] md:h-[42rem] lg:h-[24rem] flex flex-col gap-6 '>
            <div className="text-center ">
                <h3 className='text-[21px] md:text-[25px]  text-orange-500  font-bold'>How It Works?</h3>
                <h2 className='text-xl md:text-2xl lg:text-4xl'><b>Rent With 3 Easy Steps </b></h2>
            </div>
            <div className='w-[100%] h-[61rem] md:h-[40rem]  lg:h-[24rem] flex flex-col gap-2 justify-center items-center 
            md:flex-row md:justify-center md:flex-wrap md:content-center   lg:gap-[5rem] lg:mt-[2rem] 
            '> 

                <div className=' w-[14rem] h-[16rem] '> 
            <FaMapMarkerAlt className='text-orange-500 w-[2.8rem] h-[2.8rem] ml-auto mr-auto ' />
                    <h3 className=' font-bold  text-center mt-2 lg:mt-[0.7rem]  lg:text-xl'>Choose A Location</h3>
                    <p className=" text-[23px] line-clamp-5 mt-2 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo totam placeat alias expedita itaque doloribus saepe odit architecto dolorum repellat aut quos explicabo laboriosam reiciendis numquam quis a, enim doloremque.</p>
                </div>

                <div className='w-[14rem] h-[16rem] '> 
                <PiNotepad className='text-orange-500 w-[3rem] h-[3rem] ml-auto mr-auto '/>
                    <h3 className=' text-center mt-2 font-bold lg:text-xl'>Pick-Up Date</h3>
                    <p className="text-center text-[23px] line-clamp-5 mt-2">Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Quo totam placeat alias expedita itaque doloribus saepe odit 
                    architecto dolorum repellat aut quos explicabo laboriosam reiciendis numquam quis a, enim doloremque.</p>
                </div>

                <div className='w-[14rem] h-[16rem] '> 
                    <AiFillCar  className='text-orange-500 w-[3rem] h-[3rem] ml-auto mr-auto'/>
                    <h3 className='text-center mt-2 font-bold lg:text-xl'>Book A Car</h3>
                    <p className="text-center text-[23px] line-clamp-5 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo totam placeat alias 
                    expedita itaque doloribus saepe odit architecto dolorum repellat aut quos explicabo laboriosam reiciendis numquam quis
                     a, enim doloremque.</p>
                </div>
            </div>
        </div>
    )
}

export default Ride
