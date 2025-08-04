import React, { useEffect, useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import HeaderAdmin from './header';
import { apiUrl } from '../../environnement/environnement.prod';

function  EditProfile() {
  const [data, setData] = useState(null);//for getting data of the car that we want to edit
  const [showEditImg, setShowEditImg] = useState(false);// to show the form of uploading an image 
  const [img, setImg] = useState('')// the uploaded file of the user 
  const editedData = useRef([])// the data thatis new edited by the user and gonna be passed to the backend
  const [upClicked, setUpclicked] = useState(false)// this for changing the image if the user click on upload than the url of the image goona change to the one sent by the backend
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null); // store the incoming image url that is coming from the backend
  const navigate = useNavigate();

  const { id } = useParams();

  const fetchCar = async () => {
    console.log(id)
    const res = await axios.get(`${apiUrl}/user/${id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    setData(res.data.user);
    console.log(res.data.user)
    editedData.current = res.data.user;
  };
  let handleUpdta = async (e) => {
    e.preventDefault()
    let n = editedData.current;


    const res = await axios.patch(
      `${apiUrl}/user/${id}`,
      {
        name: n.name,
        phone: n.phone,
        email: n.email,
        address: n.address,
        password: n.password,
        city: n.city,
        country: n.country,

      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );

    
    console.log(res.data)
    if (res.data.message === "Item updated successfully") {

    }

    // Handle the response data here if needed



  }
  useEffect(() => {
    fetchCar();
  }, []);

  let handleUpload = async () => {
    const fd = new FormData()
    fd.append("image", img)
    const res = await axios.post(`${apiUrl}/user/uploadImg/${id}`, fd, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    console.log(res)
    setUploadedImageUrl(res.data.image_url)
  }
  return (
    <div>
      <div className="flex justify-center">
        {data !== null ?
          <div className="w-[60%] bg-white shadow-lg rounded-lg mx-4 my-6">
            <form action="" >
              <div className="w-full h-[19rem] flex items-center justify-center">
                <img
                  src={
                    upClicked
                      ? `${apiUrl}/images/${uploadedImageUrl}`
                      : data && data.photo
                        ? `${apiUrl}/images/${data.photo}`
                        : "/imgs/noProfile.jpg"
                  }
                  alt=""
                  className="w-[14rem] h-[14rem] object-cover object-center rounded-full"
                />
              </div>


              <button className='text-blue-500' onClick={(e) => {
                e.preventDefault()
                setShowEditImg(true)
              }}>Change the image</button>

              {showEditImg ? (
                <div className="px-4 py-2 bg-white rounded-lg shadow">
                  <label className="block mb-2 text-gray-600">Choose an image</label>
                  <input type="file" onChange={(e) => setImg(e.target.files[0])} />

                  <div className="flex gap-4 mt-4">
                    <button
                      className="w-full px-3 py-2 border border-gray-300 text-white font-semibold bg-[#E60035] rounded-md
                       shadow-sm focus:outline-none  sm:text-sm"
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

              <div className="px-4 py-2">
                <label className="block text-gray-600">
                  Name:
                  <input
                    type="text"
                    defaultValue={data.name}
                    onChange={(e) => editedData.current.name = e.target.value}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </label>

                <label className="block text-gray-600">
                  Email:
                  <input
                    type="text"
                    defaultValue={data.email}
                    onChange={(e) => editedData.current.email = e.target.value}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </label>


                <label className="block text-gray-600">
                  Address:
                  <input
                    type="text"
                    defaultValue={data.address}
                    onChange={(e) => editedData.current.address = e.target.value}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </label>



                <label className="block text-gray-600">
                  Phone
                  <input
                    type="text"
                    defaultValue={data.phone}
                    onChange={(e) => editedData.current.phone = e.target.value}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </label>
                <label className="block text-gray-600">
                  Ville
                  <input
                    type="text"
                    defaultValue={data.city}
                    onChange={(e) => editedData.current.city = e.target.value}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </label>

                <label className="block text-gray-600">
                  Pays
                  <input
                    type="text"
                    defaultValue={data.country}
                    onChange={(e) => editedData.current.country = e.target.value}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </label>

                <label className="block text-gray-600">
                  Password:
                  <input
                    type="password"
                    onChange={(e) => editedData.current.password = e.target.value}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </label>

                <div className='flex justify-between mt-2'>


                <button type='submit'
                  className="relative flex justify-center font-semibold px-4 py-2 text-sm 
                text-white bg-[#E60035] border border-transparent 
                rounded-md group hover:bg-red-600 focus:outline-none 
                focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={(e) => {
                    handleUpdta(e)
                  }}>
                  Save Changes
                </button>

                <Link to={`/admin/users`}
                  className="relative flex justify-center px-4 py-2 text-sm font-medium text-black bg-gray-200 border border-transparent rounded-md group hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">

                  Cancel
                </Link>
              </div>

              </div>
            </form>
          </div>
          : ""}
      </div>
    </div>
  )
}

export default EditProfile;