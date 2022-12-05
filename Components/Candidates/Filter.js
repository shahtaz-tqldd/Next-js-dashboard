import React from 'react'
import { FiSearch } from 'react-icons/fi';
const Filter = () => {
    const filter = ['To-Dos', 'Notes', 'Attachment Category', 'Rating', 'Last Name', 'Hiring Pipeline', 'Application ID', 'Account Manager', 'Application Owner', 'Application Source', 'Assigned Recruiter(s)', 'Assosiated Tags']
    return (
        <div className='border-r-[1px] border-gray-400 relative'>
            <input type='text' className='bg-white w-full py-2 pl-10 mb-3 focus:outline-none' placeholder='FILTER APPLICATION BY'></input>
            <FiSearch  className='absolute top-2 text-xl right-5'/>
            <div className='ml-10'>
                <div class="flex items-center mb-3">
                    <input type="checkbox" value="" className="w-4 h-4 rounded border-gray-300" />
                    <label for="default-checkbox" className="ml-2 text-sm">Posting Title</label>
                </div>
                <div class="flex items-center mb-6">
                    <input type="checkbox" value="" className="w-4 h-4 rounded border-gray-300" />
                    <label for="default-checkbox" className="ml-2 text-sm">Application Status</label>
                </div>

                {
                    filter.map((p, i) => (
                        <div key={i} class="flex items-center mb-3">
                            <input type="checkbox" value="" className="w-4 h-4 rounded border-gray-300" />
                            <label for="default-checkbox" className="ml-2 text-sm">{p}</label>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Filter