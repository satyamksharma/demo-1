'use client';
import React, { useState } from 'react';

const SideBar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };
    return (
        <aside className=' fixed flex flex-col bg-primary-50 h-full w-48 my-16 py-6 px-2 z-20'>
            <div className=' text-sm absolute'>
                <button
                    className='flex'
                    onClick={toggleSidebar}
                >
                    <img
                        src='./down.svg'
                        alt='down'
                    />
                    <span className='active:font-semibold font-semibold'>Settings</span>
                </button>
                <ul className={` ml-5 ${isSidebarOpen ? '' : 'hidden'}`}>
                    <li className='active:font-semibold font-semibold cursor-pointer'>Members</li>
                    <li className='active:font-semibold cursor-pointer'>Company Details</li>
                    <li className='active:font-semibold cursor-pointer'>Career Page</li>
                </ul>
            </div>
            <ul className=' relative my-auto mx-2 text-sm flex flex-col gap-y-6'>
                <li className='flex px-2'>
                    <img
                        src='./mail.svg'
                        alt='mail'
                        className=' my-auto w-3 h-3'
                    />
                    <span className=' text-gray-400 mx-1'>help@plumes.ai</span>
                </li>
                <li className=' text-gray-400 font-semibold'> &copy; Plumes Copyright</li>
            </ul>
        </aside>
    );
};

export default SideBar;
