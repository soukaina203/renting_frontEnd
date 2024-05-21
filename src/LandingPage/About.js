import React from 'react'

function About() {
    return (
<section class="">
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light  sm:text-lg ">
            <p className='text-[#E60035] '> KNOW ABOUT US  </p>

            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-black
            ">Our Best Advantages</h2>
            <p class="mb-4">
            Et purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed eu massa eu faucibus. Urna fusce
            </p>


            <button className="p-3 font-semibold  text-white bg-[#E60035]">
           Read &#8594;
          </button>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
            <img class="w-full rounded-lg" src="about.png" alt="office content 1"/>
        </div>
    </div>
</section>

          
    )
}

export default About
