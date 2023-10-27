import React from 'react'
import ReviewCards from './ReviewCards'

function Reviews() {
  return (
    <div id='Reviews' className='w-[100vw]  h-[80rem] md:h-[70rem] lg:h-[40rem] mt-[-5rem] '>{/* col */}
      <div className="text-center "> {/*col titles*/}
                <h3 className='text-[21px] md:text-[25px]  relative top-[4.8rem] font-semibold text-orange-500'>Reviews</h3>
                <h2 className='text-xl md:text-2xl lg:text-4xl relative top-[5.2rem]'><b> Whats Our Customer Say <br />
                    From Top Rated Dealers </b>
                </h2>
            </div>

   <div className='lg:mt-[7rem]'>
      <ReviewCards />
   </div >
    </div>
  )
}

export default Reviews
