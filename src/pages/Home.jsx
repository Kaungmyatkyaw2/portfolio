import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch } from "react-redux";
import { setSection } from "../store/intersection/IntersectionSlicer";
import { motion } from "framer-motion";

const Home = () => {
  const dispatch = useDispatch();
  const { ref, inView } = useInView();

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const variants = {
    initial: {
      opacity: 0,
      y: -10,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
      },
    },
  };

  useEffect(() => {
    dispatch(setSection({ key: "isHome", value: inView }));
  }, [inView]);

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="w-full flex justify-center relative bg-jar"
      id="home"
      ref={ref}
    >
      <div className="md:w-[75%] w-[90%] min-h-[100vh] relative flex flex-col justify-center">
        <motion.p variants={variants} className="text-[15px]">
          Hello 👋
        </motion.p>
        <motion.h1
          variants={variants}
          className="md:text-[54px] sm:text-[45px] text-[35px] pb-[25px] pt-[15px] font-medium"
        >
          I'm Kaung Myat Kyaw
        </motion.h1>
        <motion.p
          variants={variants}
          className="md:w-[80%] w-[95%] md:text-[17px] text-gray-300"
        >
          I am a Frond End Developer who loves to make modern website in right
          way. I am passionate about writing codes and developing web
          applications to solve real-life challenges. I usually craft front-end
          with React, Restful Api.
        </motion.p>
        <motion.a
          variants={variants}
          href="#about"
          className="sm:flex hidden w-full justify-center absolute bottom-[0px] left-0 text-primary animate-bounce"
        >
          <div className="w-fit cursor-pointer flex flex-col items-center">
            <span>Scroll</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="fill-primary"
            >
              <path d="M11.975 22H12c3.859 0 7-3.14 7-7V9c0-3.841-3.127-6.974-6.981-7h-.06C8.119 2.022 5 5.157 5 9v6c0 3.86 3.129 7 6.975 7zM7 9a5.007 5.007 0 0 1 4.985-5C14.75 4.006 17 6.249 17 9v6c0 2.757-2.243 5-5 5h-.025C9.186 20 7 17.804 7 15V9z"></path>
              <path d="M11 6h2v6h-2z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="fill-primary"
            >
              <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
            </svg>
          </div>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Home;
