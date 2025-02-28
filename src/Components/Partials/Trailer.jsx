import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import NotFound from '../NotFound'

function Trailer() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const category = pathname.includes("movie") ? "movie" : "tv"
  const ytvideo = useSelector((state) => state[category].info.videos)
  // console.log(ytvideo,pathname.includes("movie")); 
  // console.log(ytvideo);

  return (
    <div className='top-[0] left-0 z-[100] absolute w-screen h-screen flex items-center justify-center text-2xl text-white bg-[rgba(0,0,0,.9)] '>
      <Link
        onClick={() => navigate(-1)}
        className="absolute hover:text-[#6556CD] right-[5%] top-[5%] ri-close-fill z-[999]"
      > </Link>
      {ytvideo ? (
        <ReactPlayer
          height={700}
          width={1500}
          url={`https://www.youtube.com/watch?v=${ytvideo.key}`} />) : (<NotFound />

      )}

    </div>
  )
}

export default Trailer
