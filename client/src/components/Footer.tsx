export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative py-12 bg-black border-t border-primary/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-3 glow">
              <i className="fas fa-satellite text-white"></i>
            </div>
            <span className="text-xl font-montserrat font-bold gradient-text">VibeJam</span>
          </div>
          
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a href="https://twitter.com/Jalil_Irfan" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-white transition-colors">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="https://www.instagram.com/jalilirfan/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-white transition-colors">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/jalil-irfan/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-white transition-colors">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a href="https://www.youtube.com/@jalilirfan" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-white transition-colors">
              <i className="fab fa-youtube text-xl"></i>
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-purple-300 text-sm">
              &copy; {currentYear} Jalil Irfan. All rights reserved.
            </p>
            <p className="text-purple-400 text-xs mt-1">
              Built for the VibeJam Challenge
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
