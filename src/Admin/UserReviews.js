import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { MdDeleteSweep } from 'react-icons/md';
import { Link } from 'react-scroll';

function UserReviews() {
  const userId = localStorage.getItem('userId');
  const token = localStorage.getItem('token');
  const [reviews, setreviews] = useState([]);

  const fetchData = async () => {
    try {
        const res = await axios.get(`http://127.0.0.1:8000/api/review/user/${userId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        setreviews(res.data);

    } catch (error) {
        console.error(error);
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
    fetchData();

  } else {
    console.log("error to delete")
  }

};

useEffect(() => {
    fetchData();
}, []);
  return (
    <div>
    <Link to="/admin/review/create">
      <button
        className="before:ease relative h-12 w-40 ml-auto mt-3 font-semibold flex justify-center items-center gap-2 overflow-hidden border border-red-500 text-white group shadow-2xl before:absolute before:right-0  {/* Positioned on right side */}
        before:-mr-2 before:h-48 before:w-48 before:origin-top-left 
        before:-translate-x-full before:-translate-y-12 before:rotate-90
        before:bg-white before:transition-all before:duration-300 hover:text-white
        hover:shadow-red-500 hover:bg-red-500 hover:before:-rotate-180"
      >
        <span className="relative z-20 text-red-500 group-hover:text-white">
          Create A Review
        </span>
        <FaArrowRight className="relative z-20 ml-2 text-red-500 group-hover:text-white" />
      </button>
    </Link>

    <div className="mt-5 ml-auto mr-auto overflow-x-auto p-14 ">
      <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <table className="min-w-full text-sm font-light text-left text-surface ">
            <thead className="font-medium border-b border-black">
              <tr>
                <th className="px-6 py-4 ">ID</th>
                <th className="px-6 py-4 ">User</th>
                <th className="px-6 py-4 ">Rating</th>
                <th className="px-6 py-4 ">Comment</th>
                <th className="px-6 py-4 ">Actions</th>
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
  )
}

export default UserReviews
