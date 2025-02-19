import React from 'react'
import { Link } from 'react-router-dom'
import Trending from '../Trending'

function Sidenav() {
  return (
    <div className='w-[20%]   border-r-2 border-zinc-400 p-10 '>
        <h1 className='text-2xl text-white font-semibold'><i className="text-[#6556CD] ri-tv-fill mr-2"></i>
        <span className='text-2xl'>Movie App</span>
        </h1>
        <nav className='flex flex-col text-zinc-400 text-xl gap-3'>

            <h1 className='text-white font-semibold text-xl mt-10 '>New Feeds</h1>

            <Link  to="/trending" className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg mt-5 hover:p-3'><i className='  mr-2 text-yellow-400 ri-fire-fill '></i>Trending</Link>

            <Link to="/popular" className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg mt-5 hover:p-3'><i className='mr-2 ri-bard-fill text-blue-700'></i>Popular</Link>

            <Link to="/movies" className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg mt-5 hover:p-3'><i className='mr-2 ri-movie-fill text-red-400'></i>Movies</Link>

            <Link to="/shows" className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg mt-5 hover:p-3'><i className='mr-2 ri-tv-fill text-orange-400'></i>Shows</Link>

            <Link to="/people" className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg mt-5 mb-10 hover:p-3'><i className='mr-2 ri-team-fill text-purple-800'></i>People</Link>
        </nav>
        <hr  className='border-none h-[1px] bg-zinc-400'/>
        <nav className='flex flex-col text-zinc-400 text-xl gap-2'>
        <h1 className='text-xl text-white font-semibold mt-8 mb-2'>Website Information</h1>

        <Link to="/aboutpage" className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg mt-5 hover:p-3'>
        <i className='mr-2 ri-information-fill text-white'></i>About Us </Link>

        <Link  to="/contact" className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg mt-5 hover:p-3'>
        <i className='mr-2 ri-information-fill text-white'></i>Contact Us</Link>

        </nav>

    </div>
  )
}

export default Sidenav