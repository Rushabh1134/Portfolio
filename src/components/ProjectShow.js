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

const content = [
  // No 1 Aazam - Movie
  {
    title: "Aazam",
    subTitle: "- Movie",
    description:
      "I contributed to developing a dynamic E-commerce website focused on clothing, improving user experience with features like userfriendly product browsing, secure payment gateways, personalized user accounts. Additionally, I implemented an intuitive admin panel for streamlined management of product listings, inventory tracking, and order fulfillment. Leveraging my expertise in React.js, JavaScript, Tailwind CSS, Node.js, Express.js, MongoDB, and Mongoose, I optimized the website's performance and enhanced its functionality. ",
    githubLink: "https://youtu.be/qVkMaH6D8Sg?si=k2HrfwtrIX7SZt9p",
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
      "I have proficiently developed a robust User Management API with comprehensive Authentication and Authorization functionalities, encompassing user registration, login, user profile management, and OTP-based login. Additionally, the API includes email confirmation with OTP upon user signup. Notably, I also designed and implemented an Admin panel, restricting access to authorized personnel for viewing and updating user data. Leveraging my expertise in React.js, JavaScript, Tailwind CSS, Node.js, Express.js, MongoDB, and Mongoose, I successfully executed this project, showcasing my adeptness in full-stack web development.",
    githubLink: "https://youtu.be/x5_nP5AKSgw?si=N2i65OehEcrz6Lsx",

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
      "I contributed to developing a dynamic E-commerce website focused on clothing, improving user experience with features like userfriendly product browsing, secure payment gateways, personalized user accounts. Additionally, I implemented an intuitive admin panel for streamlined management of product listings, inventory tracking, and order fulfillment. Leveraging my expertise in React.js, JavaScript, Tailwind CSS, Node.js, Express.js, MongoDB, and Mongoose, I optimized the website's performance and enhanced its functionality. ",
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
    githubLink: "",

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
      "I crafted a user-friendly restaurant website with login/signup, table booking, and catering service reservations to simplify the dining experience for customers. Additionally, I've curated an engaging user experience by incorporating dynamic elements like interactive menus, enticing image galleries showcasing the restaurant's ambiance, and subtle animations throughout the site. The designed and implemented only the frontend of the restaurant website using HTML, CSS, and JavaScript.",
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
      "I crafted a user-friendly restaurant website with login/signup, table booking, and catering service reservations to simplify the dining experience for customers. Additionally, I've curated an engaging user experience by incorporating dynamic elements like interactive menus, enticing image galleries showcasing the restaurant's ambiance, and subtle animations throughout the site. The designed and implemented only the frontend of the restaurant website using HTML, CSS, and JavaScript.",
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
      "I crafted a user-friendly restaurant website with login/signup, table booking, and catering service reservations to simplify the dining experience for customers. Additionally, I've curated an engaging user experience by incorporating dynamic elements like interactive menus, enticing image galleries showcasing the restaurant's ambiance, and subtle animations throughout the site. The designed and implemented only the frontend of the restaurant website using HTML, CSS, and JavaScript.",
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
      "I crafted a user-friendly restaurant website with login/signup, table booking, and catering service reservations to simplify the dining experience for customers. Additionally, I've curated an engaging user experience by incorporating dynamic elements like interactive menus, enticing image galleries showcasing the restaurant's ambiance, and subtle animations throughout the site. The designed and implemented only the frontend of the restaurant website using HTML, CSS, and JavaScript.",
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
      "I crafted a user-friendly restaurant website with login/signup, table booking, and catering service reservations to simplify the dining experience for customers. Additionally, I've curated an engaging user experience by incorporating dynamic elements like interactive menus, enticing image galleries showcasing the restaurant's ambiance, and subtle animations throughout the site. The designed and implemented only the frontend of the restaurant website using HTML, CSS, and JavaScript.",
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
      "I crafted a user-friendly restaurant website with login/signup, table booking, and catering service reservations to simplify the dining experience for customers. Additionally, I've curated an engaging user experience by incorporating dynamic elements like interactive menus, enticing image galleries showcasing the restaurant's ambiance, and subtle animations throughout the site. The designed and implemented only the frontend of the restaurant website using HTML, CSS, and JavaScript.",
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
      "I crafted a user-friendly restaurant website with login/signup, table booking, and catering service reservations to simplify the dining experience for customers. Additionally, I've curated an engaging user experience by incorporating dynamic elements like interactive menus, enticing image galleries showcasing the restaurant's ambiance, and subtle animations throughout the site. The designed and implemented only the frontend of the restaurant website using HTML, CSS, and JavaScript.",
    githubLink: "https://youtu.be/eJehs2MXrY0?si=KDigC-DVHwPjaVZQ",

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
      "I crafted a user-friendly restaurant website with login/signup, table booking, and catering service reservations to simplify the dining experience for customers. Additionally, I've curated an engaging user experience by incorporating dynamic elements like interactive menus, enticing image galleries showcasing the restaurant's ambiance, and subtle animations throughout the site. The designed and implemented only the frontend of the restaurant website using HTML, CSS, and JavaScript.",
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
      "I crafted a user-friendly restaurant website with login/signup, table booking, and catering service reservations to simplify the dining experience for customers. Additionally, I've curated an engaging user experience by incorporating dynamic elements like interactive menus, enticing image galleries showcasing the restaurant's ambiance, and subtle animations throughout the site. The designed and implemented only the frontend of the restaurant website using HTML, CSS, and JavaScript.",
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
      "I crafted a user-friendly restaurant website with login/signup, table booking, and catering service reservations to simplify the dining experience for customers. Additionally, I've curated an engaging user experience by incorporating dynamic elements like interactive menus, enticing image galleries showcasing the restaurant's ambiance, and subtle animations throughout the site. The designed and implemented only the frontend of the restaurant website using HTML, CSS, and JavaScript.",
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
      "I crafted a user-friendly restaurant website with login/signup, table booking, and catering service reservations to simplify the dining experience for customers. Additionally, I've curated an engaging user experience by incorporating dynamic elements like interactive menus, enticing image galleries showcasing the restaurant's ambiance, and subtle animations throughout the site. The designed and implemented only the frontend of the restaurant website using HTML, CSS, and JavaScript.",
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
