import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import HeaderAdmin from '../header';
axios.defaults.withCredentials = true;

function AllCars() {
  const [data, setData] = useState([]);
  const [permanent, setPermanent] = useState([]);// because   const [data, setData] = useState([]); i use it also for filtring
  const [TypeFilter, setTypeFiltered] = useState([]);
  const [allCars, setallCars] = useState([]);
  const [msg, setMsg] = useState('');

  let fetchData = async () => {
    const datas = await axios.get("http://localhost:8000/api/carsForAdmin", {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    setData(datas.data.cars); // i use it in filters 
    setTypeFiltered(datas.data.Type)
    setallCars(datas.data.groupes)
    setPermanent(datas.data.cars) // unchangebal array of cars that i use when the user press on filter all 
  }

  useEffect(() => {
    fetchData();
  }, []);
  let filterByType = (e) => {
    for (const key in allCars) {
      if (e === key) {
        console.log(allCars[key])
        setData(allCars[key])
        break
      } else {

        setData(permanent)
      }
    }
  }
  let deleteClient = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/car/${id}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      fetchData();
    } catch (error) {
      setMsg('Failed to delete client.');
    }
  }

  return (
    <div>
      <HeaderAdmin />
      <div className="flex items-center justify-between px-4 py-2">
        <h1 className="text-2xl font-bold">All Cars</h1>
        <button className="px-4 py-2 text-white bg-orange-500 rounded-md shadow-md hover:bg-orange-600">
          <Link to="/car/create">Create A Car</Link>
        </button>
      </div>
      <div className="flex ml-4 mr-2">
        <div className="w-64 mr-4 border border-btn rounded mt-7">
          <h2 className="font-semibold ml-6 mt-6">Car Type</h2>
          <p
            className="cursor-pointer hover:bg-gray-200 px-4 py-2"
            onClick={() => {
              filterByType('all');
            }}
          >
            All
          </p>
          {TypeFilter !== undefined ? (
            TypeFilter.map((e) => (
              <p
                key={e}
                className="cursor-pointer hover:bg-gray-200 px-4 py-2"
                onClick={() => {
                  filterByType(e);
                }}
              >
                {e}
              </p>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="grid grid-cols-3 gap-4  ml-[-20px] w-[56rem]">
          {data !== undefined ? (
            data.map((e, i) => (
<div key={i} className="max-w-xs w-full bg-white shadow-lg rounded-lg overflow-hidden mx-4 my-6">
  <img
    src={`http://127.0.0.1:8000/images/${e.photo}`}
    alt=""
    className="w-full h-48 object-cover object-center rounded-t-lg"
  />
  <div className="px-4 py-3">
    <p className="text-gray-700 font-bold text-[20px] uppercase">{e.model}</p>
    <p className="text-sm text-gray-600 uppercase tracking-wide">{e.type} - {e.price_per_day}$/day</p>



    <div className="mt-4 flex justify-center">
      <button className="px-4 py-2 font-bold text-white bg-btn rounded   mr-2 transition-colors duration-300">
        <Link to={`/car/${e.id}`}>View</Link>
      </button>
      <button className="px-4 py-2 font-bold text-white bg-btn1 rounded  mr-2 transition-colors duration-300">
        <Link to={`/car/${e.id}/edit`}>Edit</Link>
      </button>
      <button
        className="px-4 py-1  font-bold text-white bg-btn2 rounded  mr-2 transition-colors duration-300"
        onClick={() => deleteClient(e.id)}
      >
        Delete
      </button>
    </div>
  </div>
</div>



            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default AllCars;
