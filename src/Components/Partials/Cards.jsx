import React from 'react'
import { Link } from 'react-router-dom'

function Cards({data}) {
  return (
    <div className='flex flex-wrap  w-full'>
        {data.map((cards,index)=>(
              <Link className='w-[29vh] mr-[4%] mb-[4%] mt-[30px] m-auto' key={index}>
              <img className='shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] object-cover' src={`https://image.tmdb.org/t/p/original/${cards.poster_path || cards.backdrop_path || cards.profile_path}`} alt="" />
              <h1 className='text-2xl text-zinc-300 mt-3 font-semibold'>
                {cards.original_title || cards.title || cards.name || cards.original_name }
              </h1>
            </Link>
        ))}
    </div>
  )
}

export default Cards