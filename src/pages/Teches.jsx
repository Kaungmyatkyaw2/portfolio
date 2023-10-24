import {
  SiBootstrap,
  SiFirebase,
  SiGit,
  SiJavascript,
  SiReact,
  SiRedux,
  SiSass,
  SiTailwindcss,
} from "react-icons/si";

const Teches = () => {
  const img = [
    <SiJavascript className="text-yellow-400" />,
    <SiReact className="text-[#61dbfb]" />,
    <SiSass className="text-[#CD6799]" />,
    <SiBootstrap className="text-[#7C12F8]" />,
    <SiTailwindcss className="text-[#07B0CE]" />,
    <SiRedux className="text-[#764ABC]" />,
    <SiFirebase className="text-[#FFCA28]" />,
    <SiGit className="text-[#DE4C36]" />,
  ];
  return (
    <div className="w-full flex justify-center py-[90px]">
      <div className="md:w-[85%] w-[90%] flex flex-col md:items-start items-center">
        <h1 className="short-section-title">Technologies</h1>
        <div className="w-full flex lg:flex-nowrap flex-wrap md:justify-between justify-center md:ml-0 ml-[-50px]">
          {img.map((i, index) => (
            <div
              className="text-[60px] mt-[30px] md:ml-0 ml-[50px] cursor-pointer"
              key={index}
            >
              {i}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teches;
