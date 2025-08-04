import React, { useEffect, useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import HeaderAdmin from '../header';
import { useNavigate } from "react-router-dom";
import { apiUrl } from '../../environnement/environnement.prod';

export default function ModifyRental() {
    const [data, setData] = useState(null);
    const [cars, setCars] = useState(null);
    const [users, setUsers] = useState(null);
    const editedData = useRef([]);
    const navigate = useNavigate();

    const { id } = useParams();

    const fetchCar = async () => {
        const res = await axios.get(`${apiUrl}/rental/${id}`, {
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
            `${apiUrl}/rental/${id}`,
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
            navigate('/admin/rentals');
        }
        // Handle the response data here if needed
        console.log(res.data);

    };

    useEffect(() => {
        fetchCar();
    }, []);

    return (
        <div>
            <div className="flex justify-center">
                {data !== null ?
                    <div className="w-[60%] mt-[4rem] bg-white shadow-lg rounded-lg mx-4 my-6 p-6">
                        <form onSubmit={handleUpdate}>
                        <h1 className='text-xl font-semibold text-center'>Modifyin  A Rental</h1>



                            <label htmlFor="cars" className="block text-gray-600">
                                Cars:
                                <select
                                    id="cars"
                                    name="cars"
                                    defaultValue={data.car.model}
                                    onChange={(e) => {
                                        editedData.current.car_id = e.target.value
                                    }}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                    {cars.map((e) => (
                                        <option key={e.id} value={e.id}>{e.model}</option>
                                    ))}
                                </select>
                            </label>

                            <label className="block text-gray-600">
                                rental_start:
                                <input
                                    type="date"
                                    defaultValue={data.rental_start}
                                    onChange={(e) => editedData.current.rental_start = e.target.value}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </label>

                            <label className="block text-gray-600">
                                rental_end:
                                <input
                                    type="date"
                                    defaultValue={data.rental_end}
                                    onChange={(e) => editedData.current.rental_end = e.target.value}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </label>




                            <label className="block text-gray-600">
                                total_price:
                                <input
                                    type="text"
                                    defaultValue={data.total_price}

                                    onChange={(e) => editedData.current.total_price = e.target.value}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </label>
                            <label className="block text-gray-600">
                                hourFinish:
                                <input
                                    type="time"
                                    defaultValue={data.hourFinish}
                                    onChange={(e) => editedData.current.hourFinish = e.target.value}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </label>

                            <label className="block text-gray-600">
                                hourStart:
                                <input
                                    type="time"
                                    defaultValue={data.hourStart}
                                    onChange={(e) => editedData.current.hourStart = e.target.value}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </label>


                            <div className='flex justify-between mt-2'>
                                <button
                                    type="submit"
                                    className="relative flex justify-center px-4 py-2 text-sm font-medium
                                    text-white bg-[#E60035] border border-transparent 
                                    rounded-md group hover:bg-red-600 focus:outline-none 
                                    focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"                                >
                                    Edit
                                </button>
                                <Link
                                    to="/admin/rentals"
                                    className="relative flex justify-center px-4 py-2 text-sm font-medium text-black bg-gray-200 border border-transparent rounded-md group hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
