import React from 'react';
// Make sure to import your portfolio data to get the resume link
import { greeting } from '../../portfolio';

// --- 3. About Component ---
// This corresponds to your "About" section
export default function About() {
  
  return (
    <section 
      id="about" 
      className="bg-black text-white p-6 md:p-16 lg:p-24 
                 min-h-screen flex items-center" // Vertically center content
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-12 lg:gap-20">
        
        {/* Profile Image */}
        <div className="flex-shrink-0 mt-8 md:mt-0">
          <img 
            src={"headshot.jpg"} // Assumes this is in your /public folder
            alt="Portrait"
            className="w-56 h-56 md:w-80 md:h-80 rounded-full object-cover 
                       border-4 border-yellow-500 shadow-2xl
                       transform transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8
                       text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600"
          >
            About Me
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-10">
            I'm a Computer Science student at the University of British Columbia (UBC) with a passion for solving real-world problems through software development. I enjoy exploring fields like AI, robotics, and system design while contributing to impactful projects.
          </p>

          {/* Resume Button */}
          {greeting.resumeLink && (
            <a 
              href={greeting.resumeLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-black bg-yellow-500 font-bold 
                         py-3 px-8 rounded-lg text-lg
                         transition-all duration-300 ease-in-out
                         hover:bg-yellow-400 hover:shadow-lg hover:-translate-y-1"
            >
              View My Resume
            </a>
          )}
        </div>

      </div>
    </section>
  );
};