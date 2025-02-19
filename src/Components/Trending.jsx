import React, { useEffect, useState } from 'react'
import Topnav from './partials/Topnav'
import DropDown from './partials/DropDown'
import { data, useNavigate } from 'react-router-dom'
import axios from '../utils/Axios'
import Loading from './Loading'
import Cards from './Partials/Cards'
import InfiniteScroll from 'react-infinite-scroll-component'

function Trending() {
  const[category,setCategory]=useState("all");
  const[duration,setDuration]=useState("day");
  const[trending,setTrending]=useState([]);
  const [page, setPage] = useState(1)
  const [hasmore, sethasmore] = useState(true)

  document.title="MovieApp | trending "+category.toUpperCase()
  
  const navigate=useNavigate()

  const GetTrending=async()=>{
    try{
      const {data}=await axios.get(`/trending/${category}/${duration}?page=${page}`)
      // console.log(data.results);
      // setTrending(data.results) 
      if(data.results.length>0){
        setTrending((prev)=>[...prev,...data.results]);
        setPage((prev)=>prev+1)
      }
      else{
        sethasmore(false)
      }
    }
    catch(err){
      console.log("Error is",err);
    }
  }
  const refreshHandler=()=>{
    if(trending.length===0){
      GetTrending()
    }
    else{
      setPage(1);
      setTrending([]);
      GetTrending();
    }
  }



  useEffect(()=>{
    // GetTrending()
    refreshHandler()
  },[category,duration])
  
  return trending.length>0 ? (
    <div className='px-[3%] w-screen h-auto '>
      <div className='w-full flex items-center justify-between'>
      <h1 className='text-2xl font-semibold text-zinc-400'>
        <i  onClick={()=>navigate(-1)} className='hover:text-[#6556CD] ri-arrow-left-line p-3'></i>
        Trending</h1>

      <div className='flex items-center w-[80%]'>

        <Topnav />

        <DropDown func={(e)=>setCategory(e.target.value)} title="Category" options={["movie", "tv", "all"]} />
        <div className='w-[2%]'></div>
        <DropDown func={(e)=>setDuration(e.target.value)} title="Duration" options={["week", "day"]} />
       
        </div>
      </div>
      <InfiniteScroll
      dataLength={trending.length}
      next={GetTrending}
      hasMore={hasmore}
      loader={<h1>Loading....</h1>}>
        <Cards data={trending} title={category}/>
      </InfiniteScroll>
      
  </div> 
  ) : <Loading/>
}

export default Trending
