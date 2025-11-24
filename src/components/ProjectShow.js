import React from "react";
import StickyScroll from "../components/ui/project-scroll";
import { motion } from "framer-motion";
import Aazam from "../Images/Aazam.png";
import Murshid from "../Images/murshid.jpg";
import Athang from "../Images/athang.jpg";
import Number from "../Images/Yek-Number.jpeg";
import Makaan from "../Images/makaan.jpeg";
import Mutaul1 from "../Images/mutaul-1.jpeg";
import Mutaul2 from "../Images/mutaul-2.jpeg";
import Sensodent from "../Images/Sensodent.jpeg";
import TMU from "../Images/TMU-University.jpeg";
import Minister from "../Images/Chief-Minister.jpeg";
import Zee5 from "../Images/Zee5.jpeg";
import Dhruv from "../Images/Dhruv-Tara.jpeg";
import Promo from "../Images/Promo.jpg";
import Audio from "../Images/Audio.png";
import ColorsAwads from "../Images/colours-awads.jpeg";
import Zapuk from "../Images/Zapuk Zupuk.jpeg";
import Nishedh from "../Images/Nishedh.jpeg";
import Jolly from "../Images/Jolly.jpeg";



const content = [

     // Nishedh Season 3 - Movie
  {
    title: "Jolly LLB 3",
    subTitle: "- Movie",
    description:
      "Jolly LLB 3 is a Hindi comedy‑drama where Akshay Kumar and Arshad Warsi reprise their lawyer roles, facing off in a court battle over a farmer’s death and corrupt land grabbing. The first half is witty and funny, while the second half gets serious, exposing corporate greed. I’ve composed the music for the first half and a few scenes in the second half.",
    githubLink: "https://youtu.be/eSgJ8PfSUSk?si=hc51PUS7BYoYONb2",
    content: (
      <>
        <div className="h-full w-full relative flex items-center justify-center text-white">
          <img
            src={Jolly}
            width={200}
            height={200}
            className="h-full w-full object-cover shadow-md hover:scale-105 duration-500"
            alt="linear board demo"
            onClick={() =>
              window.open(
                "https://youtu.be/eSgJ8PfSUSk?si=hc51PUS7BYoYONb2",
                "_blank"
              )
            }
          />
        </div>
      </>
    ),
  },

   // Nishedh Season 3 - series
  {
    title: "Nishedh Season 3",
    subTitle: "- Series",
    description:
      "MTV Nishedh Season 3 is a youth‑focused drama that tackles taboo social issues. I have composed and scored all 9 episodes.",
      githubLink: "https://youtu.be/7VJm4D6f_AM?si=WISAsC1zWrH4N6rM",
    content: (
      <>
        <div className="h-full w-full relative flex items-center justify-center text-white">
          <img
            src={Nishedh}
            width={200}
            height={200}
            className="h-full w-full object-cover shadow-md hover:scale-105 duration-500"
            alt="linear board demo"
            onClick={() =>
              window.open(
                "https://youtu.be/7VJm4D6f_AM?si=WISAsC1zWrH4N6rM",
                "_blank"
              )
            }
          />
        </div>
      </>
    ),
  },
  
  // Zapuk Zupuk - Movie
  {
    title: "Zapuk Zupuk",
    subTitle: "- Movie",
    description:
      "Zapuk Zupuk is a Marathi romantic‑drama about a boy’s whimsical journey to win his love, blending adventure, humor, and a touch of magic. I have done the background score for the movie.",
    githubLink: "https://www.youtube.com/watch?v=uuuQmOFanQA",
    content: (
      <>
        <div className="h-full w-full relative flex items-center justify-center text-white">
          <img
            src={Zapuk}
            width={200}
            height={200}
            className="h-full w-full object-cover shadow-md hover:scale-105 duration-500"
            alt="linear board demo"
            onClick={() =>
              window.open(
                "https://www.youtube.com/watch?v=uuuQmOFanQA",
                "_blank"
              )
            }
          />
        </div>
      </>
    ),
  },
  // Aazam - Movie
  {
    title: "Aazam",
    subTitle: "- Movie",
    description:
     "Azam is a Hindi crime‑thriller about Mumbai underworld power struggles after a dying don’s fate. Jimmy Shergill stars in the mix of gang drama and betrayal. I have done the score for the movie.",
    githubLink: "https://youtu.be/ApOjRqnDR3g?si=IxojBybvswZVk7rn",
    content: (
      <>
        <div className="h-full w-full relative flex items-center justify-center text-white">
          <img
            src={Aazam}
            width={300}
            height={300}
            className="h-full w-full object-cover shadow-md hover:scale-105 duration-500"
            alt="linear board demo"
            onClick={() =>
              window.open(
                "https://youtu.be/qVkMaH6D8Sg?si=k2HrfwtrIX7SZt9p",
                "_blank"
              )
            }
          />
        </div>
      </>
    ),
  },

  {
    title: "Murshid",
    subTitle: "- Web Series",
    description:
      "Murshid is a crime‑drama web series that follows a young, idealistic cop who infiltrates a powerful crime syndicate to bring them down, navigating twists, loyalty tests, and moral dilemmas. I handled the BGM score and title track for the series, setting the tone for its intense, suspenseful vibe.",
    githubLink: "https://youtu.be/Gc44u7ePbfg?si=spcXP92eNw_E1SsH",

    content: (
      <>
        <div className="h-full w-full relative flex items-center justify-center text-white">
          <img
            src={Murshid}
            width={250}
            height={300}
            className="h-full w-full object-cover shadow-md hover:scale-105 duration-500"
            alt="linear board demo"
            onClick={() =>
              window.open(
                "https://youtu.be/x5_nP5AKSgw?si=N2i65OehEcrz6Lsx",
                "_blank"
              )
            }
          />
        </div>
      </>
    ),
  },

  {
    title: "Yek Number ",
    subTitle: "- Movie",
    description:
     "Yek Number is a 2025 Marathi comedy‑drama about a quirky group of friends who start a wild “number‑hunting” adventure to win a mysterious cash prize, leading to hilarious misadventures, friendship, and self‑discovery. I have done the BGM music for the movie, adding a fun, upbeat vibe to its journey.",
    githubLink: "https://youtu.be/PBh-j7fGi-s?si=6_O4458B4ciS7GY3",
    content: (
      <>
        <div className="h-full w-full relative flex items-center justify-center text-white">
          <img
            src={Number}
            width={300}
            height={300}
            className="h-full w-full object-cover shadow-md hover:scale-105 duration-500"
            alt="linear board demo"
            onClick={() =>
              window.open(
                "https://youtu.be/PBh-j7fGi-s?si=6_O4458B4ciS7GY3",
                "_blank"
              )
            }
          />
        </div>
      </>
    ),
  },

  {
    title: "Makaan",
    subTitle: "- Movie",
    description:
      "I crafted a user-friendly restaurant website with login/signup, table booking, and catering service reservations to simplify the dining experience for customers. Additionally, I've curated an engaging user experience by incorporating dynamic elements like interactive menus, enticing image galleries showcasing the restaurant's ambiance, and subtle animations throughout the site. The designed and implemented only the frontend of the restaurant website using HTML, CSS, and JavaScript.",
    githubLink: "https://drive.google.com/drive/u/3/folders/1a4CoTUZRJE7_Z9nKqC_GV-U09piAuXol",

    content: (
      <>
        <div className="h-full w-full object-cover relative flex items-center justify-center text-white">
          <img
            src={Makaan}
            width={300}
            height={300}
            className="h-full w-full object-cover shadow-md hover:scale-105 duration-500"
            alt="linear board demo"
            onClick={() => window.open("", "_blank")}
          />
        </div>
      </>
    ),
  },

  {
    title: "Athang",
    subTitle: "- Web Series",
    description:
      "Aathang is a psychological thriller web series that dives into the dark, twisted mind of a serial‑killer who challenges the police with mind games and cryptic puzzles. The story follows a relentless detective trying to outsmart the killer before more lives are lost, with twists that keep you on edge. I handled the BGM for Aathang, crafting eerie, tension‑building music that heightens every suspenseful moment.",
    githubLink: "https://youtu.be/4ouv0WKMGhg?si=zxZiFtwjMBvkHhDW",

    content: (
      <>
        <div className="h-full w-full object-cover relative flex items-center justify-center text-white">
          <img
            src={Athang}
            width={300}
            height={300}
            className="h-full w-full object-cover shadow-md hover:scale-105 duration-500"
            alt="linear board demo"
            onClick={() =>
              window.open(
                "https://youtu.be/4ouv0WKMGhg?si=zxZiFtwjMBvkHhDW",
                "_blank"
              )
            }
          />
        </div>
      </>
    ),
  },

  {
    title: "Dhruv Tara",
    subTitle: "- Serial",
    description:
      "Dhruv Tara is a Hindi drama serial that follows the inspiring journey of Dhruv, a young aspiring astronaut from a small town, and his supportive friend Tara as they chase dreams, face obstacles, and navigate love, family, and ambition. We have scored the BGM for the first 5 episodes, adding an uplifting and emotional vibe to the story.",
    githubLink:
      "https://drive.google.com/drive/folders/1yX1X7cSRUHqRHKd7I21xWjBvwDZgILWi",

    content: (
      <>
        <div className="h-full w-full object-cover relative flex items-center justify-center text-white">
          <img
            src={Dhruv}
            width={300}
            height={300}
            className="h-full w-full object-cover shadow-md hover:scale-105 duration-500"
            alt="linear board demo"
            onClick={() =>
              window.open(
                "https://drive.google.com/drive/folders/1yX1X7cSRUHqRHKd7I21xWjBvwDZgILWi",
                "_blank"
              )
            }
          />
        </div>
      </>
    ),
  },

  // No 5 Mutaul Funds - Advertisments Film
  {
    title: "Mutaul Funds",
    subTitle: "- Advertisments Film",
    description:
      "Franklin Templeton Mutual Funds ad is a bright, feel‑good commercial that follows quirky character “Franky” as he guides a young investor through the world of mutual funds, using playful visuals and simple analogies to show how smart investing can help achieve life goals. I created the ad music for this spot, composing an upbeat, inspiring jingle that reinforces trust and optimism.",
    githubLink: "https://youtu.be/zOGQVk1cm1A?si=e6cCPhFkj-nELn-7",

    content: (
      <>
        <div className="h-full w-full object-cover relative flex items-center justify-center text-white">
          <img
            src={Mutaul1}
            width={300}
            height={300}
            className="h-full w-full object-cover shadow-md hover:scale-105 duration-500"
            alt="linear board demo"
            onClick={() =>
              window.open(
                "https://youtu.be/zOGQVk1cm1A?si=e6cCPhFkj-nELn-7",
                "_blank"
              )
            }
          />
        </div>
      </>
    ),
  },

  // No 6 Equity Mutaul Funds - Advertisments Film
  {
    title: "Equity Mutaul Funds",
    subTitle: "- Advertisments Film",
    description:
      "Franklin Templeton Mutual Funds ad is a bright, feel‑good commercial that follows quirky character “Franky” as he guides a young investor through the world of mutual funds, using playful visuals and simple analogies to show how smart investing can help achieve life goals. I created the ad music for this spot, composing an upbeat, inspiring jingle that reinforces trust and optimism.",
    githubLink: "https://youtu.be/ehltsGW8wjY?si=MP3_MQaNUvm_MW-4",

    content: (
      <>
        <div className="h-full w-full object-cover relative flex items-center justify-center text-white">
          <img
            src={Mutaul2}
            width={300}
            height={300}
            className="h-full w-full object-cover shadow-md hover:scale-105 duration-500"
            alt="linear board demo"
            onClick={() =>
              window.open(
                "https://youtu.be/ehltsGW8wjY?si=MP3_MQaNUvm_MW-4",
                "_blank"
              )
            }
          />
        </div>
      </>
    ),
  },

  // No 6 Sensodent - Advertisments Film
  {
    title: "Sensodent",
    subTitle: "- Advertisments Film",
    description:
      "Sensodent is a popular toothpaste ad that showcases bright smiles, fresh breath, and confidence‑boosting dental care. The commercial typically follows a relatable day‑in‑the‑life vibe—morning coffee, a confident meeting, a happy night out—highlighting Sensodent’s deep cleaning and protection against plaque and sensitivity. I composed the music for this ad, creating a fresh, lively tune that matches the sparkling vibe and leaves viewers with a feel‑good impression.",
    githubLink:
      "https://drive.google.com/file/d/1IvKdR-zvqYWpOJ97CGGx9KikqNPz_9Vr/view",

    content: (
      <>
        <div className="h-full w-full object-cover relative flex items-center justify-center text-white">
          <img
            src={Sensodent}
            width={300}
            height={300}
            className="h-full w-full object-cover shadow-md hover:scale-105 duration-500"
            alt="linear board demo"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1IvKdR-zvqYWpOJ97CGGx9KikqNPz_9Vr/view",
                "_blank"
              )
            }
          />
        </div>
      </>
    ),
  },

  // No 7 TMU University - Advertisments Film
  {
    title: "TMU University",
    subTitle: "- Advertisments Film",
    description:
      "I have done the music for the TMU (Teerthanker Mahaveer University) promotional ad, creating an uplifting and inspiring track that highlights the university’s vibrant campus life, academic excellence, and student spirit. The music adds energy and a sense of pride, making the ad memorable and engaging.",
    githubLink: "https://youtu.be/tSlTS311sDE?si=laT3dCcKCVK_uain",

    content: (
      <>
        <div className="h-full w-full object-cover relative flex items-center justify-center text-white">
          <img
            src={TMU}
            width={300}
            height={300}
            className="h-full w-full object-cover shadow-md hover:scale-105 duration-500"
            alt="linear board demo"
            onClick={() =>
              window.open(
                "https://youtu.be/tSlTS311sDE?si=laT3dCcKCVK_uain",
                "_blank"
              )
            }
          />
        </div>
      </>
    ),
  },

  // No 8 Kusthi - Promo
  // {
  //   title: "Kusthi",
  //   subTitle: "- Promo",
  //   description:
  //     "I crafted a user-friendly restaurant website with login/signup, table booking, and catering service reservations to simplify the dining experience for customers. Additionally, I've curated an engaging user experience by incorporating dynamic elements like interactive menus, enticing image galleries showcasing the restaurant's ambiance, and subtle animations throughout the site. The designed and implemented only the frontend of the restaurant website using HTML, CSS, and JavaScript.",
  //   githubLink: "https://youtu.be/0d6VI40h0iY?si=DsDbdu0XjsPMTbIl",

  //   content: (
  //     <>
  //       <div className="h-full w-full object-cover relative flex items-center justify-center text-white">
  //         <img
  //           src={Brand}
  //           width={300}
  //           height={300}
  //           className="h-full w-full object-cover shadow-md hover:scale-105 duration-500"
  //           alt="linear board demo"
  //           onClick={() =>
  //             window.open(
  //               "https://youtu.be/0d6VI40h0iY?si=DsDbdu0XjsPMTbIl",
  //               "_blank"
  //             )
  //           }
  //         />
  //       </div>
  //     </>
  //   ),
  // },

  // No 9 Colors Marathi Awards - Promo
  {
    title: "Colors Marathi Awards",
    subTitle: "- Promo",
    description:
      "I’ve created the promo music for the Colours Marathi Award Show, crafting an energetic and glamorous track that sets the tone for a star‑studded night, amps up excitement, and highlights the vibrant Marathi entertainment vibe. The music adds a celebratory feel, making the promo feel dynamic and buzz‑worthy.",
    githubLink: "https://youtu.be/eJehs2MXrY0?si=KDigC-DVHwPjaVZQ",

    content: (
      <>
        <div className="h-full w-full object-cover relative flex items-center justify-center text-white">
          <img
            src={ColorsAwads}
            width={300}
            height={300}
            className="h-full w-full object-cover shadow-md hover:scale-105 duration-500"
            alt="linear board demo"
            onClick={() =>
              window.open(
                "https://youtu.be/eJehs2MXrY0?si=KDigC-DVHwPjaVZQ",
                "_blank"
              )
            }
          />
        </div>
      </>
    ),
  },

  // No 10 Chief Minister - Promo
  {
    title: " Chief Minister",
    subTitle: "- Promo",
    description:
      "I have done the promo music for the Chief Minister’s appearance on the show “Gupte Tithe Khupte,” crafting an engaging, upbeat track that highlights his charisma and connects with the audience. The music adds a lively, impactful vibe, making the promo feel energetic and memorable.",
    githubLink: "https://youtu.be/15vTWgUG-6Q?si=Z-9VbwV6HpVY1bjg",

    content: (
      <>
        <div className="h-full w-full object-cover relative flex items-center justify-center text-white">
          <img
            src={Minister}
            width={300}
            height={300}
            className="h-full w-full object-cover shadow-md hover:scale-105 duration-500"
            alt="linear board demo"
            onClick={() =>
              window.open(
                "https://youtu.be/15vTWgUG-6Q?si=Z-9VbwV6HpVY1bjg",
                "_blank"
              )
            }
          />
        </div>
      </>
    ),
  },

  {
    title: "Zee 5 Music",
    subTitle: "- Logo Music",
    description:
      "I’ve created the logo music for ZEE5, composing a dynamic, catchy tune that instantly signals the brand’s vibrant and premium streaming experience. The music adds a bold, modern identity to the ZEE5 logo, making it memorable and engaging for viewers.",
    githubLink: "https://youtu.be/ip6xDm0wuGs?si=tUngcWZD_xzxQDWu",

    content: (
      <>
        <div className="h-full w-full object-cover relative flex items-center justify-center text-white">
          <img
            src={Zee5}
            width={300}
            height={300}
            className="h-full w-full object-cover shadow-md hover:scale-105 duration-500"
            alt="linear board demo"
            onClick={() =>
              window.open(
                "https://youtu.be/ip6xDm0wuGs?si=tUngcWZD_xzxQDWu",
                "_blank"
              )
            }
          />
        </div>
      </>
    ),
  },

  // No 10 Chief Minister 1 - Promo
  {
    title: " Chief Minister 1",
    subTitle: "- Promo",
    description:
      "I have done the promo music for the Chief Minister’s appearance on the show “Gupte Tithe Khupte,” crafting an engaging, upbeat track that highlights his charisma and connects with the audience. The music adds a lively, impactful vibe, making the promo feel energetic and memorable.",
    githubLink: "https://youtu.be/6Iz0cP1brsM?si=kiY50hW83SvbDior",

    content: (
      <>
        <div className="h-full w-full object-cover relative flex items-center justify-center text-white">
          <img
            src={Minister}
            width={300}
            height={300}
            className="h-full w-full object-cover shadow-md hover:scale-105 duration-500"
            alt="linear board demo"
            onClick={() =>
              window.open(
                "https://youtu.be/6Iz0cP1brsM?si=kiY50hW83SvbDior",
                "_blank"
              )
            }
          />
        </div>
      </>
    ),
  },

  // No 11 Promo work Drive - Promo
  {
    title: "Promos Drive Link",
    subTitle: "- Promo",
    description:
     "This Drive link contains all the promo music I’ve done till now — a collection of the tracks I’ve created for various brands, shows, and events, showcasing my range from upbeat promos to emotional themes.",
    githubLink:
      "https://drive.google.com/drive/folders/1hCkcYfgt_fg-UA_YHliHuLI5DmnfxvBQ",

    content: (
      <>
        <div className="h-full w-full object-cover relative flex items-center justify-center text-white">
          <img
            src={Promo}
            width={300}
            height={300}
            className="h-full w-full object-cover shadow-md hover:scale-105 duration-500"
            alt="linear board demo"
            onClick={() =>
              window.open(
                "https://drive.google.com/drive/folders/1hCkcYfgt_fg-UA_YHliHuLI5DmnfxvBQ",
                "_blank"
              )
            }
          />
        </div>
      </>
    ),
  },

  // No 14 Audio  - Audio Book
  {
    title: "Audios Drive Link",
    subTitle: "- Audio Book",
    description:
      "I crafted a user-friendly restaurant website with login/signup, table booking, and catering service reservations to simplify the dining experience for customers. Additionally, I've curated an engaging user experience by incorporating dynamic elements like interactive menus, enticing image galleries showcasing the restaurant's ambiance, and subtle animations throughout the site. The designed and implemented only the frontend of the restaurant website using HTML, CSS, and JavaScript.",
    githubLink:
      "https://drive.google.com/drive/folders/1yX1X7cSRUHqRHKd7I21xWjBvwDZgILWi",

    content: (
      <>
        <div className="h-full w-full object-cover relative flex items-center justify-center text-white">
          <img
            src={Audio}
            width={300}
            height={300}
            className="h-full w-full object-cover shadow-md hover:scale-105 duration-500"
            alt="linear board demo"
            onClick={() =>
              window.open(
                "https://drive.google.com/drive/folders/1yX1X7cSRUHqRHKd7I21xWjBvwDZgILWi",
                "_blank"
              )
            }
          />
        </div>
      </>
    ),
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

function ProjectShow() {
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
          Projects
        </h1>
        <p className="py-6 text-white">A Showcase of My Best Work</p>
      </motion.div>

      <StickyScroll content={content} />
    </div>
  );
}

export default ProjectShow;
