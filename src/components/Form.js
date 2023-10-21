'use client';
import React, { useState } from 'react';
import Info from './info';

const Form = ({ isSubMenuActive }) => {
    const [value, setValue] = useState('1');

    const handleSelectChange = (e) => {
        setValue(e.target.value);
    };
    return (
        <form className={`${isSubMenuActive === 1 ? '' : 'hidden'} mr-4`}>
            <div className='py-12 border-b flex justify-between px-4 '>
                <div className='flex gap-x-4 items-center'>
                    <p>Reporting Manager</p>
                    <Info content={' Lorem ipsum dolor sit. '} />
                </div>
                <input
                    type='text'
                    name='Reporting Manager'
                    id='RManager'
                    value={'Anand Achutan'}
                    className=' peer relative rounded-lg bg-transparent border border-gray-300 px-6 py-3 w-5/12 text-xl  '
                />
            </div>
            <div className='py-12 border-b flex justify-between px-4 '>
                <div className='flex gap-x-4 items-center'>
                    <p>Hiring Manager</p>
                    <Info content={' Lorem ipsum dolor sit. '} />
                </div>
                <input
                    type='text'
                    name='Hiring Manager'
                    id='HManager'
                    value={'Harsha BN'}
                    className=' peer relative rounded-lg bg-transparent border border-gray-300 px-6 py-3 w-5/12 text-xl  '
                />
            </div>
            <div className='py-12 border-b flex justify-between px-4 '>
                <div className='flex gap-x-4 items-center'>
                    <p>Recruiter</p>
                    <Info content={' Lorem ipsum dolor sit. '} />
                </div>
                <select
                    type='text'
                    name='Recruiter'
                    id='Recruiter'
                    className=' peer relative rounded-lg bg-transparent border border-gray-300 px-6 py-3 w-5/12 text-xl  '
                >
                    <option value='1'>Girish Prabhu</option>
                    <option value='2'>Anand Achutan</option>
                    <option value='3'>Harsha BN</option>
                </select>
            </div>
            <div className='py-12 border-b flex justify-between px-4 '>
                <div className='flex gap-x-4 items-center'>
                    <p>Is this backfilled role?</p>
                    <Info content={' Lorem ipsum dolor sit. '} />
                </div>
                <div className=' flex gap-4 justify-start w-5/12'>
                    <div className='flex items-center border p-4 rounded-xl w-1/2'>
                        <input
                            type='checkbox'
                            id='rememberMe'
                            name='rememberMe'
                            className='h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-lg'
                        />
                        <label
                            htmlFor='rememberMe'
                            className='ml-4 block text-xl text-gray-900'
                        >
                            Remember me
                        </label>
                    </div>
                    <div className='flex items-center border p-4 rounded-xl w-1/2'>
                        <input
                            type='checkbox'
                            id='rememberMe'
                            name='rememberMe'
                            className='h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-lg'
                        />
                        <label
                            htmlFor='rememberMe'
                            className='ml-4 block text-xl text-gray-900'
                        >
                            Remember me
                        </label>
                    </div>
                </div>
            </div>
            <div className='py-12 border-b flex justify-between px-4 '>
                <div className='flex gap-x-4 items-center'>
                    <p>Is this budgeted role?</p>
                    <Info content={' Lorem ipsum dolor sit. '} />
                </div>
                <div className=' flex gap-4 justify-start w-5/12'>
                    <div className='flex items-center border p-4 rounded-xl w-1/2'>
                        <input
                            type='checkbox'
                            id='rememberMe'
                            name='rememberMe'
                            className='h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-lg'
                        />
                        <label
                            htmlFor='rememberMe'
                            className='ml-4 block text-xl text-gray-900'
                        >
                            Remember me
                        </label>
                    </div>
                    <div className='flex items-center border p-4 rounded-xl w-1/2'>
                        <input
                            type='checkbox'
                            id='rememberMe'
                            name='rememberMe'
                            className='h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-lg'
                        />
                        <label
                            htmlFor='rememberMe'
                            className='ml-4 block text-xl text-gray-900'
                        >
                            Remember me
                        </label>
                    </div>
                </div>
            </div>
            <div className='py-12 border-b flex justify-between px-4 '>
                <div className='flex gap-x-4 items-center'>
                    <p>Employment Type</p>
                    <Info content={' Lorem ipsum dolor sit. '} />
                </div>
                <div className=' grid grid-cols-2 gap-4 justify-start w-5/12'>
                    <div className='flex items-center border p-4 rounded-xl'>
                        <input
                            type='checkbox'
                            id='type'
                            name='Type'
                            className='h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-lg'
                        />
                        <label
                            htmlFor='rememberMe'
                            className='ml-4 block text-xl text-gray-900'
                        >
                            Remember me
                        </label>
                    </div>
                    <div className='flex items-center border p-4 rounded-xl '>
                        <input
                            type='checkbox'
                            id='rememberMe'
                            name='rememberMe'
                            className='h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-lg'
                        />
                        <label
                            htmlFor='rememberMe'
                            className='ml-4 block text-xl text-gray-900'
                        >
                            Remember me
                        </label>
                    </div>
                    <div className='flex items-center border p-4 rounded-xl '>
                        <input
                            type='checkbox'
                            id='rememberMe'
                            name='rememberMe'
                            className='h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-lg'
                        />
                        <label
                            htmlFor='rememberMe'
                            className='ml-4 block text-xl text-gray-900'
                        >
                            Remember me
                        </label>
                    </div>
                    <div className='flex items-center border p-4 rounded-xl '>
                        <input
                            type='checkbox'
                            id='rememberMe'
                            name='rememberMe'
                            className='h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-lg'
                        />
                        <label
                            htmlFor='rememberMe'
                            className='ml-4 block text-xl text-gray-900'
                        >
                            Remember me
                        </label>
                    </div>
                </div>
            </div>
            <div className='py-12 border-b flex justify-between px-4 '>
                <div className='flex gap-x-4 items-center'>
                    <p>Salary Range</p>
                    <Info content={' Lorem ipsum dolor sit. '} />
                </div>
                <div className=' flex w-5/12 border border-gray-300 rounded-lg justify-between '>
                    <select
                        name='Recruiter'
                        id='Recruiter'
                        className=' relative  bg-transparent px-6 py-3 w-2/12 text-xl  '
                        value={value}
                        onChange={handleSelectChange}
                    >
                        <option value='1'>USD</option>
                        <option value='2'>INR</option>
                        <option value='3'>EUR</option>
                    </select>
                    <p className=' my-auto text-xl'>
                        {value === '1' ? '$' : value === '2' ? '₹' : '€'}
                    </p>
                    <input
                        type='number'
                        name=''
                        id=''
                        className=' relative  bg-transparent  px-6 py-3 w-6/12 text-xl  '
                    />
                    <select
                        name=''
                        id=''
                        className=' relative  bg-transparent  px-6 py-3 w-fit text-xl text-end  '
                    >
                        <option value='1'>Per Annum</option>
                        <option value='2'>Per Month</option>
                    </select>
                </div>
            </div>
            <div className='py-12 border-b flex justify-between px-4 '>
                <div className='flex gap-x-4 items-center'>
                    <p>Department</p>
                    <Info content={' Lorem ipsum dolor sit. '} />
                </div>
                <select
                    type='text'
                    name='Department'
                    id='department'
                    className=' peer relative rounded-lg bg-transparent border border-gray-300 px-6 py-3 w-5/12 text-xl  '
                >
                    <option value='1'>Department 1</option>
                    <option value='2'>Department 2</option>
                    <option value='3'>Department 3</option>
                </select>
            </div>
            <div className='py-12 border-b flex justify-between px-4 '>
                <div className='flex gap-x-4 items-center'>
                    <p>Location</p>
                    <Info content={' Lorem ipsum dolor sit. '} />
                </div>
                <select
                    type='text'
                    name='Loccation'
                    id='loccaion'
                    className=' peer relative rounded-lg bg-transparent border border-gray-300 px-6 py-3 w-5/12 text-xl  '
                >
                    <option value='1'>USA</option>
                    <option value='2'>IND</option>
                    <option value='3'>ENG</option>
                </select>
            </div>
            <div className='py-12 border-b flex justify-between px-4 '>
                <div className='flex gap-x-4 items-center'>
                    <p>No. of Openings</p>
                    <Info content={' Lorem ipsum dolor sit. '} />
                </div>
                <input
                    type='text'
                    name='Openings'
                    id='openings'
                    value={20}
                    className=' peer relative rounded-lg bg-transparent border border-gray-300 px-6 py-3 w-5/12 text-xl  '
                />
            </div>
            <div className='py-12 border-b flex justify-between px-4 '>
                <div className='flex gap-x-4 items-center'>
                    <p>Working Schedule</p>
                    <Info content={' Lorem ipsum dolor sit. '} />
                </div>
                <div className=' grid grid-cols-2 gap-4 justify-start w-5/12'>
                    <div className='flex items-center border p-4 rounded-xl'>
                        <input
                            type='checkbox'
                            id='rememberMe'
                            name='rememberMe'
                            className='h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-lg'
                        />
                        <label
                            htmlFor='rememberMe'
                            className='ml-4 block text-xl text-gray-900'
                        >
                            Remember me
                        </label>
                    </div>
                    <div className='flex items-center border p-4 rounded-xl '>
                        <input
                            type='checkbox'
                            id='rememberMe'
                            name='rememberMe'
                            className='h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-lg'
                        />
                        <label
                            htmlFor='rememberMe'
                            className='ml-4 block text-xl text-gray-900'
                        >
                            Remember me
                        </label>
                    </div>
                    <div className='flex items-center border p-4 rounded-xl '>
                        <input
                            type='checkbox'
                            id='rememberMe'
                            name='rememberMe'
                            className='h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-lg'
                        />
                        <label
                            htmlFor='rememberMe'
                            className='ml-4 block text-xl text-gray-900'
                        >
                            Remember me
                        </label>
                    </div>
                    <div className='flex items-center border p-4 rounded-xl '>
                        <input
                            type='checkbox'
                            id='rememberMe'
                            name='rememberMe'
                            className='h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-lg'
                        />
                        <label
                            htmlFor='rememberMe'
                            className='ml-4 block text-xl text-gray-900'
                        >
                            Remember me
                        </label>
                    </div>
                </div>
            </div>
            <div className='py-12 border-b flex justify-between px-4 '>
                <div className='flex gap-x-4 items-center'>
                    <p>Do you require approval for this job?</p>
                    <Info content={' Lorem ipsum dolor sit. '} />
                </div>
                <div className=' flex gap-4 justify-start w-5/12'>
                    <div className='flex items-center border p-4 px-6 rounded-xl '>
                        <input
                            type='checkbox'
                            id='yes'
                            name='Yes'
                            className='h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-lg'
                        />
                        <label
                            htmlFor='rememberMe'
                            className='ml-4 block text-xl text-gray-900'
                        >
                            Yes
                        </label>
                    </div>
                    <div className='flex items-center border p-4 px-6 rounded-xl '>
                        <input
                            type='checkbox'
                            id='no'
                            name='No'
                            className='h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-lg'
                        />
                        <label
                            htmlFor='rememberMe'
                            className='ml-4 block text-xl text-gray-900'
                        >
                            No
                        </label>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Form;
