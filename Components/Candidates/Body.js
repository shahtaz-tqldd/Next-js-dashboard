import { FaBars } from 'react-icons/fa';
import { TbTableExport } from 'react-icons/tb';
const Body = () => {
    return (
        <div>
            <table className="w-full table-fixed">
                <thead className='border-b-[1px] border-gray-400'>
                    <tr className="uppercase text-md ">
                        <td className='pl-3 py-3'><TbTableExport /></td>
                        <td>Ratings</td>
                        <td>Application Name</td>
                        <td>Hiring Pipeline</td>
                        <td>Application Status</td>
                        <td>Application Id</td>
                        <td>Posting Title</td>
                    </tr>
                </thead>
                <hr className='border-gray-400 w-[700%] mt-[2px]' />
                <tbody className='text-center'>
                    No Application Found!
                </tbody>
            </table>

        </div>
    )
}

export default Body