import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* --- Main Navigation Bar --- */}
      <nav
        className="fixed top-6 left-1/2 -translate-x-1/2
                   flex items-center justify-between
                   bg-black/70 backdrop-blur-lg text-white
                   px-6 md:px-10 py-3 md:py-4
                   rounded-full shadow-lg border border-gray-800
                   z-50 w-[90%] max-w-5xl"
      >
        {/* Logo (Left Aligned) */}
        <h1
          href="#title"
          className="text-2xl font-bold hover:text-yellow-400 transition-colors duration-300"
          onClick={() => setIsOpen(false)}
        >
          archivedbyaqil
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <h1 href="#about" className="text-lg font-medium hover:text-yellow-400 transition-colors duration-300">
              About
            </h1>
          </li>
          <li>
            <a href="#resume" className="text-lg font-medium hover:text-yellow-400 transition-colors duration-300">
              Resume
            </a>
          </li>
          <li>
            <a href="#projects" className="text-lg font-medium hover:text-yellow-400 transition-colors duration-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#connect" className="text-lg font-medium hover:text-yellow-400 transition-colors duration-300">
              Contact
            </a>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* --- Mobile Menu Overlay --- */}
      <div
        className={`fixed inset-0 w-full h-screen bg-black/70 backdrop-blur-lg 
                    flex flex-col justify-center items-center 
                    transform transition-transform duration-300 ease-in-out
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}
                    z-[60]`}  // 👈 raise z-index above navbar
      >
        <ul className="flex flex-col items-center space-y-10 animate-fadeIn">
          <li>
            <a
              href="#about"
              className="text-4xl text-white font-medium hover:text-yellow-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#resume" // 👈 corrected
              className="text-4xl text-white font-medium hover:text-yellow-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-4xl text-white font-medium hover:text-yellow-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#connect"
              className="text-4xl text-white font-medium hover:text-yellow-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
