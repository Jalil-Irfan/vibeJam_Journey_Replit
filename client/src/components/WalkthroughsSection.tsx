import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Walkthrough videos data
const walkthroughVideos = [
  {
    title: "Getting Prompt from ChatGPT",
    subtitle: "Day 1 Livestream",
    youtubeUrl: "https://youtube.com/live/Ojz8kHUsk70"
  },
  {
    title: "Creating Fractal Drop",
    subtitle: "Day 2 Livestream",
    youtubeUrl: "https://youtube.com/live/KDJH9YiRpuA"
  },
  {
    title: "Physics Puzzle with Replit",
    subtitle: "Day 3 Livestream",
    youtubeUrl: "https://youtube.com/live/zWLUHxfet4E"
  },
  {
    title: "Restart with New Prompt",
    subtitle: "Day 4 Video",
    youtubeUrl: "https://youtu.be/KzRUtAelcMo"
  },
  {
    title: "Satellite Controls",
    subtitle: "LagRange Development Part 1",
    youtubeUrl: "https://youtube.com/live/cBlJ3LxWBZg"
  },
  {
    title: "Adding Music Player",
    subtitle: "LagRange Development Part 4",
    youtubeUrl: "https://youtu.be/A0jcYg5zk7g"
  }
];

export default function WalkthroughsSection() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate video cards
    const videoCards = document.querySelectorAll('.video-card');
    
    videoCards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { 
          opacity: 0,
          y: 30,
          scale: 0.95
        },
        { 
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);
  
  // Get YouTube video ID from URL
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };
  
  return (
    <section id="walkthroughs" className="relative py-20 md:py-32 cosmic-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-4">Walkthrough & Livestreams</h2>
          <p className="text-lg text-purple-200 max-w-2xl mx-auto">
            Watch the complete development process with detailed walkthroughs
          </p>
        </div>
        
        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {walkthroughVideos.map((video, index) => {
            const videoId = getYouTubeId(video.youtubeUrl);
            
            return (
              <div 
                key={index}
                className="video-card bg-black/40 rounded-lg overflow-hidden border border-primary/30 hover:border-primary/60 transition-all group"
              >
                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                  {videoId ? (
                    <img 
                      src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <i className="fas fa-play-circle text-6xl text-primary/80 group-hover:text-primary transition-colors"></i>
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <i className="fas fa-play-circle text-6xl text-primary/80 group-hover:text-primary transition-colors"></i>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-montserrat font-bold truncate">{video.title}</h3>
                  <p className="text-sm text-purple-300 mb-2">{video.subtitle}</p>
                  <a 
                    href={video.youtubeUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-white transition-colors text-sm inline-flex items-center"
                  >
                    <i className="fab fa-youtube mr-1"></i> Watch on YouTube
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
