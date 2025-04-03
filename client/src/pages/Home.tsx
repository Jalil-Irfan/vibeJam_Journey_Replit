import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import JourneySection from "@/components/JourneySection";
import GameSection from "@/components/GameSection";
import DemoShowcaseSection from "@/components/DemoShowcaseSection";
import SocialJourneySection from "@/components/SocialJourneySection";
import WalkthroughsSection from "@/components/WalkthroughsSection";
import CollaborateSection from "@/components/CollaborateSection";
import DonateSection from "@/components/DonateSection";
import ThankYouSection from "@/components/ThankYouSection";
import Footer from "@/components/Footer";
import Stars from "@/components/Stars";

// Import GSAP for animations
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // Setup smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          // Scroll to the target
          window.scrollTo({
            top: (targetElement as HTMLElement).offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });

    // Setup parallax effects
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      // Create parallax effect for floating elements
      const floatingElements = section.querySelectorAll('.float-element');
      
      if (floatingElements.length) {
        ScrollTrigger.create({
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          onUpdate: (self) => {
            const speed = 0.1;
            floatingElements.forEach((el, i) => {
              const yPos = (self.progress - 0.5) * 100 * speed * (i % 2 ? 1 : -1);
              gsap.to(el, {
                y: yPos,
                ease: "none",
                overwrite: "auto"
              });
            });
          }
        });
      }
    });

    return () => {
      // Clean up scroll triggers
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-inter overflow-x-hidden">
      <Stars />
      <Navbar />
      <HeroSection />
      <JourneySection />
      <GameSection />
      <DemoShowcaseSection />
      <SocialJourneySection />
      <WalkthroughsSection />
      <CollaborateSection />
      <DonateSection />
      <ThankYouSection />
      <Footer />
    </div>
  );
}
