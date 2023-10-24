import {
  SiBootstrap,
  SiFirebase,
  SiNestjs,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import PJCard from "../components/PJCard";
import p1 from "./../assets/netflix.png";
import p2 from "./../assets/pj2.png";
import p3 from "./../assets/pj3.png";
import p4 from "./../assets/pj4.png";
import useSetInview from "../helper/useSetInview";

const Projects = () => {
  const ref = useSetInview("isProjects");
  const pjs = [
    {
      img: p1,
      title: "Netflix Clone",
      tech: [
        {
          components: SiTailwindcss,
          color: "text-[#7C12F8]",
        },
        {
          components: SiNextdotjs,
          color: "text-[#fff]",
        },
        {
          components: SiFirebase,
          color: "text-[#FFCA28]",
        },
        {
          components: SiRedux,
          color: "text-[#764ABC]",
        },
      ],
      link: [
        "https://github.com/Kaungmyatkyaw2/personal-portfolio.git",
        "https://github.com/Kaungmyatkyaw2/netflix-clone",
      ],
    },
    {
      img: p2,
      title: "Facebook Clone",
      tech: [
        {
          components: SiTailwindcss,
          color: "text-[#07B0CE]",
        },
        {
          components: SiReact,
          color: "text-[#61dbfb]",
        },
        {
          components: SiFirebase,
          color: "text-[#FFCA28]",
        },
        {
          components: SiRedux,
          color: "text-[#764ABC]",
        },
      ],
      link: [
        "https://facefook.netlify.app",
        "https://github.com/Kaungmyatkyaw2/react-firebase-socialMedia.git",
      ],
    },
    {
      img: p3,
      title: "Bootstrap Booking Themed",
      tech: [
        {
          components: SiTailwindcss,
          color: "text-[#07B0CE]",
        },
        {
          components: SiReact,
          color: "text-[#61dbfb]",
        },
        {
          components: SiRedux,
          color: "text-[#764ABC]",
        },
      ],
      link: [
        "https://booking-webstica.netlify.app",
        "https://github.com/Kaungmyatkyaw2/booking-webstica-themed.git",
      ],
    },
    {
      img: p4,
      title: "Live View Crypto Currency",
      tech: [
        {
          components: SiTailwindcss,
          color: "text-[#07B0CE]",
        },
        {
          components: SiReact,
          color: "text-[#61dbfb]",
        },
        {
          components: SiRedux,
          color: "text-[#764ABC]",
        },
      ],
      link: [
        "https://view-crypto.netlify.app",
        'https://github.com/Kaungmyatkyaw2/crypto-api.git'
      ],
    },
  ];

  return (
    <div
      className="w-full min-h-[100vh] toCenter bg-black py-[100px]"
      id="work"
    >
      <div className="md:w-[75%] w-[90%]">
        <div className="toCenter">
          <h1 className="title">Featured Projects</h1>
        </div>
        <div className="flex flex-wrap justify-around mt-[20px]" ref={ref}>
          {pjs.map((i, index) => (
            <PJCard pj={i} key={index} index={index} />
          ))}
        </div>
        <div className="toCenter">
          <a
            href="https://github.com/Kaungmyatkyaw2"
            className="text-gray-300 mt-[50px]"
          >
            Expolre more projects on{" "}
            <span className="text-primary">github</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
