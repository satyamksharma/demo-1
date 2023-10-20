const User = ({ isDropdownOpen }) => {
    return (
        <div className='flex justify-center'>
            <button
                type='button'
                className='mr-0 text-sm bg-gray-800 rounded-full  '
            >
                <span className='m-auto text-iris-100 font-semibold text-lg'>A</span>
            </button>

            {isDropdownOpen && (
                <div className=' absolute right-0 top-14 text-base list-none bg-gray-900 divide-y divide-gray-700 rounded-s-lg shadow '>
                    <div className='px-4 py-3'>
                        <span className='block text-sm text-gray-50 dark:text-white'>User</span>
                        <span className='block text-sm  text-gray-50 truncate '>
                            name@email.com
                        </span>
                    </div>
                    <ul className='py-2'>
                        <li>
                            <a
                                href='#'
                                className='block px-4 py-2 text-sm text-gray-50 hover:bg-gray-500 '
                            >
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a
                                href='#'
                                className='block px-4 py-2 text-sm text-gray-50 hover:bg-gray-500 '
                            >
                                Settings
                            </a>
                        </li>
                        <li>
                            <a
                                href='#'
                                className='block px-4 py-2 text-sm text-gray-50 hover:bg-gray-500 '
                            >
                                Sign out
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default User;
