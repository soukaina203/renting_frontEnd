import  { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { apiUrl } from '../../environnement/environnement.prod';

export default function Rent() {
    const [car, setCars] = useState(null);
    const [total, setTotal] = useState(0);
    const { id } = useParams();

    const price_per_day = useRef(0)
    const FillData = useRef({
        user_id: "", car_id: "",
        rental_start: "", rental_end: "", total_price: "", hourFinish: "", hourStart: ""
    })// the data thatis new edited by the user and gonna be passed to the backend
    const navigate = useNavigate();
    const fetchData = async () => {
        const res = await axios.get(`${apiUrl}/car/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        setCars(res.data.car);
        price_per_day.current = res.data.car.price_per_day;
    };
    let handleCreate = async (e) => {
        e.preventDefault()

        let n = FillData.current;
        const d = await axios.post( `${apiUrl}/rentals`, {
            user_id: localStorage.getItem('userId'),
            car_id: id,
            rental_start: n.rental_start,
            rental_end: n.rental_end,
            total_price: n.total_price,
            hourFinish: n.hourFinish,
            hourStart: n.hourStart,

        }, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        console.log(d.data)
        if (d.data.message === "Item added successfully") {
            navigate('/user/answer')
        }

        console.log(d.data)
    }
    useEffect(() => {
        fetchData();
    }, []);

    let diffrenceDate = (d1, d2) => {
        const startDate = new Date(d1); // Replace with your start date
        const endDate = new Date(d2);
        const date1Ms = startDate.getTime();
        const date2Ms = endDate.getTime();
        // Calculate the difference in milliseconds
        const differenceMs = Math.abs(date1Ms - date2Ms);

        // Convert the difference to days
        const daysDifference = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));
        const totalPrice = daysDifference * price_per_day.current
        FillData.current.total_price = totalPrice
        console.log(FillData.current.total_price)
        setTotal(totalPrice)
    }
    return (
        <div>
            {
                car !== null ?
<div className="flex justify-center">
  <div className="w-[50%] bg-white shadow-lg rounded-lg mx-4 my-6">
    <form action="" onSubmit={handleCreate}>
      <div className="px-4 py-2 bg-white rounded-lg shadow">
      </div>
      <div className="px-4 py-2">
        <img
          src={`${apiUrl}/images/${car.photo}`}
          alt=""
          className="w-full h-[19rem] object-cover object-center rounded-t-lg"
        />

        <div className="flex mt-4 space-x-4">
          <div className="flex-1">
            <label className="block font-bold text-gray-700">
              Rental Start Date
            </label>
            <input
              type="date"
              onChange={(e) => FillData.current.rental_start = e.target.value}
              className="w-full p-2 text-base font-normal border-2 border-gray-300 rounded-md"
            />
          </div>
          <div className="flex-1">
            <label className="block font-bold text-gray-700">
              Rental End Date
            </label>
            <input
              type="date"
              onChange={(e) => FillData.current.rental_end = e.target.value}
              className="w-full p-2 text-base font-normal border-2 border-gray-300 rounded-md"
            />
          </div>
        </div>

        <label className="block mt-2 font-bold text-gray-700">
          Price per day
        </label>
        <input
          type="text"
          value={car.price_per_day}
          onChange={(e) => FillData.current.price_per_day = e.target.value}
          className="w-full p-2 text-base font-normal border-2 border-gray-300 rounded-md"
        />

        <div className="flex mt-4 space-x-4">
          <div className="flex-1">
            <label className="block font-bold text-gray-700">
              Hour Start
            </label>
            <input
              type="time"
              onChange={(e) => FillData.current.hourStart = e.target.value}
              className="w-full p-2 text-base font-normal border-2 border-gray-300 rounded-md"
            />
          </div>
          <div className="flex-1">
            <label className="block font-bold text-gray-700">
              Hour Finish
            </label>
            <input
              type="time"
              onChange={(e) => FillData.current.hourFinish = e.target.value}
              className="w-full p-2 text-base font-normal border-2 border-gray-300 rounded-md"
            />
          </div>
        </div>

        <button
          type="button"
          className="w-full px-4 py-2 mt-4 text-white bg-[#E60035] rounded-md hover:bg-red-600 font-semibold mb-2"
          onClick={() => {
            diffrenceDate(FillData.current.rental_start, FillData.current.rental_end);
          }}
        >
          Calculate Total
        </button>

        <label className="block mt-2 font-bold text-gray-700">
          Total Price
        </label>
        <input
          type="text"
          value={total}
          onChange={(e) => FillData.current.total_price = e.target.value}
          className="w-full p-2 text-base font-normal border-2 border-gray-300 rounded-md"
        />

        <div className='flex justify-between mt-2'>
          <button
            type='submit'
            className="relative flex justify-center px-4 py-2 text-sm font-medium text-white bg-[#E60035] border border-transparent rounded-md group hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Rent
          </button>

          <Link
            to={`/welcome`}
            className="relative flex justify-center px-4 py-2 text-sm font-medium text-black bg-gray-200 border border-transparent rounded-md group hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Cancel
          </Link>
        </div>
      </div>
    </form>
  </div>
</div>

                    : ""}
        </div>
    )
}

