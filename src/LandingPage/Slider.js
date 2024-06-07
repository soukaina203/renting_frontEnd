import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

const slides = [
  {
    image: 'services/signUp.jpeg',
    title: 'Car Back Light',
    description: '120 kinds of automobile lights',
    buttonText: 'Shop Now'
  },
  {
    image: 'services/login.jpeg',
    title: 'Car Steering Wheel',
    description: '120 kinds of automobile lights',
    buttonText: 'Shop Now'
  },
  {
    image: 'services/login1.jpeg',
    title: 'Car Body & Engine',
    description: '120 kinds of automobile lights',
    buttonText: 'Shop Now'
  },
  {
    image: 'services/login3.jpeg',
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
    image: 'services/wheel.jpg',
    title: 'Car Mirror',
    description: '120 kinds of automobile mirrors',
    buttonText: 'Shop Now'
  }
];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full h-full lg:pb-[4rem] overflow-hidden bg-black">
      <div className={`flex transition-transform mb-8 lg:mb-0 duration-500 ease-in-out ${isLargeScreen ? 'w-[300%]' : 'w-full'}`} style={{ transform: `translateX(-${currentIndex * (isLargeScreen ? 33.3333 : 100)}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className={`flex flex-col items-center   flex-shrink-0 ${isLargeScreen ? 'w-1/3' : 'w-full'} bg-black/85`}>
            <img className="object-cover w-[24rem] h-48 rounded-lg" src={slide.image} alt={`Slide ${index + 1}`} />
            <div className="mt-4 text-center">
              <h2 className="mb-2 text-2xl font-semibold text-white uppercase">{slide.title}</h2>
              <p className="mb-4 font-semibold text-gray-300">{slide.description}</p>
              <button 
               class="before:ease lg:flex hidden mr-auto ml-auto   relative h-12 w-40
                uppercase font-semibold  justify-center items-center gap-2 
                 overflow-hidden
               border border-[#E60035] text-white 
                shadow-2xl before:absolute before:left-0 before:-ml-2
                before:h-48 before:w-48 before:origin-top-right before:-translate-x-full 
                before:translate-y-12 before:-rotate-90 before:bg-black before:transition-all before:duration-300
                 hover:text-white hover:shadow-[#E60035]
                  hover:bg-[#E60035] hover:before:-rotate-180"
              
              >
                
                <span className="relative z-10 font-semibold">  {slide.buttonText}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        className="absolute p-2 text-white transform -translate-y-1/2 top-1/2 left-2 bg-black/50 rounded-md hover:bg-[#E60035]"
        onClick={handlePrev}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        className="absolute p-2 text-white transform -translate-y-1/2 top-1/2 right-2 bg-black/50 rounded-md hover:bg-[#E60035]"
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
