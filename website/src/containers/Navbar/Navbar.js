// --- 1. Navigation Component ---
// This corresponds to your <nav> section
const Navbar = () => {
  return (
    <nav className="bg-black text-white p-6 md:p-8 flex justify-between items-center fixed w-full z-10">
      <a href="#" className="text-3xl font-bold">a!</a>
      <ul className="flex space-x-6 md:space-x-10">
        <li><a href="#about" className="text-lg hover:text-gray-300 transition-colors">About</a></li>
        <li><a href="#projects" className="text-lg hover:text-gray-300 transition-colors">Projects</a></li>
        <li><a href="#" className="text-lg hover:text-gray-300 transition-colors">Links</a></li>
      </ul>
    </nav>
  );
};