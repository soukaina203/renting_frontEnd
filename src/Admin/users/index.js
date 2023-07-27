import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import {ImCross} from 'react-icons/im'
import HeaderAdmin from '../header'
axios.defaults.withCredentials = true;

function AllUsers() {
  const [msg, setMsg] = useState('');

      const [data, setData] = useState([]);
      const [deleteMsg, setDeleteMsg] = useState(false);
      
  let fetchData = async () => {
    const datas = await axios.get("http://localhost:8000/api/user", {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });
    console.log(datas.data.token)
    setData(datas.data)

}
useEffect(() => {
    console.log("hello")
    fetchData();
}, []);
let deleteUser = async (id) => {
  try {
   let d= await axios.delete(`http://localhost:8000/api/user/${id}`, {
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
          <Link to="/user/create">Create A User</Link>
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
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
                     {data.map((e, i) => {
                            return (
                                <tr className='text-center'>
                                    <td >{e.id}</td>
                                    <td>{e.name}</td>
                                    <td>{e.email}</td>

                                    <td>
                                    <button className="px-4 py-1 font-bold  border-[2px]  border-btn  text-btn rounded  mr-2 transition-colors duration-300">
                                        <Link className="btn btn-info mb-3" to={`/user/${e.id}`}> Voir</Link>
                                        </button>
                                        <button className="px-4 py-1 font-bold  border-[2px]  border-btn  text-btn rounded  mr-2 transition-colors duration-300">
                                        <Link className="btn btn-primary mb-3" to={`/user/edit/${e.id}`}> Modifier</Link>
                                        </button>
                                        <button className="px-4 py-1 font-bold  border-[2px]  border-btn  text-btn rounded  mr-2 transition-colors duration-300" 
                                        onClick={()=>{
                                          deleteUser(e.id)
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

export default AllUsers
