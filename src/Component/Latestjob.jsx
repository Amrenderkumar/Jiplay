import React from 'react'
import Jobcard from './Jobcard';

 const randomJobs = [
   {
     id: 1,
     Services: "Web Development",
     location: "India",
     description: "We are looking for a skilled web developer to join our team."
   },
   {
     id: 2,
     Services: "App Development",
     location: "USA",
     description: "Join us to create amazing mobile applications.the world."
   },
   {
     id: 3,
     Services: "UI/UX Design",
     location: "UK",
      description: "We need a creative UI/UX designer to enhance user experience."
   },
   {
     id: 4,
     Services: "Data Science",
     location: "Canada",
      description: "Seeking a data scientist to analyze and interpret complex data."
   },
   {
     id: 5,
     Services: "Digital Marketing",
     location: "Australia",
     description: "Looking for a digital marketing specialist to enhance our online presence."
   },
   {
     id: 6,
     Services: "Content Writing",
     location: "Germany",
      description: "We require a talented content writer to create engaging articles."
   },
   {
      id: 7,
      Services: "Cybersecurity",
      location: "Singapore",
      description: "Hiring a cybersecurity expert to protect our digital assets."
   },
   {
      id: 8,
      Services: "Cloud Computing",
      location: "India",
      description: "Seeking a cloud computing specialist to manage our cloud infrastructure."
   },
   {
      id: 9,
      Services: "AI & Machine Learning",
      location: "USA",
      description: "Looking for an AI/ML engineer to develop intelligent systems."
   }
 ];
const Latestjob = () => {
  return (
    <div>
      <h1 className='text-4xl font-bold text-center my-10'>
        <span className='text-[blue]'>All</span> Services
        <div className='md:w-40 w-28 h-1 border-b-4 border-y-amber-400 rounded-2xl mt-1 mx-auto md:mt-2 mb-12'></div>
      </h1>
      <div className='grid gap-4 my-5 m-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 max-w-[1200px] mx-auto text-center'>
      {randomJobs.map((job) => (
        <Jobcard key={job.id} job={job} />
      ))}
      </div>
    </div>
  )
}

export default Latestjob;
