import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { apiUrl } from '../../environnement/environnement.prod';

function CreateCar() {
    const FillData = useRef({ make: "", model: "", color: "", type: "", photo: "", year: "", available: 1, price_per_day: 0 });
    const navigate = useNavigate();
    const [data, setData] = useState(null);//for getting data of the car that we want to edit
    const [showEditImg, setShowEditImg] = useState(false);// to show the form of uploading an image
    const [img, setImg] = useState('')// the uploaded file of the user
    const editedData = useRef([])// the data thatis new edited by the user and gonna be passed to the backend
    const [upClicked, setUpclicked] = useState(false)// this for changing the image if the user click on upload than the url of the image goona change to the one sent by the backend
    const [uploadedImageUrl, setUploadedImageUrl] = useState(null); // store the incoming image url that is coming from the backend

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

        const req = await axios.post(`${apiUrl}/car`, formData, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });


        if (req.data.message === "Item added successfully") {
            navigate('/admin/cars');
        }

    }
    let handleUpload = async () => {
        const fd = new FormData()
        fd.append("image", img)
        const res = await axios.post(`${apiUrl}/car/uploadImg`, fd, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });

        FillData.current.photo = res.data.image_url
        // public function uploadImgs(Request $request,string $id )
        setUploadedImageUrl(res.data.image_url)
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
                    <img
                        src={upClicked ? `http://127.0.0.1:8000/images/${uploadedImageUrl}` : `http://127.0.0.1:8000/images/${data?.photo}`}
                        alt="Loading ..." className="w-full h-[19rem] object-cover object-center rounded-t-lg   " /> 
                        
                    <button className='p-4 pb-0 text-blue-500' onClick={(e) => {
                        e.preventDefault()
                        setShowEditImg(true)
                    }}>upload image</button>

                    {showEditImg ? (
                        <div className="px-4 py-2 bg-white rounded-lg shadow">
                            <label className="block mb-2 text-gray-600">Choose an image</label>
                            <input type="file" onChange={(e) => setImg(e.target.files[0])} />
                            <div className="flex gap-4 mt-4">
                                <button
                                    className="w-full px-3 py-2 border border-gray-300 text-white font-semibold bg-[#E60035] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"

                                    onClick={(z) => {
                                        z.preventDefault()
                                        setUpclicked(true);
                                        handleUpload();
                                    }}
                                >

                                    Upload
                                </button>
                                <button
                                    className="w-full px-3 py-2 font-semibold text-black bg-gray-200 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"

                                    onClick={() => {
                                        setShowEditImg(false);
                                    }}
                                >

                                    Cancel
                                </button>
                            </div>
                        </div>
                    ) : null}




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