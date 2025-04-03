import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function CollaborateSection() {
  const earthRef = useRef<HTMLImageElement>(null);
  const satelliteRef = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate floating elements
    if (earthRef.current) {
      gsap.to(earthRef.current, {
        y: -20,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
    
    if (satelliteRef.current) {
      gsap.to(satelliteRef.current, {
        y: 15,
        rotation: 10,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
    
    // Animate content when scrolled into view
    const content = document.querySelector('.collaborate-content');
    if (content) {
      gsap.fromTo(
        content,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: content,
            start: "top 80%"
          }
        }
      );
    }
  }, []);
  
  return (
    <section id="collaborate" className="relative py-20 md:py-32 bg-gradient-to-b from-black to-primary/30">
      <div className="container mx-auto px-4">
        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/5 transform -translate-x-1/2 -translate-y-1/2 opacity-80 z-0 hidden md:block">
          <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg">
            <img 
              ref={earthRef}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/1200px-The_Blue_Marble_%28remastered%29.jpg" 
              alt="Earth" 
              className="w-full h-full object-cover rounded-full animate-spin-slow"
            />
          </div>
        </div>
        
        <div className="absolute bottom-1/3 right-1/4 transform translate-x-1/2 translate-y-1/2 opacity-70 z-0 hidden md:block">
          <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg">
            <img 
              ref={satelliteRef}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/1200px-FullMoon2010.jpg" 
              alt="Moon" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
        
        {/* Content */}
        <div className="max-w-4xl mx-auto relative z-10 collaborate-content">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-4">Let's Collaborate</h2>
            <p className="text-lg text-purple-200 max-w-2xl mx-auto">
              Interested in sponsoring the LagRange game or collaborating on future projects?
            </p>
          </div>
          
          <div className="bg-black/60 backdrop-blur-sm p-6 md:p-10 rounded-lg border border-primary/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-montserrat font-bold mb-4 gradient-text">Sponsorship</h3>
                <p className="text-purple-200 mb-4">
                  Want your brand featured in the LagRange game? Become an in-game sponsor and get your logo featured
                  in the satellite positioning game, just like the in-game mechanics!
                </p>
                <p className="text-purple-200 mb-6">
                  Your brand will be featured prominently within the game's sponsorship system, with
                  custom integrations available upon request.
                </p>
                
                <div className="flex flex-col space-y-2">
                  <a href="mailto:sponsorship@example.com" className="text-blue-400 hover:text-white transition-colors inline-flex items-center">
                    <i className="fas fa-envelope mr-2"></i> sponsorship@example.com
                  </a>
                  <a href="https://twitter.com/Jalil_Irfan" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white transition-colors inline-flex items-center">
                    <i className="fab fa-twitter mr-2"></i> @Jalil_Irfan
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-montserrat font-bold mb-4 gradient-text">Future Projects</h3>
                <p className="text-purple-200 mb-4">
                  I'm always open to collaborations on creative coding, game development, and interactive web experiences.
                </p>
                <p className="text-purple-200 mb-6">
                  If you're interested in working together on future projects or have ideas for
                  improving LagRange, I'd love to hear from you!
                </p>
                
                <a href="#" className="bg-primary hover:bg-primary/80 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition-all transform hover:scale-105">
                  <i className="fas fa-paper-plane mr-2"></i> Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
