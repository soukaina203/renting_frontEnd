import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Cards() {
  const [data, setData] = useState([]);

  let fetchData = async () => {
    const datas = await axios.get("http://localhost:8000/api/topCars");
    setData(datas.data.topCars);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="grid justify-center grid-cols-3 justify-items-center ">
      {data !== undefined
        ? data.map((e, i) => (
          <div key={i} className="max-w-xs w-full bg-white shadow-lg rounded-lg mx-4 my-6">
            <img
              src={`imgs/${e.photo}.jpg`}
              alt=""
              className="w-full h-48 object-cover object-center rounded-t-lg"
            />
            <div className="px-4 py-2">

              <h2 className="text-xl font-semibold text-black">{e.year}</h2>
              <p className="text-gray-600 font-bold">{e.model}</p>
              <p className="font-semibold text-btn">{e.price_per_day}$ per day</p>
              <div className="mt-auto">
                <button className="w-full p-2  rounded bg-btn  text-slate-50 mt-2">
                  <Link to="choose">Rent Now</Link>
                </button>
              </div>
              {/* <button className='p-2 bg-btn  rounded text-slate-50'><Link to="Choose">Rent Now</Link></button> */}

            </div>
          </div>
        ))
        : null}
    </div>
  );
}

export default Cards;
