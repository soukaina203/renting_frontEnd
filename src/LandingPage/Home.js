import React from 'react'

function Home() {
  return (
    <div id='Home' className="h-[33rem]  lg:h-[35rem] flex  md:flex-row z-4   
    bg-cover	
     lg:bg-heroSection 
    ">
      <div className="w-[100%] flex items-center flex-col  lg:ml-[5rem]   relative top-[2rem] md:top-[6rem]  md:h-[19rem] ">
        <div className='text-4xl lg:text-[5rem] font-semibold  lg:absolute lg:left-4 lg:top-12'>
          <div className='w-[16rem] lg:w-[30rem] lg:h-[10rem] lg:flex lg:flex-col lg:gap-[4rem]  '>
            <p className='text-orange-600 z-0 '>
              Looking To
            </p>
            <p>Rent A Car</p>

          </div>
        </div >
        <div className=' w-[16rem] h-[50px] font-semibold '>

          <p className='line-clamp-5 mt-1 md:line-clamp-6 lg:line-clamp-2 lg:absolute lg:left-4 lg:top-[14rem] lg:w-[16rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Odit, . Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo alias
            sequi iste labore cum, beatae molestias autem
            ullam fugit officiis velit corrupti et itaque doloribus nulla asperiores, dolor debitis? Labore.
            ullam fugit officiis velit corrupti et itaque doloribus nulla asperiores, dolor debitis? Labore.

          </p>
          <img src="/imgs/6.jpg" alt="" className='w-[16rem] md:hidden mt-3 z-4' />

        </div>
      </div>

      <img src="/imgs/6.jpg" alt="" className='hidden w-[19rem] h-[19rem] md:block md:relative md:top-[3.4rem] lg:hidden mt-3 z-4 md:mr-3' />
    </div>
  )
}

export default Home