
import React from 'react'

const Jobcard = ({ job }) => {
    return (
        <div className='overflow-hidden shadow-lg rounded-lg'>
            <div className='p-5 rounded-2xl bg-white border border-b-green-400 shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:scale-105 transition-all duration-300 ease-in-out hover:bg-blue-50'>
                <div>
                    <h1 className='text-lg font-medium'>{job.Services}</h1>
                    <p className='text-sm text-gray-600 p-1'>{job.location}</p>
                </div>
                <div>
                    <p className='text-sm text-gray-600 p-2'>{job.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Jobcard
