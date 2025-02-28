import axios from "../../utils/Axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from "/picture.png";

function Topnav() {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);

  const getSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results);
    } catch (err) {
      console.log("error is ", err);
    }
  };

  useEffect(() => {
    if (query.length > 0) {
      getSearches();
    } else {
      setSearches([]);
    }
  }, [query]);

  return (
    <div className="w-[75%] h-[10vh] relative flex mx-auto items-center">
      <div className="relative w-[60%]"> {/* Wider search bar */}
        <div className="flex items-center bg-zinc-800 text-white rounded-lg px-4 py-2 shadow-md h-[40px]"> {/* Reduced height */}
          <i className="text-lg text-zinc-400 ri-search-line"></i> {/* Adjusted icon size */}
          <input
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            className="w-full bg-transparent text-white text-base px-3 py-1 outline-none border-none"
            type="text"
            placeholder="Search anything..."
          />
          {query.length > 0 && (
            <i
              onClick={() => setQuery("")}
              className="cursor-pointer text-zinc-400 text-lg ri-close-fill"
            ></i>
          )}
        </div>

        {/* Search Results Dropdown */}
        {query.length > 0 && searches.length > 0 && (
          <div className="absolute z-[100] w-full max-h-[50vh] bg-white shadow-lg rounded-lg mt-2 overflow-auto">
            {searches.map((item, index) => (
              <Link
                to={`${item.media_type}/details/${item.id}`}
                key={index}
                className="flex items-center p-2 hover:bg-zinc-100 transition duration-200"
              >
                <img
                  className="w-[40px] h-[60px] object-cover rounded-lg mr-3"
                  src={
                    item.backdrop_path || item.profile_path
                      ? `https://image.tmdb.org/t/p/original/${item.backdrop_path || item.profile_path}`
                      : noimage
                  }
                  alt=""
                />
                <span className="text-zinc-800 font-medium text-sm">
                  {item.original_title ||
                    item.title ||
                    item.name ||
                    item.original_name}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Topnav;
