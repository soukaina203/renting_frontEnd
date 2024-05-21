import React from 'react';
import { Link } from 'react-router-dom';
function Choose() {
  return (
    <div className="flex justify-center items-center h-screen gap-3">
      <div className="h-[20rem] w-[25rem] bg-orange-500">

        {/* Welcome heading */}
        <h1 className="flex-1 text-[30px] font-semibold mb-6 text-center text-white mt-[8rem] "><Link to="/signUp"> SignUp  </Link> </h1>
      </div>
      {/* Div with orange background */}
      <div className="h-[20rem] w-[25rem] bg-btn">

        {/* Welcome heading */}
        <h1 className="flex-1 text-[30px] font-semibold mb-6 text-center text-white mt-[8rem] "><Link to="/signIn"> Login  </Link>  </h1>
      </div>
    </div>
  );
}

export default Choose;
