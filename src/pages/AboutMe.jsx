import me from "../assets/me.jpg";
import Dots from "../components/Dots";
import { BsArrowDown } from "react-icons/bs";
import useSetInview from "../helper/useSetInview";
import File from './../assets/Kaung.pdf'

const AboutMe = () => {
  const ref = useSetInview("isAbout");

  return (
    <div
      id="about"
      className="min-h-[100vh] toCenter md:mt-[30px] md:py-[30px] py-[70px] bg-black "
    >
      <div
        ref={ref}
        className="md:w-[85%] w-[90%] md:space-y-[90px] space-y-[70px]"
      >
        <div className="w-full toCenter">
          <h1 className="title">Who am I ?</h1>
        </div>
        <div className="flex flex-wrap md:space-y-0 space-y-[50px]">
          <div className="md:w-[50%] w-full toCenter relative">
            <img
              src={me}
              className="h-[300px] md:w-[300px] w-[300px] rounded-[10px] shadow-lg object-cover z-[2] relative"
            ></img>
            <div>
              <div>
                <Dots className="fill-white opacity-75 absolute md:bottom-0 bottom-[-20%] right-[10%] z-[1] sm:block hidden" />
              </div>
            </div>
          </div>
          <div className="md:w-[50%] w-full">
            <h1 className="tracking-wide text-[20px] text-white font-bold">
              This is me Kaung Myat Kyaw !
            </h1>
            <div className="mt-[40px]">
              <h1 className="ul-header pb-[7px]">Who am I ?</h1>
              <p className="text-justify text-gray-300">
                I am 16 years old. But I have learned web development since
                2019. I want to be a software engineer and learn knowledge
                engineering in the future. I have done many projects with
                Bootstrap, Tailwind, and React. Here is some project I have
                done. You can see more projects from my GitHub account.
              </p>
            </div>
            <div className="mt-[20px]">
              <h1 className="ul-header pb-[7px]">Certified At</h1>
              <div className="text-[15px] space-y-[10px] text-gray-300">
                <li>MMSIT SWD Course</li>
                <li>Angela Yu React Js</li>
                <li>MMSIT Intern Workshop</li>
              </div>
            </div>
            <button className="border-btn toCenter space-x-[10px] group mt-[30px]">
              <a href={File} download>Download CV </a>
              <BsArrowDown className="group-hover:translate-y-[-15%] group-hover:text-primary duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
