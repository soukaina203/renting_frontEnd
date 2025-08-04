import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import HeaderAdmin from '../header';
import { apiUrl } from '../../environnement/environnement.prod';

function VoirUser() {
    const [data, setData] = useState(null);
    const [rental, setRental] = useState(null);
    const [info, setInfo] = useState(false);

    const { id } = useParams();
    const fetchCar = async () => {
        const r = await axios.get(`${apiUrl}/user/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        console.log(r.data)
        setData(r.data.user);
        setRental(r.data.rentals)
    };

    useEffect(() => {
        fetchCar();
    }, [])
    return (
        <div>
            <HeaderAdmin />
            <div className="flex justify-center">
                {data !== null ?




                    <div className="w-[60%] bg-white shadow-lg rounded-lg mx-4 my-6">

                        <div className="flex items-center justify-center">
                            <img
                                src={data.photo ? `${apiUrl}/images/${data.photo}` : "/imgs/noProfile.jpg"}
                                alt=""
                                className="w-[10rem] h-[10rem] object-cover object-center rounded-full"
                            />
                        </div>
                        <div className="px-4 py-2 ">
                            <div className='flex flex-col items-center justify-center '>

                            <h2 className="text-2xl font-semibold text-black">{data.name} </h2>
                            <p className="font-bold text-gray-600">Email: {data.email}</p>
                            <p className="font-bold text-gray-600">Address: {data.address}</p>
                            <p className="font-bold text-gray-600">Phone: {data.phone}</p>
                            <p className="font-bold text-gray-600">Ville: {data.city}</p>
                            <p className="font-bold text-gray-600">Pays: {data.country}</p>
                            <p className="font-bold text-gray-600">Rentals:</p>
                            </div>


                            <div className="container mx-auto">
                                {rental.length !== 0 ? (

                                    <table className="w-full table-auto">
                                        <thead>
                                            <tr>
                                                <th className="px-4 py-2">Car</th>
                                                <th className="px-4 py-2">Rental Start</th>
                                                <th className="px-4 py-2">Rental End</th>
                                                <th className="px-4 py-2">Total Price</th>
                                                <th className="px-4 py-2">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {rental.map((rental) => (
                                                <React.Fragment key={rental.id}>
                                                    <tr>
                                                        <td className="px-4 py-2 border">{rental.car.make}</td>
                                                        <td className="px-4 py-2 border">{rental.rental_start}</td>
                                                        <td className="px-4 py-2 border">{rental.rental_end}</td>
                                                        <td className="px-4 py-2 border">{rental.total_price}</td>
                                                        <td className="text-center">
                                                            <button
                                                            className="px-4 py-1 font-bold  border-[2px]  border-btn  text-btn rounded  mr-2 transition-colors duration-300"
                                                            onClick={() => {
                                                                setInfo(true);
                                                            }}>Voir</button>
                                                        </td>
                                                    </tr>
                                                    {info && (
                                                        <tr>
                                                            <td colSpan="5">
                                                                <div className="flex flex-row p-4 bg-white rounded-lg shadow-lg gap-7">
                                                                    <img
                                                                        src={`${apiUrl}/images/${rental.car.photo}`}
                                                                        alt=""
                                                                        className="w-[15rem] h-[11rem] object-cover object-center rounded-lg"
                                                                    />
                                                                    <div className="flex flex-col">
                                                                        <p className="mb-2 text-xl font-bold">{rental.car.make}</p>
                                                                        <p className="text-gray-600">{rental.car.model}</p>
                                                                        <p className="text-gray-600">Price per day: {rental.car.price_per_day}</p>
                                                                        <p className="text-gray-600">Type: {rental.car.type}</p>
                                                                    </div>
                                                                    <div className="flex flex-col">
                                                                        <div className="my-4 border-t" />
                                                                        <p className="text-gray-600">Hour Finish: {rental.hourFinish}</p>
                                                                        <p className="text-gray-600">Hour Start: {rental.hourStart}</p>
                                                                        <p className="text-gray-600">Total Price: {rental.total_price}</p>

                                                                        <button
                                                                            className="px-4 py-1 font-bold  border-[2px]  border-btn  text-btn rounded  mr-2 transition-colors duration-300" onClick={() => {
                                                                                setInfo(false);
                                                                            }}
                                                                        >

                                                                            Close
                                                                        </button>
                                                                    </div>
                                                                </div>

                                                            </td>
                                                        </tr>
                                                    )}
                                                </React.Fragment>
                                            ))}
                                        </tbody>
                                    </table>

                                ) : (
                                    <div className="text-center">No Rentals</div>
                                )}
                            </div>
                            <button className="px-4 py-1 font-bold  border-[2px]  border-btn  text-btn rounded  mr-2 transition-colors duration-300">
                                <Link to={`/users`} className="">Back</Link>
                            </button>
                        </div>
                    </div>
                    : ""}
            </div>
        </div>
    )
}

export default VoirUser