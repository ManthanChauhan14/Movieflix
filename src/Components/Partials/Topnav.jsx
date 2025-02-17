import axios from "../../utils/Axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from "/picture.png"

function Topnav() {
    const [query,setQuery]=useState([])
    const[searches,setSearches]=useState([])
    
    const getSearches=async()=>{
        try{
            const {data}=await axios.get(`/search/multi?query=${query}`);
            console.log(data)
            setSearches(data.results)
        }
        catch (err){
            console.log("error is ",err);
            
        }
    }
    useEffect(()=>{
        getSearches()
    },[query])

  return (
    <div className="w-[75%] h-[10vh] relative flex mx-auto items-center ">
      <i className="text-3xl text-zinc-400 ri-search-line"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-[50%] text-zinc-200 mx-10 p-5 text-xl outline-none border-none bg-transparent"
        type="text"
        placeholder="search anything"
      />

      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="right-0 text-zinc-400 text-3xl ri-close-fill"
        ></i>
      )}
      <div className="absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[100%] left-[5%] overflow-auto">
        {searches.map((item, index) => (
          <Link
            key={index}
            className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100"
          >
            <img
              className="w-[10vh] h-[10vh] object-cover rounded mr-5 shadow-lg"
              src={item.backdrop_path || item.profile_path ?` https://image.tmdb.org/t/p/original/${item.backdrop_path || item.profile_path}` : noimage}
              alt=""
            />
            <span>
              {item.original_title ||
                item.title ||
                item.name ||
                item.original_name}
            </span>
          </Link>
        ))}
      </div>
    </div>


  );
}

export default Topnav;
