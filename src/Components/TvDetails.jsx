import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadtv, removetv } from "../store/actions/tvActions";
import { useNavigate, useParams, Link, useLocation, Outlet } from "react-router-dom";
import Loading from "../Components/Loading";
import HorizonatlCards from "./Partials/HorizontalCards"

function tvDetails() {

  const {pathname}=useLocation()

  // when we want to use the data of routes we use useParams
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.tv);
  const dispatch = useDispatch();
  // console.log(info);

  useEffect(() => {
    dispatch(asyncloadtv(id));
    return () => {
      dispatch(removetv());
    };
  }, [id]);
  // console.log(info);

  return info ? (
    <div 
      style={{
        background: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.7), rgba(0,0,0,.9)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      // part1 navigation
      className="w-screen h-full  px-[10%]"
    >
      <nav className="h-[10vh] w-full  items-center text-zinc-100 flex gap-10 text-2xl">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] ri-arrow-left-line"
        ></Link>
        <a target="_blank" href={info.detail.homepage}>
          <i className="ri-external-link-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="ri-earth-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
        >
          imdb
        </a>
      </nav>

      {/* part 2 poster and our details page */}
      <div className="w-full flex">
        <img
          className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[50vh] object-cover rounded-xl"
          src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path || info.detail.backdrop_path
            }`}
          alt=""
        />


        <div className="content ml-[5%]">
          <h1 className="text-5xl font-black text-white"> {info.detail.original_title || info.detail.title || info.detail.name || info.detail.original_name}
            <small className="text-2xl font-bold text-zinc-400 ml-1">({info.detail.first_air_date.split("-")[0]})</small>
          </h1>
          <div className="flex text-zinc-200 items-center gap-x-5 font-semibold mt-3 mb-5">
            <span className="border-2 text-white w-[5vh] h-[5vh] flex justify-center items-center font-semibold rounded-full bg-[#ee9e3d]">
              {info.detail.vote_average.toFixed(1)}
            </span>
            <h1 className="font-semibold text-2xl w-[60px] leading-6">
              User Score
            </h1>
            <h1>{info.detail.first_air_date}</h1>
            <h1>{info.detail.genres.map((g) => g.name).join(",")}</h1>

            <h1>{info.detail.runtime}min</h1>
          </div>
          <h1 className="text-xl font-semibold italic text-zinc-200">{info.detail.tagline}</h1>


          <h1 className="text-2xl mt-5 mb-1 text-white">Overview</h1>
          <p className="text-white">{info.detail.overview}</p>

          <h1 className="text-2xl mt-5 mb-1 text-white">tv Translated</h1>
          <p className="mb-10 text-white w-[100%]">{info.translations.join(", ")}</p>

          <Link to={`${pathname}/Trailer`}  className=" mt-10 p-5 rounded-md bg-[#6556CD] text-white font-semibold "><i className="ri-play-line text-xl mr-3"></i>Play Trailer </Link>

        </div>
      </div>

      {/* part 3 avaiable platforms */}

      <div className="w-[80%] flex flex-col gap-y-5 mt-10 ">
        {info.watchproviders && info.watchproviders.flatrate && (
          <div className="flex gap-x-10 items-center text-white mb-3">
            <h1>Available on platform</h1>
            {info.watchproviders.flatrate.map((w, index) => (
              <img
                title={w.provider_name}
                className="w-[6vh] h-[6vh]  object-cover rounded-md"
                key={index}
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchproviders && info.watchproviders.buy && (
          <div className="flex gap-x-10 items-center text-white">
            <h1>Available to Buy</h1>
            {info.watchproviders.buy.map((w, index) => (
              <img
                title={w.provider_name}
                className="w-[6vh] h-[6vh]  object-cover rounded-md"
                key={index}
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
        {info.watchproviders && info.watchproviders.rent && (
          <div className="flex gap-x-10 items-center text-white">
            <h1>Available on Rent</h1>
            {info.watchproviders.rent.map((w, index) => (
              <img
                title={w.provider_name}
                className="w-[6vh] h-[6vh]  object-cover rounded-md"
                key={index}
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
      </div>

      {/* part 4 seasons */}
      {info.detail.seasons && info.detail.seasons.length > 0 && (
        <>
          <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500 " />
          <h1 className="mt-10 ml-5 text-3xl font-semibold text-white ">
            Seasons
          </h1>
          <HorizonatlCards
            data={info.detail.seasons.filter(season => season.poster_path && season.name)}
          />
        </>
      )}

      {/* Part 5 recommendations and similar data */}
      <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500 " />
      <h1 className="mt-10 ml-5 text-3xl font-semibold text-white ">
        Recommendations & Similar Stuff </h1>
      <HorizonatlCards data={info.recommendations.length > 0 ? info.recommendations : info.similar} />



    <Outlet/>
    </div>
  ) : (
    <Loading />
  );
}

export default tvDetails;
