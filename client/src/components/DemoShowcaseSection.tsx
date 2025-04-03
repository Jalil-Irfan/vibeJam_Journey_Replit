import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

// Demo videos data
const demoVideos = [
  {
    title: "LagRange Desktop Demo",
    description: "Watch the complete demo of the final game",
    youtubeUrl: "https://youtu.be/sB_M3uI_HP0"
  },
  {
    title: "3D Physics Puzzle Demo",
    description: "A 3D physics-based puzzle game prototype",
    youtubeUrl: "https://youtu.be/TMTSqaMpgk8"
  },
  {
    title: "Fractal Drop Game Demo",
    description: "A physics and perspective-based prototype",
    youtubeUrl: "https://youtu.be/qm9DpX-plBE"
  },
  {
    title: "Wind Drifter Demo",
    description: "The first prototype focusing on wind physics",
    youtubeUrl: "https://youtu.be/O5Nggp2jcRA"
  }
];

export default function DemoShowcaseSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === demoVideos.length - 1 ? 0 : prevSlide + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === 0 ? demoVideos.length - 1 : prevSlide - 1
    );
  };
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  
  useEffect(() => {
    // Animate slide transition
    if (carouselRef.current) {
      const slides = carouselRef.current.querySelectorAll('.demo-slide');
      
      // Hide all slides first
      slides.forEach((slide, index) => {
        gsap.set(slide, {
          opacity: 0,
          display: 'none'
        });
      });
      
      // Show and animate current slide
      gsap.to(slides[currentSlide], {
        opacity: 1,
        display: 'block',
        duration: 0.5
      });
    }
  }, [currentSlide]);
  
  // Get YouTube video ID from URL
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };
  
  return (
    <section id="demos" className="relative py-20 md:py-32 cosmic-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-4">Demo Showcase</h2>
          <p className="text-lg text-purple-200 max-w-2xl mx-auto">
            Explore the evolution of the project through video demonstrations
          </p>
        </div>
        
        {/* Demo Carousel */}
        <div ref={carouselRef} className="relative max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-lg border border-primary/30">
            {/* Map through demo videos */}
            {demoVideos.map((video, index) => {
              const videoId = getYouTubeId(video.youtubeUrl);
              
              return (
                <div 
                  key={index}
                  className={`demo-slide ${index === currentSlide ? 'block' : 'hidden'}`}
                  data-index={index}
                >
                  <div className="aspect-w-16 aspect-h-9 bg-black">
                    {videoId ? (
                      <iframe 
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={video.title}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <div className="flex items-center justify-center text-center p-4">
                        <div>
                          <i className="fab fa-youtube text-6xl text-red-600 mb-4"></i>
                          <h3 className="text-xl font-montserrat font-bold mb-2">{video.title}</h3>
                          <p className="text-purple-200">{video.description}</p>
                          <div className="mt-4">
                            <a 
                              href={video.youtubeUrl} 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-primary hover:bg-primary/80 text-white font-bold py-2 px-4 rounded-full inline-flex items-center text-sm"
                            >
                              <i className="fas fa-play-circle mr-2"></i> Watch on YouTube
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
            
            {/* Navigation dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {demoVideos.map((_, index) => (
                <button 
                  key={index}
                  className={`w-3 h-3 rounded-full bg-purple-300 ${currentSlide === index ? 'opacity-100' : 'opacity-50'} hover:opacity-100 transition-opacity carousel-dot`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
            
            {/* Navigation arrows */}
            <button 
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-primary/80 hover:bg-primary w-10 h-10 rounded-full flex items-center justify-center carousel-prev"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <i className="fas fa-chevron-left text-white"></i>
            </button>
            
            <button 
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-primary/80 hover:bg-primary w-10 h-10 rounded-full flex items-center justify-center carousel-next"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <i className="fas fa-chevron-right text-white"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
