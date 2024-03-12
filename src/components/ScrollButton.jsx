
import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      setVisible(scrolled > 400);
    };

    window.addEventListener('scroll', toggleVisible);

    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div
    className="fixed bottom-20 md:bottom-16 right-2 md:right-10 z-50"
    onClick={scrollToTop}
    style={{ display: visible ? 'block' : 'none' }}
  >
    <FaArrowCircleUp className="text-gray-500 text-4xl cursor-pointer" />
  </div>
  );
};

export default ScrollButton;
