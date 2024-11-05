import React from "react";
import { motion } from "framer-motion";
import Adfilm from "../Images/Adfilm.jpg";
import Tv from "../Images/Tv.jpg";
import Promotion from "../Images/movie-promotion.jpg";
import Trailer from "../Images/Movie Trailer.png";
import WebSeries from "../Images/Web Series.jpg";
import Serials from "../Images/Serials.png";
import Youtube from "../Images/youtube.png";
import Audiobook from "../Images/audiobook.jpg";
import music from "../Images/music logo.jpg";

const keyHighlight = () => {
  const techs = [
    {
      id: 1,
      src: Adfilm,
      title: "Advertisment films",
      style: "shadow-yellow-600",
    },
    {
      id: 2,
      src: Tv,
      title: "Television Shows & movies",
      style: "shadow-white",
    },
    {
      id: 3,
      src: Promotion,
      title: "Movie Promotion",
      style: "shadow-blue-500",
    },
    {
      id: 4,
      src: Trailer,
      title: "Movie Trailers",
      style: "shadow-red-300",
    },
    {
      id: 5,
      src: WebSeries,
      title: "Web Series",
      style: "shadow-yellow-800",
    },
    {
      id: 6,
      src: Serials,
      title: "Serials",
      style: "shadow-white",
    },
    {
      id: 7,
      src: Youtube,
      title: "Youtube Series",
      style: "shadow-red-500",
    },
    {
      id: 8,
      src: Audiobook,
      title: "Audiobook",
      style: "shadow-cyan-600",
    },
    {
      id: 9,
      src: music,
      title: "Music Logo",
      style: "shadow-yellow-500",
    },
  ];

  const headingVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  const topToBottomVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.8, ease: "easeOut" },
    },
  };

  return (
    <div
      name="skills"
      className="min-h-screen bg-black text-white flex flex-col justify-center py-8 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        className="md:mx-[7rem] py-6 md:py-10 text-center sm:text-left"
        initial="hidden"
        whileInView="visible"
        variants={headingVariants}
        viewport={{ once: false }}
      >
        <h1 className="text-4xl text-white font-bold border-b-4 border-[#A40700] p-2 inline">
          KEY HIGHLIGHTS
        </h1>
        <p className="py-4 md:py-6 text-gray-300">The Work I Take</p>
      </motion.div>
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className=" w-full grid grid-cols-2 mx-auto sm:grid-cols-3 gap-8 text-center py-8 sm:px-0">
          {techs.map(({ id, src, title, style }) => {
            return (
              <motion.div
                key={id}
                className={`shadow-md hover:scale-105  py-2 rounded-lg ${style}`}
                initial="hidden"
                whileInView="visible"
                variants={topToBottomVariants}
                viewport={{ once: false }}
              >
                <img src={src} alt="" className="w-[50%] pt-5 m-auto" />
                <p className=" mt-4">{title}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default keyHighlight;
