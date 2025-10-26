// --- 3. About Component ---
// This corresponds to your "About" section
export default function  About(){
  // Placeholder for the circular profile picture
  const profilePicUrl = 'https://placehold.co/400x400/eeeeee/333?text=Profile+Photo';
  
  return (
    <section id="about" className="bg-black text-white p-6 md:p-16 lg:p-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">About Aqil</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    
            culpa qui officia deserunt mollit anim id est laborum.
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