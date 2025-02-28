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
import MovieDetails from './Components/MovieDetails'
import TvDetails from './Components/TvDetails'
import PersonDetails from './Components/PersonDetails'
import Trailer from './Components/Partials/Trailer'
import Login from './Components/Login'

function App() {
  return (
    <div className='bg-[#1F1E24] w-full h-auto flex '>

    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/trending" element={<Trending />}/>
      <Route path="/popular" element={<Popular />}/>
      <Route path="/movie" element={<Movies />}/>
      <Route path="/tv" element={<Shows />}/>
      <Route path="/people" element={<People />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/aboutpage" element={<AboutPage />}/>

      <Route path="/people/details/:id" element={<PersonDetails />}/>
      <Route path="/tv/details/:id" element={<TvDetails />}>
        <Route path="/tv/details/:id/trailer" element={<Trailer />}/>
      </Route>

      <Route path='/movie/details/:id' element={<MovieDetails />} >
        <Route path='/movie/details/:id/trailer' element={<Trailer/>}/>
      </Route>

    </Routes>
    </div>
  )
}

export default App