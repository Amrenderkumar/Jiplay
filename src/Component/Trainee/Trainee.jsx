import React from 'react'

const jobs = [
{
  id: 1,
  company: "Signsetu",
  location: "India",
  title: "Full Stack Development Intern",
  description: "Join Signsetu as a Software Developer Trainee and kickstart your career in tech.",
  Stipend: "15000 - 20,000 P.M.",
  type: "Full-time",
  mode: "Remote",
  positions: 1
},
{
  id: 2,
  company: "Hirebridg Connect",
  location: "India",
  title: "Front End Developer Intern",
  description: "Join Hirebridg Connect as a Front End Developer Intern and work on innovative web applications.",
  Stipend: "10000 - 15000 P.M.",
  type: "Full-time",
  mode: "Remote",
  positions: 3
},
{
  id: 3,
  company: "Pixeltalent Lab",
  location: "India",
  title: "Software Engineer Intern",
  description: "Join Pixeltalent Lab as a Software Engineer Intern and gain hands-on experience in software development.",
  Stipend: "15000 - 20000 P.M.",
  type: "Full-time",
  mode: "Remote",
  positions: 1
}
]
const Trainee = () => {
  return (
    <div>
      <div className='bg-gray-100 shadow-md py-6 flex flex-col justify-center items-center rounded-2xl sticky top-0 z-50'>
        <h1 className='text-4xl font-bold text-gray-800 text-center '>
          <span className='text-[blue]'>Latest & Trending Trainee</span> Openings
          <div className='w-40 md:w-60 h-1 border-b-4 border-amber-400 rounded-2xl mt-2 mx-auto'></div>
        </h1>
      </div>
      <div>
        <div className="grid gap-6 p-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="border rounded-xl shadow-md p-4 hover:shadow-lg transition"
            >
              <h2 className="text-lg font-semibold">{job.company}</h2>
              <p className="text-sm text-gray-500">{job.location}</p>
              <h3 className="font-bold mt-2">{job.title}</h3>
              <p className="text-gray-600 mt-1">{job.description}</p>

              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-sm">
                  {job.Stipend}
                </span>
                <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-md text-sm">
                  {job.type}
                </span>
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded-md text-sm">
                  {job.mode}
                </span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-sm">
                  {job.positions} Positions
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Trainee
