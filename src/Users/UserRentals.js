import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import HeaderUser from './Header';
axios.defaults.withCredentials = true;

function UserRentals() {
    const [rentals, setRentals] = useState([]);
    const [infoMap, setInfoMap] = useState({});

    const id = localStorage.getItem('userId');
    const token = localStorage.getItem('token');

    console.log(id)
    const fetchData = async () => {
        try {
            const res = await axios.get(`http://127.0.0.1:8000/api/rentals/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            setRentals(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleToggleInfo = (rentalId) => {
        setInfoMap((prevInfoMap) => ({
            ...prevInfoMap,
            [rentalId]: !prevInfoMap[rentalId],
        }));
    };

    return (
        <div>
            <div className="container mx-auto lg:mt-[5rem] ">
                <div className="container flex items-center justify-center mx-auto">
                    {rentals.length !== 0 ? (


                  <table className="min-w-full text-sm font-light text-left text-surface ">
                    <thead className="font-medium border-b border-black">
                                <tr>
                                    <th className="px-6 py-4 ">Car</th>
                                    <th className="px-6 py-4">Rental Start</th>
                                    <th className="px-6 py-4">Rental End</th>
                                    <th className="px-6 py-4">Total Price</th>
                                    <th className="px-6 py-4">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rentals.map((rental,i) => (
                                    <React.Fragment key={rental.id}>
                                                               <tr key={i} className="border-b border-black ">

                                            <td className="px-6 py-4 font-medium whitespace-nowrap">{rental.car.make}</td>
                                            <td className="px-6 py-4 font-medium whitespace-nowrap">{rental.rental_start}</td>
                                            <td className="px-6 py-4 font-medium whitespace-nowrap">{rental.rental_end}</td>
                                            <td className="px-6 py-4 font-medium whitespace-nowrap">{rental.total_price}</td>
                                            <td className="text-left">
                                                <button
                                                    className="px-4 py-1 font-bold  border-[2px]  border-[#E60035]  text-[#E60035] rounded  mr-2 transition-colors duration-300"
                                                    onClick={() => handleToggleInfo(rental.id)}
                                                >
                                                    Voir
                                                </button>
                                            </td>
                                        </tr>
                                        {infoMap[rental.id] && (
                                            <tr>
                                                <td colSpan="5">
                                                    {/* <div className="flex flex-row p-4 bg-white rounded-lg gap-7"> */}
                                                    <div className="grid grid-cols-1 gap-3 p-2 lg:grid-cols-3">
                                                        {/* Additional Information */}
                                                        <img
                                                            src={`http://127.0.0.1:8000/images/${rental.car.photo}`}
                                                            alt=""
                                                            className="w-full h-[13rem] object-cover object-center rounded-lg"
                                                        />
                                                        <div className="flex flex-col gap-1">
                                                            <p className="mb-2 text-xl font-bold uppercase">{rental.car.make}</p>
                                                            <p className="text-gray-600">Model: {rental.car.model}</p>
                                                            <p className="text-gray-600">Year: {rental.car.year}</p>
                                                            <p className="text-gray-600">Price per day: {rental.car.price_per_day}</p>
                                                            <p className="text-gray-600">Type: {rental.car.type}</p>
                                                        </div>
                                                        <div className="flex flex-col gap-1">
                                                            <div className="my-4 border-t" />
                                                            <p className="text-gray-600">Rental start: {rental.rental_start}</p>
                                                            <p className="text-gray-600">Rental end: {rental.rental_end}</p>
                                                            <p className="text-gray-600">Hour Finish: {rental.hourFinish}</p>
                                                            <p className="text-gray-600">Hour Start: {rental.hourStart}</p>
                                                            <p className="text-gray-600">Total Price: {rental.total_price} DH</p>

                                                            <button
                                                                className="px-4 py-1 font-bold  border-[1px]  text-[#E60035] border-[#E60035]  mr-2 transition-colors duration-300"
                                                                onClick={() => handleToggleInfo(rental.id)}
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
                        <div className="p-8 text-xl font-semibold text-center">No Rentals</div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default UserRentals;
