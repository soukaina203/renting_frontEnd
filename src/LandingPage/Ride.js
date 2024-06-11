import React from 'react';
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { GoPerson } from "react-icons/go";
import { LiaAwardSolid } from "react-icons/lia";
import { VscSmiley } from "react-icons/vsc";
import { Zoom } from 'react-reveal';
import ImageSlider from './Slider';

function Ride() {
  const props = [
    { id:1,title: '1.2k+', desc: 'Products In Stock', img: <HiOutlineShoppingCart className='text-[#E60035] font-medium w-[3rem] h-[3rem]' /> },
    { id:2,title: '2.5M+', desc: 'Happy Clients', img: <VscSmiley className='text-[#E60035] w-[3rem] h-[3rem]' /> },
    { id:3,title: '255+', desc: 'Professional Exparts', img: <GoPerson className='text-[#E60035]  w-[3rem] h-[3rem]' /> },
    { id:4,title: '1.2k+', desc: 'Win Awards', img: <LiaAwardSolid className='text-[#E60035] w-[3rem] h-[3rem]' /> },
  ];


  return (
    <Zoom>
      <div id='Ride' className='z-30 flex flex-col w-full h-full gap-1 bg-black'>
        <section className="z-50 flex items-center justify-center w-full h-full py-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {props.map((property, i) => (
              <div key={property.id}
                className="h-full w-full p-[4rem] translate-y-[-70%] bg-[#FEFEFE] pb-6 mx-auto my-auto
                duration-300 shadow-xl cursor-pointer
                
                transform  hover:-translate-y-1n hover:shadow-xl hover:scale-110 
                ">
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
    </Zoom>
  );
}

export default Ride;
