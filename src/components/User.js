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
                <div className=' absolute right-0 top-14 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600'>
                    <div className='px-4 py-3'>
                        <span className='block text-sm text-gray-900 dark:text-white'>User</span>
                        <span className='block text-sm  text-gray-500 truncate dark:text-gray-400'>
                            name@email.com
                        </span>
                    </div>
                    <ul className='py-2'>
                        <li>
                            <a
                                href='#'
                                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                            >
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a
                                href='#'
                                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                            >
                                Settings
                            </a>
                        </li>
                        <li>
                            <a
                                href='#'
                                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
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
