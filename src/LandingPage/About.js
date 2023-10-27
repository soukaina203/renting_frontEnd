import React from 'react'

function About() {
    return (
        <div id='About' className='w-[100%] h-[36rem] md:w-[100vw] md:h-[30rem] lg:h-[30rem] lg:mt-[2rem]'>

            <div className='flex flex-col w-[100vw] h-[40rem] md:h-[45rem] '>{/* flex-direction=column */}
                <div class="text-center ">
                    <h3 class="text-[21px] md:text-[25px] font-bold text-orange-500">About Us</h3>
                    <h2 class="text-xl md:text-2xl lg:text-4xl "><b>Best Customer Experience</b></h2>
                </div>
                <div className='flex flex-col md:flex-row justify-center gap-5 '> {/* row */}
                    <img src="imgs/about.png" alt="" className='md:w-[16rem] md:h-[17rem] lg:h-[60vh] lg:w-[40vw] mt-10 ' />

                    <div className='w-[16rem] font-semibold flex flex-col mt-1 md:mt-[4rem] ml-4 lg:w-[27rem] lg:mt-[4.8rem] '>
                        <h3 className='hidden lg:block   font-bold'>ABOUT US</h3>
                        <p className='mt-2 md:mt-0  line-clamp-[8]'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus vitae laboriosam numquam, mollitia dolore quia sunt, maiores aspernatur nesciunt pariatur deleniti. Nemo ad vero voluptatum harum voluptatibus, sit optio cum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse provident odio exercitationem doloribus quae fuga ex tenetur, repudiandae laudantium non temporibus ea expedita.
                        </p>
                        <button className='w-[8em] p-1 md:p-2 bg-btn rounded text-slate-50 md:w-[10em] mt-3'><a href="/choose">Learn more</a></button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default About
