import React from 'react'
import error from '/error.png'

function NotFound() {
  return (
    <div className='absolute top-[0] w-screen h-screen flex justify-center items-center bg-black left-0'>
      <img className='h-[50%] object-cover' src={error} alt="" />
    </div>
  )
}

export default NotFound