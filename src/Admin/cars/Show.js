import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import HeaderAdmin from '../header';

function VoirCar() {
  const [data, setData] = useState(null);
  const { id } = useParams();

  const fetchCar = async () => {
    const response = await axios.get(`http://127.0.0.1:8000/api/car/${id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    setData(response.data.car);
  };

  useEffect(() => {
    fetchCar();
  }, []);

  return (
    <div>
      <HeaderAdmin />
      <div className="flex justify-center">
        {data !== null ?
          <div className="w-[60%] bg-white shadow-lg rounded-lg mx-4 my-6">
            <img
              src={`http://127.0.0.1:8000/images/${data.photo}`}
              alt=""
              className="w-full h-[19rem] object-cover object-center rounded-t-lg"
            />
            <div className="px-4 py-2">
              <h2 className="text-2xl font-semibold text-black">{data.make} {data.model}</h2>
              <p className="text-gray-600 font-bold">Type: {data.type}</p>
              <p className="text-gray-600 font-bold">Color: {data.color}</p>
              <p className="text-gray-600 font-bold">Year: {data.year}</p> 
              <p className="text-gray-600 font-bold">Available: {data.available === 1 ? 'Yes' : 'No'}</p>
              <p className="text-gray-600 font-bold">Price per day: {data.price_per_day}$</p>

              {/* Additional car details can be displayed here */}
              {/* <p className="text-gray-600 font-bold">Mileage: {data.mileage}</p>
              <p className="text-gray-600 font-bold">Color: {data.color}</p> */}

              <Link to={`/admin/cars`} className=" inline-block mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">Back</Link>
            </div>
          </div>
          : ""}
      </div>
    </div>
  )
}

export default VoirCar;
