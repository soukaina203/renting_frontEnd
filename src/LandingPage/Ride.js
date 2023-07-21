import React from 'react'

import {FaMapMarkerAlt} from 'react-icons/fa'
import {PiNotepad} from 'react-icons/pi'
import {AiFillCar} from 'react-icons/ai'
function Ride() {
    return (
        <div id='Ride' className='w-[100vw] h-[40rem] '> {/* col */}
            <div className="text-center ">
                <h3 className='text-[25px]  relative top-[4.8rem] font-semibold'>HOW ITS WORK</h3>
                <h2 className='text-4xl relative top-[5.2rem]'><b>Rent With 3 Easy Steps </b></h2>
            </div>


            <div className='grid justify-center grid-cols-3 mt-[8rem] gap-9 ml-8  '> {/* row     add icons */}

                <div className='iconDiv'> 
            <FaMapMarkerAlt className='text-orange-500 w-[2.5rem] mt-4 h-[2.8rem] ml-[8.75rem] mb-4' />
                    <h3 className=' font-bold  text-center '>Choose A Location</h3>
                    <p className="text-center text-[22px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo totam placeat alias expedita itaque doloribus saepe odit architecto dolorum repellat aut quos explicabo laboriosam reiciendis numquam quis a, enim doloremque.</p>
                </div>

                <div className='iconDiv'> 
                <PiNotepad className='text-orange-500 w-[3rem] mt-4 h-[3rem] ml-[8.75rem] mb-4'/>
                    <h3 className=' text-center  font-bold'>Pick-Up Date</h3>
                    <p className="text-center text-[22px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo totam placeat alias expedita itaque doloribus saepe odit architecto dolorum repellat aut quos explicabo laboriosam reiciendis numquam quis a, enim doloremque.</p>
                </div>

                <div className='iconDiv'> 
                    <AiFillCar  className='text-orange-500 w-[3rem] mt-4 h-[3rem] ml-[8.75rem] mb-4'/>
                    <h3 className='-500 font-bold text-center '>Book A Car</h3>
                    <p className="text-center text-[22px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo totam placeat alias expedita itaque doloribus saepe odit architecto dolorum repellat aut quos explicabo laboriosam reiciendis numquam quis a, enim doloremque.</p>
                </div>
            </div>
        </div>
    )
}

export default Ride
