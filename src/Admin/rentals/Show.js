import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import HeaderAdmin from '../header';

export default function VoirRental() {
  const [data, setData] = useState(null);
  const { id } = useParams();

  const fetchCar = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/rental/${id}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      setData(response.data.Rental);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCar();
  }, []);

  // Function to format time (remove seconds)
  const formatTime = (time) => {
    return time ? time.slice(0, -3) : '';
  };

  return (
    <div>
      <HeaderAdmin />
      <div className="flex justify-center">
        {data !== null ? (
          <div className="w-full md:w-2/3 lg:w-3/5 xl:w-2/5 bg-white shadow-lg rounded-lg mx-4 my-6 p-4">
            <div className="flex items-center justify-center">
              <img
                src={`http://127.0.0.1:8000/images/${data.car.photo}`}
                alt=""
                className="w-full h-48 object-cover object-center rounded-lg"
              />
            </div>
            <div className="mt-4">
              <h2 className="text-2xl font-semibold text-black">{data.user.name}</h2>
              <p className="text-gray-600 mb-4">Type: {data.car.model}</p>
              <div className="flex justify-between">
                <div className="text-gray-600">
                  <p>Price per day:</p>
                  <p>Rental start:</p>
                  <p>Rental end:</p>
                  <p>Hour of start:</p>
                  <p>Hour of finish:</p>
                  <p>Total Price:</p>
                </div>
                <div className="text-gray-900">
                  <p>{data.car.price_per_day} {data.currency}</p>
                  <p>{data.rental_start}</p>
                  <p>{data.rental_end}</p>
                  <p>{formatTime(data.hourStart)}</p>
                  <p>{formatTime(data.hourFinish)}</p>
                  <p>{data.total_price} {data.currency}</p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <Link
                to={`/admin/cars`}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
              >
                Back
              </Link>
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}
