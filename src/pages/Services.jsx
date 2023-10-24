import paint from "../assets/animation/paint.json";
import frontend from "../assets/animation/frontend.json";
import backend from "../assets/animation/backend.json";
import Lottie from "lottie-react";
const Services = () => {
  return (
    <div className="toCenter">
      <div className="md:w-[85%] w-[90%] py-[60px]">
        <div className="w-full flex justify-center">
          <h1 className="short-section-title relative">What I Provide ?</h1>
        </div>

        <div className="flex sm:flex-row flex-col sm:justify-evenly items-center w-full pt-[40px] sm:space-y-0 space-y-[40px]">
          <div className="sm:w-[33%] w-full flex flex-col items-center">
            <div className="w-[70px]">
              <Lottie animationData={paint} autoPlay={false} loop></Lottie>
            </div>
            <h1 className="text-[17px] pt-[10px]">Web Design</h1>
          </div>
          <div className="sm:w-[33%] w-full flex flex-col items-center">
            <div className="w-[70px]">
              <Lottie animationData={frontend} autoPlay={false} loop></Lottie>
            </div>
            <h1 className="text-[17px] pt-[10px]">Frontend Development</h1>
          </div>
          <div className="sm:w-[33%] w-full flex flex-col items-center">
            <div className="w-[70px]">
              <Lottie animationData={backend} autoPlay={false} loop></Lottie>
            </div>
            <h1 className="text-[17px] pt-[10px]">Backend Development</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
