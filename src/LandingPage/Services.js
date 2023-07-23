import React from 'react'
import Cards from './Cards'
function Services() {
    return (
        <div id='Services' className='w-[100vw] h-[40rem]  mt-[-5rem] '> {/* col*/}
            <div className="text-center "> {/*col titles*/}
                <h3 className='text-[25px]  relative top-[4.8rem] font-semibold'>BEST SERVICES</h3>
                <h2 className='text-4xl relative top-[5.2rem]'><b> Explore Out Top Deals <br />
                    From Top Rated Dealers </b>
                </h2>
            </div>
            <div className='mt-[6rem]'>
            <Cards />
            </div>
        </div>
    )
}

export default Services
