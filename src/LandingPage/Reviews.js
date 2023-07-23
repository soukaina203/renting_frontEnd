import React from 'react'
import ReviewCards from './ReviewCards'

function Reviews() {
  return (
    <div id='Reviews' className='w-[100vw] h-[40rem]  mt-[-5rem] '>{/* col */}
      <div className="text-center "> {/*col titles*/}
                <h3 className='text-[25px]  relative top-[4.8rem] font-semibold'>REVIEWS</h3>
                <h2 className='text-4xl relative top-[5.2rem]'><b> Whats Our Customer Say <br />
                    From Top Rated Dealers </b>
                </h2>
            </div>

   <div className='mt-[10rem]'>
    {/*call cards of reviews  */}
      <ReviewCards />
   </div >
    </div>
  )
}

export default Reviews
