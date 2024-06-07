import React from 'react';
import HeaderAdmin from './header';
import { Outlet } from 'react-router-dom';


// Define the data array with icons and names


function Admin() {


  return (
    <div className=''>
      <HeaderAdmin />
        <Outlet />
    </div>
  );
}

export default Admin;
