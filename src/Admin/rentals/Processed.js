
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { FaLongArrowAltLeft } from "react-icons/fa";

import { Link } from 'react-router-dom';
import { ImCross } from 'react-icons/im'
import HeaderAdmin from '../header';
import { FaArrowRight, FaPen } from "react-icons/fa6";
import { MdDeleteSweep } from 'react-icons/md';

axios.defaults.withCredentials = true;

export default function Processed() {
  const [msg, setMsg] = useState('');

  const [data, setData] = useState([]);
  const [deleteMsg, setDeleteMsg] = useState(false);

  let fetchData = async () => {
    const datas = await axios.get("http://localhost:8000/api/rental", {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    setData(datas.data.p)

  }
  useEffect(() => {
    console.log("hello")
    fetchData();
  }, []);
  let deleteRental = async (id) => {
    try {
      let d = await axios.delete(`http://localhost:8000/api/rental/${id}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      console.log(d.data)
      if (d.data.msg === "done") {
        setMsg('deleted successfuly')
        setDeleteMsg(true)
      } else {
        setMsg('cant delet this user')
      }
      fetchData();
    } catch (error) {
      setMsg('Failed to delete client.');
    }
  }
  return (
    <div>
      <Link to="/admin/rentals/create">
        <button
          className="before:ease relative h-12 w-40 ml-auto mt-3 font-semibold flex 
          justify-center items-center gap-2 overflow-hidden border
           border-red-500 text-white group shadow-2xl before:absolute before:right-0  {/* Positioned on right side */}
  before:-mr-2 before:h-48 before:w-48 before:origin-top-left 
  before:-translate-x-full before:-translate-y-12 before:rotate-90
  before:bg-white before:transition-all before:duration-300 hover:text-white
  hover:shadow-red-500 hover:bg-red-500 hover:before:-rotate-180"
        >
          <span className="relative z-20 text-red-500 group-hover:text-white">
            Create A Rental
          </span>
          <FaArrowRight className="relative z-20 ml-2 text-red-500 group-hover:text-white" />
        </button>
      </Link>


      <div className="flex justify-center h-screen">
        <div className="w-full md:w-2/3">
          {deleteMsg ? <div>
            <h1 className='text-orange-500 py-3 px-2 bg-orange-300 w-full relative top-[5rem]'>{msg}</h1>
            <ImCross className='text-orange-500 relative top-[3rem] right-[-49rem] 
          ' onClick={() => {
                setDeleteMsg(false)
              }} />

          </div> : ""

          }
          {data ?



            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">

                <Link to="/admin/rentals">
                  <FaLongArrowAltLeft className='h-6 w-7' />
                </Link>
                <div className="overflow-hidden">
                  <table className="min-w-full text-sm font-light text-left text-surface ">
                    <thead className="font-medium border-b border-black">
                      <tr>
                        <th className="px-6 py-4 ">ID</th>
                        <th className="px-6 py-4 ">User Name</th>
                        <th className="px-6 py-4 ">Car Model</th>
                        <th className="px-6 py-4 ">Total Price</th>
                        <th className="px-6 py-4 ">Rental start</th>
                        <th className="px-6 py-4 ">Rental End</th>
                        <th className="px-6 py-4 ">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((e, i) => (
                        <tr key={i} className="border-b border-black ">
                          <td className="px-6 py-4 font-medium whitespace-nowrap">
                            {e.id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {e.user.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {e.car.model}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {e.total_price} DH
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {e.rental_start}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {e.rental_end}
                          </td>
                          <td className="flex items-center justify-start gap-2 px-6 py-4 whitespace-nowrap">

                            <Link to={`/admin/rental/edit/${e.id}`}>
                              <FaPen className="font-semibold  text-[#E60035] w-4 h-4" />

                            </Link>
                            <MdDeleteSweep className="font-semibold  text-[#E60035] w-5 h-5  "
                              onClick={() => deleteRental(e.id)} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            : <h1> No Rentals</h1>}
        </div>
      </div>
    </div>
  )
}

