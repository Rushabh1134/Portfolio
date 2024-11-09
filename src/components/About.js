import React from "react";
import { motion } from "framer-motion";

const About = () => {
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

  const topToBottomVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center py-10 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="md:mx-[7rem] py-6 md:py-4 text-center sm:text-left"
        initial="hidden"
        whileInView="visible"
        variants={headingVariants}
        viewport={{ once: false }}
      >
        <h1 className="text-4xl font-bold border-b-4 border-[#A40700] p-2 inline">
          About
        </h1>
        <p className="py-6 text-white">
          Transforming ideas into digital realities with creativity and code.
        </p>
      </motion.div>
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 items-center gap-10 py-4 md:px-[5rem] lg:px-0">
          <motion.div
            className="p-6 rounded-lg w-[90%] m-auto shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-gray-800 hover:bg-gray-700 transform hover:-translate-y-1 hover:scale-105  bg-gradient-to-r from-black to-[#383535]"
            initial="hidden"
            whileInView="visible"
            variants={leftToRightVariants}
            viewport={{ once: false }}
          >
            <p className="text-sm mb-2 md:text-xl lg:text-lg">
              Comfortable with all genres, I have a unique ability to craft
              music that resonates with a wide range of audiences. My portfolio
              includes successful collaborations with prominent media houses
              such as Zee Marathi, Colors Marathi, Sony Marathi, Sony
              Entertainment, Zee 5 & Planet Marathi.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols- items-center gap-10 py-6 md:mx-[5rem] md:m-auto lg:px-0">
          <motion.div
            className="text-center md:text-left px-4 md:px-10"
            initial="hidden"
            whileInView="visible"
            variants={topToBottomVariants}
            viewport={{ once: false }}
          >
            <h1 className="text-3xl font-bold mb-[2rem]">Education & Skills</h1>
            <div className="mb-4 m-auto text-center">
              <h2 className="md:text-2xl  font-semibold ">Diploma in Music</h2>
              <p className="md:text-lg sm:text-sm">
                {" "}
                From Production True School of Music
              </p>
              <p>Till - 13 June 2021</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-[3rem] md:mt-[3rem] md:ml-[5rem]">
              <div className="mb-4">
                <h2 className="md:text-2xl font-semibold">
                  • Digital Audio Workstations (DAWs) :-
                </h2>
                <p className="md:text-lg ml-4"> Logic Pro, Ableton Live</p>
              </div>
              <div className="mb-4">
                <h2 className="md:text-2xl font-semibold">
                  {" "}
                  • Music Composition:-
                </h2>
                <p className="md:text-lg ml-4">
                  MIDI Programming, orchestration, sound design
                </p>
              </div>
              <div className="mb-4">
                <h2 className="md:text-2xl font-semibold">
                  {" "}
                  • Sound Engineering :-
                </h2>
                <p className="md:text-lg ml-4">
                  Mixing, mastering, recording techniques
                </p>
              </div>
              <div className="mb-4">
                <h2 className="md:text-2xl font-semibold">
                  {" "}
                  • Guitar (nylon, acoustic, electric)
                </h2>
              </div>
              <div className="mb-4">
                <h2 className="md:text-2xl font-semibold">
                  {" "}
                  • Keyboard and Piano
                </h2>
              </div>
              <div className="mb-4">
                <h2 className="md:text-2xl font-semibold">
                  {" "}
                  • All types of small Percussion
                </h2>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
