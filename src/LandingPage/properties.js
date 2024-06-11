import React from 'react';
import {  Zoom } from 'react-reveal';

function Properties() {
  const props = [
    { title: 'Free Delivery', desc: 'Home delivery, free shipping!', img: 'one' },
    { title: 'Moneyback Guarantee', desc: 'Always make sure your money!', img: 'two' },
    { title: '24/7 Online Support', desc: 'We always listen to your questions!', img: 'three' },
  ];

  return (
    <Zoom>
    <section className="flex items-center justify-center w-full h-full py-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {props.map((property) => (
          <div key={property.title} className="flex hover:-translate-y-1n hover:shadow-xl transition-all hover:scale-110  cursor-pointer  duration-300  p-6 
           translate-y-[-50%] transform bg-[#FEFEFE] shadow-lg">
            <div className="flex-shrink-0 p-4">
              <img src={`icons/${property.img}.png`} alt={property.title} className="w-16 h-16" />
            </div>
            <div className="flex flex-col justify-center ml-4">
              <h2 className="text-2xl text-[#E60035] font-Yantramanav-Black">{property.title}</h2>
              <p className="mt-2 text-gray-600">{property.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </Zoom>
  );
}

export default Properties;
