import React, { useEffect } from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import nodejs from '../assets/nodejs.png'
import php from '../assets/php.png'
import firebase from '../assets/firebase.png'
import python from '../assets/python.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Skills = () => {
    useEffect(() => {
     AOS.init({ duration: 1000 })
    })

    const techs = () => [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JAVASCRIPT',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
           src: react,
            title: 'REACT',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
           src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-500'
        },
        {
            id: 6,
            src: nodejs,
            title: 'Node JS',
            style: 'shadow-green-500'
        },
        {
            id: 7,
           src: php,
            title: 'PHP',
            style: 'shadow-cyan-800'
        },
        {
            id: 8,
            src: firebase,
            title: 'Firebase',
            style: 'shadow-yellow-800'
        },
        {
            id: 9,
            src: python,
            title: 'Python',
            style: 'shadow-blue-400'
        }
    ]

    return (
        <div name="Skills" className='pt-12 w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white w-full h-full'>
   
            <div className='max-w-screen-lg max-h-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Skills</p>
                    <p className='py-6'>These are the technologies I've worked with</p>
                </div>

                <div className='w-full h-full grid grid-cols-2 text-center sm:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        techs().map(({ id, src, title, style }) => (

                            <div data-aos="zoom-in" data-aos-duration="500" key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img src={src} alt="" className='w-20 mx-auto' />
                                <p className='mt-4'>{title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills