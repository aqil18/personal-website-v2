// --- 1. Navigation Component ---
// This corresponds to your <nav> section
export default function  Navbar() {
  return (
    <nav className="bg-black text-white p-6 md:p-8 flex justify-between items-center fixed w-full top-0 z-10">
      <a href="#title" className="text-3xl font-bold">a!</a>
      <ul className="flex space-x-6 md:space-x-10">
        <li><a href="#about" className="text-lg hover:text-gray-300 transition-colors">About</a></li>
        <li><a href="https://github.com/aqil18" className="text-lg hover:text-gray-300 transition-colors">Projects</a></li>
        <li><a href="https://www.linkedin.com/in/aqil-f/" className="text-lg hover:text-gray-300 transition-colors">Contact</a></li>
      </ul>
    </nav>
  );
};