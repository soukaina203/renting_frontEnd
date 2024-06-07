import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import HeaderUser from './Header';

function UserInterface() {
  return (
    <div>
         <div className=''>
         <HeaderUser />
        <Outlet />
    </div>
    </div>
  )
}

export default UserInterface
