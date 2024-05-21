import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Cards() {
  const [data, setData] = useState([]);

  let fetchData = async () => {
    const datas = await axios.get("http://localhost:8000/api/topCars");
    console.log(datas.data.topCars)

    setData(datas.data.topCars);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
      <div className='w-[100%] h-[71rem] md:h-[50rem]  lg:h-[24rem] flex flex-col gap-[1rem] md:gap-2 justify-center items-center 
            md:flex-row md:justify-center md:flex-wrap md:content-center  lg:gap-[4rem] lg:mt-[2rem] 
            '>

        {data !== undefined
          ? data.map((e, i) => (
            <div key={i} className="w-[16rem] h-[21.5rem]  lg:w-[17rem] bg-white shadow-lg rounded-lg overflow-hidden ">
              <img
                src={`http://127.0.0.1:8000/images/${e.photo}`}
                alt=""
                className="object-cover object-center w-full h-48 rounded-t-lg"
              />
              <div className="flex flex-col justify-between px-4 py-3">
                <p className="text-gray-700 font-bold text-[20px] uppercase">{e.model} </p>
                <p className='line-clamp-2 text-[15px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus ducimus id officia eveniet voluptatibus dolorem.
                  Provident, accusamus qui perferendis ab obcaecati odit est? Modi ad cum eaque molestiae ullam at.</p>
                <p className="text-[18px]   text-red-600 uppercase tracking-wide"> {e.price_per_day}$/day</p>
                <button className="px-4 py-1 font-bold  border-[2px] mt-2  border-btn  text-btn rounded  mr-2 transition-colors duration-300">
                  <Link to={`/car/${e.id}/rent`}>Rent Now</Link>
                </button>
              </div>


            </div>



          ))
          : null}
      </div>

  );
}

export default Cards;
