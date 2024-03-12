import React from "react";
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import { Link } from 'react-scroll'
import { HiOutlineMail } from 'react-icons/hi'
import { BsGithub,BsLinkedin } from 'react-icons/bs'
import { SiLeetcode} from "react-icons/si";

const Home = () => {
  return (
      <div name="Home" className="h-auto flex pt-12 w-full relative text-white w-full">
        <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4  text-white">
       <div className="pt-14 ">
        <h2 className='text-4xl sm:text-6xl pb-8 font-bold'>Hello,👋 </h2>
        <span className=' animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black'>I'm Rashmita Parmanik</span>
       
        <p className="pt-9 text-[#a2a2a2] text-lg mb-8">
    🚀 Welcome to my digital universe! As a passionate creator, I transform ideas into captivating digital experiences. Beyond the lines of code, I'm fueled by curiosity, creativity, and the boundless possibilities of technology. Let's embark on a journey to craft something extraordinary together! 🌟
      </p>

             <div className="mt-5 flex flex-row gap-2">
             <Link to="Project" className='bg-[#505052] group rounded w-1/3 h-10 flex items-center justify-center cursor-pointer mt-5 mb-28' >Portfolio

                            <span className='px-2 group-hover:rotate-90 duration-300'>
                                <MdOutlineArrowRightAlt size={25} />
                            </span>
                        </Link>
                        <a target='_blank' href="mailto:rashmitaparmanik9876@gmail.com"  className='group hover:scale-105 rounded w-auto h-10 p-3 flex items-center bg-[#505052] justify-center cursor-pointer mt-5 mb-28' >

                            <span className='pr-2'>
                                <HiOutlineMail size={25} />
                            </span>
                            Hire Me
                        </a>
                        <a target='_blank' href="https://www.linkedin.com/in/rashmita-parmanik-7b3346221/" className=' group hover:scale-105 rounded w-auto h-10 py-4 px-2 flex items-center bg-none justify-center cursor-pointer mt-5 mb-28' >

                            <span >
                            <BsLinkedin size={25} ></BsLinkedin>
                            </span>
                        </a>
                        <a target='_blank' href="https://github.com/RashP07"  className='group hover:scale-105 rounded w-auto h-10 px-1 flex items-center bg-none justify-center cursor-pointer mt-5 mb-28' >

                            <span >
                            <BsGithub size={25}></BsGithub>
                            </span>
                        </a>
                        <a target='_blank' href="https://leetcode.com/rashmita_20/" className='group hover:scale-105 rounded w-auto h-10 px-1 flex items-center bg-none justify-center cursor-pointer mt-5 mb-28' >

                            <span >
                            <SiLeetcode size={28}></SiLeetcode>
                            </span>
                        </a>
             </div>
             
             </div>             
        </div>
    </div>
   );
};

export default Home;
