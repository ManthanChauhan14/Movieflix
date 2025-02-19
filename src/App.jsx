import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Trending from './Components/Trending'
import Popular from './Components/Popular'
import AboutPage from './Components/AboutPage'
import Movies from './Components/Movies'
import Contact from './Components/Contact'
import Shows from './Components/Shows'
import People from './Components/People'

function App() {
  return (
    <div className='bg-[#1F1E24] w-full h-auto flex '>

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/trending" element={<Trending />}/>
      <Route path="/popular" element={<Popular />}/>
      <Route path="/movies" element={<Movies />}/>
      <Route path="/shows" element={<Shows />}/>
      <Route path="/people" element={<People />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/aboutpage" element={<AboutPage />}/>
    </Routes>
    </div>
  )
}

export default App