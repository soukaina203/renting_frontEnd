import React, { useEffect, useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import HeaderAdmin from '../header';
import { useNavigate } from "react-router-dom";

export default function ModifyRental() {
    const [data, setData] = useState(null);
    const [cars, setCars] = useState(null);
    const [users, setUsers] = useState(null);
    const editedData = useRef([]);
    const navigate = useNavigate();

    const { id } = useParams();

    const fetchCar = async () => {
        const res = await axios.get(`http://127.0.0.1:8000/api/rental/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        setData(res.data.Rental);
        setCars(res.data.Cars);
        setUsers(res.data.Users);
        console.log(res.data)
        editedData.current = res.data.Rental;
    };

    let handleUpdate = async (e) => {
        e.preventDefault();
        let n = editedData.current;
        console.log(n)
        const res = await axios.patch(
            `http://127.0.0.1:8000/api/rental/${id}`,
            {
                user_id: n.user_id,
                car_id: n.car_id,
                rental_start: n.rental_start,
                rental_end: n.rental_end,
                total_price: n.total_price,
                hourFinish: n.hourFinish,
                hourStart: n.hourStart,
            },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            }
        );
        if (res.data.message === "Item updated successfully") {
            navigate('/rentals');
        }
        // Handle the response data here if needed
        console.log(res.data);

    };

    useEffect(() => {
        fetchCar();
    }, []);

    return (
        <div>
            <HeaderAdmin />
            <div className="flex justify-center">
                {data !== null ?
                    <div className="w-[60%] bg-white shadow-lg rounded-lg mx-4 my-6 p-6">
                        <form onSubmit={handleUpdate}>
                            <label htmlFor="users" className="text-gray-600 block">
                                Users:
                                <select
                                    id="users"
                                    name="users"
                                    value={data.user.name} // Use value instead of defaultValue
                                    onChange={(e) => {
                                        editedData.current.user_id =  e.target.value 
                                        console.log(editedData.current.user_id);
                                    }}
                                    className="border-2 border-gray-300 p-2 ml-2 rounded-md w-full text-base font-normal"
                                >
                                    {users.map((e) => (
                                        <option key={e.id} value={e.id} >
                                            {e.name}
                                        </option>
                                    ))}
                                </select>
                            </label>


                            <label htmlFor="cars" className="text-gray-600 block">
                                Cars:
                                <select
                                    id="cars"
                                    name="cars"
                                    defaultValue={data.car.model}
                                    onChange={(e) => {
                                        editedData.current.car_id=e.target.value 
                                    }}
                                    className="border-2 border-gray-300 p-2 ml-2 rounded-md w-full text-base font-normal"
                                >
                                    {cars.map((e) => (
                                        <option key={e.id} value={e.id}>{e.model}</option>
                                    ))}
                                </select>
                            </label>

                            <label className="text-gray-600 block">
                                rental_start:
                                <input
                                    type="date"
                                    defaultValue={data.rental_start}
                                    onChange={(e) => editedData.current.rental_start= e.target.value }
                                    className="border-2 border-gray-300 p-2 ml-2 rounded-md w-full text-base font-normal"
                                />
                            </label>

                            <label className="text-gray-600 block">
                                rental_end:
                                <input
                                    type="date"
                                    defaultValue={data.rental_end}
                                    onChange={(e) => editedData.current.rental_end=e.target.value }
                                    className="border-2 border-gray-300 p-2 ml-2 rounded-md w-full text-base font-normal"
                                />
                            </label>




                            <label className="text-gray-600 block">
                                total_price:
                                <input
                                    type="text"
                                    defaultValue={data.total_price}

                                    onChange={(e) => editedData.current.total_price= e.target.value }
                                    className="border-2 text-black border-gray-300 p-2 ml-2 rounded-md w-full text-base font-normal"
                                />
                            </label>
                            <label className="text-gray-600 block">
                                hourFinish:
                                <input
                                    type="time"
                                    defaultValue={data.hourFinish}
                                    onChange={(e) => editedData.current.hourFinish= e.target.value }
                                    className="border-2 border-gray-300 p-2 ml-2 rounded-md w-full text-base font-normal"
                                />
                            </label>

                            <label className="text-gray-600 block">
                                hourStart:
                                <input
                                    type="time"
                                    defaultValue={data.hourStart}
                                    onChange={(e) => editedData.current.hourStart= e.target.value }
                                    className="border-2 border-gray-300 p-2 ml-2 rounded-md w-full text-base font-normal"
                                />
                            </label>


                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
                                >
                                    Save Changes
                                </button>
                                <Link
                                    to="/admin/cars"
                                    className="ml-4 text-gray-600 hover:underline"
                                >
                                    Cancel
                                </Link>
                            </div>
                        </form>
                    </div>
                    : ""}
            </div>
        </div>
    );
}
