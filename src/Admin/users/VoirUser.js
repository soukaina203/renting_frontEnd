import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import HeaderAdmin from '../header';
function VoirUser() {
    const [data, setData] = useState(null);
    const [rental, setRental] = useState(null);
    const [info, setInfo] = useState(false);

    const { id } = useParams();
    const fetchCar = async () => {
        const r = await axios.get(`http://127.0.0.1:8000/api/user/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        console.log(r.data)
        setData(r.data.User);
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
                                src={data.photo ? `http://127.0.0.1:8000/images/${data.photo}` : "/imgs/noProfile.jpg"}
                                alt=""
                                className="w-[10rem] h-[10rem] object-cover object-center rounded-full"
                            />
                        </div>
                        <div className="px-4 py-2">
                            <h2 className="text-2xl font-semibold text-black">{data.name} </h2>
                            <p className="text-gray-600 font-bold">Email: {data.email}</p>
                            <p className="text-gray-600 font-bold">Address: {data.address}</p>
                            <p className="text-gray-600 font-bold">Phone: {data.phone}</p>
                            <p className="text-gray-600 font-bold">Rentals:</p>


                            <div className="container mx-auto">
                                {rental.length !== 0 ? (

                                    <table className="table-auto w-full">
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
                                                        <td className="border px-4 py-2">{rental.car.make}</td>
                                                        <td className="border px-4 py-2">{rental.rental_start}</td>
                                                        <td className="border px-4 py-2">{rental.rental_end}</td>
                                                        <td className="border px-4 py-2">{rental.total_price}</td>
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
                                                                <div className="bg-white rounded-lg shadow-lg flex flex-row gap-7 p-4">
                                                                    <img
                                                                        src={`http://127.0.0.1:8000/images/${rental.car.photo}`}
                                                                        alt=""
                                                                        className="w-[15rem] h-[11rem] object-cover object-center rounded-lg"
                                                                    />
                                                                    <div className="flex flex-col">
                                                                        <p className="font-bold text-xl mb-2">{rental.car.make}</p>
                                                                        <p className="text-gray-600">{rental.car.model}</p>
                                                                        <p className="text-gray-600">Price per day: {rental.car.price_per_day}</p>
                                                                        <p className="text-gray-600">Type: {rental.car.type}</p>
                                                                    </div>
                                                                    <div className="flex flex-col">
                                                                        <div className="border-t my-4" />
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
