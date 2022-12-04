import React from 'react'
import { RiFileUserFill } from 'react-icons/ri';
import { AiFillCaretDown } from 'react-icons/ai';
import { MdAdd } from 'react-icons/md';
import { BsThreeDots, BsSortAlphaDown } from 'react-icons/bs';
import { BiCalendar } from 'react-icons/bi';
import { FiPrinter } from 'react-icons/fi';
import Link from 'next/link';

const TopBar = () => {
    return (
        <div className='flex justify-between px-8 py-6 bg-orange-100'>
            <div className='flex items-center'>
                <span className='flex'>
                    <RiFileUserFill className='text-2xl text-blue-600' />
                    <h2 className='uppercase font-bold ml-1'>Applications</h2>
                </span>
                <button className='ml-10 flex items-center'>
                    <h2 className='mr-3'>All Applications</h2>
                    <AiFillCaretDown className='mt-1'/>
                </button>
            </div>
            
            <div className='text-zinc-600'>
                <button className='py-1 px-2 border border-zinc-500 rounded drop-shadow-lg mx-2'><MdAdd className='text-2xl '/></button>
                <button className='py-1 px-2 border border-zinc-500 rounded drop-shadow-lg mx-2'><BsThreeDots className='text-2xl '/></button>
                
                <button className='py-1 px-2 border border-zinc-500 rounded drop-shadow-lg mx-2 ml-5'><BiCalendar className='text-2xl ' /></button>
                <button className='py-1 px-2 border border-zinc-500 rounded drop-shadow-lg mx-2'><FiPrinter className='text-2xl '/></button>
                <button className='p-1 mx-2'><BsSortAlphaDown className='text-2xl '/></button>
            </div>
        </div>
    )
}

export default TopBar