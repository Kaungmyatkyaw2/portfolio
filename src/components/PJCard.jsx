import { BsCode, BsEye } from "react-icons/bs";

const PJCard = ({ pj, index }) => {
  return (
    <div className="md:w-[45%] w-full rounded-[10px] border border-gray-900 overflow-hidden bg-[#0A0A0A] shadow-lg mt-[50px]">
      <div className="w-full overflow-hidden relative group">
        <img
          src={pj.img}
          alt=""
          className="group-hover:scale-110 duration-300 cursor-pointer"
        />
        <a
          href={pj?.link?.[0]}
          className="absolute top-0 left-0 z-[998] flex items-center w-[50%] h-full toCenter bg-black bg-opacity-80 translate-y-[-100%] group-hover:translate-y-0 duration-300 cursor-pointer hover:text-primary space-x-[10px]"
        >
          <p className="font-bold text-[18px]">Demo</p>
          <BsEye className="text-[18px]" />
        </a>
        <a
          href={pj?.link?.[1]}
          className="absolute top-0 right-0 z-[998] flex items-center w-[50%] h-full toCenter bg-black bg-opacity-80 translate-y-[100%] group-hover:translate-y-0 duration-300 cursor-pointer hover:text-primary space-x-[10px]"
        >
          <p className="font-bold text-[18px]">Code</p>
          <BsCode className="text-[20px]" />
        </a>
      </div>
      <div className="py-[30px] px-[20px]">
        <h1 className="text-primary font-medium text-[20px] pb-[10px]">
          {pj.title}
        </h1>
        <div className="flex items-center space-x-[20px] text-[25px]">
          <span className="font-bold text-[16px]">Tech </span> <span>-</span>
          {pj.tech.map((i, index) => (
            <i.components key={index} className={i.color} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PJCard;
