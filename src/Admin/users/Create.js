import React, {  useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import HeaderAdmin from '../header';
function CreateUser() {
    const FillData = useRef({ name: "", email: "", password: "", address: "",  phone: "",photo:"",city:"",country:"" })// the data thatis new edited by the user and gonna be passed to the backend
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
        const d = await axios.post("http://localhost:8000/api/user",formData, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        console.log(d.data)
      if(d.data.message==="Item added successfully"){
        navigate('/users')
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
                                Name:
                                <input
                                    type="text"

                                    onChange={(e) => FillData.current.name =  e.target.value }
                                    className="border-2 border-gray-300 p-2 ml-2 rounded-md w-full text-base font-normal"
                                />
                            </label>
                            <label className="text-gray-600 block">
                                Email:
                                <input
                                    type="text"

                                    onChange={(e) => FillData.current.email = e.target.value }
                                    className="border-2 border-gray-300 p-2 ml-2 rounded-md w-full text-base font-normal"
                                />
                            </label>

                            <label className="text-gray-600 block">
                                Password:
                                <input
                                    type="password"

                                    onChange={(e) => FillData.current.password = e.target.value }
                                    className="border-2 border-gray-300 p-2 ml-2 rounded-md w-full text-base font-normal"
                                />
                            </label>

                            <label className="text-gray-600 block">
                            Address:
                                <input
                                    type="text"

                                    onChange={(e) => FillData.current.address =   e.target.value }
                                    className="border-2 border-gray-300 p-2 ml-2 rounded-md w-full text-base font-normal"
                                />
                            </label>

                            <label className="text-gray-600 block">
                            Phone:
                                <input
                                    type="text"

                                    onChange={(e) => FillData.current.phone =   e.target.value }
                                    className="border-2 border-gray-300 p-2 ml-2 rounded-md w-full text-base font-normal"
                                />
                            </label>
                            <label className="text-gray-600 block mb-2">Photo:
                                <input type="file"
                                    className="border-2 border-gray-300 p-2 ml-2 rounded-md w-full text-base font-normal"
                                    onChange={(e) => FillData.current.photo= e.target.files[0] } />
                            </label>

                            <label className="text-gray-600 block mb-2">City:
                                <input type="text"
                                    className="border-2 border-gray-300 p-2 ml-2 rounded-md w-full text-base font-normal"
                                    onChange={(e) => FillData.current.city= e.target.value } />
                            </label>

                            <label className="text-gray-600 block mb-2">Country:
                                <input type="text"
                                    className="border-2 border-gray-300 p-2 ml-2 rounded-md w-full text-base font-normal"
                                    onChange={(e) => FillData.current.country= e.target.value } />
                            </label>
                            <button type='submit' className="bg-orange-500 hover:bg-orange-600 text-white rounded-md mt-4 px-4 py-2" >
                                Save Changes
                            </button>

                            <Link to={`/users`} className="bg-gray-300 hover:bg-gray-400 text-black rounded-md mt-2 px-4 py-2">
                                Cancel
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
    </div>
  )
}

export default CreateUser
