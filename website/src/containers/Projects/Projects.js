import React from "react";
// Assuming portfolio.js is in the correct location for this import
import { projects } from "../../portfolio"; 


// --- Project Card Component ---
const ProjectCard = ({ project }) => {
  return (
    // Card container
    <div 
      className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden 
                 hover:scale-[1.03] transition-transform duration-300 ease-in-out 
                 flex flex-col h-full group"
    >
      {/* Thumbnail/Image */}
      <div className="relative overflow-hidden h-48 md:h-56">
        <img 
          src={project.thumbnail} 
          alt={`Thumbnail for ${project.name}`} 
          className="w-full h-full object-cover transition-opacity duration-500 
                     group-hover:opacity-80"
        />
        {/* Optional: Hover overlay for a subtle effect */}
        <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-0 
                        transition-all duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Project Name */}
        <h3 className="text-2xl font-semibold text-yellow-400 mb-2">
          {project.name}
        </h3>
        
        {/* Description */}
        <p className="text-gray-300 text-sm flex-grow mb-4">
          {project.desc}
        </p>

        {/* Link Button */}
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-auto inline-block text-center bg-yellow-500 text-black font-bold 
                     py-2 px-4 rounded-lg transition-colors duration-200 
                     hover:bg-yellow-400 hover:shadow-lg"
        >
          View Project
        </a>
      </div>
    </div>
  );
};


// --- 4. Projects Component ---
export default function Projects(){
  // Check if projects exist and if we should display the section
  if (!projects || projects.length === 0) {
    return null; // Don't render if there are no projects
  }

  return (
    <section id="projects" className="bg-black text-white p-6 md:p-16 lg:p-24 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-16 text-center 
                       text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
          My Creations 🚀
        </h2>
        
        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Map over the projects array and render a card for each */}
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};