import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

axios.defaults.withCredentials = true;

function LogOut() {
  const navigate = useNavigate();

  const func = async () => {
    let st=localStorage.getItem('status')
    try {
      const d = await axios.post( st==='a'?
        'http://127.0.0.1:8000/api/logout':'http://127.0.0.1:8000/api/logoutUser',
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      console.log(d.data);
      localStorage.removeItem('token');
      navigate('/'); // Redirect to the desired page after successful logout
    } catch (error) {
      console.error('Logout error:', error);
      // Handle any error that occurs during logout (optional)
    }
  };

  useEffect(() => {
    func(); // Call the logout function directly within useEffect
  }, []); // Empty dependency array to run the effect once on mount

  return <div></div>;
}

export default LogOut;
