import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import cn from "../../utils/projectcn";

const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--neutral-900)",
    "var(--neutral-600)",
    "var(--gray-800)",
    "var(--gray-900)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const topToBottomVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.4, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[30rem] overflow-y-auto overflow-x-hidden flex justify-center relative space-x-10 lg:space-x-40 rounded-md p-5 lg:p-10"
      ref={ref}
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      initial="hidden"
      whileInView="visible"
      variants={topToBottomVariants}
      viewport={{ once: false }}
    >
      <div className="relative flex flex-col lg:flex-row items-start px-4 w-full max-w-2xl">
        <div className="w-full">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-10 lg:my-15">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl border-b-4 border-[#A40700]  lg:text-4xl font-bold text-slate-100 sm:text-2xl md:text-3xl mx-4 md:text-left sm:mx-[rem] py-6 md:py-4 text-start sm:text-left"
              >
                {item.title}
              </motion.h2>
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-md lg:text-lg font-bold text-slate-100 sm:text-lg md:text-2xl mx-8 md:text-right py-2 md:py-2 text-right"
              >
                {item.subTitle}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-sm lg:text-base text-slate-300 mt-5 lg:mt-5 sm:text-base mb-4 text-start md:text-base"
              >
                {item.description}
              </motion.p>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-sm lg:text-base text-slate-300 mt-5 lg:mt-10 sm:text-base mb-4 text-start md:text-base"
              >
                <button
                  className="bg-black hover:bg-black text-white font-bold py-2 px-4 rounded"
                  onClick={() => window.open(item.githubLink, "_blank")}
                >
                  Watch Trailer
                </button>
              </motion.div>
              <div className="block lg:hidden mt-5">{item.content ?? null}</div>
            </div>
          ))}
          <div className="h-20 lg:h-40" />
        </div>
      </div>
      <motion.div
        animate={{
          background: linearGradients[activeCard % linearGradients.length],
        }}
        className={cn(
          "hidden lg:block h-80 w-full lg:w-90 rounded-md bg-white sticky top-10 overflow-hidden",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </motion.div>
    </motion.div>
  );
};

export default StickyScroll;
