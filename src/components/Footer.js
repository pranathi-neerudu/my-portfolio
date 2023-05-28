import React from 'react';
import { FaHeart } from 'react-icons/fa';

export default function Footer() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10 ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center">
        <p className="title-font font-medium text-white mb-4 md:mb-0 flex items-center">
          Made with <FaHeart className="ml-2" size={40} />
          &nbsp;
          using ReactJS 
          by Pranathi Neerudu
        </p>
      </div>
    </header>
  );
}
