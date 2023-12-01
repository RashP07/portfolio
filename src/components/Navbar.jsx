import React, { useState } from 'react';
import { Link } from "react-scroll";
import { FaBars, FaTimes } from 'react-icons/fa'
const navLinksdata = [
  {
    id: 1,
    title: "Home",
    link: "Home",
  },
  {
    id: 2,
    title: "About",
    link: "About",
  },
  {
    id: 3,
    title: "Education",
    link: "Education",
  },
   {
    id: 4,
    title: "Skills",
    link: "Skills",
  },
  {
  id: 5,
  title: "Project",
  link: "Project",
},

];
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);



  return (
    <div className='flex justify-between items-center text-white w-full h-20 px-4 bg-gradient-to-b from-gray-800 to-black'>
      <div className='flex flex-row gap-1'>
        <h2 className='text-2xl text-gray-200 ml-4'>
          Rashmita
        </h2>
      </div>
      <div className='hidden md:flex'>
      {navLinksdata.map(({ id, title, link }) => (
            
            <a key={id} className='px-4 cursor-pointer font-medium text-gray-200 hover:scale-105 duration-200'>
            
             <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
              
            </a>
           ))}
      </div>

{/**mobile device */}
          <div onClick={() => setShowMenu(!showMenu)} className='md:hidden cursor-pointer pr-4 z-60'>
                {showMenu ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
          {showMenu && (
        <div className="flex z-50 flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-200 md:hidden">
            <Link smooth={true} duration={500} spy={true} exact='true' offset={-80} className='absolute m-6 top-0 right-0 cursor-pointer' onClick={() => setShowMenu(!showMenu)} to="Home">
                            <FaTimes size={30} />
                        </Link> 
          <div className="container flex flex-col items-center mx-auto py-2 space-y-2">
          {navLinksdata.map(({ id,title, link }) => (
                            <a className='px-4 cursor-pointer capitalize py-6 text-4xl '>
                                <Link onClick={() => setShowMenu(!showMenu)} to={link} smooth={true} duration={500} spy={true} exact='true' offset={-80}>{title}</Link>
                            </a>
                        ))}
          </div>
        </div>
      )}
    </div>

  );
};

export default Navbar;
