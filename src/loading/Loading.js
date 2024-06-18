import React, { useEffect } from 'react'
import "./loading.css"
import { useNavigate } from 'react-router-dom';
function Loading() {
    const navigate = useNavigate();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            navigate('/home');
        }, 2000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <div className='flex items-center justify-center w-full h-screen '>


            <div class="three-body">
                <div class="three-body__dot"></div>
                <div class="three-body__dot"></div>
                <div class="three-body__dot"></div>
            </div>
        </div>
    )
}

export default Loading
