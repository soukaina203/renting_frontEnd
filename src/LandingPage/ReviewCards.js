import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BsFillStarFill } from 'react-icons/bs';
import { apiUrl } from '../../environnement/environnement.prod';

function ReviewCards() {
  const [data, setData] = useState([]);

  let fetchData = async () => {
    const datas = await axios.get(`${apiUrl}/review/custom`);
    console.log(datas)
    setData(datas.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-[100%] h-[71rem] md:h-[50rem]  lg:h-[19rem] flex flex-col gap-[1rem] md:gap-2 justify-center items-center 
    md:flex-row md:justify-center md:flex-wrap md:content-center  lg:gap-[4rem] lg:mt-[2rem] 
    '">
    {data !== null
      ? data.map((e) => (
          <div key={e.id} className="bg-white shadow-lg rounded-lg overflow-hidden w-[16rem]
           h-[18.5rem] ">
         
            <div className="px-4 py-4">
              <div className="flex items-center mb-2">
                <div className="w-20 h-20 mr-3 overflow-hidden rounded-full">
                  <img
                    src={`${apiUrl}/images/${e.user.photo}`}
                    alt=""
                    className="object-cover object-center w-full h-full"
                  />
                </div>
                <h2 className="text-xl font-semibold">{e.user.name}   </h2>

                <div className='flex gap-4 relative right-[-4rem] '>
                <h2 className='font-semibold text-xl relative right-[-0.5rem]'>{e.rating} </h2>
                <BsFillStarFill className='w-6 h-6 text-yellow-600 '/>
                </div>


              </div>
              <p>{e.comment}</p>
            </div>
          </div>
        ))
      : null}
  </div>
  
  );
}

export default ReviewCards;
