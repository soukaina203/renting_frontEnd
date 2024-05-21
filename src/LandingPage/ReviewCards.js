import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BsFillStarFill } from 'react-icons/bs';

function ReviewCards() {
  const [data, setData] = useState([]);

  let fetchData = async () => {
    const datas = await axios.get("http://localhost:8000/api/review/custom");
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
                <div className="h-20 w-20 rounded-full overflow-hidden mr-3">
                  <img
                    src={`http://127.0.0.1:8000/images/${e.user.photo}`}
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <h2 className="text-xl font-semibold">{e.user.name}   </h2>

                <div className='flex gap-4 relative right-[-4rem] '>
                <h2 className='font-semibold text-xl relative right-[-0.5rem]'>{e.rating} </h2>
                <BsFillStarFill className='text-yellow-600 w-6 h-6  '/>
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
