import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Contributors data
const contributors = [
  {
    name: "Pieter Levels",
    icon: "fas fa-user",
    connect: "https://x.com/levelsio"
  },
  {
    name: "ChatGPT",
    icon: "fas fa-robot",
    connect: "https://openai.com/"
  },
  {
    name: "Cursor",
    icon: "fas fa-terminal",
    connect: "https://www.cursor.com/"
  },
  {
    name: "Replit",
    icon: "fas fa-code",
    connect: "https://replit.com/"
  },
  {
    name: "Google Gemini",
    icon: "fas fa-brain",
    connect: "https://gemini.google.com/app"
  },
  {
    name: "GitHub Co-Pilot",
    icon: "fas fa-code-branch",
    connect: "https://github.com/features/copilot"
  },
  {
    name: "Microsoft Visual Studio",
    icon: "fas fa-window-maximize",
    connect: "https://code.visualstudio.com/"
  },
  {
    name: "Chrome",
    icon: "fab fa-chrome",
    connect: "https://www.google.com/chrome/what-you-make-of-it/"
  },
  {
    name: "Safari",
    icon: "fab fa-safari",
    connect: "https://www.apple.com/in/safari/"
  },
  { name: "Zafree",
    icon: "fas fa-user",
    connect: "https://www.instagram.com/am_zafff/"
  }
];

export default function ThankYouSection() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate contributor cards
    const cards = document.querySelectorAll('.contributor-card');
    
    gsap.fromTo(
      cards,
      { 
        opacity: 0, 
        y: 30, 
        scale: 0.9 
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.05,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#thanks',
          start: "top 70%"
        }
      }
    );
  }, []);
  
  return (
    <section id="thanks" className="relative py-20 md:py-32 bg-gradient-to-b from-primary/30 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-4">Thank You</h2>
          <p className="text-lg text-purple-200 max-w-2xl mx-auto">
            This project wouldn't have been possible without the following contributors and tools
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {contributors.map((contributor, index) => (
            <div 
              key={index}
              className="contributor-card bg-black/60 backdrop-blur-sm p-4 rounded-lg border border-primary/30 hover:border-primary/60 transition-all text-center"
            >
              <div className="w-16 h-16 rounded-full bg-purple-300/20 flex items-center justify-center mx-auto mb-3">
                <i className={`${contributor.icon} text-purple-300`}></i>
              </div>
              <h3 className="font-montserrat font-bold text-sm">{contributor.name}</h3>
              <a 
                href={contributor.connect} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-purple-300 hover:text-white transition-colors mt-2 inline-block"
              >
                <i className="fas fa-link"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
