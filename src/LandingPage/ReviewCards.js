import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ReviewCards() {
  const [data, setData] = useState([]);

  let fetchData = async () => {
    const datas = await axios.get("http://localhost:8000/api/reviews/get");
    setData(datas.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
    {data !== null
      ? data.map((e) => (
          <div key={e.id} className="bg-white shadow-lg rounded-lg overflow-hidden w-[22rem] ">
            <div className="relative">
              <div className="absolute bottom-0 right-0 bg-white rounded-full p-2">
                <p className="text-black font-semibold">{e.rating}</p>
              </div>
            </div>
            <div className="px-4 py-4">
              <div className="flex items-center mb-2">
                <div className="h-20 w-20 rounded-full overflow-hidden mr-3">
                  <img
                    src={`imgs/${e.user.photo}.jpg`}
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <h2 className="text-xl font-semibold">{e.user.name}</h2>
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
