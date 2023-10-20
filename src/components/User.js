const User = ({ isDropdownOpen }) => {
    return (
        <div class='flex justify-center'>
            <button
                type='button'
                class='mr-0 text-sm bg-gray-800 rounded-full  '
            >
                <span className='m-auto text-iris-100 font-semibold text-lg'>A</span>
                {isDropdownOpen && (
                    <div class=' absolute right-0 top-14 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600'>
                        <div class='px-4 py-3'>
                            <span class='block text-sm text-gray-900 dark:text-white'>User</span>
                            <span class='block text-sm  text-gray-500 truncate dark:text-gray-400'>
                                name@email.com
                            </span>
                        </div>
                        <ul class='py-2'>
                            <li>
                                <a
                                    href='#'
                                    class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                                >
                                    Dashboard
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#'
                                    class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                                >
                                    Settings
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#'
                                    class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                                >
                                    Sign out
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </button>
        </div>
    );
};

export default User;
