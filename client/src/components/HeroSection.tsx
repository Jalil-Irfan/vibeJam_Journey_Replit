import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import SatelliteModel from './SatelliteModel';

export default function HeroSection() {
  const earthRef = useRef<HTMLDivElement>(null);
  const moonRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Setup animations for floating elements
    if (earthRef.current && moonRef.current) {
      gsap.to(earthRef.current, {
        y: -20,
        rotation: 10,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
      
      gsap.to(moonRef.current, {
        y: 20,
        rotation: -5,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1
      });
    }
  }, []);
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center space-gradient overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Space background" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
      </div>
      
      {/* 3D elements */}
      <div ref={earthRef} className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 z-10 opacity-60">
        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1614728894747-a83421789021?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
            alt="Earth" 
            className="w-full h-full object-cover rounded-full animate-spin-slow"
          />
        </div>
      </div>
      
      <div ref={moonRef} className="absolute bottom-1/3 right-1/4 transform translate-x-1/2 translate-y-1/2 z-10 opacity-70">
        <div className="w-20 h-20 md:w-32 md:h-32 rounded-full overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1532693749-35388ac3c9cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
            alt="Moon" 
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
      
      <div className="absolute top-1/2 right-1/3 transform rotate-12 z-20 opacity-90">
        <SatelliteModel 
          position={{ x: 0, y: 0, z: 0 }}
          rotation={{ x: 0.2, y: 0.5, z: 0.1 }}
          scale={1.5}
          className="w-24 h-24 md:w-36 md:h-36 float-element"
        />
      </div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 z-20">
        <div className="text-center max-w-4xl mx-auto mt-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-black mb-6 leading-tight">
            <span className="block gradient-text">VibeJam</span>
            <span className="block text-white">LagRange Game</span>
          </h1>
          <p className="text-lg md:text-xl text-purple-200 max-w-2xl mx-auto mb-10">
            An immersive space satellite game created for the VibeJam challenge,
            pushing the boundaries of web-based gameplay and physics.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a href="#game" className="bg-primary hover:bg-primary/80 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 glow">
              Play The Game
            </a>
            <a href="#journey" className="border-2 border-purple-300 hover:border-white text-purple-300 hover:text-white font-bold py-3 px-8 rounded-full transition-all">
              Explore Journey
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center z-20">
        <p className="text-purple-200 mb-2 text-sm">Scroll to explore</p>
        <i className="fas fa-chevron-down text-purple-300 animate-bounce"></i>
      </div>
    </section>
  );
}
