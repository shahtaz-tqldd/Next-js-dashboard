import { RiChat3Fill } from 'react-icons/ri';
import { IoIosPeople } from 'react-icons/io';
import { HiUser, HiOutlineDocumentText } from 'react-icons/hi';
import { MdOutlineMonitor } from 'react-icons/md';
import { RxCounterClockwiseClock } from 'react-icons/rx';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';

const Footer = () => {
  return (
    <div className='absolute bottom-0 left-0 right-0'>
      <div className='flex border-t-[1px] border-gray-400 shadow-[10px_10px_10px_10px_rgba(0,0,0,0.4)]'>
        <div className='w-[22%] flex justify-between px-10 pt-1 border-r-[1px] border-gray-400'>
          <span className='flex flex-col items-center'><RiChat3Fill/> <small>Chats</small> </span>
          <span className='flex flex-col items-center'><IoIosPeople/> <small>Channels</small> </span>
          <span className='flex flex-col items-center'><HiUser/> <small>Contact</small> </span>
        </div>
        <div className='w-[60%]'>
          <input type="text" placeHolder="Here is your Smart Chat (Ctrl+Space)" className="w-full bg-white h-full px-3"/>
        </div>
        <div className='w-[18%] flex items-center justify-between px-5 border-l-[1px] border-gray-400'>
          <button><MdOutlineMonitor/></button>
          <button><RxCounterClockwiseClock/></button>
          <button className='flex items-center'><AiOutlineQuestionCircle/>&nbsp;Need Help</button>
          <button><HiOutlineDocumentText/></button>
          <button><FiSearch/></button>
        </div>
      </div>
    </div>
  )
}

export default Footer