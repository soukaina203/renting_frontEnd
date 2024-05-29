import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import HeaderAdmin from '../header';

function CreateCar() {
    const FillData = useRef({ make: "", model: "", color: "", type: "", photo: "", year: "", available: 1, price_per_day: 0 });
    const navigate = useNavigate();

    let handleCreate = async (e) => {
        e.preventDefault();

        let v = FillData.current;
        console.log(FillData.current);
        const formData = new FormData();
        formData.append('model', v.model);
        formData.append('make', v.make);
        formData.append('year', v.year);
        formData.append('color', v.color);
        formData.append('price_per_day', v.price_per_day);
        formData.append('photo', v.photo);
        formData.append('type', v.type);
        formData.append('available', v.available);
        const d = await axios.post("http://localhost:8000/api/car", formData, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        console.log("hi");
        if (d.data.message === "Item added successfully") {
            navigate('/admin/cars');
        }

        console.log(d.data);
    }

    return (
        <div>
            <div className='flex items-center justify-center mt-5'>
                <form
                    action=""
                    onSubmit={handleCreate}
                    className="w-full max-w-2xl p-10 space-y-6 bg-white rounded-lg shadow-md"
                    method="POST"
                >
                    <h1 className='text-xl font-semibold text-center'>Creation Of A Car</h1>

                    <div className="space-y-4">
                        <div>
                            <input
                                type="text"
                                onChange={(e) => FillData.current.make = e.target.value}
                                placeholder="Make"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                onChange={(e) => FillData.current.model = e.target.value}
                                placeholder="Model"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                onChange={(e) => FillData.current.type = e.target.value}
                                placeholder="Type"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                onChange={(e) => FillData.current.year = e.target.value}
                                placeholder="Year"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                            />
                        </div>

                        <div>
                          <label htmlFor="">Availability</label>
                            <select
                                onChange={(e) => FillData.current.available = e.target.value}
                                className="w-full p-2 mt-1 text-base font-normal border-2 border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            >
                                <option className='relative py-2 pl-3 text-gray-900 cursor-default select-none pr-9' value={1}>Yes</option>
                                <option className='relative py-2 pl-3 text-gray-900 cursor-default select-none pr-9' value={0}>No</option>
                            </select>
                        </div>

                        <div>
                            <input
                                type="file"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                                onChange={(e) => FillData.current.photo = e.target.files[0]}
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                onChange={(e) => FillData.current.price_per_day = e.target.value}
                                placeholder="Price per day"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                onChange={(e) => FillData.current.color = e.target.value}
                                placeholder="Color"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                            />
                        </div>

                        <div className='flex justify-between'>
                            <Link to={`/admin/cars`}>
                                <button
                                    type="button"
                                    className="relative flex justify-center px-4 py-2 text-sm font-medium text-black bg-gray-200 border border-transparent rounded-md group hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Cancel
                                </button>
                            </Link>

                            <button
                                type="submit"
                                className="relative flex justify-center px-4 py-2 text-sm font-medium text-white bg-[#E60035] border border-transparent rounded-md group hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Create
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateCar;
