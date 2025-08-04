import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import HeaderAdmin from '../header';
import { apiUrl } from '../../environnement/environnement.prod';

function CreateUser() {
    const FillData = useRef({ name: "", email: "", password: "", address: "", phone: "", photo: "", city: "", country: "" })// the data thatis new edited by the user and gonna be passed to the backend
    const navigate = useNavigate();

    let handleCreate = async (e) => {
        e.preventDefault()

        let v = FillData.current;
        console.log(FillData.current)
        const formData = new FormData();
        formData.append('name', v.name);
        formData.append('email', v.email);
        formData.append('password', v.password);
        formData.append('address', v.address);
        formData.append('photo', v.photo);
        formData.append('phone', v.phone); // Assuming v.photo is the selected file object
        formData.append('city', v.city); // Assuming v.photo is the selected file object
        formData.append('country', v.country); // Assuming v.photo is the selected file object
        const d = await axios.post(`${apiUrl}/user`, formData, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        console.log(d.data)
        if (d.data.message === "Item added successfully") {
            navigate('/admin/users')
        }

        console.log(d.data)
    }
    return (
        <div>
            <div className='flex items-center justify-center mt-5'>
                <form
                    onSubmit={handleCreate}
                    className="w-full max-w-2xl p-10 space-y-6 bg-white rounded-lg shadow-md" action="#" method="POST">
                    <h1 className='text-xl font-semibold text-center'>Creation Of A User</h1>
                    <input type="hidden" name="remember" value="true" />


                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="sr-only">Name</label>
                            <input id="name" name="name" type="text"
                                onChange={(e) => FillData.current.name = e.target.value}

                                required 
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                                
                                placeholder="Name" />
                        </div>
                        <div>
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input id="email-address"
                                onChange={(e) => FillData.current.email = e.target.value}

                                name="email" type="email" autoComplete="email" required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Email address" />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input id="password" name="password"
                                onChange={(e) => FillData.current.password = e.target.value}

                                type="password" autoComplete="current-password" required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Password" />
                        </div>
                        <div>
                            <label htmlFor="address" className="sr-only">Address</label>
                            <input id="address" name="address"
                                onChange={(e) => FillData.current.address = e.target.value}

                                type="text" required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Address" />
                        </div>
                        <div>
                            <label htmlFor="photo" className="sr-only">Photo</label>
                            <input id="photo" name="photo"
                                onChange={(e) => FillData.current.photo = e.target.files[0]}

                                type="file" required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                        <div>
                            <label htmlFor="phone" className="sr-only">Phone</label>
                            <input id="phone" name="phone"
                                onChange={(e) => FillData.current.phone = e.target.value}

                                type="tel" required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Phone" />
                        </div>
                        <div>
                            <label htmlFor="city" className="sr-only">City</label>
                            <input id="city" name="city" type="text"
                                onChange={(e) => FillData.current.city = e.target.value}
                                required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="City" />
                        </div>
                        <div>
                            <label htmlFor="country" className="sr-only">Country</label>
                            <input id="country" name="country"
                                onChange={(e) => FillData.current.country = e.target.value}

                                type="text" required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Country" />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">



                    </div>

                    <div className='flex justify-between mt-3'>
                    <Link to={`/admin/users`} 
                   >

                        <button type="submit" 
                        className="relative flex justify-center px-4 py-2 text-sm font-medium text-black bg-gray-200 border border-transparent rounded-md group hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Cancel
                        </button>
                        </Link>
                        <button type="submit" className="relative flex justify-center px-4 py-2 text-sm font-medium
             text-white bg-[#E60035] border border-transparent rounded-md group hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Create
                        </button>
                    </div>
                </form>
            </div>


        </div>
    )
}

export default CreateUser
