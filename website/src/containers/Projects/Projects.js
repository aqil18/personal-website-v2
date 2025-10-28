import React from "react";
// --- 4. Projects Component ---
// This corresponds to your "Projects" section
export default function Projects(){
  // A simple component for the project placeholder cards
  // const ProjectCard = () => (
  //   <div className="bg-white aspect-square rounded-2xl shadow-lg
  //                   hover:scale-105 transition-transform duration-300 ease-in-out
  //                   cursor-pointer">
  //     {/* You would put project info here */}
  //   </div>
  // );

  return (
    <section id="projects" className="bg-black text-white p-6 md:p-16 lg:p-24 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* <h2 className="text-5xl md:text-6xl font-bold mb-12">Projects</h2> */}
        
        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard /> */}
          {/* Add more ProjectCard components as needed */}
        </div>
      </div>
    </section>
  );
};
