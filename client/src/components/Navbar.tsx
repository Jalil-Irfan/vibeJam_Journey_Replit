import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-opacity-70 bg-black backdrop-blur-md border-b border-primary/30">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-3 glow">
              <i className="fas fa-satellite text-white"></i>
            </div>
            <span className="text-xl font-montserrat font-bold gradient-text">VibeJam</span>
          </div>
          
          <div className="hidden md:flex space-x-6">
            <a href="#journey" className="text-purple-300 hover:text-white transition-colors">Journey</a>
            <a href="#game" className="text-purple-300 hover:text-white transition-colors">Game</a>
            <a href="#demos" className="text-purple-300 hover:text-white transition-colors">Demos</a>
            <a href="#social" className="text-purple-300 hover:text-white transition-colors">Social</a>
            <a href="#collaborate" className="text-purple-300 hover:text-white transition-colors">Collaborate</a>
          </div>
          
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-black bg-opacity-95 backdrop-blur-md border-b border-primary/30 pb-4`}>
        <div className="container mx-auto px-4 flex flex-col space-y-3">
          <a href="#journey" onClick={closeMenu} className="text-purple-300 hover:text-white transition-colors py-2">Journey</a>
          <a href="#game" onClick={closeMenu} className="text-purple-300 hover:text-white transition-colors py-2">Game</a>
          <a href="#demos" onClick={closeMenu} className="text-purple-300 hover:text-white transition-colors py-2">Demos</a>
          <a href="#social" onClick={closeMenu} className="text-purple-300 hover:text-white transition-colors py-2">Social</a>
          <a href="#collaborate" onClick={closeMenu} className="text-purple-300 hover:text-white transition-colors py-2">Collaborate</a>
        </div>
      </div>
    </nav>
  );
}
