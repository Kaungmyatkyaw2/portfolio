import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Teches from "./pages/Teches";
import img from "./assets/logo.png";
import { BsFacebook, BsInstagram, BsTelegram, BsTwitter } from "react-icons/bs";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

const App = () => {
  const state = useSelector((state) => state.intersection);

  return (
    <>
      <ToastContainer position="top-center" theme="dark" />
      <Navbar />
      <Home />
      <AboutMe />
      <Teches />
      <Projects />
      <Services />
      <div className="space-y-[20px] fixed top-[50%] left-[30px] translate-y-[-50%] blur-bg z-[999] lg:block hidden">
        <a
          href="#home"
          className={`w-[10px] block rounded-full h-[10px] border border-primary duration-100 cursor-pointer`}
        ></a>
        <a
          href="#about"
          className={`w-[10px] block rounded-full ${
            state.isAbout ? "h-[30px] bg-primary" : "h-[10px]"
          } border border-primary duration-100 cursor-pointer`}
        ></a>
        <a
          href="#work"
          className={`w-[10px] block rounded-full ${
            state.isProjects ? "h-[30px] bg-primary" : "h-[10px]"
          } border border-primary duration-100 cursor-pointer`}
        ></a>
        <a
          href="#contact"
          className={`w-[10px] block rounded-full ${
            state.isContact ? "h-[30px] bg-primary" : "h-[10px]"
          } border border-primary duration-100 cursor-pointer`}
        ></a>
      </div>
      <Contact />
      <div className="w-full toCenter z-[99] relative overflow-hidden">
        <div className="md:w-[85%] w-[90%] py-[10px] flex justify-between flex-wrap md:space-y-0 space-y-[20px]">
          <h1 className="tracking-widest text-[18px] flex items-center space-x-[10px] md:w-[33%] w-full">
            <img src={img} className="w-[35px]" alt="" />
            <span>KaungMyatKyaw</span>
          </h1>
          <div className="flex items-center justify-center space-x-[20px] text-[20px] md:w-[33%] w-full">
            <BsInstagram />
            <BsFacebook />
            <BsTwitter />
            <BsTelegram />
          </div>
          <div className="md:w-[33%] w-full flex justify-end text-[15px]">
            Copyright All Right Reserved
          </div>
        </div>
        <div className="absolute md:top-[-20px] sm:top-[20px] top-[90px] left-0 w-full h-full z-[-1]">
          <svg
            className="editorial w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 
                    58-18 88-18s
                    58 18 88 18 
                    58-18 88-18 
                    58 18 88 18
                    v44h-352z"
              />
            </defs>
            <g class="parallax">
              <use xlinkHref="#gentle-wave" x="50" y="0" fill="#2d7550" />
              <use xlinkHref="#gentle-wave" x="50" y="3" fill="#078c47" />
              <use xlinkHref="#gentle-wave" x="50" y="6" fill="#29704a" />
            </g>
          </svg>
        </div>
      </div>
    </>
  );
};

export default App;
