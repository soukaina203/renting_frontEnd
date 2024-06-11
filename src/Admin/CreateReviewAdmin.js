import axios from 'axios';
import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function CreateReviewAdmin() {
  const FillData = useRef({ rating: "", comment: "",user_id:0}); // the data that is new edited by the user and gonna be passed to the backend
  const navigate = useNavigate();

  let handleCreate = async (e) => {
    e.preventDefault();
    let isAdmin=localStorage.getItem('status')
    console.log(isAdmin)
    let v = FillData.current;
    let userId=localStorage.getItem('userId');

    console.log(FillData.current);
    const formData = new FormData();
    formData.append('rating', v.rating);
    formData.append('comment', v.comment);
    formData.append('user_id', userId);
if(isAdmin!=='u'){
  const d = await axios.post("http://localhost:8000/api/review", formData, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });
  if (d.data.message === "yes") {
    navigate('/admin/reviews');
  }


}else{
  const d = await axios.post("http://localhost:8000/api/review/create", formData, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });
  if (d.data.message === "yes") {
    navigate('/user/reviews');
  }
}
  };

  return (
    <div>
      <div className='flex items-center justify-center mt-5'>
        <form
          onSubmit={handleCreate}
          className="w-full max-w-2xl p-10 space-y-6 bg-white rounded-lg shadow-md"
          action="#"
          method="POST"
        >
          <h1 className='text-xl font-semibold text-center'>Creation Of A Review</h1>
          <input type="hidden" name="remember" value="true" />

          <div className="space-y-4">
            <div>
              <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating (1-10)</label>
              <input
                id="rating"
                name="rating"
                type="number"
                min="1"
                max="10"
                onChange={(e) => FillData.current.rating = e.target.value}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Rating"
              />
            </div>
            <div>
              <label htmlFor="comment" className="block text-sm font-medium text-gray-700">Comment</label>
              <textarea
                id="comment"
                name="comment"
                rows="4"
                onChange={(e) => FillData.current.comment = e.target.value}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Comment"
              ></textarea>
            </div>
          </div>
          <div className='flex justify-between'>
            <Link to={`/admin/users`}>
              <button type="button" className="relative flex justify-center px-4 py-2 text-sm font-medium text-black bg-gray-200 border border-transparent rounded-md group hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Cancel
              </button>
            </Link>
            <button type="submit" className="relative flex justify-center px-4 py-2 text-sm font-medium text-white bg-[#E60035] border border-transparent rounded-md group hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateReviewAdmin;
