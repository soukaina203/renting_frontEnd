import React from 'react';

import { HiOutlineShoppingCart } from "react-icons/hi2";
import { FaRegFaceSmile } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";
import { LiaAwardSolid } from "react-icons/lia";
import { VscSmiley } from "react-icons/vsc";
import ImageSlider from './Slider';

function Ride() {
  const props = [
    { title: '1.2k+', desc: 'Products In Stock', img: <HiOutlineShoppingCart className='text-[#E60035] font-medium w-[3rem] h-[3rem] ' /> },
    { title: '2.5M+', desc: 'Happy Clients', img: <VscSmiley className='text-[#E60035] w-[3rem] h-[3rem]' /> },
    { title: '255+', desc: 'Professional Exparts', img: <GoPerson className='text-[#E60035]  w-[3rem] h-[3rem]' /> },
    { title: '1.2k+', desc: 'Win Awards', img: <LiaAwardSolid className='text-[#E60035] w-[3rem] h-[3rem]' /> },
  ];

  return (
    <div id='Ride' className='flex flex-col w-full h-full gap-1 mb-8 bg-black'> {/* Add mb-8 for margin-bottom */}

      <section className="z-40 flex items-center justify-center w-full h-full py-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {props.map((property) => (
            <div key={property.title}
              className="h-full w-full p-[4rem] translate-y-[-70%] bg-[#FEFEFE] pb-6 mx-auto my-auto
              duration-300 shadow-xl cursor-pointer">

              <div className="flex flex-col items-center justify-center gap-2 ml-4">
                <div className='bg-red-300 rounded-full w-[4rem] h-[4rem] flex justify-center items-center'>
                  {property.img}
                </div>
                <h2 className="text-3xl font-semibold text-black">{property.title}</h2>
                <p className="mt-2 text-black">{property.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className='flex items-center justify-center w-full pl-[3rem] pr-[3rem] bg-black'>
        <ImageSlider />
      </div>
    </div>
  );
}

export default Ride;
