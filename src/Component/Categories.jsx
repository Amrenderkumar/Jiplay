import React from 'react'

const Categories = () => {
  return (
    <div className='flex justify-center items-center mt-10 gap-5'>
      <select className="w-64 pt-2 text-center py-3 pl-5 bg-zinc-200 font-semibold rounded-md" id="">
        <option value="">Frontend Developer</option>
        <option value="">Backend Developer</option>
        <option value="">UI/UX Designer</option>
        <option value="">Data Scientist</option>
        <option value="">Machine Learning Engineer</option>
        <option value="">Cloud Engineer</option>
        <option value="">Cybersecurity Analyst</option>
      </select>
      <select className="w-64 pt-2 text-center py-3 pl-5 bg-zinc-200 font-semibold rounded-md" id="">
        <option value="">Full-Time</option>
        <option value="">Part-Time</option>
        <option value="">Internship</option>
        <option value="">Freelance</option>
      </select>
        <select className="w-64 pt-2 text-center py-3 pl-5 bg-zinc-200 font-semibold rounded-md" id="">
        <option value="">Remote</option>
        <option value="">On-Office</option>
        <option value="">Hybrid</option>
      </select>
       <select className="w-64 pt-2 text-center py-3 pl-5 bg-zinc-200 font-semibold rounded-md" id="">
        <option value="">Experience</option>
        <option value="">Fresher</option>
        <option value="">Junior Level</option>
        <option value="">Mid Level</option>
        <option value="">Senior Level</option>
       </select>
      <button className="ml-4 px-4 py-3 w-60 bg-blue-500 text-white rounded-lg">Search</button>
    </div>
  )
}

export default Categories;

