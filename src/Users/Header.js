import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function HeaderUser() {
    const [admin, setAdmin] = useState({ id: localStorage.getItem('userId'), name: localStorage.getItem("userName") })
    return (
        <div>
            <div className='flex flex-row font-body gap-[2.8rem] font-semibold bg-white1 w-[100vw] z-10 sticky top-0'>
                <img src="/imgs/jeep.png" alt="" className="w-[50px] h-[50px] mt-[15px] ml-[10px] " />

             
                <div className="flex flex-row gap-1 mt-4 relative right-[-41rem] text-[19px]">


                    <button className='p-2  rounded text-gray-500 '><Link to={`/user/rentals`}>Your Rentals </Link></button>
                    <button className='p-2  rounded text-gray-500 '><Link to={`/review/create`}>Make A Review </Link></button>
                    <button className='p-2  rounded text-gray-500 '><Link to={`/editProfile/${admin.id}`}>{admin.name} </Link></button>
                    <button className='p-2 rounded text-gray-500 '><Link to="/logout">Log Out</Link></button>
                </div>
            </div>
        </div>
    )
}


