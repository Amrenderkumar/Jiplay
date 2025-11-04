import React from 'react'



const Skill = ["React","Node.js","Express","MongoDB"];
const date1 = new Date();

const Latestjob = (props) => {
  return (
    <div className='mx-40 mb-4 mt-4 space-y-6'>
      <div className='flex justify-between items-center px-6 py-4 bg-zinc-100 rounded-md border border-black shadow-lime-100'>
        <div className='flex flex-col items-start gap-3'>
          <h1 className='text-lg font-semibold'>{props.title} - {props.company}</h1>
          <p>{props.type} &#x2022; {props.experience} &#x2022; {props.location}</p>
          <div className='flex items-center gap-2'>
            {props.skills.map((skills, index) => (
              <span key={index} className='bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded'>{skills}</span>
            ))}
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <h2>Posted on:</h2>
          <p>{date1.toDateString()}</p>
          <button className='text-blue-500 border border-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white'>Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default Latestjob;

