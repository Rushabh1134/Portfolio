import React from "react";
import { motion } from "framer-motion";
import imageUrl from "../Images/achieveimg.jpg";

function Achievements() {
  const achievements = [
    "Certified Music Producer from True School of Music (TSM), skilled in music composition and sound design.",
    "6-time Award Winner for Best Background Score in live Natak (theatre) performances, recognized for creating emotionally impactful soundscapes.",
    "Creator of the unique Murshid title track, blending modern and electronic music elements.",
    "Specialized in composing immersive theatre music that enhances storytelling and emotional depth.",
    "Collaborated with leading artists, directors, and theatre groups to deliver distinctive and memorable soundtracks.",
  ];

  const headingVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  const leftToRightVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.4, ease: "easeOut" },
    },
  };

  //new changes 

  const topToBottomVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center py-8 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="md:mx-[7rem] py-6 md:py-10 text-center sm:text-left"
        initial="hidden"
        whileInView="visible"
        variants={headingVariants}
        viewport={{ once: false }}
      >
        <h1 className="text-4xl font-bold border-b-4 border-[#A40700] p-2 inline">
          Awards
        </h1>
        <p className="py-6 text-white">
          Transforming ideas into digital realities with creativity and code.
        </p>
      </motion.div>
      <div className="w-full max-w-screen-xl mx-auto bg-gradient-to-r from-black to-[#383535] py-6 px-4 md:px-8 lg:px-12 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left column for image */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center md:justify-start mb-5 md:mb-0"
            initial="hidden"
            whileInView="visible"
            variants={leftToRightVariants}
            viewport={{ once: false }}
          >
            <div className="w-[90%] md:w-[80%] lg:w-[70%]">
              <img
                src={imageUrl}
                alt="Awards"
                className="rounded-lg shadow-md object-cover"
              />
            </div>
          </motion.div>

          {/* Right column for achievements list */}
          <motion.div
            className="w-full  md:w-1/2"
            initial="hidden"
            whileInView="visible"
            variants={topToBottomVariants}
            viewport={{ once: false }}
          >
            <ul className="list-disc list-inside text-white space-y-3">
              {/* Mapping through achievements array */}
              {achievements.map((achievement, index) => (
                <li key={index} className="text-base py-[10px] sm:text-sm md:text-xl">
                  {achievement}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Achievements;
