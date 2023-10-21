'use client';
import Image from 'next/image';
import User from '@/components/User';
import { useState } from 'react';

export default function Home() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [isSubMenuActive, setSubMenuActive] = useState(1);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
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
                            <li className='active:font-semibold font-semibold cursor-pointer'>
                                Members
                            </li>
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
                {/* main content */}
                <div className=' ml-56 pt-20'>
                    <div className='flex justify-between'>
                        <div className=' flex items-center gap-x-2 font-text-md-medium font-bold text-2xl'>
                            <div className='h-8 w-8 bg-gray-900 rounded-full flex items-center justify-center'>
                                <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <g clip-path='url(#clip0_2311_22012)'>
                                        <path
                                            d='M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z'
                                            stroke='white'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                        />
                                        <path
                                            d='M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z'
                                            stroke='white'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id='clip0_2311_22012'>
                                            <rect
                                                width='24'
                                                height='24'
                                                fill='white'
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            Job requisition
                        </div>
                        <form className='relative px-10'>
                            <input
                                type='text'
                                name=''
                                id=' '
                                placeholder='Search a user, setting....'
                                className='peer relative rounded-lg bg-transparent border border-gray-400 pl-10 px-12 py-2  '
                            />
                            <svg
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-6 w-6  absolute inset-y-0 my-auto inset-x-12'
                            >
                                <path
                                    d='M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z'
                                    stroke='black'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                />
                            </svg>
                        </form>
                    </div>
                    <div className='m-4'>
                        <ul className='flex gap-x-6 border-b p-2 pb-0 text-lg font-text-md-regular font-medium cursor-pointer'>
                            <li
                                className={`hover:text-iris-100 ${
                                    isSubMenuActive === 0
                                        ? 'text-iris-100 border-iris-100 border-b'
                                        : ''
                                }`}
                                onClick={() => setSubMenuActive(0)}
                            >
                                Sub menu 1
                            </li>
                            <li
                                className={`hover:text-iris-100 ${
                                    isSubMenuActive === 1
                                        ? 'text-iris-100 border-iris-100 border-b'
                                        : ''
                                }`}
                                onClick={() => setSubMenuActive(1)}
                            >
                                Sub menu 2
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}
