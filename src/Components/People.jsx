import React, { useEffect, useState } from 'react'
import Topnav from './Partials/Topnav'
import { data, useNavigate } from 'react-router-dom'
import axios from '../utils/Axios'
import Loading from './Loading'
import Cards from './Partials/Cards'
import InfiniteScroll from 'react-infinite-scroll-component'
function People() {
    const navigate=useNavigate()
    const[category,setCategory]=useState("popular");
    const[People,setPeople]=useState([]);
    const [page, setPage] = useState(1)
    const [hasmore, sethasmore] = useState(true)
  
    document.title="MovieApp | People "+category.toUpperCase()
    
    const GetPeople=async()=>{
      try{
        const {data}=await axios.get(`/person/${category}?page=${page}`)
        // console.log(data.results);
        // setPeople(data.results) 
        if(data.results.length>0){
          setPeople((prev)=>[...prev,...data.results]);
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
      if(People.length===0){
        GetPeople()
      }
      else{
        setPage(1);
        setPeople([]);
        GetPeople();
      }
    } 
    useEffect(()=>{
      // GetPeople()
      refreshHandler()
    },[category])

    return People.length>0 ? (
        <div className='px-[3%] w-screen h-auto '>
          <div className='w-full flex items-center justify-between'>
          <h1 className='text-2xl font-semibold text-zinc-400'>
            <i  onClick={()=>navigate(-1)} className='hover:text-[#6556CD] ri-arrow-left-line p-3'></i>
            People <small className='ml-1 text-sm text-zinc-500'>({category})</small></h1>
    
          <div className='flex items-center w-[80%]'>
            <Topnav />     
            </div>
          </div>
          <InfiniteScroll
          dataLength={People.length}
          next={GetPeople}
          hasMore={hasmore}
          loader={<h1>Loading....</h1>}>
            <Cards data={People} title="people"/>
          </InfiniteScroll>
          
      </div> 
      ) : <Loading/>
}

export default People