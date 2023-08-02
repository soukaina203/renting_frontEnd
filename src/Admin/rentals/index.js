
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import {ImCross} from 'react-icons/im'
import HeaderAdmin from '../header'
axios.defaults.withCredentials = true;

export default function AllRentals() {
  const [msg, setMsg] = useState('');

      const [data, setData] = useState([]);
      const [deleteMsg, setDeleteMsg] = useState(false);
      
  let fetchData = async () => {
    const datas = await axios.get("http://localhost:8000/api/rental", {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });
    setData(datas.data)

}
useEffect(() => {
    console.log("hello")
    fetchData();
}, []);
let deleteRental = async (id) => {
  try {
   let d= await axios.delete(`http://localhost:8000/api/rental/${id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    console.log(d.data)
    if(d.data.msg==="done"){
      setMsg('deleted successfuly')
      setDeleteMsg(true)
    }else{
      setMsg('cant delet this user')
    }
    fetchData();
  } catch (error) {
    setMsg('Failed to delete client.');
  }
}
  return (
    <div>
      <HeaderAdmin />
      <button className="px-4 py-2 text-white bg-orange-500 rounded-md shadow-md hover:bg-orange-600 absolute top-[110px] left-6">
          <Link to="/user/create">Create A Rental</Link>
        </button>
      <div className="flex justify-center  h-screen">
      <div className="w-full md:w-2/3">
        {deleteMsg? <div> 
          <h1 className='text-orange-500 py-3 px-2 bg-orange-300 w-full relative top-[5rem]'>{msg}</h1>
          <ImCross className='text-orange-500 relative top-[3rem] right-[-49rem] 
          ' onClick={()=>{
            setDeleteMsg(false)
          }}/>

        </div>:""

        }
        <table className="w-full border border-collapse mt-[5rem]">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">ID</th>
              <th className="border p-2">User Name</th>
              <th className="border p-2">Car Model</th>
              <th className="border p-2">Total Price</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
                     {data.map((e, i) => {
                            return (
                                <tr className='text-center'>
                                    <td >{e.id}</td>
                                    <td>{e.user.name}</td>
                                    <td>{e.car.model}</td>
                                  
                                    <td>{e.total_price} {e.currency}</td>
                               

                                    <td>
                                    <button className="px-4 py-1 font-bold  border-[2px]  border-btn  text-btn rounded  mr-2 transition-colors duration-300">
                                        <Link className="btn btn-info mb-3" to={`/rental/${e.id}`}> Voir</Link>
                                        </button>
                                        <button className="px-4 py-1 font-bold  border-[2px]  border-btn  text-btn rounded  mr-2 transition-colors duration-300">
                                        <Link className="btn btn-primary mb-3" to={`/rental/edit/${e.id}`}> Modifier</Link>
                                        </button>
                                        <button className="px-4 py-1 font-bold  border-[2px]  border-btn  text-btn rounded  mr-2 transition-colors duration-300" 
                                        onClick={()=>{
                                          deleteRental(e.id)
                                        }}>
                                    Supprimer 
                              </button>
                                    </td>
                                </tr>
                            )

                        })}
            </tbody>
            </table>
            </div>
            </div>
    </div>
  )
}

