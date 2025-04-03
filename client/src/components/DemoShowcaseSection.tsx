import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { DEMO_VIDEOS } from '../utils/constants';

// Group videos into pairs for display (2 per slide)
const groupVideosIntoPairs = (videos: typeof DEMO_VIDEOS) => {
  const pairs = [];
  for (let i = 0; i < videos.length; i += 2) {
    pairs.push(videos.slice(i, i + 2));
  }
  return pairs;
};

const videoPairs = groupVideosIntoPairs(DEMO_VIDEOS);

export default function DemoShowcaseSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === videoPairs.length - 1 ? 0 : prevSlide + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === 0 ? videoPairs.length - 1 : prevSlide - 1
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
      slides.forEach((slide) => {
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
        <div ref={carouselRef} className="relative max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-lg border border-primary/30 bg-black/50 backdrop-blur-sm p-6">
            {/* Map through video pairs */}
            {videoPairs.map((pair, pairIndex) => (
              <div 
                key={pairIndex}
                className={`demo-slide ${pairIndex === currentSlide ? 'block' : 'hidden'}`}
                data-index={pairIndex}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {pair.map((video, videoIndex) => {
                    const videoId = getYouTubeId(video.youtubeUrl);
                    
                    return (
                      <div 
                        key={videoIndex} 
                        className="video-card bg-black/70 rounded-lg overflow-hidden border border-primary/30"
                      >
                        <div className="h-[250px] sm:h-[300px] md:h-[280px] lg:h-[320px]">
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
                            <div className="flex items-center justify-center h-full text-center p-4">
                              <i className="fab fa-youtube text-6xl text-red-600"></i>
                            </div>
                          )}
                        </div>
                        <div className="p-4">
                          <h3 className="text-xl font-montserrat font-bold mb-2">{video.title}</h3>
                          <p className="text-purple-200 text-sm mb-4">{video.description}</p>
                          <a 
                            href={video.youtubeUrl} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary/90 hover:bg-primary text-white font-bold py-2 px-4 rounded-full inline-flex items-center text-sm"
                          >
                            <i className="fas fa-play-circle mr-2"></i> Watch on YouTube
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
            
            {/* Navigation dots */}
            <div className="absolute -bottom-10 left-0 right-0 flex justify-center space-x-3">
              {videoPairs.map((_, index) => (
                <button 
                  key={index}
                  className={`w-4 h-4 rounded-full ${currentSlide === index ? 'bg-primary' : 'bg-purple-300/50'} hover:bg-primary/80 transition-colors carousel-dot`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
            
            {/* Navigation arrows */}
            <button 
              className="absolute top-1/2 -left-5 md:-left-10 transform -translate-y-1/2 bg-primary/80 hover:bg-primary w-10 h-10 rounded-full flex items-center justify-center carousel-prev shadow-lg"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <i className="fas fa-chevron-left text-white"></i>
            </button>
            
            <button 
              className="absolute top-1/2 -right-5 md:-right-10 transform -translate-y-1/2 bg-primary/80 hover:bg-primary w-10 h-10 rounded-full flex items-center justify-center carousel-next shadow-lg"
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
