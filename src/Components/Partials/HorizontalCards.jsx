import React from "react";
import { motion } from "framer-motion";

function HorizontalCards({ data }) {
  return (
    <div className="w-full p-5">
      
      <motion.div
        className="w-full flex gap-5 overflow-x-auto scrollbar-hide p-2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {data.map((d, i) => (
          <motion.div
            key={i}
            className="min-w-[18%] bg-zinc-900 rounded-lg overflow-hidden shadow-lg relative cursor-pointer"
            whileHover={{ scale: 1.08, boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)" }}
            transition={{ duration: 0.3 }}
          >
            <img
              className="w-full h-52 object-cover"
              src={`https://image.tmdb.org/t/p/original${
                d.backdrop_path || d.poster_path
              }`}
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

            <div className="text-white p-4 absolute bottom-0 left-0 right-0">
              <h1 className="text-lg font-semibold line-clamp-1">
                {d.title || d.name || d.original_name || d.original_title}
              </h1>
              <p className="text-sm text-gray-400 line-clamp-2">
                {d.overview.slice(0, 80)}...
                <span className="text-blue-400 cursor-pointer hover:underline">
                  more
                </span>
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default HorizontalCards;
