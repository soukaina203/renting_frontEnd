import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ImCross } from 'react-icons/im';
import HeaderAdmin from '../header';
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
            <HeaderAdmin />
            <button className="px-4 py-2 text-white bg-orange-500 rounded-md shadow-md hover:bg-orange-600 absolute top-[110px] left-6">
                <Link to="/rental/create">Create A Rental</Link>
            </button>
            <div className="flex justify-center  h-screen">
                <div className="w-full md:w-2/3">
                    {deleteMsg ? (
                        <div>
                            <h1 className='text-orange-500 py-3 px-2 bg-orange-300 w-full relative top-[5rem]'>{msg}</h1>
                            <ImCross className='text-orange-500 relative top-[3rem] right-[-49rem]' onClick={() => { setDeleteMsg(false) }} />
                        </div>
                    ) : ""}
                    <table className="w-full border border-collapse mt-[5rem]">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border p-2">ID</th>
                                <th className="border p-2">User Name</th>
                                <th className="border p-2">Car Model</th>
                                <th className="border p-2">Total Price</th>
                                <th className="border p-2">Actions</th>
                                <th className="border p-2">Processed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.length > 0 ? (
                                <>
                                    {data.map((e, i) => {
                                        return (
                                            <tr className='text-center' key={e.id}>
                                                <td>{e.id}</td>
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
                                                        onClick={() => {
                                                            deleteRental(e.id)
                                                        }}>
                                                        Supprimer
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
                                        )
                                    })} </>
                            ) : <tr><td colSpan="6">No rentals</td></tr>}

                            <button onClick={() => {
                                submit()
                            }} className="px-4 py-2 text-white bg-orange-500 rounded-md shadow-md hover:bg-orange-600 absolute ">
                                Submit the processed rentals
                            </button>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
