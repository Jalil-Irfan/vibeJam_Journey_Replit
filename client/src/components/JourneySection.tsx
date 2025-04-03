import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Timeline events data
const timelineEvents = [
  {
    date: "March 17",
    icon: "fas fa-flag",
    title: "Discovered VibeJam by Pieter Levels; rules and concept",
    description: "The challenge began with Pieter Levels introducing VibeJam - a creative coding challenge to build something unique and share it with the world.",
    link: null
  },
  {
    date: "March 20",
    icon: "fas fa-code",
    title: "Initial game development attempt - \"Wind Drifter\" (ChatGPT + Cursor)",
    description: "My first attempt at creating a game for the challenge. Wind Drifter was a concept focused on wind physics and movement.",
    link: {
      url: "https://youtu.be/O5Nggp2jcRA",
      text: "Watch Wind Drifter Demo"
    }
  },
  {
    date: "March 25",
    icon: "fas fa-code-branch",
    title: "Second attempt with \"Fractal Drop\" (Physics, perspective; ChatGPT + Cursor, then Replit)",
    description: "Pivoting to a new concept, Fractal Drop explored interesting physics and perspective mechanics.",
    link: {
      url: "https://youtu.be/qm9DpX-plBE",
      text: "Watch Fractal Drop Demo"
    }
  },
  {
    date: "March 31",
    icon: "fas fa-cube",
    title: "Third attempt - \"3D Physics Puzzle\" (Physics-based, Replit)",
    description: "A more ambitious attempt, creating a 3D physics-based puzzle game using web technologies.",
    link: {
      url: "https://youtu.be/TMTSqaMpgk8",
      text: "Watch 3D Physics Puzzle Demo"
    }
  },
  {
    date: "April 01",
    icon: "fas fa-rocket",
    title: "Final successful game - \"LagRange\" with incremental improvements (Cursor + ChatGPT)",
    description: "The culmination of my efforts, LagRange brings together everything I learned to create a space-themed satellite positioning game with sponsorship mechanics.",
    link: {
      url: "https://youtu.be/sB_M3uI_HP0",
      text: "Watch LagRange Desktop Demo"
    },
    highlight: true
  }
];

export default function JourneySection() {
  useEffect(() => {
    // Animate timeline items when scrolled into view
    gsap.registerPlugin(ScrollTrigger);
    
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        { 
          opacity: 0,
          x: -50
        },
        { 
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);
  
  return (
    <section id="journey" className="relative py-20 md:py-32 cosmic-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-4">The VibeJam Journey</h2>
          <p className="text-lg text-purple-200 max-w-2xl mx-auto">
            Follow my adventure from discovery to completion in the VibeJam challenge.
          </p>
        </div>
        
        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          <div className="timeline-connector"></div>
          
          {timelineEvents.map((event, index) => (
            <div key={index} className="timeline-item relative pl-10 md:pl-16 mb-16 last:mb-0">
              <div className={`absolute left-0 w-10 h-10 rounded-full ${event.highlight ? 'bg-pink-500' : 'bg-primary'} flex items-center justify-center z-10 glow`}>
                <i className={`${event.icon} text-white`}></i>
              </div>
              <div className={`bg-black/60 backdrop-blur-sm p-6 rounded-lg border ${event.highlight ? 'border-pink-500/30 hover:border-pink-500/60' : 'border-primary/30 hover:border-primary/60'} transition-all`}>
                <h3 className="text-xl font-montserrat font-bold mb-2">{event.date}</h3>
                <p className="text-purple-200 mb-4">{event.title}</p>
                <p className="text-sm text-purple-300">{event.description}</p>
                
                {event.link && (
                  <div className="mt-4">
                    <a 
                      href={event.link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-white transition-colors inline-flex items-center"
                    >
                      <i className="fas fa-play-circle mr-2"></i> {event.link.text}
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
