import React, { useEffect } from 'react';
import { useHistory, useNavigate } from 'react-router-dom';
import HeaderUser from './Header';

function Answer() {
  const navigate = useNavigate();

  useEffect(() => {
    // Set up a timer to navigate to the welcome page after 5 seconds
    const timer = setTimeout(() => {
     navigate('/welcome'); // Replace '/welcome' with the actual route to your welcome page
    }, 1000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='h-[100vh]'>
      <HeaderUser />
      <div className="text-center mt-[14rem] ">
        <h1 className="text-2xl font-bold text-orange-500">YOU'RE RENTAL IS GOING TO BE PROCESSED AND WE'LL CONTACT YOU</h1>
      </div>
    </div>
  );
}

export default Answer;
