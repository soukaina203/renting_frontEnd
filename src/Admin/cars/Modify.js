import React, { useEffect, useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import HeaderAdmin from '../header';
import { useNavigate } from "react-router-dom";

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
    const response = await axios.get(`http://127.0.0.1:8000/api/car/${id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    setData(response.data.car);
    editedData.current = response.data.car;
  };
  let handleUpdta = async (e) => {
    e.preventDefault()
    let n = editedData.current;
    console.log('hiiiii')
    try {
      const res = await axios.patch(
        `http://127.0.0.1:8000/api/car/${id}`,
        {
          model: n.model,
          make: n.make,
          type: n.type,
          year: n.year,
          color: n.color,
          price_per_day: n.price_per_day,
          available: n.available,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      if(res.data.message==="Item updated successfully"){

        navigate('/admin/cars')
      }

      // Handle the response data here if needed
      console.log(res.data);
    } catch (error) {
      // Handle errors here
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error('Response data:', error.response.data);
        console.error('Status code:', error.response.status);
        console.error('Headers:', error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Request:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error:', error.message);
      }
    }


  }
  useEffect(() => {
    fetchCar();
  }, []);
  let handleUpload = async () => {
    const fd = new FormData()
    fd.append("image", img)
    const res = await axios.post(`http://127.0.0.1:8000/api/car/uploadImg/${id}`, fd, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    console.log(res)
    // public function uploadImgs(Request $request,string $id )
    setUploadedImageUrl(res.data.image_url)
  }
  return (
    <div>
      <HeaderAdmin />
      <div className="flex justify-center">
        {data !== null ?
          <div className="w-[60%] bg-white shadow-lg rounded-lg mx-4 my-6">
            <form action="" >
              <img
                src={upClicked ? `http://127.0.0.1:8000/images/${uploadedImageUrl}` : `http://127.0.0.1:8000/images/${data.photo}`}
                alt="Loading ..." className="w-full h-[19rem] object-cover object-center rounded-t-lg   " />
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
                  Make:
                  <input
                    type="text"
                    defaultValue={data.make}
                    onChange={(e) => editedData.current = { ...data, make: e.target.value }}
                    className="border-2 border-gray-300 p-2 ml-2 rounded-md w-full text-base font-normal"
                  />
                </label>

                <label className="text-gray-600 block">
                  Model:
                  <input
                    type="text"
                    defaultValue={data.model}
                    onChange={(e) => editedData.current = { ...data, model: e.target.value }}
                    className="border-2 border-gray-300 p-2 ml-2 rounded-md w-full text-base font-normal"
                  />
                </label>

                <label className="text-gray-600 block">
                  Type:
                  <input
                    type="text"
                    defaultValue={data.type}
                    onChange={(e) => editedData.current = { ...data, type: e.target.value }}
                    className="border-2 border-gray-300 p-2 ml-2 rounded-md w-full text-base font-normal"
                  />
                </label>

                <label className="text-gray-600 block">
                  Year:
                  <input
                    type="text"
                    defaultValue={data.year}
                    onChange={(e) => editedData.current = { ...data, year: e.target.value }}
                    className="border-2 border-gray-300 p-2 ml-2 rounded-md w-full text-base font-normal"
                  />
                </label>

                <label className="text-gray-600 block">
                  Available:
                  <select
                    defaultValue={data.available}
                    onChange={(e) => editedData.current = { ...data, available: e.target.value }}
                    className="border-2 border-gray-300 p-2 ml-2 rounded-md w-full text-base font-normal"
                  >
                    <option value={1}>Yes</option>
                    <option value={0}>No</option>
                  </select>
                </label>

                <label className="text-gray-600 block">
                  Price per day:
                  <input
                    type="number"
                    defaultValue={data.price_per_day}
                    onChange={(e) => editedData.current = { ...data, price_per_day: e.target.value }}
                    className="border-2 border-gray-300 p-2 ml-2 rounded-md w-full text-base font-normal"
                  />
                </label>



                <label className="text-gray-600 block">
                  Color:
                  <input
                    type="text"
                    defaultValue={data.color}
                    onChange={(e) => editedData.current = { ...data, color: e.target.value }}
                    className="border-2 border-gray-300 p-2 ml-2 rounded-md w-full text-base font-normal"
                  />
                </label>

                <button type='submit' className="bg-orange-500 hover:bg-orange-600 text-white rounded-md mt-4 px-4 py-2" onClick={(e) => {
                  handleUpdta(e)
                }}>
                  Save Changes
                </button>

                <Link to={`/admin/cars`} className="bg-gray-300 hover:bg-gray-400 text-black rounded-md mt-2 px-4 py-2">
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