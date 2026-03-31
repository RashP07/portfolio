import React from 'react'
import { SiGmail } from "react-icons/si";
import { BsGithub,BsLinkedin } from 'react-icons/bs'
import { SiLeetcode} from "react-icons/si";

const Footer = () => {
  return (
   <div className='flex w-full flex-col md:flex-row justify-between items-center px-4 bg-black text-white pb-3'>
    <div className='flex flex-row'>
      <p className='md:ml-14 pt-2'>Designed & developed by Rashmita</p>
    </div>
    <div className='pt-2 flex flex-row gap-4 md:gap-9 md:px-14'>
    <a target='_blank' rel='noreferrer' href="mailto:rashmitaparmanik9876@gmail.com" className='group hover:scale-105 rounded w-auto bg-none cursor-pointer' >

<span >
<SiGmail size={20}/>
</span>
</a>

<a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/rashmita-parmanik-7b3346221/" className='group hover:scale-105 rounded w-auto bg-none cursor-pointer' >

<span >
<BsLinkedin size={20}></BsLinkedin>
</span>
</a>
<a target='_blank' rel='noreferrer' href="https://github.com/RashP07" className='group hover:scale-105 rounded w-auto bg-none cursor-pointer' >

<span >
<BsGithub size={20}></BsGithub>
</span>
</a>
<a target='_blank' rel='noreferrer' href="https://leetcode.com/rashmita_20/" className='group hover:scale-105 rounded w-auto bg-none cursor-pointer' >

<span >
<SiLeetcode size={20}></SiLeetcode>
</span>
</a>
    </div>
   </div>
  )
}

export default Footer
