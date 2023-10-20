import Image from 'next/image';

export default function Home() {
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
                    <button className=' rounded-full w-fit bg-gray-700 p-2'>
                        <img
                            src='./search.svg'
                            alt='search'
                        />
                    </button>
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
                    <button className=' rounded-full w-10 h-10 bg-gray-300 p-1 mx-2'>
                        <span className=' text-iris-100 w-full h-full text-lg font-semibold'>
                            A
                        </span>
                    </button>
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
                    <ul className=' mx-2 text-sm flex flex-col gap-y-8'>
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
