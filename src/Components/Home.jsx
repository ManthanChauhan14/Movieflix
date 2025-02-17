import React, { useEffect, useState } from 'react'
import Sidenav from './Partials/Sidenav'
import Topnav from './Partials/Topnav'
import Header from './Partials/Header'
import axios from '../utils/Axios'
import HorizontalCards from './Partials/HorizontalCards'
import Loading from './Loading'
import DropDown from './Partials/DropDown'
// import { all } from 'axios'

function Home() {
    document.title="Movieapp | Homepage"  
    const[wallpaper,setWallpaper]=useState(null)
    const[trending,settrending]=useState(null)
    const[category,setcategory]=useState("all")

    const getWallpaper=async()=>{
      try{
          const {data}=await axios.get(`trending/all/day`);
          // console.log(data)
          let randomData=data.results[(Math.random()*data.results.length).toFixed()]
          console.log(randomData);
          setWallpaper(randomData)

      }
      catch (err){
          console.log("error is ",err);
          
      }
  }
    const getTrending=async()=>{
      try{
          const {data}=await axios.get(`trending/${category}/day`);
          settrending(data.results)
      }
      catch (err){
          console.log("error is ",err);    
      }
  }
  useEffect(()=>{
      getTrending()
       !wallpaper && getWallpaper()
       
  },[category])  

  return  wallpaper && trending? (
    <>
    <Sidenav/>
    <div className='w-[80%] h-full'>
      <Topnav/>
      <Header data={wallpaper}/>
      <div className=" flex justify-between p-4" >
          <h1 className="text-4xl font-bold text-white">🔥 Trending Now</h1>
          <br />
          <DropDown title="Filter" options={["tv", "movie", "all"]} func={(e)=>setcategory(e.target.value)} />
       </div>
      <HorizontalCards data={trending}/>
    </div>
    
    </>
  ): <Loading/>
}

export default Home