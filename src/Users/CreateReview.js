import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderUser from './Header';

function CreateReview() {
    const data = useRef({ comment: '', rating: 0 })
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        let n = data.current
        let user_id = localStorage.getItem('userId')
        const r = await axios.post(`http://127.0.0.1:8000/api/review/create`, {
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
                navigate('/welcome')

            }

    };

    return (
        <div>
            <HeaderUser />
            <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="comment" className="text-gray-600 font-bold">
                            Comment:
                        </label>
                        <textarea
                            id="comment"
                            className="form-textarea w-full border px-4 py-2 rounded focus:outline-none focus:shadow-outline"
                            rows="4"
                            placeholder="Enter your comment..."
                            onChange={(e) => data.current.comment = e.target.value}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="rating" className="text-gray-600 font-bold">
                            Rating:
                        </label>
                        <input
                            type="number"
                            id="rating"
                            className="form-input w-full border px-4 py-2 rounded focus:outline-none focus:shadow-outline"
                            min="0"
                            max="5"
                            onChange={(e) => data.current.rating = e.target.value}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-btn hover:bg-btn1 text-white font-bold py-2 px-4 rounded"
                    >
                        Submit Review
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CreateReview;
