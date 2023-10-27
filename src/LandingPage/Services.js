import React from 'react'
import Cards from './Cards'
function Services() {
    return (
        <div id='Services' className='w-[100vw] h-[80rem]  md:h-[61rem] lg:h-[38rem]  flex flex-col   '> {/* col*/}
            <div className="text-center mb-[1rem]  "> {/*col titles*/}
                <h3 className='tetx-[21px] md:text-[25px] font-bold text-orange-500'>Best Services</h3>
                <h2 className='text-xl md:text-2xl lg:text-4xl '><b> Explore Out Top Deals <br />
                    From Top Rated Dealers </b>
                </h2>
            </div>
            <div className=''>
            <Cards />
            </div>
        </div>
    )
}

export default Services
