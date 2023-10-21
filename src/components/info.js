import React from 'react';

const info = ({ content }) => {
    return (
        <div className='group relative'>
            <svg
                width='16'
                height='15'
                viewBox='0 0 16 15'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='group-hover:opacity-50'
            >
                <path
                    d='M6.06016 5.66667C6.2169 5.22111 6.52626 4.8454 6.93347 4.60609C7.34067 4.36677 7.81943 4.27929 8.28495 4.35914C8.75047 4.43899 9.17271 4.68102 9.47688 5.04235C9.78106 5.40369 9.94753 5.86101 9.94683 6.33333C9.94683 7.66667 7.94683 8.33333 7.94683 8.33333M8.00016 11H8.00683M14.6668 7.66667C14.6668 11.3486 11.6821 14.3333 8.00016 14.3333C4.31826 14.3333 1.3335 11.3486 1.3335 7.66667C1.3335 3.98477 4.31826 1 8.00016 1C11.6821 1 14.6668 3.98477 14.6668 7.66667Z'
                    stroke='#98A2B3'
                    stroke-width='1.33333'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                />
            </svg>
            <p className=' absolute left-0 border p-2 bg-gray-200 invisible opacity-0 group-hover:visible group-hover:opacity-100 w-32 rounded-xl'>
                {content}
            </p>
        </div>
    );
};

export default info;
