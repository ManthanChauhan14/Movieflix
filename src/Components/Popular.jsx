import React, { useEffect, useState } from 'react'
import Topnav from './partials/Topnav'
import DropDown from './partials/DropDown'
import { data, useNavigate } from 'react-router-dom'
import axios from '../utils/Axios'
import Loading from './Loading'
import Cards from './Partials/Cards'
import InfiniteScroll from 'react-infinite-scroll-component'

function Popular() {
    const navigate=useNavigate()

    const[category,setCategory]=useState("movie");
    const[Popular,setPopular]=useState([]);
    const [page, setPage] = useState(1)
    const [hasmore, sethasmore] = useState(true)
  
    document.title="MovieApp | Popular "+category.toUpperCase()
    
    const GetPopular=async()=>{
      try{
        const {data}=await axios.get(`/${category}/popular?page=${page}`)
        // console.log(data.results);
        // setPopular(data.results) 
        if(data.results.length>0){
          setPopular((prev)=>[...prev,...data.results]);
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
      if(Popular.length===0){
        GetPopular()
      }
      else{
        setPage(1);
        setPopular([]);
        GetPopular();
      }
    }
  
  
  
    useEffect(()=>{
      // GetPopular()
      refreshHandler()
    },[category])
    
    return Popular.length>0 ? (
      <div className='px-[3%] w-screen h-auto '>
        <div className='w-full flex items-center justify-between'>
        <h1 className='text-2xl font-semibold text-zinc-400'>
          <i  onClick={()=>navigate(-1)} className='hover:text-[#6556CD] ri-arrow-left-line p-3'></i>
          Popular</h1>
  
        <div className='flex items-center w-[80%]'>
  
          <Topnav />
  
          <DropDown func={(e)=>setCategory(e.target.value)} title="Category" options={["movie", "tv"]} />
          <div className='w-[2%]'></div>
         
          </div>
        </div>
        <InfiniteScroll
        dataLength={Popular.length}
        next={GetPopular}
        hasMore={hasmore}
        loader={<h1>Loading....</h1>}>
          <Cards data={Popular} title={category}/>
        </InfiniteScroll>
        
    </div> 
    ) : <Loading/>
  }

export default Popular