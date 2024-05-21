import React from 'react';

function Properties() {
  const props = [
    { title: 'Free Delivery', desc: 'Home delivery, free shipping!', img: 'one' },
    { title: 'Moneyback Guarantee', desc: 'Always make sure your money!', img: 'two' },
    { title: '24/7 Online Support', desc: 'We always listen to your questions!', img: 'three' },
  ];

  return (
    <section className="flex items-center justify-center w-full h-full py-8">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {props.map((property) => (
          <div key={property.title} className="flex p-6 transition-transform  translate-y-[-50%] transform bg-white  shadow-lg hover:scale-105">
            <div className="flex-shrink-0 p-4">
              <img src={`icons/${property.img}.png`} alt={property.title} className="w-16 h-16" />
            </div>
            <div className="flex flex-col justify-center ml-4">
              <h2 className="text-2xl text-[#E60035] font-semibold">{property.title}</h2>
              <p className="mt-2 text-gray-600">{property.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Properties;
