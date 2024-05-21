import React from 'react';

function Home() {
  return (
    <section className="relative flex items-center justify-start h-screen overflow-hidden text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/one.jpg" alt="Background" className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="absolute z-10 max-w-screen-xl left-[12%] p-10 px-4 py-8 mx-auto lg:py-16 lg:px-12">
        <p className=" text-thin text-[#E60035]  ">Welcome to BESTCAR</p>
        <h1 className="mt-4 text-6xl font-extrabold">
          Revive, Repair, <br />
          Relish the Ride!
        </h1>
        <p className="max-w-[29rem] mt-6 text-[20px]  "> 
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Minus, quaerat. Assumenda in corrupti earum quod nostrum.
        </p>
        <div className="flex mt-8">
          <button className="p-4 font-semibold bg-[#E60035]">
            Learn More
          </button>
          <div className="ml-4">
            <p>Requesting A Call</p>
            <p className="font-bold">(629) 555-0129</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
