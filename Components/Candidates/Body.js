import { TbTableExport } from 'react-icons/tb';
const Body = () => {
    const applicationData = [];
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
                    { applicationData.length? 
                        applicationData.map((p, index) => {
                            <tr key={index}>
                                <td className='pl-3 py-3'>{ index+1 }</td>
                                <td>{p.rating}</td>
                                <td>{p.name}</td>
                                <td>{p.pipeline}</td>
                                <td>{p.status}</td>
                                <td>{p.id}</td>
                                <td>{p.title}</td>
                            </tr>
                        })
                        : <h1 className='text-xl absolute left-[50%] top-[30%]'>No Applications Found!</h1>
                    }
                    
                </tbody>
            </table>

        </div>
    )
}

export default Body