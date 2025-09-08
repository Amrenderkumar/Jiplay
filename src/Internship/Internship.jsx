// Internship.jsx
import React from "react";

const jobs = [
  {
    id: 1,
    company: "Internshala",
    location: "India",
    title: "Multiple Internships (Engineering, Marketing, Design, etc.)",
    description: "Thousands of active listings across domains with location and stipend filters.",
    salary: "₹5k – ₹25k / month (varies)",
    type: "Remote / Onsite",
    mode: "Full Time / Part Time",
    positions: "Multiple",
    link: "https://internshala.com/internships/?utm_source=chatgpt.com"
  },
  {
    id: 2,
    company: "Prosple",
    location: "India",
    title: "Graduate & Internship Programs",
    description: "Internship aggregator platform with roles in software, HR, design, and more.",
    salary: "₹10k – ₹20k / month (varies)",
    type: "Remote / Onsite",
    mode: "Full Time",
    positions: "Multiple",
    link: "https://in.prosple.com/internships-india?utm_source=chatgpt.com"
  },
  {
    id: 3,
    company: "PM Internship Scheme (PMIS)",
    location: "India",
    title: "Government Internship Program",
    description: "12-month internships across 24 sectors with top Indian companies like TCS, Reliance, and HDFC.",
    salary: "As per company policies",
    type: "Hybrid / Onsite",
    mode: "Full Time",
    positions: "Multiple",
    link: "https://pminternship.mca.gov.in"
  },
  {
    id: 4,
    company: "Infosys",
    location: "India (Hyderabad, Chennai, Mangalore, etc.)",
    title: "Winternship (Winter Internship)",
    description: "Live projects, mentorship, and technical training for engineering students.",
    salary: "Stipend (varies)",
    type: "Onsite",
    mode: "Full Time",
    positions: "Multiple",
    link: "https://www.infosys.com/careers/internships.html?utm_source=chatgpt.com"
  },
  {
    id: 5,
    company: "Ministry of External Affairs (MEA)",
    location: "India (Delhi, Govt. offices)",
    title: "MEA Internship Program",
    description: "1–3 month internships, 30 interns selected per term, two cycles per year.",
    salary: "Unpaid / Stipend (varies)",
    type: "Onsite",
    mode: "Full Time",
    positions: 30,
    link: "https://internship.mea.gov.in/internship?utm_source=chatgpt.com"
  },
  {
    id: 6,
    company: "Qualcomm India",
    location: "India (Hyderabad, Bangalore, etc.)",
    title: "Engineering Internships",
    description: "Early-career roles in software, hardware, and semiconductor engineering.",
    salary: "Competitive (as per role)",
    type: "Onsite / Hybrid",
    mode: "Full Time",
    positions: "Multiple",
    link: "https://www.qualcomm.com/company/careers/internships-and-early-in-career-opportunities/india?utm_source=chatgpt.com"
  },
  {
    id: 7,
    company: "Wells Fargo India",
    location: "India (Bangalore, Hyderabad, Chennai)",
    title: "Graduate & Internship Programs",
    description: "Internships in tech, finance, and operations; includes networking opportunities.",
    salary: "Competitive (as per role)",
    type: "Hybrid / Onsite",
    mode: "Full Time",
    positions: "Multiple",
    link: "https://www.wellsfargojobs.com/en/locations/wf-india-and-philippines/india-graduate-roles/?utm_source=chatgpt.com"
  },
  {
    id: 1,
    company: "Internshala",
    location: "India",
    title: "Various Internships Across Domains",
    description: "Thousands of active listings across engineering, sales, design, media, and more.",
    salary: "₹8,000–₹18,000/month (varies per listing)",
    type: "Remote / Onsite / Hybrid",
    mode: "Full Time / Part Time",
    positions: "Multiple",
    link: "https://internshala.com/internships/"
  },
  {
    id: 2,
    company: "Prosple",
    location: "India",
    title: "Graduate & Internship Programs Across Sectors",
    description: "Aggregator platform with roles in software, HR, design, business, and more.",
    salary: "₹10,000–₹20,000/month (varies)",
    type: "Remote / Onsite",
    mode: "Full Time",
    positions: "Multiple",
    link: "https://in.prosple.com/internships-india"
  },
  {
    id: 3,
    company: "PM Internship Scheme (PMIS)",
    location: "India",
    title: "Government Internship Scheme (12-Month)",
    description: "Internships across 24 sectors with leading Indian companies via CSR.",
    salary: "₹5,000/month + ₹6,000 joining grant",
    type: "Hybrid / Onsite",
    mode: "Full Time",
    positions: "Multiple",
    link: "https://pminternship.mca.gov.in"
  },
  {
    id: 4,
    company: "Infosys",
    location: "India (Hyderabad, Chennai, Mangalore)",
    title: "Winternship – Winter Engineering Internships",
    description: "76-day program with live projects, training, and priority joining.",
    salary: "Stipend (varies)",
    type: "Onsite",
    mode: "Full Time",
    positions: 500,
    link: "https://www.infosys.com/careers/internships.html"
  },
  {
    id: 5,
    company: "MEA (Ministry of External Affairs)",
    location: "India (Delhi Govt. Offices)",
    title: "MEA Internship Program",
    description: "1–3 month diplomatic internships; up to 30 interns per cycle.",
    salary: "Unpaid / Stipend (varies)",
    type: "Onsite",
    mode: "Full Time",
    positions: 30,
    link: "https://internship.mea.gov.in/internship"
  },
  {
    id: 6,
    company: "Qualcomm India",
    location: "India (Hyderabad, Bangalore, etc.)",
    title: "Engineering Internships",
    description: "Roles in software, hardware, and semiconductor engineering.",
    salary: "Competitive (as per role)",
    type: "Hybrid / Onsite",
    mode: "Full Time",
    positions: "Multiple",
    link: "https://www.qualcomm.com/company/careers/internships-and-early-in-career-opportunities/india"
  },
  {
    id: 7,
    company: "Wells Fargo India",
    location: "India (Bangalore, Hyderabad, Chennai)",
    title: "Graduate & Internship Programs",
    description: "Internships in tech, finance, and operations with networking exposure.",
    salary: "Competitive (as per role)",
    type: "Hybrid / Onsite",
    mode: "Full Time",
    positions: "Multiple",
    link: "https://www.wellsfargojobs.com/en/locations/wf-india-and-philippines/india-graduate-roles/"
  },
  {
    id: 8,
    company: "Google India",
    location: "India (Bengaluru, Hyderabad)",
    title: "Tech/UX/Business Internships (Summer 2025)",
    description: "10–12 week internships with live projects, mentorship, PPO chances.",
    salary: "₹60,000–₹1.2 Lakh/month",
    type: "Onsite / Hybrid",
    mode: "Full Time",
    positions: "Multiple",
    link: "https://careers.google.com"
  },
  {
    id: 9,
    company: "Microsoft India",
    location: "India (Hyderabad, Noida, Bengaluru)",
    title: "Software/Data/UX Internships (Summer 2025)",
    description: "12-week internships with hybrid work, PPO, laptop, and food.",
    salary: "₹70,000–₹1.3 Lakh/month",
    type: "Hybrid / Onsite",
    mode: "Full Time",
    positions: "Multiple",
    link: "https://careers.microsoft.com"
  },
  {
    id: 10,
    company: "Amazon India",
    location: "India (Chennai, Bengaluru, Mumbai)",
    title: "Software/Data/Product/Operations Internships",
    description: "8–12 week internships with training, networking, PPO potential.",
    salary: "₹45,000–₹60,000/month",
    type: "Onsite / Hybrid",
    mode: "Full Time",
    positions: "Multiple",
    link: "https://www.amazon.jobs"
  },
  {
    id: 11,
    company: "TCS",
    location: "India (PAN India)",
    title: "TCS R&D Internships",
    description: "6–8 week (short) or 16–18 week (long) industrial R&D internships.",
    salary: "Stipend (varies)",
    type: "Onsite",
    mode: "Full Time",
    positions: "Multiple",
    link: "https://www.tcs.com/careers"
  },
  {
    id: 12,
    company: "Deloitte India",
    location: "India (Gurgaon, Bengaluru, Mumbai)",
    title: "Consulting/Audit/Tech Internships",
    description: "Internships with real-world projects, mentorship, networking.",
    salary: "Stipend (varies)",
    type: "Onsite / Hybrid",
    mode: "Full Time",
    positions: "Multiple",
    link: "https://www.deloitte.com"
  },
  {
    id: 13,
    company: "Viksit Delhi (CM Internship Programme)",
    location: "New Delhi",
    title: "CM’s Governance Internship Programme",
    description: "89-day internships in urban mobility, healthcare, waste, digital innovation.",
    salary: "₹20,000/month",
    type: "Onsite",
    mode: "Full Time",
    positions: 150,
    link: "—"
  },
  {
    id: 14,
    company: "Puch AI (Startup)",
    location: "Remote (India)",
    title: "AI Engineering Internships (no degree required)",
    description: "Work-from-home AI roles, ₹1–2 Lakh/month stipend, open to all including school students.",
    salary: "₹1–2 Lakh/month",
    type: "Remote",
    mode: "Full Time",
    positions: "Multiple",
    link: "As per post on X by CEO Siddharth Bhatia"
  },
  {
    id: 15,
    company: "UIDAI",
    location: "New Delhi, India",
    title: "UIDAI Internship 2025",
    description: "Intern across Enforcement, Aadhaar Usage, Authentication, Media, Technology Management and HR divisions.",
    salary: "₹30,000–₹40,000/month",
    type: "Onsite",
    mode: "Full Time",
    positions: "Multiple",
    link: "Email application via UIDAI portal"
  },
  {
    id: 16,
    company: "Ministry of Women and Child Development (MWCD)",
    location: "New Delhi, India",
    title: "MWCD Internship Programme for Women",
    description: "2-month internships in policy, pilot projects, and micro-studies support; four terms annually.",
    salary: "₹20,000/month + travel reimbursement & shared accommodation",
    type: "Onsite",
    mode: "Full Time",
    positions: "Multiple",
    link: "MWCD internship portal"
  },
  {
    id: 17,
    company: "ISRO",
    location: "India (various centers)",
    title: "ISRO Internship 2025",
    description: "Structured internships/project trainee schemes in space science & technology.",
    salary: "Stipend (varies per centre and role)",
    type: "Onsite",
    mode: "Full Time",
    positions: "Multiple",
    link: "ISRO official internships page"
  },
  {
    id: 18,
    company: "DRDO",
    location: "India (various centers)",
    title: "DRDO Internship 2025",
    description: "Research and technical internships across DRDO labs.",
    salary: "Stipend (varies per lab)",
    type: "Onsite",
    mode: "Full Time",
    positions: "Multiple",
    link: "DRDO internships portal"
  },
  {
    id: 19,
    company: "NITI Aayog",
    location: "New Delhi, India",
    title: "NITI Aayog Internship 2025",
    description: "Policy research and analysis internships for UG/PG/Research Scholars.",
    salary: "Stipend (varies)",
    type: "Onsite / Hybrid",
    mode: "Full Time",
    positions: "Multiple",
    link: "NITI Aayog internships portal"
  },
  {
    id: 20,
    company: "MeitY Digital India Internship Scheme",
    location: "India (Digital India Initiative)",
    title: "MeitY Digital India Internships",
    description: "Internship engagements under Digital India initiative across tech domains.",
    salary: "Stipend (varies)",
    type: "Hybrid / Onsite",
    mode: "Full Time",
    positions: "Multiple",
    link: "MeitY internship scheme page"
  },
  {
    id: 21,
    company: "Technical Internship Programme – MeitY",
    location: "India",
    title: "Technical Internship Programme 2025",
    description: "Tech-focused internships; last date to apply was 15 June 2025.",
    salary: "Stipend (varies)",
    type: "Onsite / Hybrid",
    mode: "Full Time",
    positions: "Multiple",
    link: "MeitY technical internship programme page"
  },
  {
    id: 22,
    company: "National Renewable Energy Ministry (MNRE)",
    location: "India (Ministry and related institutions)",
    title: "MNRE Internship Programme",
    description: "2-6 month internships in renewable energy; Rs. 15,000/month stipend; 20 slots/year.",
    salary: "₹15,000/month",
    type: "Onsite",
    mode: "Full Time",
    positions: 20,
    link: "MNRE internship programme page"
  },
  {
    id: 23,
    company: "Indian Institute of Remote Sensing (IIRS)",
    location: "India (IIRS, Dehradun)",
    title: "External Student Internship",
    description: "45-day minimum internships for UG/PG/PhD students starting Jan 2026; applications Aug–Oct.",
    salary: "Stipend (varies)",
    type: "Onsite",
    mode: "Full Time",
    positions: "Multiple",
    link: "IIRS external internship page"
  },
  {
    id: 24,
    company: "IIT-BHU & Hindalco",
    location: "Renukoot, India",
    title: "IIT-BHU – Hindalco Research Internship",
    description: "6-month research-focused internship in production/process control at Hindalco's plant.",
    salary: "Stipend/career benefit (not specified)",
    type: "Onsite",
    mode: "Full Time",
    positions: "Multiple",
    link: "IIT-BHU partnership announcement"
  },
  {
    id: 25,
    company: "Airbus India",
    location: "Bengaluru, India",
    title: "Flying Parts Procurement Intern",
    description: "Support sourcing of materials (standard parts, semiconductors, SAF, hydrogen), and analyze supplier landscape relevant to ISRO-related projects.",
    salary: "Not specified",
    type: "Onsite",
    mode: "Full Time",
    positions: "Multiple",
    link: "Refer to Airbus career’s page"
  },
  {
    id: 26,
    company: "Flydocs",
    location: "Remote (India)",
    title: "IT Security Intern",
    description: "Support daily cybersecurity operations, monitor systems, assist threat monitoring, and handle security alerts.",
    salary: "Not specified",
    type: "Remote",
    mode: "Full Time",
    positions: "Multiple",
    link: "Apply via Flydocs career portal"
  },
  {
    id: 27,
    company: "Amazon India (GFS FP&A)",
    location: "Karnataka, India",
    title: "Financial Analyst Intern",
    description: "Collaborate with financial planning & analysis team on financial reporting and data analysis.",
    salary: "Not specified",
    type: "Onsite",
    mode: "Full Time",
    positions: "Multiple",
    link: "Apply via Amazon careers portal"
  },
  {
    id: 28,
    company: "Baker Hughes",
    location: "Bengaluru / Mumbai, India",
    title: "Summer Internships 2025 – University Intern",
    description: "Summer internship in energy technology, contributing to projects tackling energy transition.",
    salary: "Not specified",
    type: "Onsite",
    mode: "Full Time",
    positions: "Multiple",
    link: "Apply via Indeed or Baker Hughes internship listings"
  },
  {
    id: 29,
    company: "Various IITs/NITs/R&D Institutes",
    location: "India (Various cities)",
    title: "Research Internships at IITs, NITs, BARC, TIFR, IISc, etc.",
    description: "Research and summer internships across premier institutions like IIT Palakkad, IIT Dhanbad, NIT Rourkela, BARC, TIFR, PRL, etc., with deadlines mostly in early 2025.",
    salary: "Stipend varies or unpaid",
    type: "Onsite",
    mode: "Full Time",
    positions: "Multiple",
    link: "Refer to each institute's official notice (e.g., via WiseUp or institute websites)"
  },
  {
    id: 30,
    company: "Totle",
    location: "India (Remote)",
    title: "Back End Developer Internship",
    description: "Backend development role—apply via application link.",
    salary: "Not specified",
    type: "Remote",
    mode: "Full Time",
    positions: "Multiple",
    link: "Back End Developer Internship - Totle on Unstop"
  },
  {
    id: 31,
    company: "Microsoft",
    location: "India (Multiple locations)",
    title: "Software Engineer Apprenticeship",
    description: "Apprenticeship applying engineering principles to solve complex problems.",
    salary: "Not specified",
    type: "Onsite / Hybrid",
    mode: "Full Time",
    positions: "Multiple",
    link: "Microsoft Software Engineer Apprenticeship on Unstop"
  },
  {
    id: 32,
    company: "Tower Research Capital India Pvt Ltd",
    location: "Gurgaon, India",
    title: "Core Engineering Internship",
    description: "Internship in core engineering—apply via Unstop link.",
    salary: "Not specified",
    type: "Onsite",
    mode: "Full Time",
    positions: "Multiple",
    link: "Core Engineering Internship - Tower Research Capital India on Unstop"
  },
  {
    id: 33,
    company: "Cargill India",
    location: "Bengaluru, India",
    title: "Software Engineer Internship",
    description: "Software engineering role based in Bangalore—apply on Unstop.",
    salary: "Not specified",
    type: "Onsite",
    mode: "Full Time",
    positions: "Multiple",
    link: "Software Engineer Internship - Cargill India on Unstop"
  },
  {
    id: 34,
    company: "StockGro",
    location: "India (Campus)",
    title: "StockGro BigShot 4.0 Campus Internship 2025",
    description: "2-month campus-based internship program, India's largest with 100+ interns.",
    salary: "Not specified",
    type: "Onsite",
    mode: "Full Time",
    positions: "100+",
    link: "StockGro Campus Internship 2025 – BigShot 4.0 on Unstop"
  },
  {
    id: 35,
    company: "InternshipHub",
    location: "India (Remote or Onsite)",
    title: "Electric Vehicles (EV) Design Internship",
    description: "EV design internship opportunity—apply via its portal on Unstop.",
    salary: "Not specified",
    type: "Onsite / Hybrid",
    mode: "Full Time",
    positions: "Multiple",
    link: "Electric Vehicles Design Internship - InternshipHub on Unstop"
  }
];

function Internship() {
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold text-center pt-5">Internship Opportunities</h1>
      </div>
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
                {job.salary}
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
  );
}

export default Internship;
