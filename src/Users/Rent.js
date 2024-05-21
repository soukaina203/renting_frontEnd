import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import HeaderAdmin from '../Admin/header';
export default function Rent() {
    const [car, setCars] = useState(null);
    const [total, setTotal] = useState(0);
    const { id } = useParams();

    const price_per_day = useRef(0)
    const FillData = useRef({
        user_id: "", car_id: "",
        rental_start: "", rental_end: "", total_price: "", hourFinish: "", hourStart: ""
    })// the data thatis new edited by the user and gonna be passed to the backend
    const navigate = useNavigate();
    const fetchData = async () => {
        const res = await axios.get(`http://127.0.0.1:8000/api/car/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        setCars(res.data.car);
        price_per_day.current=res.data.car.price_per_day;
    };
    let handleCreate = async (e) => {
        e.preventDefault()
       
        let n = FillData.current;
        const d = await axios.post("http://localhost:8000/api/rentals", {
            user_id:localStorage.getItem('userId'),
            car_id: id,
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
            navigate('/answer')
        }

        console.log(d.data)
    }
    useEffect(() => {
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
        console.log(daysDifference)
        FillData.current.total_price = totalPrice
        console.log(FillData.current.total_price
            )
        setTotal(totalPrice)
    }
    return (
        <div>
            <HeaderAdmin />
            {
                car !== null ?

                    <div className="flex justify-center">
                        <div className="w-[60%] bg-white shadow-lg rounded-lg mx-4 my-6">
                            <form action="" onSubmit={handleCreate}>
                                <div className="px-4 py-2 bg-white shadow rounded-lg">
                                </div>
                                <div className="px-4 py-2">
                                    <img
                                        src={`http://127.0.0.1:8000/images/${car.photo}`}
                                        alt=""
                                        className="w-full h-[19rem] object-cover object-center rounded-t-lg"
                                    />



                                    <label className="text-gray-600 block">
                                        rental_start:
                                        <input
                                            type="date"

                                            onChange={(e) => FillData.current.rental_start = e.target.value}
                                            className="border-2 border-gray-300 p-2 ml-2 rounded-md w-full text-base font-normal"
                                        />
                                    </label>
                                    <label className="text-gray-600 block">
                                        rental_end:
                                        <input
                                            type="date"

                                            onChange={(e) => FillData.current.rental_end = e.target.value}
                                            className="border-2 border-gray-300 p-2 ml-2 rounded-md w-full text-base font-normal"
                                        />
                                    </label>

                                    <label className="text-gray-600 block">
                                    price_per_day:
                                        <input
                                            type="text"
                                            value={car.price_per_day}

                                            onChange={(e) => FillData.current.rental_end = e.target.value}
                                            className="border-2 border-gray-300 p-2 ml-2 rounded-md w-full text-base font-normal"
                                        />
                                    </label>


                                    <label className="text-gray-600 block">
                                        hourFinish:
                                        <input
                                            type="time"

                                            onChange={(e) => FillData.current.hourFinish = e.target.value}
                                            className="border-2 border-gray-300 p-2 ml-2 rounded-md w-full text-base font-normal"
                                        />
                                    </label>

                                    <label className="text-gray-600 block">
                                        hourStart:
                                        <input
                                            type="time"

                                            onChange={(e) => FillData.current.hourStart = e.target.value}
                                            className="border-2 border-gray-300 p-2 ml-2 rounded-md w-full text-base font-normal"
                                        />
                                    </label>
                                    <button
                                        type="button"
                                        className="bg-orange-500 hover:bg-orange-600 text-white rounded-md mt-4 px-4 py-2"
                                        onClick={() => {
                                          
                                            diffrenceDate(FillData.current.rental_start, FillData.current.rental_end)
                                        }}> Calculer Total</button>
                                    <label className="text-gray-600 block">
                                        total_price:
                                        <input
                                            type="text"
                                            value={total}
                                            onChange={(e) => FillData.current.total_price = e.target.value}
                                            className="border-2 border-gray-300 p-2 ml-2 rounded-md w-full text-base font-normal"
                                        />
                                    </label>









                                    <button type='submit' className="bg-orange-500 hover:bg-orange-600 text-white rounded-md mt-4 px-4 py-2" >
                                        Rent
                                    </button>

                                    <Link to={`/welcome`} className="bg-gray-300 hover:bg-gray-400 text-black rounded-md mt-2 px-4 py-2">
                                        Cancel
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                    : ""}
        </div>
    )
}

