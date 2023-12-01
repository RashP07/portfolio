import React, { useEffect } from 'react';

const Education = () => {

  const educationDetails = [
    {
      id: 1,
      title: 'Bachelor of Technology (Computer Science and Engineering)',
      date: '2020-2024',
      location: 'ITER, Siksha ‘O’ Anusandhan University, Bhubaneswar, Odisha, India',
    },
    {
      id: 2,
      title: 'Class 12th Science',
      date: '2018-2020',
      location: 'Ravenshaw Higher Secondary School, Odisha',
    },
    {
      id: 3,
      title: 'Class 10th',
      date: '2018',
      location: 'Saraswati Vidya Mandir, Cuttack, Odisha',
    },
  ];

  return (
    <div name="Education" className='pt-14 w-full h-auto bg-gradient-to-b from-black to-gray-800  text-white
    w-full h-full'>
      <div className='max-w-screen-lg max-h-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Education</p>
          </div>
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {educationDetails.map((education) => (
            <li key={education.id} className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{education.date}</time>
              <h3 className="md:text-2xl font-semibold text-gray-100 dark:text-white">{education.title}</h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{education.location}</p>
                </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Education;




