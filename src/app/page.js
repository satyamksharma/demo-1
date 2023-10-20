'use client';
import Image from 'next/image';
import User from '@/components/User';
import { useState } from 'react';

export default function Home() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    return (
        <main className=''>
            {/* Main Nav */}
            <nav className=' fixed w-full flex flex-1 justify-between bg-gray-900 p-2 z-30'>
                <div className=' w-fit my-auto ml-4'>
                    <img
                        src='./plumes.svg'
                        alt='logo'
                    />
                </div>
                <div className=' flex gap-x-4'>
                    <div className='mx-auto max-w-md bg-gray-700 rounded-full'>
                        <form
                            action=''
                            className='relative mx-auto w-max'
                        >
                            <input
                                type='search'
                                className='cursor-pointer relative z-10 h-10 w-10 rounded-full bg-transparent focus:bg-gray-50  focus:w-full focus:cursor-text  focus:pr-4'
                            />
                            <svg
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                                className='absolute inset-y-0 m-auto h-10 w-10 border-r border-transparent p-2 mx-auto focus:text-gray-50'
                            >
                                <path
                                    d='M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z'
                                    stroke='white'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                />
                            </svg>
                        </form>
                    </div>
                    <button className=' rounded-full w-fit bg-gray-700 p-2'>
                        <img
                            src='./bell.svg'
                            alt='notofication'
                        />
                    </button>
                    <button className=' rounded-full w-fit bg-gray-700 p-2'>
                        <img
                            src='./info.svg'
                            alt='info'
                        />
                    </button>
                    <div
                        className=' rounded-full w-10 h-10 bg-gray-300 p-1 mx-2'
                        onClick={toggleDropdown}
                    >
                        <User isDropdownOpen={isDropdownOpen} />
                    </div>
                </div>
            </nav>

            <section className=''>
                {/* sidebar */}
                <aside className=' fixed flex flex-col justify-between bg-primary-50 h-full w-48 my-16 py-6 px-2 z-20'>
                    <div className=' text-sm'>
                        <button className='flex'>
                            <img
                                src='./down.svg'
                                alt='down'
                            />
                            <span className='active:font-semibold font-semibold'>Settings</span>
                        </button>
                        <ul className=' ml-5 '>
                            <li className='active:font-semibold font-semibold cursor-pointer'>
                                Members
                            </li>
                            <li className='active:font-semibold cursor-pointer'>Company Details</li>
                            <li className='active:font-semibold cursor-pointer'>Career Page</li>
                        </ul>
                    </div>
                    <ul className=' mx-2 text-sm flex flex-col gap-y-6'>
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
                    <div className=''></div>
                </aside>
                {/* main content */}
                <div className=''>
                    <div className=''></div>
                    <ul className=''></ul>
                </div>
            </section>
        </main>
    );
}
