import React from 'react'

function Home() {
  return (
    <div id='Home' className="h-[100vh] lg:h-[35rem] flex md:flex-row md:gap-[1rem]  md:relative md:top-[1rem]
    bg-cover	
     lg:bg-heroSection 
    ">
      <div className="flex items-start ml-6 lg:ml-[5rem] flex-col  relative top-[2rem] md:top-[6rem]  md:h-[19rem] ">
        <div className='text-[2rem] lg:text-[4.5rem] font-semibold  '>

          <p className='text-orange-600 z-0 '>
            Looking To
          </p>
          <p>Rent A Car</p>
        </div >
        <div className=' w-[16rem] h-[50px]  font-semibold '>

          <p className='line-clamp-5 mt-3 md:line-clamp-6 lg:line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Odit, . Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo alias
            sequi iste labore cum, beatae molestias autem
            ullam fugit officiis velit corrupti et itaque doloribus nulla asperiores, dolor debitis? Labore.
            ullam fugit officiis velit corrupti et itaque doloribus nulla asperiores, dolor debitis? Labore.

          </p>
          <img src="/imgs/6.jpg" alt="" className='w-[16rem] md:hidden mt-3 z-4' />

        </div>
      </div>

      <img src="/imgs/6.jpg" alt="" className='hidden w-[19rem] h-[19rem] md:block md:relative md:top-[3.4rem] lg:hidden mt-3 z-4' />
    </div>
  )
}

export default Home