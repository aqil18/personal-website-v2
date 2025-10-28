// --- 3. About Component ---
// This corresponds to your "About" section
export default function  About(){
    
  return (
    <section id="about" className="bg-black text-white p-6 md:p-16 lg:p-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">About Aqil</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            My name is Aqil, I'm a Computer Science student at the University of British Columbia (UBC) with a passion for solving real-world problems through software development. I enjoy exploring fields like AI, robotics, and system design while contributing to impactful projects.
          </p>
        </div>

        {/* Profile Image */}
        <div className="flex-shrink-0 mt-8 md:mt-0">
          <img 
            src={"headshot.jpg"} 
            alt="Portrait"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-gray-800 shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};