import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import HeaderAdmin from '../header';

function VoirCar() {
    const [data, setData] = useState(null);
    const { id } = useParams();
    const fetchCar = async () => {
        const d = await axios.get(`http://127.0.0.1:8000/api/car/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        setData(d.data.car);
    };
    useEffect(() => {
        fetchCar();
    }, [])
    return (
        <div>
            <HeaderAdmin />
            {data !== null ?
                <div className="max-w-xs w-full bg-white shadow-lg rounded-lg mx-4 my-6">
                    <img
                        src={`/imgs/${data.photo}.jpg`}
                        alt=""
                        className="w-full h-48 object-cover object-center rounded-t-lg"
                    />
                    <div className="px-4 py-2">
                        <p>{data.type}</p> {data.photo}
                        <h2 className="text-xl font-semibold text-black">{data.year}</h2>
                        <p className="text-gray-600 font-bold">{data.model}</p>
                        <p className="font-semibold text-btn">{data.price_per_day}$ per day</p>


                    </div>
                </div>

                : ""}

        </div>
    )
}

export default VoirCar
