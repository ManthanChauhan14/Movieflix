import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Partials/Header";


const Contact = () => {
    const navigate=useNavigate()
  return (
    <div className="min-h-screen w-full  bg-gray-900 text-white p-4">
      <div><i  onClick={()=>navigate(-1)} className='hover:text-[#6556CD] mt-4  ri-arrow-left-line p-3'></i></div>
      <div className="flex justify-center items-center h-full">
        <div className="max-w-lg w-full bg-gray-800 p-6 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-center">Contact Me</h2>
        <p className="text-center text-gray-400 mb-6">Feel free to reach out through any of the platforms below:</p>
        
        <div className="space-y-4">
          <a href="mailto:manthanchauhan12315@gmail.com" className="flex items-center gap-3 bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition">
            <i className="text-xl ri-mail-fill" /> manthanchauhan12315@gmail.com
          </a>
          <a href="https://github.com/ManthanChauhan14" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition">
            <i className="text-xl ri-github-fill" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/manthanchauhan2004/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition">
            <i  className="text-xl ri-linkedin-box-fill" /> LinkedIn
          </a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
