import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import HeaderUser from './Header'

function Welcome() {
    const [search,setSearch]=useState([])
    const [data,setData]=useState([])
    const [permanent,setPermanent]=useState([])
    let fetchData = async () => {
        const d = await axios.get("http://localhost:8000/api/carForUsers", {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        setData(d.data)
        setData(d.data)
        setPermanent(d.data)
    }
  useEffect(() => {
    fetchData();
  }, []);
    return (
        <div>
            <HeaderUser />
            <div className='flex flex-col
            '>
                <div className='w-3/4 mr-4 border  rounded mt-7'
                >
                    <input type="text" 
                    onChange={(e)=>{
                        setSearch(e.target.value)
                    }}
                    />
                    <button type='button'
                                        className="bg-btn hover:bg-btn1 text-white rounded-md px-4 py-1 "

                     > Search</button>
                </div>
                <div className='flex flex-row'>
                    <div className='w-1/4  h-content mr-4 border border-btn rounded mt-7'>filter</div>
                    <div className='w-3/4 h-content mr-4 border grid grid-cols-3 gap-4  ml-[-20px] w-[56rem] border-btn rounded mt-7'>
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
                    <button className="px-4 py-1 font-bold  text-btn rounded  border-[2px] border-btn  mr-2 transition-colors duration-300">
                      <Link to={`/car/${e.id}`}>View</Link>
                    </button>
                    <button className="px-4 py-1 font-bold  border-[2px]  border-btn  text-btn rounded  mr-2 transition-colors duration-300">
                      <Link to={`/car/${e.id}/edit`}>Edit</Link>
                    </button>
                    <button
                      className="px-4 py-1  font-bold   border-[2px]  border-btn  text-btn  rounded  mr-2 transition-colors duration-300"
                      onClick={() => (e.id)}
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

        </div>
    )
}

export default Welcome
