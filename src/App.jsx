import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Trending from './Components/Trending'

function App() {
  return (
    <div className='bg-[#1F1E24] w-full h-auto flex '>

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/trending" element={<Trending />}/>
    </Routes>
    </div>
  )
}

export default App