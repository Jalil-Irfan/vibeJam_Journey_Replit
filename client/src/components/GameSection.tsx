import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SatelliteModel from './SatelliteModel';

export default function GameSection() {
  const iconRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Rotate the satellite icon
    if (iconRef.current) {
      gsap.to(iconRef.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none"
      });
    }
    
    // Animate content when scrolled into view
    const content = document.querySelector('.game-content');
    if (content) {
      gsap.fromTo(
        content,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: content,
            start: "top 80%"
          }
        }
      );
    }
  }, []);
  
  return (
    <section id="game" className="relative py-20 md:py-32 bg-gradient-to-b from-black to-primary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto game-content">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-4">LagRange Game</h2>
            <p className="text-lg text-purple-200 max-w-2xl mx-auto mb-8">
              Position your satellite in Lagrangian points to maximize your sponsorship value in this physics-based space game.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-12">
            <div>
              <h3 className="text-2xl font-montserrat font-bold mb-4 gradient-text">Game Concept</h3>
              <p className="text-purple-200 mb-4">
                LagRange is inspired by the actual Lagrangian points in space - positions where satellites can maintain stable orbits
                relative to larger bodies like Earth and Moon.
              </p>
              <p className="text-purple-200 mb-4">
                Your goal is to position your satellite correctly to maximize sponsorship value while managing fuel consumption
                and avoiding obstacles.
              </p>
              <ul className="list-disc list-inside text-purple-200 mb-6 space-y-2">
                <li>Physics-based satellite controls</li>
                <li>Strategic positioning for maximum points</li>
                <li>Sponsorship system with dynamic values</li>
                <li>Immersive space environment</li>
                <li>Built entirely with web technologies</li>
              </ul>
            </div>
            
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border-4 border-primary/50 shadow-xl">
                <SatelliteModel 
                  position={{ x: 0, y: 0, z: 0 }}
                  rotation={{ x: 0.1, y: 0.1, z: 0.1 }}
                  scale={2}
                  className="w-full h-full float-element bg-gradient-to-b from-black/80 to-primary/20"
                />
              </div>
              <div ref={iconRef} className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center transform rotate-12 z-10 glow">
                <i className="fas fa-satellite text-white text-3xl"></i>
              </div>
            </div>
          </div>
          
          {/* Game Embed */}
          <div className="bg-black/60 backdrop-blur-sm p-4 md:p-8 rounded-lg border border-primary/30 mb-8">
            <div className="aspect-w-16 aspect-h-9 mb-6">
              <iframe 
                src="https://jalil-irfan.github.io/cursor-physicsgame/" 
                title="LagRange Game"
                className="w-full h-full rounded"
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="text-center">
              <a 
                href="https://jalil-irfan.github.io/cursor-physicsgame/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center transition-all transform hover:scale-105 glow"
              >
                <i className="fas fa-expand mr-2"></i> Play Full Screen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
