import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderUser from './Header';
import { apiUrl } from '../environnement/environnement.prod';

function CreateReview() {
    const data = useRef({ comment: '', rating: 0 })
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        let n = data.current
        let user_id = localStorage.getItem('userId')
        const r = await axios.post(`${apiUrl}/review/create`, {
            'user_id':user_id,
            'comment': n.comment,
            'rating': n.rating
        },

            {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            if(r.data.message==='yes'){
                navigate('/user/reviews')

            }

    };

    return (
        <div>
            <HeaderUser />
            <div className="max-w-md p-4 mx-auto mt-8 bg-white rounded shadow">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="comment" className="font-bold text-gray-600">
                            Comment:
                        </label>
                        <textarea
                            id="comment"
                            className="w-full px-4 py-2 border rounded form-textarea focus:outline-none focus:shadow-outline"
                            rows="4"
                            placeholder="Enter your comment..."
                            onChange={(e) => data.current.comment = e.target.value}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="rating" className="font-bold text-gray-600">
                            Rating:
                        </label>
                        <input
                            type="number"
                            id="rating"
                            className="w-full px-4 py-2 border rounded form-input focus:outline-none focus:shadow-outline"
                            min="0"
                            max="5"
                            onChange={(e) => data.current.rating = e.target.value}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-600"
                    >
                        Submit Review
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CreateReview;
