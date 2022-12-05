import Link from 'next/link'

import { FaBars } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import { SlRocket } from 'react-icons/sl';
import { TfiAnnouncement } from 'react-icons/tfi';
import { BiBell, BiCalendarEvent } from 'react-icons/bi';
import { MdPostAdd } from 'react-icons/md';
import { IoMdSettings } from 'react-icons/io';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className='flex justify-between bg-zinc-800 text-white px-5 py-4'>
            <div className='flex items-center'>
                <button className='mx-3'><FaBars /></button>
                <Link className='mx-3' href="/">Home</Link>
                <Link className='mx-3' href="/">Job Oppenings</Link>
                <Link className='mx-3' href="/">Interview</Link>
                <Link className='mx-3' href="/">Candidates</Link>
                <Link className='mx-3' href="/">Clients</Link>
                <Link className='mx-3' href="/">Contact</Link>
                <Link className='mx-3' href="/">Campaigns</Link>
                <button className='mx-3 pt-1'><BsThreeDots/></button>
                
            </div>
            <div className='flex items-center'>
                <Link href='/' className="mx-2 text-lg"><FiSearch /></Link>
                <Link href='/' className="mx-2 text-lg"><SlRocket /></Link>
                <Link href='/' className="mx-2 text-lg"><TfiAnnouncement /></Link>
                <Link href='/' className="mx-2 text-lg"><BiBell /></Link>
                <Link href='/' className="mx-2 text-lg"><MdPostAdd /></Link>
                <Link href='/' className="mx-2 text-lg"><BiCalendarEvent /></Link>
                <Link href='/' className="mx-2 text-lg"><IoMdSettings /></Link>
                <span className='mb-1 mx-2'>|</span>
                <Link href="/"><Image src="/propic.webp" height={20} width={20} className="rounded mx-2" ></Image></Link>              
            </div>
        </nav>
    )
}

export default Navbar