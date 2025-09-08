import React from "react";

const departments = [
  {
    id: 1,
    name: "Frontend Developer",
    members: [
      {
        id: 1,
        name: "Amrender Kumar",
        role: "MERN Stack Developer",
        image: "src/assets/Image/Bahu.png",
        alt: "Bahu",
      },
    ],
    color: "from-purple-400 to-purple-600",
  },
  {
    id: 2,
    name: "Backend Developer",
    members: [
      {
        id: 1,
        name: "Shishir Kumar Yadav",
        role: "Data Scientist",
        image: "src/assets/Image/Shishir.jpg",
        alt: "Shishir",
      },
    ],
    color: "from-orange-400 to-orange-600",
  },
  {
    id: 3,
    name: "UI/UX Designer",
    members: [
      {
        id: 1,
        name: "Amrender Kumar",
        role: "UI/UX Designer",
        image: "src/assets/Image/Bahu.png",
        alt: "Rocky",
      },
    ],
    color: "from-teal-400 to-cyan-500",
  },
];

const Profile = () => {
  return (
    <div className="bg-gray-50 py-12 px-6">
     
      <h1 className="text-4xl font-bold text-center mb-12">
        <span className="text-blue-600">User Profile</span>
        <div className="w-32 h-1 bg-amber-400 rounded-2xl mt-2 mx-auto"></div>
      </h1>

   
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {departments.map((dept) => (
          <div
            key={dept.id}
            className="rounded-2xl shadow-lg overflow-hidden bg-white group hover:-translate-y-2 transition transform"
          >
            
            <div
              className={`relative h-32 bg-gradient-to-r ${dept.color} flex items-center justify-center`}
            >
            
              <img
                src={dept.members[0].image}
                alt={dept.members[0].alt}
                className="w-30 h-30 rounded-full border-4 border-white shadow-md"
              />
        
              <svg
                className="absolute bottom-0 w-full h-8 text-white"
                preserveAspectRatio="none"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="currentColor"
                  d="M0,64L48,80C96,96,192,128,288,160C384,192,480,224,576,229.3C672,235,768,213,864,181.3C960,149,1056,107,1152,122.7C1248,139,1344,213,1392,250.7L1440,288V0H0Z"
                ></path>
              </svg>
            </div>
            <div className="p-6 text-center">
              <h2 className="text-2xl font-semibold mb-2">{dept.name}</h2>
              {dept.members.map((member) => (
                <div key={member.id}>
                  <h3 className="text-lg font-medium">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
