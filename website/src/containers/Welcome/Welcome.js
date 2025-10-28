import React from 'react';
// Import greeting to get the title text from your portfolio config
import { greeting } from '../../portfolio';
import { useEffect, useState } from "react";

import { Typewriter } from 'react-simple-typewriter';

function WelcomeTyping() {
  return (
    <h1 className="text-4xl font-bold text-center mt-20 text-gray-900">
      <Typewriter
        words={[
          "Welcome, I'm Aqil!",
          "Bienvenue, je suis Aqil!",
          "Selamat datang, saya Aqil!",
          "Bienvenido, soy Aqil!",
          "Willkommen, ich bin Aqil!",
          "مرحبا، أنا عقيل!",
          "ようこそ、アキルです！",
        ]}
        loop={0}
        cursor
        cursorStyle="_"
        typeSpeed={80}
        deleteSpeed={40}
        delaySpeed={1500}
      />
    </h1>
  );
}


// --- 2. Welcome/Hero Component ---
// This corresponds to your "Welcome" section
const Welcome = () => {
  // Video URL from your new code snippets
  const videoUrl = "https://videos.archivedbyaqil.com/horizontal_video.mov";

  return (
    <header 
      id="title" // Changed to 'title' to match the Navbar logo's href
      className="h-screen w-full flex items-center justify-center relative overflow-hidden"
    >
      {/* Video Background */}
      <video 
        width="100%" 
        height="100%"
        autoPlay 
        loop 
        muted 
        playsInline // Added for better mobile compatibility
        preload="metadata"
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src={videoUrl} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
      
      {/* Dark Overlay for Readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-0"></div>
      
      {/* Hero Content Container */}
      <div className="relative z-10 text-center px-4 flex flex-col items-center">
        
        {/* Title from portfolio.js, with gradient styling */}
        <h1 
          className="text-5xl sm:text-7xl lg:text-8xl font-extrabold 
                     text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600"
        >
          {greeting.title || "Hi, I'm Aqil"}
        </h1>

        {/* Subtitle */}
        <p className="text-gray-200 text-lg md:text-2xl mt-4 mb-10 max-w-2xl font-light">
          Computer Science Student & Software Developer
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#projects"
            className="inline-block text-black bg-yellow-500 font-bold 
                       py-3 px-8 rounded-lg text-lg
                       transition-all duration-300 ease-in-out
                       hover:bg-yellow-400 hover:shadow-lg hover:-translate-y-1"
          >
            Explore My Work
          </a>
          <a 
            href="#about"
            className="inline-block text-white bg-transparent border-2 border-yellow-500 font-bold 
                       py-3 px-8 rounded-lg text-lg
                       transition-all duration-300 ease-in-out
                       hover:bg-yellow-500 hover:text-black hover:-translate-y-1"
          >
            About Me
          </a>
        </div>
      </div>

    </header>
  );
};
export default Welcome;