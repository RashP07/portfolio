import React,{useEffect} from 'react'
import chat from '../assets/chatapp-pic.png'
import notion from '../assets/notionclonepic.png'
import github from '../assets/gitubpic.png'
import jobportal from '../assets/jobportalpic.png'
import texttospeech from '../assets/texttospecch-pic.png'
import portfoliopic from '../assets/portfoliopic.png'
import budget from '../assets/budgetpic1.JPG'
import yt from '../assets/ytsummarize.jpg'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Project = () => {
  useEffect(()=> {
    AOS.init({duration: 1000})
})
  const projectdetails = () =>[
     {
    id:11,
    description:'A Budget-Tracker webiste made using NextJs',
    code:"https://github.com/RashP07/budget-tracker",
    src:budget,
    },
      {
    id:12,
    description:'A youtube-summarizer webiste',
    code:"https://github.com/RashP07/youtube-summarizer",
    src:yt,
    },
    {
    id:13,
    description:'A Chat-App made using ReactJS and Firebase',
    code:"https://github.com/RashP07/chat-app",
    src:chat,
    },
    {
      id:14,
      description:'A Notion clone made using ReactJs, Tailwind CSS',
      code:"https://github.com/RashP07/notion-clone",
      src:notion,
      },
      {
        id:15,
        description:'A Job Portal website made using HTML, PHP and Mysql',
        code:"https://github.com/RashP07/Job-portal",
        src:jobportal,
        },
        {
          id:16,
          description:'A Github-explorer made using ReactJs and Tailwind CSS',
          code:"https://github.com/RashP07/github-explorer",
          src:github,
          },
          {
            id:17,
            description:'A text-to-speech converter made using HTML, CSS and Javascript',
            code:"https://github.com/RashP07/Text-To-Speech-Converter",
            src:texttospeech,
            },
            {
              id:18,
              description:'A portfolio website made using ReactJs and Taailwind CSS',
              code:"https://github.com/RashP07/portfolio",
              src:portfoliopic,
              }
   ]
  return (
    <div name='Project' className='pt-12 max-h-screen-lg w-full h-auto text-white '>
       <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Projects</p>
                    <p className='py-6 text-gray-500 '>Check out some of my work</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 px-12 gap-8 mb-20 sm:px-0 '>
              {projectdetails().map(({id,description,src,code}) => (
           <div key={id} data-aos="fade-in" data-aos-duration="500" className='shadow-md shadow-gray-600 rounded-lg'>
           <img src={src} alt='' className='rounded-md h-48 mx-auto'/>
           <p className='p-2 text-justify'>{description} </p>
           <div className='flex items-center justify-center'>
                  <button  className='w-1/2 bg-[#505052] px-6 py-3 m-4 duration-200 hover:scale-105 rounded-md'>
                    <a href={code}>Code</a>
                  </button>
          </div>
           </div>
              ))}
                </div>
                </div>
    </div>
  )
}

export default Project
