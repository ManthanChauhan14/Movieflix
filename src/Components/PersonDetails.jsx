import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadperson, removeperson } from "../store/actions/personActions";
import DropDown from './partials/DropDown'
import {
  useNavigate,
  useParams,
  Link,
  useLocation,
  Outlet,
} from "react-router-dom";
import Loading from "../Components/Loading";
import HorizonatlCards from "./partials/HorizontalCards";

function PersonDetails() {
  // when we want to use the data of routes we use useParams
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.person);
  const dispatch = useDispatch();
  const [category, setcategory] = useState("movie")
  // console.log(info);

  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => {
      dispatch(removeperson());
    };
  }, [id]);
  // console.log(info); 

  return info ? (
    <div className="px-[8%] w-screen bg-[#1F1E24] ">
      {/* Part-1 navigation */}
      <nav className="h-[10vh] w-full items-center text-zinc-100 flex gap-10 text-2xl">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] ri-arrow-left-line"
        ></Link>
      </nav>

      {/* part-2 left poster and details */}
      <div className="w-full flex ">
        <div className="w-[20%]">
          <img
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[38vh] object-cover rounded-xl"
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path
              }`}
            alt=""
          />
          <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500 " />
          {/* Links */}
          <div className="text-2xl text-white flex gap-x-5">
            <a
              target="_blank"
              href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
            >
              <i className="ri-earth-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.facebook.com/${info.externalid.facebook_id}`}
            >
              <i className="ri-facebook-circle-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.instagram.com/${info.externalid.instagram_id}`}
            >
              <i className="ri-instagram-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://twitter.com/${info.externalid.twitter_id}`}
            >
              <i className="ri-twitter-x-fill"></i>
            </a>

          </div>


          <h1 className="text-2xl text-zinc-400 font-semibold my-4">Person Info</h1>
          <h1 className="text-xl text-zinc-400 font-semibold ">Known For</h1>
          <h1 className="text-xl text-zinc-400 font-semibold">
            {info.detail.known_for_department}
          </h1>
          <h1 className="text-xl text-zinc-400 font-semibold mt-2">Gender</h1>
          <h1 className="text-xl text-zinc-400 font-semibold">
            {info.detail.gender === 2 ? "Male" : "Female"}
          </h1>
          <h1 className="text-xl text-zinc-400 font-semibold mt-2">Birthday</h1>
          <h1 className="text-xl text-zinc-400 font-semibold">
            {info.detail.birthday}
          </h1>
          <h1 className="text-xl text-zinc-400 font-semibold mt-2">Deathday</h1>
          <h1 className="text-xl text-zinc-400 font-semibold">
            {info.detail.deathday ? info.detail.deathday : "Still Alive"}
          </h1>

          <h1 className="text-xl text-zinc-400 font-semibold mt-2 ">Place Of Birth</h1>
          <h1 className="text-xl text-zinc-400 font-semibold">
            {info.detail.place_of_birth}
          </h1>

          <h1 className="text-xl text-zinc-400 font-semibold mt-2">Also Known As</h1>
          <h1 className="text-xl text-zinc-400 font-semibold">
            {info.detail.also_known_as.join(", ")}
          </h1>
        </div>
        {/* Part-3 personal informations */}


        <div className="w-[80%] ml-[5%]">
          <h1 className="text-6xl text-zinc-400 font-black my-4">{info.detail.name}</h1>

          <h1 className="text-xl text-zinc-400 font-semibold">Biography</h1>

          <p className="text-zinc-400 mt-3">{info.detail.biography}</p>


          <h1 className="mt-5 text-lg text-zinc-400 font-semibold">
            Popular For
          </h1>
          {/* <HorizonatlCards data={info.combinedCredits.cast} /> */}
          <div className="w-full flex justify-between">
            <h1 className="mt-5 text-xl text-zinc-400 font-semibold">
              Acting
            </h1>
            <DropDown title="Category" options={["tv", "movie"]} func={(e) => setcategory(e.target.value)} />

          </div>
          <div className="list-disc text-zinc-400 w-full h-[50vh] mt-5 mb-6 overflow-x-hidden overflow-y-auto shadow-xl shadow-[rgba(255,255,255,.3)] border-2 border-zinc-700 p-5">
              {info[category + "Credits"]?.cast?.length > 0 ? (
              info[category + "Credits"].cast.map((c, i) => (
              <li key={i} className="hover:text-white hover:bg-[#19191d] duration-300 cursor-pointer p-5">
              <Link to={`/${category}/details/${c.id}`} className="">
              <span>{c.name || c.title || c.original_name || c.original_title}</span>
            {c.character && <span className="block ml-5 mt-2">Character: {c.character}</span>}
        </Link>
      </li>
    ))
  ) : (
    <p className="text-zinc-500">No credits available</p>
  )}
          </div>

        </div>


      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default PersonDetails;