import React from 'react'


const Opertunity = [
  {
    id: 1,
    company: "New Swan",
    location: "Ludhiana",
    title: "Corporate Sales Executive",
    description: "We are looking for a Corporate Sales Executive to join our dynamic sales team. The ideal candidate will be responsible for generating leads, building relationships with corporate clients, and closing sales deals.",
    salary: "₹ 2,00,000 - 4,00,000 P.A.",
    Experience: "0-2 Years",
    type: "Remote / Onsite",
    Apply_By: "3 Dec' 25",
    Skill: "Client Relationship , Effective Communication , English Proficiency (Spoken) , English Proficiency (Written) , Hindi Proficiency (Spoken), Hindi Proficiency (Written), MIS, MS-Office, Order Management, Team Management",
    link: "https://internshala.com/job/detail/corporate-sales-executive-job-in-ludhiana-at-sujit-gupta1762161221"
  },
  {
    id: 2,
    company: "LatentBridge",
    location: "Pune",
    title: "Junior AI ML Engineer",
    description: "Are you a skilled Data Science Engineer with a deep understanding of AI & ML technologies? LatentBridge is seeking a talented Data Science(AI/ML) Engineer to join our team. As a Data Science Engineer, you will be responsible for managing and building projects related to cutting-edge AI capabilities for document processing while ensuring data privacy and compliance. If you have experience with Large Language Models, Vector DBs, and proficiency in Python, we want to hear from you!",
    salary: "₹ 6,00,000 - 10,00,000 P.A.",
    Experience: "3yrs-6yrs",
    type: "Remote",
    Apply_By: "15 Nov' 25",
    Skill: "Python, Machine Learning, Deep Learning, NLP, Data Analysis, Data Visualization, SQL, NoSQL, Cloud Computing (AWS, GCP, Azure), Large Language Models (LLMs), Vector Databases",
    link: "https://www.linkedin.com/jobs/view/4337878268/?trk=li_li-JobRapido-IN_IN_careers_jobsgtm_d75534d0-39ad-4328-8e18-52229fb7e6b2_job-dist"
  },
  {
    id: 3,
    company: "Tata Consultancy Services",
    location: "Ahmedabad",
    title: "ReactJS Developer",
    description: "TCS has been a great pioneer in feeding the fire of youngTechies like you. We are a global leader in the technology arena and there'snothing that can stop us from growing together.",
    salary: "No salary specified.",
    Experience: "4-9 Years",
    type: "Onsite",
    Apply_By: "30 Nov' 25",
    Skill: "ReactJS, JavaScript, HTML, CSS, RESTful APIs, Git, Agile Methodologies, Problem-Solving Skills, Communication Skills",
    link: "https://ibegin.tcsapps.com/candidate/jobs/365005J"
  }
]

function Job() {
  return (
    <div>
     <div className='bg-gray-100 shadow-md py-6 flex flex-col justify-center items-center rounded-2xl sticky top-0 z-50'>
        <h1 className='text-4xl font-bold text-gray-800 text-center '>
          <span className='text-[blue]'>job</span> Openings
          <div className='w-40 md:w-60 h-1 border-b-4 border-amber-400 rounded-2xl mt-2 mx-auto'></div>
        </h1>
      </div>
      <div className="grid gap-6 p-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Opertunity.map((Opertunity) => (
  <a
    key={Opertunity.id}
    href={Opertunity.link}
    target="_blank"
    rel="noopener noreferrer"
    className="border rounded-xl shadow-md p-4 hover:shadow-lg transition block hover:bg-blue-50"
  >
    <h2 className="text-lg font-semibold">{Opertunity.company}</h2>
    <p className="text-sm text-gray-500">{Opertunity.location}</p>
    <h3 className="font-bold mt-2">{Opertunity.title}</h3>
    <p className="text-gray-600 mt-1">{Opertunity.description}</p>

    <div className="flex flex-wrap gap-2 mt-3">
      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-sm">
        {Opertunity.salary}
      </span>
      <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-md text-sm">
        {Opertunity.type}
      </span>
      <span className="px-2 py-1 bg-green-100 text-green-700 rounded-md text-sm">
        {Opertunity.Experience} Experience
      </span>
      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-sm">
       Last Date - {Opertunity.Apply_By}
      </span>
      <span className='px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-sm'>
        Skills - {Opertunity.Skill}
      </span>
       </div>
       </a>
        ))}
      </div>
    </div>
  );
}


export default Job;
