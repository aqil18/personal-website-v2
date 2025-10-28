import React from 'react';
import { socialLinks } from '../../portfolio';


// --- A reusable card component for each link ---
const SocialCard = ({ link }) => {
  return (
    <a
      href={link.href}
      // Open in new tab, but not for 'mailto:' links
      target={link.name === "Email" ? "_self" : "_blank"}
      rel="noopener noreferrer"
      className="bg-gray-800 p-8 rounded-xl shadow-2xl
                 hover:scale-[1.03] transition-transform duration-300 ease-in-out
                 group block" // 'block' makes the whole <a> area clickable
    >
      <div className="flex flex-col items-center text-center">
        {/* Icon */}
        <link.icon 
          className="text-5xl md:text-6xl text-gray-400 
                     group-hover:text-yellow-400 transition-colors duration-300" 
        />
        
        {/* Platform Name */}
        <h3 
          className="text-2xl font-semibold mt-4 text-white
                     group-hover:text-yellow-400 transition-colors duration-300"
        >
          {link.name}
        </h3>

        {/* Handle or Call-to-action */}
        <p className="text-gray-300 mt-1">
          {link.handle}
        </p>
      </div>
    </a>
  );
};


// --- The Main Connect Component ---
export default function Connect() {
  return (
    <section 
      id="connect" 
      className="bg-black text-white p-6 md:p-16 lg:p-24
                 flex items-center justify-center" // Centering the content
    >
      <div className="max-w-4xl w-full mx-auto text-center">
        
        {/* --- Title --- */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6
                       text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
          Get In Touch
        </h2>

        {/* --- Subtitle --- */}
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-16">
          I'm always open to discussing new projects, creative ideas, or opportunities. 
          Feel free to reach out!
        </p>
        
        {/* --- Social Links Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Map over the links and create a card for each */}
          {socialLinks.map((link) => (
            <SocialCard key={link.name} link={link} />
          ))}

        </div>
      </div>
    </section>
  );
}