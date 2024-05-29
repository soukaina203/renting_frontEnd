import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import HeaderAdmin from '../header';
export default function CreateRental() {
    const [cars, setCars] = useState(null);
    const [users, setUsers] = useState(null);
    const [total, setTotal] = useState(0);
    const price_per_day = useRef(0)
    const FillData = useRef({
        user_id: "", car_id: "",
        rental_start: "", rental_end: "", total_price: "", hourFinish: "", hourStart: ""
    })// the data thatis new edited by the user and gonna be passed to the backend
    const navigate = useNavigate();
    const fetchData = async () => {
        const res = await axios.get(`http://127.0.0.1:8000/api/select`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        setCars(res.data.cars);
        setUsers(res.data.users);
    };
    let handleCreate = async (e) => {
        e.preventDefault()

        let n = FillData.current;
        console.log(n)
        const d = await axios.post("http://localhost:8000/api/rental", {
            user_id: n.user_id,
            car_id: n.car_id,
            rental_start: n.rental_start,
            rental_end: n.rental_end,
            total_price: n.total_price,
            hourFinish: n.hourFinish,
            hourStart: n.hourStart,

        }, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        console.log(d.data)
        if (d.data.message === "Item added successfully") {
            navigate('/admin/rentals/unprocessed')
        }

        console.log(d.data)
    }
    useEffect(() => {
        console.log("hello")
        fetchData();
    }, []);

    let diffrenceDate = (d1, d2) => {
        const startDate = new Date(d1); // Replace with your start date
        const endDate = new Date(d2);
        const date1Ms = startDate.getTime();
        const date2Ms = endDate.getTime();

        // Calculate the difference in milliseconds
        const differenceMs = Math.abs(date1Ms - date2Ms);

        // Convert the difference to days
        const daysDifference = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));
        const totalPrice = daysDifference * price_per_day.current
        FillData.current.total_price = totalPrice
        setTotal(totalPrice)
    }
    return (
        <div className='mt-5'>

            {
                users !== null && cars !== null ?

                    <div className="flex justify-center">
                        <div className="w-[60%] bg-white shadow-lg rounded-lg mx-4 my-6">
                            <form action="" onSubmit={handleCreate}>
                    <h1 className='text-xl font-semibold text-center'>Creation Of A Rental</h1>

                               
                                <div className="px-4 py-2">

                                    <label htmlFor="users" className="block text-gray-600">
                                        Users:
                                        <select
                                            id="users"
                                            name="users"
                                            onChange={(e) => {
                                                FillData.current.user_id = e.target.value
                                            }}
                                            className="w-full p-2 text-base font-normal border-2 border-gray-300 rounded-md"
                                        >
                                            <option value="">Choose user</option>
                                            {users.map((e) => (
                                                <option key={e.id} value={e.id} >
                                                    {e.name}
                                                </option>
                                            ))}
                                        </select>
                                    </label>

                                    <label htmlFor="cars" className="block text-gray-600">
                                        Cars:
                                        <select
                                            id="cars"
                                            name="cars"
                                            onChange={(e) => {
                                                FillData.current.car_id = e.target.value
                                                const selectedCar = cars.find((car) => car.id === parseInt(e.target.value));
                                                price_per_day.current = selectedCar ? selectedCar.price_per_day : null;
                                            }}
                                            className="w-full p-2 text-base font-normal border-2 border-gray-300 rounded-md"
                                        >
                                            <option value="">Choose car</option>

                                            {cars.map((e) => (
                                                <option key={e.id} value={e.id}>{e.model}</option>
                                            ))}
                                        </select>
                                    </label>

                                    <label className="block text-gray-600">
                                        rental start:
                                        <input
                                            type="date"

                                            onChange={(e) => FillData.current.rental_start = e.target.value}
                                            className="w-full p-2 text-base font-normal border-2 border-gray-300 rounded-md"
                                        />
                                    </label>
                                    <label className="block text-gray-600">
                                        rental end:
                                        <input
                                            type="date"

                                            onChange={(e) => FillData.current.rental_end = e.target.value}
                                            className="w-full p-2 text-base font-normal border-2 border-gray-300 rounded-md"
                                        />
                                    </label>


                                    <label className="block text-gray-600">
                                        Hour of Finish:
                                        <input
                                            type="time"

                                            onChange={(e) => FillData.current.hourFinish = e.target.value}
                                            className="w-full p-2 text-base font-normal border-2 border-gray-300 rounded-md"
                                        />
                                    </label>

                                    <label className="block text-gray-600">

                                        Hour of Start:
                                        <input
                                            type="time"

                                            onChange={(e) => FillData.current.hourStart = e.target.value}
                                            className="w-full p-2 text-base font-normal border-2 border-gray-300 rounded-md"
                                        />
                                    </label>
                                    <button
                                        type="button"
                                        className="w-full px-4 py-2 mt-4 text-white  bg-[#E60035] rounded-md hover:bg-red-600 font-semibold mb-2"
                                        onClick={() => {
                                            diffrenceDate(FillData.current.rental_start, FillData.current.rental_end)
                                        }}> Calculer Total</button>



                                    <label className="block text-gray-600">
                                        Total Price:
                                        <input
                                            type="text"
                                            value={total}
                                            onChange={(e) => FillData.current.total_price = e.target.value}
                                            className="w-full p-2 text-base font-normal border-2 border-gray-300 rounded-md"
                                        /> 
                                    </label>




                                    <div className='flex justify-between mt-2'>
                                        <button
                                            type="submit"
                                            className="relative flex justify-center px-4 py-2 text-sm font-medium text-white bg-[#E60035] border border-transparent rounded-md group hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Create
                                        </button>

                                        <Link to={`/admin/rentals`}>
                                            <button
                                                type="button"
                                                className="relative flex justify-center px-4 py-2 text-sm font-medium text-black bg-gray-200 border border-transparent rounded-md group hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            >
                                                Cancel
                                            </button>
                                        </Link>
                                     


                                    </div>






                                </div>
                            </form>
                        </div>
                    </div>
                    : ""}
        </div>
    )
}

