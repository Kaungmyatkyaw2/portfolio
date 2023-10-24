import { useState } from "react"
import { useSelector } from "react-redux";

const Navbar = () => {

    const [show,setShow] = useState(false);
    const state = useSelector((state) => state.intersection);

    console.log(state)


  return (
    <div className='w-full toCenter fixed top-0 left-0 z-[999] blur-bg'>
        <div className='md:w-[85%] w-[90%] md:py-[20px] py-[10px] text-white toCenter  !justify-between z-[100]'>
            <h1 className='tracking-widest text-[22px]'>
                KaungMyatKyaw<span className='text-primary'>.dev</span>
            </h1>
            <div className={`w-[50%] h-[100vh] bg-black absolute top-0 left-0 z-[-2] duration-200 ease-linear md:hidden ${show ? 'translate-y-[0%] delay-150' : 'translate-y-[-100%] delay-150'}`}></div>
            <div className={`w-[50%] h-[100vh] bg-black absolute top-0 right-0 z-[-2] duration-200 ease-linear md:hidden ${show ? 'translate-y-[0%] delay-300' : 'translate-y-[-100%] delay-300'}`}></div>
            <ul className={`flex md:flex-row flex-col items-center md:justify-start justify-center md:static fixed md:w-auto w-full md:h-auto h-[100vh] md:bg-transparent top-0 md:translate-y-0 ${show ? 'translate-y-0 delay-300' : 'translate-y-[-100%]'} left-0 md:space-x-[40px] md:space-y-0 space-y-[20px] text-[15px] duration-300`}>
                <a onClick={() => setShow(false)} href="#home" className={`${state.isHome && 'text-primary'}`}>Home</a>
                <a onClick={() => setShow(false)} className={`${state.isAbout && 'text-primary'}`} href="#about">Who Am I?</a>
                <a onClick={() => setShow(false)} className={`${state.isProjects && 'text-primary'}`} href="#work">My works</a>
                <a onClick={() => setShow(false)} className={`${state.isContact && 'text-primary'}`} href="#contact">Contact</a>
            </ul>

            <div className="md:hidden block" onClick={_ => setShow(!show)}>
            <button class="relative group">
                <div class="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all duration-200 shadow-md">
                <div class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                    <div class={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${show && 'rotate-[42deg]'}`}></div>
                    <div class={`bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 ${show && '-translate-x-10'}`}></div>
                    <div class={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${show && '-rotate-[42deg]'}`}></div>
                </div>
                </div>
            </button>
            </div>

        </div>
    </div>
    )
}

export default Navbar