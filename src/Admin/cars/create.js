import React, {  useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


import HeaderAdmin from '../header';

function CreateCar() {
    const FillData = useRef({ make: "", model: "", color: "", type: "", photo: "", year: "", available: 1, price_per_day: 0 })// the data thatis new edited by the user and gonna be passed to the backend
    const navigate = useNavigate();

    let handleCreate = async (e) => {
        e.preventDefault()
        
        let v = FillData.current;
        console.log(FillData.current)
        const formData = new FormData();
        formData.append('model', v.model);
        formData.append('make', v.make);
        formData.append('year', v.year);
        formData.append('color', v.color);
        formData.append('price_per_day', v.price_per_day);
        formData.append('photo', v.photo); // Assuming v.photo is the selected file object
        formData.append('type', v.type);
        formData.append('available', v.available);
        const d = await axios.post("http://localhost:8000/api/car",formData, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        console.log("hi")
      if(d.data.message==="Item added successfully"){
        navigate('/admin/cars')
      }

console.log(d.data)
    }
    return (
        <div>
            <HeaderAdmin />
            <div className="flex justify-center">
                <div className="w-[60%] bg-white shadow-lg rounded-lg mx-4 my-6">
                    <form action="" onSubmit={handleCreate}>
                        <div className="px-4 py-2 bg-white shadow rounded-lg">
                        </div>
                        <div className="px-4 py-2">
                            <label className="text-gray-600 block">
                                Make:
                                <input
                                    type="text"

                                    onChange={(e) => FillData.current.make =  e.target.value }
                                    className="border-2 border-gray-300 p-2 ml-2 rounded-md w-full text-base font-normal"
                                />
                            </label>
                            <label className="text-gray-600 block">
                                Model:
                                <input
                                    type="text"

                                    onChange={(e) => FillData.current.model = e.target.value }
                                    className="border-2 border-gray-300 p-2 ml-2 rounded-md w-full text-base font-normal"
                                />
                            </label>

                            <label className="text-gray-600 block">
                                Type:
                                <input
                                    type="text"

                                    onChange={(e) => FillData.current.type = e.target.value }
                                    className="border-2 border-gray-300 p-2 ml-2 rounded-md w-full text-base font-normal"
                                />
                            </label>

                            <label className="text-gray-600 block">
                                Year:
                                <input
                                    type="text"

                                    onChange={(e) => FillData.current.year =   e.target.value }
                                    className="border-2 border-gray-300 p-2 ml-2 rounded-md w-full text-base font-normal"
                                />
                            </label>

                            <label className="text-gray-600 block">
                                Available:
                                <select

                                    onChange={(e) => FillData.current.available=e.target.value }
                                    className="border-2 border-gray-300 p-2 ml-2 rounded-md w-full text-base font-normal"
                                >
                                    <option value={1}>Yes</option>
                                    <option value={0}>No</option>
                                </select>
                            </label>





                            <label className="text-gray-600 block mb-2">Choose an image:
                                <input type="file"
                                    className="border-2 border-gray-300 p-2 ml-2 rounded-md w-full text-base font-normal"
                                    onChange={(e) => FillData.current.photo= e.target.files[0] } />
                            </label>

                            <label className="text-gray-600 block">
                                Price per day:
                                <input
                                    type="text"

                                    onChange={(e) => FillData.current.price_per_day=e.target.value }
                                    className="border-2 border-gray-300 p-2 ml-2 rounded-md w-full text-base font-normal"
                                />
                            </label>



                            <label className="text-gray-600 block">
                                Color:
                                <input
                                    type="text"

                                    onChange={(e) => FillData.current.color= e.target.value }
                                    className="border-2 border-gray-300 p-2 ml-2 rounded-md w-full text-base font-normal"
                                />
                            </label>

                            <button type='submit' className="bg-orange-500 hover:bg-orange-600 text-white rounded-md mt-4 px-4 py-2" >
                                Save Changes
                            </button>

                            <Link to={`/admin/cars`} className="bg-gray-300 hover:bg-gray-400 text-black rounded-md mt-2 px-4 py-2">
                                Cancel
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateCar
