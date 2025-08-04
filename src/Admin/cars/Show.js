import React, { useEffect, useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import HeaderAdmin from '../header';
import { FaArrowRight } from 'react-icons/fa6';
import { apiUrl } from '../../environnement/environnement.prod';

function VoirCar() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const source = queryParams.get('source'); // This will give you either 'dashboard' or 'welcome'

  const fetchCar = async () => {
    
    const response = await axios.get(`${apiUrl}/car/${id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    setData(response.data.car);
    console.log(response)


  };

  useEffect(() => {
    fetchCar();
  }, []);

  return (
    <div>
      <div className="flex justify-center">
        {data !== null ?
          <div className="w-[60%] bg-white shadow-lg rounded-lg mx-4 my-6">
            <img
              src={`${apiUrl}/images/${data.photo}`}
              alt=""
              className="w-full h-[19rem] object-cover object-center rounded-t-lg"
            />
            <div className="px-6 py-4">
              <div className="flex justify-between mb-2 ">
                <h1 className='text-[1.4rem] font-bold'>
                  {data.model}
                </h1>
                <p className='font-bold text-xl text-[#E60035] '>  ${data.price_per_day}/day </p>

              </div>

              <div className='flex flex-col flex-wrap'>
                <div className="ml-1 text-[1.3rem] text-gray-700">
                  <span className="mr-2 font-medium">Make:</span> {data.make}
                </div>

                <div className="ml-1 text-[1.3rem] text-gray-700">
                  <span className="mr-2 font-medium">Year:</span> {data.year}
                </div>
                <div className="ml-1 text-[1.3rem] text-gray-700">
                  <span className="mr-2 font-medium">Color:</span> {data.color}
                </div>

                <div className="ml-1 text-[1.3rem] text-gray-700">
                  <span className="mr-2 font-medium">Type:</span> {data.type}
                </div>
                {data.available === 0 ?
                  <div className="ml-1 text-[1.3rem] text-gray-700">
                    <span className="mr-2 font-medium">Availabilty:</span> Available
                  </div> :
                  <div className="ml-1 text-[1.3rem] text-gray-700">
                    <span className="mr-2 font-medium">Availabilty:</span> Not Available
                  </div>
                }

              </div>
                <div>

                  <Link to={`/user/welcome`}>
                    <button className="before:ease relative h-12 w-40 mt-8  font-semibold flex
             justify-center items-center gap-2 mr-auto ml-auto overflow-hidden border
              border-[#E60035] text-white group
              shadow-2xl before:absolute before:left-0 
              before:-ml-2 before:h-48 before:w-48 before:origin-top-right
               before:-translate-x-full before:translate-y-12 before:-rotate-90
                before:bg-white before:transition-all before:duration-300 hover:text-white
                 hover:shadow-[#E60035] hover:bg-[#E60035] hover:before:-rotate-180">
                      <span className='relative text-[#E60035] z-20 group-hover:text-white'>

                        Back

                      </span>
                      <FaArrowRight className="relative text-[#E60035] 
                  z-20 group-hover:text-white ml-2" />
                    </button>
                  </Link>
                </div>
            </div>
          </div>
          : ""}
      </div>
    </div>
  )
}

export default VoirCar;
