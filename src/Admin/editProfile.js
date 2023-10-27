import React, { useEffect, useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import HeaderAdmin from './header';

function ModifyCar() {
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
    const res = await axios.get(`http://127.0.0.1:8000/api/users/${id}`, {
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
        `http://127.0.0.1:8000/api/users/${id}`,
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

        navigate('/users')
      }

      // Handle the response data here if needed
    


  }
  useEffect(() => {
    fetchCar();
  }, []);

  let handleUpload = async () => {
    const fd = new FormData()
    fd.append("image", img)
    const res = await axios.post(`http://127.0.0.1:8000/api/user/uploadImg/${id}`, fd, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    console.log(res)
    setUploadedImageUrl(res.data.image_url)
  }
  return (
    <div>
      <HeaderAdmin />
      <div className="flex justify-center">
        {data !== null ?
          <div className="w-[60%] bg-white shadow-lg rounded-lg mx-4 my-6">
            <form action="" >
              <div className="w-full h-[19rem] flex items-center justify-center">
                <img
                  src={
                    upClicked
                      ? `http://127.0.0.1:8000/images/${uploadedImageUrl}`
                      : data && data.photo
                        ? `http://127.0.0.1:8000/images/${data.photo}`
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
                <div className="px-4 py-2 bg-white shadow rounded-lg">
                  <label className="text-gray-600 block mb-2">Choose an image</label>
                  <input type="file" onChange={(e) => setImg(e.target.files[0])} />
                  <div className="mt-4 flex gap-4">
                    <button
                      className="bg-orange-500 hover:bg-orange-600 text-white rounded-md px-4 py-1 flex items-center justify-center"
                      onClick={(z) => {
                        z.preventDefault()
                        setUpclicked(true);
                        handleUpload();
                      }}
                    >

                      Upload
                    </button>
                    <button
                      className="bg-gray-300 hover:bg-gray-400 text-black rounded-md px-4 py-1 flex items-center justify-center"
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
                <label className="text-gray-600 block">
                  Name:
                  <input
                    type="text"
                    defaultValue={data.name}
                    onChange={(e) => editedData.current.name= e.target.value}
                    className="border-2 border-gray-300 p-2 ml-2 rounded-md w-full text-base font-normal"
                  />
                </label>

                <label className="text-gray-600 block">
                  Email:
                  <input
                    type="text"
                    defaultValue={data.email}
                    onChange={(e) => editedData.current.email= e.target.value}
                    className="border-2 border-gray-300 p-2 ml-2 rounded-md w-full text-base font-normal"
                  />
                </label>


                <label className="text-gray-600 block">
                Address:
                  <input
                    type="text"
                    defaultValue={data.address}
                    onChange={(e) => editedData.current.address= e.target.value}
                    className="border-2 border-gray-300 p-2 ml-2 rounded-md w-full text-base font-normal"
                  />
                </label>

            

                <label className="text-gray-600 block">
                  Phone
                  <input
                    type="text"
                    defaultValue={data.phone}
                    onChange={(e) => editedData.current.phone= e.target.value }
                    className="border-2 border-gray-300 p-2 ml-2 rounded-md w-full text-base font-normal"
                  />
                </label>
                <label className="text-gray-600 block">
                  Ville
                  <input
                    type="text"
                    defaultValue={data.city}
                    onChange={(e) => editedData.current.city= e.target.value }
                    className="border-2 border-gray-300 p-2 ml-2 rounded-md w-full text-base font-normal"
                  />
                </label>

                <label className="text-gray-600 block">
                  Pays
                  <input
                    type="text"
                    defaultValue={data.country}
                    onChange={(e) => editedData.current.country= e.target.value }
                    className="border-2 border-gray-300 p-2 ml-2 rounded-md w-full text-base font-normal"
                  />
                </label>

                <label className="text-gray-600 block">
                Password:
                  <input
                    type="password"
                    onChange={(e) => editedData.current.password= e.target.value}
                    className="border-2 border-gray-300 p-2 ml-2 rounded-md w-full text-base font-normal"
                  />
                </label>


               
                <button type='submit' className="bg-orange-500 hover:bg-orange-600 text-white rounded-md mt-4 px-4 py-2" onClick={(e) => {
                  handleUpdta(e)
                }}>
                  Save Changes
                </button>

                <Link to={`/users`} className="bg-gray-300 hover:bg-gray-400 text-black rounded-md mt-2 px-4 py-2">
                  Cancel
                </Link>
              </div>
            </form>
          </div>
          : ""}
      </div>
    </div>
  )
}

export default ModifyCar;