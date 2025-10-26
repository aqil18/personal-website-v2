// --- 2. Welcome/Hero Component ---
// This corresponds to your "Welcome" section
const Welcome = () => {
  // Video URL from your new code snippets
  const videoUrl = "https://videos.archivedbyaqil.com/horizontal_video.mov";

  return (
    <header 
      id="welcome" 
      className="h-screen w-full flex items-center justify-center relative overflow-hidden"
    >
      {/* Video Background */}
      <video 
        width="100%" 
        height="100%"
        autoPlay 
        loop 
        muted 
        preload="metadata"
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src={videoUrl} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
      
      {/* Dark Overlay for Readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0"></div>
      
      {/* Text from your IntroCard, using the new font-script class */}

    <h1 className="text-white text-6xl md:text-8xl font-bold  z-10 text-center px-4">Welcome</h1>

    </header>
  );
};
export default Welcome;