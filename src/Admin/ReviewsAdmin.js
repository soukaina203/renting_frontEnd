import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import HeaderAdmin from './header';
import { FaArrowRight, FaPen } from 'react-icons/fa6';
import { MdDeleteSweep } from 'react-icons/md';

function ReviewsAdmin() {
  const [reviews, setReviews] = useState([]);

  const [search, setSearch] = useState([])
  let getSearchUsers = async () => {
    const da = await axios.get(`http://localhost:8000/api/search/review/${search}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    setReviews(da.data)
  }

  const getReviews = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/reviews', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      setReviews(response.data);
    } catch (error) {
      // Handle error if API call fails
      console.error('Error fetching reviews:', error);
    }
  };

  let deleteReview = async (id) => {
    let d = await axios.delete(`http://localhost:8000/api/review/${id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    console.log(d.data);
    if (d.data.msg === "done") {
      getReviews();

    } else {
      console.log("error to delete")
    }

  };

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <div>
      <div className='w-full py-4 mt-2 '>
        <div className='max-w-4xl px-2 mx-auto'>
          <div className='flex flex-row '>
            <input
              type="text"
              className='w-full px-4 py-2 bg-white border-2 rounded-l outline-none'
              placeholder='Search Reviews By Comment or Rating...'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              type='button'
              onClick={() => {
                getSearchUsers()

              }}
              className="px-4 py-2 text-white font-Yantramanav-Black text-[1.2rem] rounded-r bg-[#E60035] hover:bg-red-600  "
            >
              Search
            </button>

          </div>
        </div>
      </div>
    <div className="mt-5 ml-auto mr-auto overflow-x-auto p-14 ">

      <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">

      <Link to="/admin/review/create">
        <button className="relative h-12 w-40 uppercase font-semibold flex justify-center items-center gap-2 overflow-hidden
          border border-[#E60035] text-[#E60035] shadow-2xl font-Yantramanav-Black text-[1.1rem]
          before:absolute before:left-0 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full
          before:translate-y-12 before:-rotate-90 before:bg-white before:transition-all before:duration-300
          hover:text-white hover:shadow-[#E60035] hover:bg-[#E60035] hover:before:-rotate-180">

          <span className="relative z-10">Create Review</span>
          <FaArrowRight className="relative z-10" />
        </button>
      </Link>
        <div className="overflow-hidden">
          <table className="min-w-full text-sm font-light text-left text-surface ">
            <thead className="font-medium border-b border-black">
              <tr>
                <th className="px-6 py-4 text-[1rem]">ID</th>
                <th className="px-6 py-4 text-[1rem]">User</th>
                <th className="px-6 py-4 text-[1rem]">Rating</th>
                <th className="px-6 py-4 text-[1rem]">Comment</th>
                <th className="px-6 py-4 text-[1rem]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((e, i) => (
                <tr key={i} className="border-b border-black ">
                     <td className="px-6 py-4 font-medium whitespace-nowrap">
                    {e.id}
                  </td>
                  <td className="px-6 py-4 font-medium whitespace-nowrap">
                    {e.user.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {e.rating}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {e.comment}
                  </td>
                  <td className="flex gap-2 px-6 py-4 ml-auto mr-auto whitespace-nowrap">

               

                    <MdDeleteSweep   className="font-semibold cursor-pointer  text-[#E60035] w-5 h-5  "
                              onClick={() => deleteReview(e.id)}/>


                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>


  </div>
  );
}

export default ReviewsAdmin;
