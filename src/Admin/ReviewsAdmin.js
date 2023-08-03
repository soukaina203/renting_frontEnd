import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import HeaderAdmin from './header';

function ReviewsAdmin() {
  const [reviews, setReviews] = useState([]);

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

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <div>
      <HeaderAdmin />
      <div className="container mx-auto">
        <div className="container mx-auto flex justify-center items-center">
          <table id='ani' className="table-auto w-[40rem] mt-6 ">
            <thead>
              <tr>
                <th className="px-4 py-2 text-btn">User </th>
                <th className="px-4 py-2 text-btn">Rating</th>
                <th className="px-4 py-2 text-btn">Comment</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <tr key={review.id}>
                  <td className="border px-4 py-2 text-center">{review.user.name}</td>
                  <td className="border px-4 py-2 text-center">{review.rating}</td>
                  <td className="border px-4 py-2 text-center">{review.comment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
        </div>  
        );
}

        export default ReviewsAdmin;
