import React from 'react';

// --- 1. Navigation Component ---
// This corresponds to your <nav> section
export default function Navbar() {
  return (
    <nav 
      className="bg-black/70 backdrop-blur-lg text-white p-6 md:p-8 
                 flex justify-between items-center fixed w-full top-0 z-50 
                 border-b border-gray-900" // Added a subtle bottom border
    >
      {/* Logo */}
      <a 
        href="#title" // Assuming your top "Greeting" section has id="title"
        className="text-3xl font-bold hover:text-yellow-400 transition-colors duration-300"
      >
        a!
      </a>
      
      {/* Navigation Links */}
      <ul className="flex space-x-6 md:space-x-10">
        <li>
          <a 
            href="#about" // Add an id="about" to your About section
            className="text-lg font-medium hover:text-yellow-400 transition-colors duration-300"
          >
            About
          </a>
        </li>
        <li>
          <a 
            href="#about" // Points to the LogoScroll or Experience section
            className="text-lg font-medium hover:text-yellow-400 transition-colors duration-300"
          >
            Resume
          </a>
        </li>
        <li>
          <a 
            href="#projects" // Points to your Projects section
            className="text-lg font-medium hover:text-yellow-400 transition-colors duration-300"
          >
            Projects
          </a>
        </li>
        <li>
          <a 
            href="#connect" // Points to your Connect section
            className="text-lg font-medium hover:text-yellow-400 transition-colors duration-300"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};