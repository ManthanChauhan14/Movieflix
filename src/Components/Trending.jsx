import React, { useEffect, useState } from 'react'
import Topnav from './partials/Topnav'
import DropDown from './partials/DropDown'
import { data, useNavigate } from 'react-router-dom'
import axios from '../utils/Axios'

function Trending() {
  const navigate=useNavigate()
  const GetTrendingAPI=async()=>{
    try{
      const {data}=await axios.get('/trending/all/day')
    }
    catch(err){
      console.log(err);
    }

  }
  useEffect(()=>{
    GetTrendingAPI()
  },[])
  
  return (
    <div className='px-[3%] w-screen h-screen'>
      <div className='w-full flex items-center justify-between'>
        <h1 className='text-2xl font-semibold text-zinc-400'>
          <i  onClick={()=>navigate(-1)} className='hover:text-[#6556CD] ri-arrow-left-line p-3'></i>
          Trending</h1>

        <div className='flex items-center w-[80%]'>

          <Topnav />

          <DropDown title="Category" options={["movie", "tv", "all"]} />
          <div className='w-[2%]'></div>
          <DropDown title="Duration" options={["week", "day"]} />
        </div>
      </div>

      {/* {data.map((d, i) => (
          <motion.div
            key={i}
            className="min-w-[18%] bg-zinc-900 rounded-lg overflow-hidden shadow-lg relative cursor-pointer"
            whileHover={{ scale: 1.08, boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)" }}
            transition={{ duration: 0.3 }}
          >
            <img
              className="w-full h-52 object-cover"
              src={`https://image.tmdb.org/t/p/original${
                d.backdrop_path || d.poster_path
              }`}
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

            <div className="text-white p-4 absolute bottom-0 left-0 right-0">
              <h1 className="text-lg font-semibold line-clamp-1">
                {d.title || d.name || d.original_name || d.original_title}
              </h1>
              <p className="text-sm text-gray-400 line-clamp-2">
                {d.overview.slice(0, 80)}...
                <span className="text-blue-400 cursor-pointer hover:underline">
                  more
                </span>
              </p>
            </div>
          </motion.div>
        ))} */}
    </div>
  )
}

export default Trending
