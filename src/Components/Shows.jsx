import React, { useEffect, useState } from 'react'
import Topnav from './partials/Topnav'
import DropDown from './partials/DropDown'
import { data, useNavigate } from 'react-router-dom'
import axios from '../utils/Axios'
import Loading from './Loading'
import Cards from './Partials/Cards'
import InfiniteScroll from 'react-infinite-scroll-component'

function Shows() {
    const navigate=useNavigate()
    const[category,setCategory]=useState("airing_today");
    const[Shows,setShows]=useState([]);
    const [page, setPage] = useState(1)
    const [hasmore, sethasmore] = useState(true)
  
    document.title="MovieApp | Shows "+category.toUpperCase()
    
    const GetShows=async()=>{
      try{
        const {data}=await axios.get(`/tv/${category}?page=${page}`)
        // console.log(data.results);
        // setShows(data.results) 
        if(data.results.length>0){
          setShows((prev)=>[...prev,...data.results]);
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
      if(Shows.length===0){
        GetShows()
      }
      else{
        setPage(1);
        setShows([]);
        GetShows();
      }
    } 
    useEffect(()=>{
      // GetShows()
      refreshHandler()
    },[category])

    return Shows.length>0 ? (
        <div className='px-[3%] w-screen h-auto '>
          <div className='w-full flex items-center justify-between'>
          <h1 className='text-2xl font-semibold text-zinc-400'>
            <i  onClick={()=>navigate(-1)} className='hover:text-[#6556CD] ri-arrow-left-line p-3'></i>
            Shows <small className='ml-1 text-sm text-zinc-500'>({category})</small></h1>
    
          <div className='flex items-center w-[80%]'>
    
            <Topnav />
    
            <DropDown func={(e)=>setCategory(e.target.value)} title="Category" options={["popular","top_rated","airing_today","on_the_air"]}  />
            <div className='w-[2%]'></div>
           
            </div>
          </div>
          <InfiniteScroll
          dataLength={Shows.length}
          next={GetShows}
          hasMore={hasmore}
          loader={<h1>Loading....</h1>}>
            <Cards data={Shows} title={category}/>
          </InfiniteScroll>
          
      </div> 
      ) : <Loading/>
}

export default Shows