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
            <nav className=' fixed w-full flex justify-between bg-gray-900 p-2 z-30'>
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
                                className='cursor-pointer relative z-10 h-10 w-10 rounded-full bg-transparent focus:bg-gray-50  focus:w-full focus:cursor-text focus:px-6  focus:pr-4'
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
                    <button className=' rounded-full w-10 h-10 bg-gray-700 p-2'>
                        <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            className=''
                        >
                            <path
                                d='M13.73 21C13.5542 21.3031 13.3018 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z'
                                stroke='white'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                            />
                        </svg>
                    </button>
                    <button className=' rounded-full w-fit bg-gray-700 p-2 h-10 w-10'>
                        <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13M12 17H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z'
                                stroke='white'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                            />
                        </svg>
                    </button>
                    <div
                        className=' rounded-full w-10 h-10 bg-gray-300 p-1 mx-2 cursor-pointer'
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
