import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ImCross } from 'react-icons/im';
import HeaderAdmin from '../header';
import { FaArrowRight } from 'react-icons/fa6';
axios.defaults.withCredentials = true;

export default function NotProcessed() {
    const [msg, setMsg] = useState('');
    const [data, setData] = useState([]);
    const checkedTable = useRef([])
    const [deleteMsg, setDeleteMsg] = useState(false);

    let fetchData = async () => {
        const datas = await axios.get("http://localhost:8000/api/rental", {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        setData(datas.data.np);
    };

    useEffect(() => {
        console.log("hello");
        fetchData();
    }, []);

    let deleteRental = async (id) => {
        try {
            let d = await axios.delete(`http://localhost:8000/api/rental/${id}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            console.log(d.data);
            if (d.data.msg === "done") {
                setMsg('deleted successfully');
                setDeleteMsg(true);
            } else {
                setMsg('can\'t delete this user');
            }
            fetchData();
        } catch (error) {
            setMsg('Failed to delete client.');
        }
    };

    const pro = async (id, isChecked) => {
        if (isChecked) {
            // Add the rental ID to the checkedTable if it's checked
            checkedTable.current.push({ id: id });
        } else {
            // Remove the rental from checkedTable if it's unchecked
            checkedTable.current = checkedTable.current.filter((item) => item.id !== id);
        }
    };
    let submit = async () => {

        let d = await axios.post(`http://localhost:8000/api/pro`, {
            "table": checkedTable.current
        }, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        console.log(d.data[0])
    }
    return (
        <div>


            <Link to="/admin/rentals/create">
                <button
                    className="before:ease relative h-12 w-40 ml-auto mt-3 font-semibold flex justify-center items-center gap-2 overflow-hidden border border-red-500 text-white group shadow-2xl before:absolute before:right-0  {/* Positioned on right side */}
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
                    {deleteMsg ? (
                        <div>
                            <h1 className='text-orange-500 py-3 px-2 bg-orange-300 w-full relative top-[5rem]'>{msg}</h1>
                            <ImCross className='text-orange-500 relative top-[3rem] right-[-49rem]' onClick={() => { setDeleteMsg(false) }} />
                        </div>
                    ) : ""}
                    {data.length > 0 ? (
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
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
                                                       {e.total_price}  DH
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        {e.rental_start}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        {e.rental_end}
                                                    </td>
                                                    <td className="flex gap-2 px-6 py-4 whitespace-nowrap">

                                                        <Link to={`/user/edit/${e.id}`}>
                                                            <button className="font-semibold px-5 py-2 text-[#E60035] border border-[#E60035]  ">
                                                                Edit
                                                            </button>
                                                        </Link>

                                                        <button
                                                            className="font-semibold px-5 py-2 text-[#E60035] border border-[#E60035]  "
                                                            onClick={() => deleteRental(e.id)
                                                            }
                                                        >
                                                            Delete
                                                        </button>
                                                    </td>

                                                    <td>
                                                    <input
                                                        type="checkbox"
                                                        className="w-5 h-5"
                                                        onChange={(event) => {
                                                            console.log(e.id);
                                                            const isChecked = event.target.checked;
                                                            pro(e.id, isChecked);
                                                        }}
                                                    />

                                                </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    ) : <h1> No Rentals</h1>}

                    <button onClick={() => {
                        submit()
                    }} className="absolute px-4 py-2 text-white bg-orange-500 rounded-md shadow-md hover:bg-orange-600 ">
                        Submit the processed rentals
                    </button>
                </div>
            </div>
        </div>
    );
}
