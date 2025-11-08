import React, { useState } from 'react';
// Import icons for the hamburger menu
import { FaBars, FaTimes } from 'react-icons/fa';

// --- 1. Navigation Component ---
export default function Navbar() {
  // State to track if the mobile menu is open or closed
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
  {/* --- Logo (Left Aligned) --- */}
  <a
    href="#title"
    className="text-2xl font-bold hover:text-yellow-400 transition-colors duration-300"
    onClick={() => setIsOpen(false)}
  >
    archivedbyaqil
  </a>

  {/* --- Desktop Navigation Links (Right Aligned) --- */}
  <ul className="hidden md:flex items-center space-x-8">
    <li>
      <a href="#about" className="text-lg font-medium hover:text-yellow-400 transition-colors duration-300">
        About
      </a>
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

  {/* --- Mobile Hamburger Button (Right Corner) --- */}
  <button
    className="md:hidden text-2xl text-white"
    onClick={() => setIsOpen(!isOpen)}
  >
    {isOpen ? <FaTimes /> : <FaBars />}
  </button>
</nav>

      {/* --- Mobile Menu Overlay --- */}
      {/* This is the full-screen menu that slides in from the right.
        - 'fixed' covers the whole screen.
        - 'z-40' puts it just behind the main navbar (which is z-50).
        - 'transform' + 'transition-transform' creates the slide animation.
        - The ternary operator moves it on/off screen:
          - isOpen ? 'translate-x-0' : 'translate-x-full'
      */}
      <div 
        className={`fixed inset-0 w-full h-screen bg-black/95 backdrop-blur-lg z-40
                    flex flex-col justify-center items-center 
                    transform transition-transform duration-300 ease-in-out
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <ul className="flex flex-col items-center space-y-10">
          <li>
            <a 
              href="#about" 
              className="text-4xl font-medium hover:text-yellow-400 transition-colors"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className="text-4xl font-medium hover:text-yellow-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className="text-4xl font-medium hover:text-yellow-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#connect" 
              className="text-4xl font-medium hover:text-yellow-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};