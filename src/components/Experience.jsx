import React from 'react';
import { BsBriefcaseFill } from 'react-icons/bs';

const Experience = () => {

  const experienceDetails = [
    {
      id: 1,
      title: 'Graduate Engineer Trainee - Coforge',
      date: 'Oct 2024 - Present',
      description: 'Assisted in the development of software applications, contributing to coding, testing, and debugging. Actively involved in documentation and version control processes. Gained hands-on experience with testings, enhancing technical skills and problem-solving abilities.',
    },
    {
      id: 2,
      title: 'Web Development Intern - Raise Digital, 1Stop (IIT Bombay)',
      date: 'Nov 2021 - Jan 2022',
      description: 'Contributed significantly to the development of "Advanced E-Commerce Website", enhancing user experience and functionality. Tech Stack: HTML, CSS, PHP, MySQL.',
    },
  ];

  return (
    <div name="Experience" className='pt-14 w-full h-auto text-white w-full h-full'>
      <div className='max-w-screen-lg max-h-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Experience</p>
        </div>
        <div className="flex flex-col gap-8">
          {experienceDetails.map((experience) => (
            <div key={experience.id} className="flex gap-4">
              <div className="mt-1 text-gray-400">
                <BsBriefcaseFill size={22} />
              </div>
              <div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{experience.date}</time>
                <h3 className="md:text-2xl font-semibold text-[#d4d4d8]">{experience.title}</h3>
                <p className="mb-4 text-base font-normal text-gray-500">{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
