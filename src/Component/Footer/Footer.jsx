import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-5 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white text-lg font-semibold mb-3 border-b-2 border-pink-500 inline-block">
            About
          </h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-pink-500"><span className="font-semibold text-yellow-600">Jobforge </span> </a>Website is developed</li>
            <li>by a team of dedicated professionals.</li>
            <li>Users can easily find and apply for jobs.</li>
            <li><MdCall className="inline-block" /> +91 85718-79674</li>
            <li><IoMail className="inline-block" /> amrenderk66@gmail.com</li>
            <img src="src/assets/Image/logo.png" className="mt-4 rounded-2xl" alt="" />
          </ul>
        </div>
        <div>
          <h3 className="text-white text-lg font-semibold mb-3 border-b-2 border-pink-500 inline-block">
            Get Help
          </h3>
          <ul className="space-y-2">
            <li><a href="/PrivacyPolicy" className="hover:text-pink-500">Privacy Policy</a></li>
            <li><a href="/Terms" className="hover:text-pink-500">Terms & Conditions</a></li>
            <li><a href="/Contact" className="hover:text-pink-500">Contact Us</a></li>
            <li>Address: Aman Nagar Mirzapur Road Hisar (Haryana)</li>
            <li>Pincode: 125001</li>

          </ul>
        </div>
        <div>
          <h3 className="text-white text-lg font-semibold mb-3 border-b-2 border-pink-500 inline-block">
            Our Services
          </h3>
          <ul className="space-y-2">
            <li><a href="/Internship" className="hover:text-pink-500">AI & ML</a></li>
            <li><a href="/Job" className="hover:text-pink-500">Web Development</a></li>
            <li><a href="/Trainee" className="hover:text-pink-500">UI/UX Design</a></li>
            <li><a href="#" className="hover:text-pink-500">App Development</a></li>
            <li><a href="#" className="hover:text-pink-500">Data Science</a></li>
            <li><a href="#" className="hover:text-pink-500">Digital Marketing</a></li>
            <li><a href="#" className="hover:text-pink-500">AI & Machine Learning</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-3 border-b-2 border-pink-500 inline-block">
            Follow Us
          </h3>
          <div className="flex space-x-4 mt-3">
            <a href="https://www.facebook.com" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-900 transition" src="">
              <FaFacebookF />
            </a>
            <a href="https://x.com/amrenderk66" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-yellow-100 transition">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/killerboy_110/" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-amber-500 transition">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/amrender-kumar-a1740b2a7/" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
