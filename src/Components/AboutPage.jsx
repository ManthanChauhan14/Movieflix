import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AboutPage = () => {
    const navigate=useNavigate()
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">

      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex  items-center">
        <i  onClick={()=>navigate(-1)} className='hover:text-[#6556CD] ri-arrow-left-line p-3'></i>
          <Link to="/" className="text-2xl font-bold text-red-500 hover:text-red-400 transition-colors">
          
            MovieApp
          </Link>
        </div>
      </nav>


      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">About MovieApp</h1>


        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed">
            MovieApp is dedicated to bringing you the most comprehensive and up-to-date information about movies. 
            Whether you're looking for new releases, classic films, or hidden gems, our platform provides 
            detailed information, ratings, and recommendations to help you discover your next favorite movie.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Features</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Browse popular, top-rated, and upcoming movies</li>
              <li>Detailed movie information and cast details</li>
              <li>Search functionality with instant results</li>
              <li>User-friendly interface with responsive design</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>React.js for frontend development</li>
              <li>Tailwind CSS for styling</li>
              <li>The Movie Database (TMDB) API for data</li>
              <li>React Router for navigation</li>
            </ul>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-6">Development Team</h2>
          <div className="flex w-full justify-center items-center">
            <div className="bg-gray-800 p-6 rounded-lg flex flex-col w-[25%] ">
              <div className="w-24 h-24 rounded-full bg-gray-700 mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold">Manthan Chauhan</h3>
              <p className="text-gray-400">Lead Developer</p>
            </div>
            
          </div>
        </div>

        <footer className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} MovieApp. All rights reserved.
          </p>
          <p className="text-gray-400 mt-2">
            Data provided by The Movie Database (TMDb)
          </p>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;