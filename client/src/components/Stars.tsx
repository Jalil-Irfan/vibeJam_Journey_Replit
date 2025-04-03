import { useEffect, useRef } from 'react';

export default function Stars() {
  const starsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const starsContainer = starsRef.current;
    if (!starsContainer) return;
    
    // Clear existing stars
    starsContainer.innerHTML = '';
    
    // Create stars
    const starCount = 200;
    
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.style.position = 'absolute';
      star.style.backgroundColor = 'white';
      star.style.borderRadius = '50%';
      star.style.opacity = '0.8';
      star.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite`;
      
      // Random size (0.5px to 2px)
      const size = Math.random() * 1.5 + 0.5;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      // Random position
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      
      // Random animation delay
      star.style.animationDelay = `${Math.random() * 3}s`;
      
      starsContainer.appendChild(star);
    }
    
    return () => {
      // Clean up
      if (starsContainer) {
        starsContainer.innerHTML = '';
      }
    };
  }, []);
  
  return (
    <div 
      ref={starsRef} 
      className="stars fixed inset-0 w-full h-full z-0 overflow-hidden"
    />
  );
}
