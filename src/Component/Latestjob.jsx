import React from 'react'
import Jobcard from './Jobcard';

 const randomJobs = [1,2,3,4,5,6,7,8,9,10,11,12];
const Latestjob = () => {
  return (
    <div>
      <h1 className='text-4xl font-bold text-center my-10'>
        <span className='text-[blue]'>Latest & Trending Jobs</span> Job Openings
        <div className='md:w-120 w-60 h-1 border-b-4 border-y-amber-400 rounded-2xl mt-1 mx-auto md:mt-2 mb-12'></div>
      </h1>
      <div className='grid grid-cols-3 gap-4 my-5 m-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 max-w-[1200px] mx-auto'>
        {randomJobs.map((job) => (
          <Jobcard key={job}/>
        ))}
      </div>
    </div>
  )
}

export default Latestjob;
