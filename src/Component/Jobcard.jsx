import { Badge } from '@/components/ui/badge'
import React from 'react'


const Jobcard = () => {
    return (
        <div className='overflow-hidden'>
            <div className='p-5 rounded-md shadow-xl bg-white border border-b-green-400 hover:shadow-2xl hover:scale-102 shadow-blue-200 hover:p-3 duration-200'>
                <div>
                    <h1 className='text-lg font-medium'>Company Name</h1>
                    <p className='text-sm text-gray-600'>India</p>
                </div>
                <div>
                    <h1 className='font-bold text-lg my-2'>Job Title</h1>
                    <p className='text-sm text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda consectetur porro et magni, error aut.</p>
                </div>
                <div className='flex gap-2 items-center mt-4'>
                    <Badge className=" text-blue-600 font-bold" variant={"ghost"}>20 LPA</Badge>
                    <Badge className=" text-amber-700 font-bold" variant={"ghost"}>Remote job</Badge>
                    <Badge className=" text-cyan-700 font-bold" variant={"ghost"}>Full Time</Badge>
                    <Badge className=" text-black font-bold" variant={"ghost"}>10 Positions</Badge>
                </div>
            </div>
        </div>
    )
}

export default Jobcard
