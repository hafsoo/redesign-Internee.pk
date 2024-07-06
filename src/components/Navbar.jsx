import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex justify-between items-center min-h-[15vh] w-full p-6 bg-white shadow-md'>
      <div className="logo min-h-[75%] overflow-hidden min-w-[30vw] cursor-pointer">
      <a href="/"><img src='src/assets/logo.webp' width={"200px"} alt="logo" /></a>
      </div>
      <div className="hidden md:flex justify-around items-center min-h-[75%] min-w-[35vw]">
        <ul className='flex justify-around items-center min-h-[75%] min-w-[35vw]'>
          <a href="/internships"><li className='font-bold hover:text-gray-400 cursor-pointer'>Internship</li></a>
          <a href="/reviews"><li className='font-bold hover:text-gray-400 cursor-pointer'>Company Reviews</li></a>
          <a href="/contact"><li className='font-bold hover:text-gray-400 cursor-pointer'>Contact Us</li></a>
        </ul>
        <div className="buttons flex gap-5">
          <button className='btn bg-green-400 hover:opacity-80 font-bold p-3 text-white cursor-pointer min-w-40'>Job Portal</button>
          <a href="/login"><button className='btn border-2 hover:opacity-80 border-green-400 font-bold p-3 text-green-400 cursor-pointer min-w-40'>Internee's Login</button></a>
        </div>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white flex flex-col items-center shadow-md md:hidden">
          <ul className='flex flex-col items-center w-full'>
            <a href="/internships"><li className='font-bold hover:text-gray-400 cursor-pointer py-2' onClick={toggleMenu}>Internship</li></a>
                <a href="/reviews"><li className='font-bold hover:text-gray-400 cursor-pointer py-2' onClick={toggleMenu}>Company Reviews</li></a>
                <a href="/contact"><li className='font-bold hover:text-gray-400 cursor-pointer py-2' onClick={toggleMenu}>Contact Us</li></a>
          </ul>
          <div className="buttons flex flex-col gap-3 py-3">
            <button className='btn bg-green-400 hover:opacity-80 font-bold p-3 text-white cursor-pointer min-w-40' onClick={toggleMenu}>Job Portal</button>
            <a href="/login"><button className='btn border-2 hover:opacity-80 border-green-400 font-bold p-3 text-green-400 cursor-pointer min-w-40' onClick={toggleMenu}>Internee's Login</button></a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

