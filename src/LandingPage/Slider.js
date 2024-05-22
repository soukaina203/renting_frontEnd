import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const slides = [
  {
    image: 'one.jpg',
    title: 'Car Back Light',
    description: '120 kinds of automobile lights',
    buttonText: 'Shop Now'
  },
  {
    image: 'one.jpg',
    title: 'Car Steering Wheel',
    description: '120 kinds of automobile lights',
    buttonText: 'Shop Now'
  },
  {
    image: 'one.jpg',
    title: 'Car Body & Engine',
    description: '120 kinds of automobile lights',
    buttonText: 'Shop Now'
  },
  {
    image: 'one.jpg',
    title: 'Car Tire',
    description: '120 kinds of automobile tires',
    buttonText: 'Shop Now'
  },
  {
    image: 'one.jpg',
    title: 'Car Seat Cover',
    description: '120 kinds of automobile seat covers',
    buttonText: 'Shop Now'
  },
  {
    image: 'one.jpg',
    title: 'Car Mirror',
    description: '120 kinds of automobile mirrors',
    buttonText: 'Shop Now'
  }
];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative flex items-center justify-center w-full h-full lg:pb-[4rem] overflow-hidden bg-black">
        
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 33.3333}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="flex flex-col items-center flex-shrink-0 w-1/3 bg-black/85" >
            <img className="object-cover w-[24rem] h-48 rounded-lg" src={slide.image} alt={`Slide ${index + 1}`} />
            <div className="mt-4 text-center">
              <h2 className="mb-2 text-2xl font-semibold text-white">{slide.title}</h2>
              <p className="mb-4 text-gray-300">{slide.description}</p>
              <button className="px-4 py-2 font-semibold text-white bg-red-600 hover:bg-red-700">{slide.buttonText}</button>
            </div>
          </div>
        ))}
      </div>


      <button
        className="absolute p-2 text-white transform -translate-y-1/2  top-1/2 left-2 bg-black/50 
         rounded-md hover:bg-[#E60035] "
        onClick={handlePrev}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        className="absolute p-2 text-white transform -translate-y-1/2  top-1/2 right-2 bg-black/50 rounded-md hover:bg-[#E60035] "
        onClick={handleNext}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

export default ImageSlider;
