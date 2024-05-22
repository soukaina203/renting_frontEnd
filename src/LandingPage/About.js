import React from 'react';
import { IoMdDoneAll } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaGripLines } from "react-icons/fa";

function About() {
    const props = [
        { title: 'Free Delivery', desc: 'Home delivery, free shipping!', img: 'one' },
        { title: 'Moneyback Guarantee', desc: 'Always make sure your money!', img: 'two' },
        { title: '24/7 Online Support', desc: 'We always listen to your questions!', img: 'three' },
      ];
    
    const advantages = [
        {
            id: 1,
            props: [
                "Quick Service Times",
                "Free Trade Appraisal",
                "Genuine spare parts",
                "Unbeatable savings!"
            ]
        },
        {
            id: 2,
            props: [
                "Low Price Guarantee",
                "Trained Technicians",
                "Life-Time Warranty",
                "Automated testing lanes"
            ]
        }
    ];

    return (
        <section className="relative pt-20  bg-[#FEFEFE] z-40 lg:pt-[120px] pb-[8rem] lg:pb-[90px] lg:mb-[8rem]  ">
            <div className="container mx-auto ">
                <div className="flex flex-wrap items-center justify-center -mx-4">
                    <div className="w-full px-4 lg:w-4/12">
                        <div className="flex items-center justify-center -mx-3 sm:-mx-4">
                            <img src="sections/about1.png"  alt="office content 1" />
                        </div>
                    </div>

                    <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                        <div className="p-5 mt-10 lg:mt-0 lg:ml-4">
                         
                        
                            <div className="flex flex-col items-center justify-center mb-8 space-y-4 lg:mb-16 sm:flex-row sm:space-y-0 sm:space-x-1">

                                <div className="px-4 space-y-4 sm:px-8">
                                    <p className="text-[#E60035] text-lg flex items-center">
                                        <div className='w-12 h-[3px] mr-3 bg-[#E60035] '></div>
                                        KNOW ABOUT US</p>
                                    <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">Our Best Advantages</h2>
                                    <p className="text-gray-600">
                                        Et purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed eu massa eu faucibus. Urna fusce
                                    </p>
                                    <div className="flex flex-col gap-7 lg:flex-row">
                                        <ul key="1">
                                            {advantages[0].props.map((advantage) => (
                                                <li key={advantage} className='flex p-2'><IoMdDoneAll className='text-[#E60035] w-6 h-6 mr-3' />
                                                    {advantage}</li>
                                            ))}
                                        </ul>

                                        <ul key="2">
                                            {advantages[1].props.map((advantage) => (
                                                <li key={advantage} className='flex p-2'> <IoMdDoneAll className='text-[#E60035] w-6 h-6 mr-3' /> {advantage}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <button className="px-6 py-3 font-semibold text-white bg-[#E60035] uppercase hover:bg-opacity-80 flex">
                                        Read More<FaLongArrowAltRight className='w-8 h-6 ml-2 text-white' />

                                    </button>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

     
        
        </section>
    );
}

export default About;
