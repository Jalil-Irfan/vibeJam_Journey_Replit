import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Social media posts data
const socialPosts = [
  {
    platform: "twitter",
    icon: "fab fa-twitter",
    iconBg: "bg-sky-500",
    author: "Jalil Irfan",
    handle: "@Jalil_Irfan",
    date: "March 20",
    content: "Just started my #VibeJam challenge! Working on a physics-based game called \"Wind Drifter\" using ChatGPT and Cursor. #VibeCoding #BuildingInPublic",
    link: "https://x.com/Jalil_Irfan/status/1902753608451645873"
  },
  {
    platform: "twitter",
    icon: "fab fa-twitter",
    iconBg: "bg-sky-500",
    author: "Jalil Irfan",
    handle: "@Jalil_Irfan",
    date: "April 1",
    content: "Finally completed my #VibeJam challenge! LagRange is now live - a satellite positioning game with sponsorship mechanics. Thanks to @levelsio for the challenge! #VibeCoding #GameDev",
    link: "https://x.com/Jalil_Irfan/status/1907152608508387614"
  },
  {
    platform: "linkedin",
    icon: "fab fa-linkedin-in",
    iconBg: "bg-blue-700",
    author: "Jalil Irfan",
    handle: "LinkedIn",
    date: "April 2",
    content: "Excited to share my latest project: LagRange - a space-themed satellite positioning game built for the #VibeJam challenge! #VibeCoding #GameDevelopment #WebDev",
    link: "https://www.linkedin.com/posts/jalil-irfan_vibecoding-vibejam-uyar-activity-7310201134873223168-NKK1"
  },
  {
    platform: "instagram",
    icon: "fab fa-instagram",
    iconBg: "bg-gradient-to-tr from-purple-600 to-pink-500",
    author: "Jalil Irfan",
    handle: "Instagram",
    date: "March 20",
    content: "Day 1 of the #VibeJam challenge! Working on \"Wind Drifter\" prototype. #VibeCoding #GameDev #CodeChallenge",
    link: "https://www.instagram.com/p/DHabA3gx9aO/"
  },
  {
    platform: "instagram",
    icon: "fab fa-instagram",
    iconBg: "bg-gradient-to-tr from-purple-600 to-pink-500",
    author: "Jalil Irfan",
    handle: "Instagram",
    date: "April 2",
    content: "LagRange is complete! After multiple iterations, the final game is live. Position your satellite to maximize sponsorship. #VibeJam #GameDevelopment #WebGL",
    link: "https://www.instagram.com/p/DH7vMnxRY-I/"
  },
  {
    platform: "youtube",
    icon: "fab fa-youtube",
    iconBg: "bg-red-600",
    author: "Jalil Irfan",
    handle: "YouTube",
    date: "Livestream Series",
    content: "Follow the complete development journey on YouTube with livestreams covering the entire process from concept to completion.",
    links: [
      {
        text: "Day 1: Getting prompt from ChatGPT",
        url: "https://youtube.com/live/Ojz8kHUsk70"
      },
      {
        text: "LagRange Part 1: Satellite Controls",
        url: "https://youtube.com/live/cBlJ3LxWBZg"
      }
    ]
  }
];

export default function SocialJourneySection() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate social cards
    const socialCards = document.querySelectorAll('.social-card');
    
    socialCards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { 
          opacity: 0,
          y: 50
        },
        { 
          opacity: 1,
          y: 0,
          duration: 0.6,
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
  
  return (
    <section id="social" className="relative py-20 md:py-32 bg-gradient-to-b from-primary/30 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-4">Social Journey</h2>
          <p className="text-lg text-purple-200 max-w-2xl mx-auto">
            Follow the development process through social media updates
          </p>
        </div>
        
        {/* Social Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {socialPosts.map((post, index) => (
            <div 
              key={index}
              className="social-card bg-black/60 backdrop-blur-sm p-4 rounded-lg border border-primary/30 hover:border-primary/60 transition-all"
            >
              <div className="flex items-start mb-4">
                <div className={`w-10 h-10 rounded-full ${post.iconBg} flex items-center justify-center mr-3`}>
                  <i className={`${post.icon} text-white`}></i>
                </div>
                <div>
                  <p className="font-bold">{post.author}</p>
                  <p className="text-gray-400 text-sm">{post.handle} · {post.date}</p>
                </div>
              </div>
              
              {post.platform === 'instagram' && (
                <div className="aspect-w-1 aspect-h-1 bg-black/40 rounded mb-3 flex items-center justify-center">
                  <i className="fas fa-image text-4xl text-purple-300"></i>
                </div>
              )}
              
              {post.platform === 'youtube' && (
                <div className="aspect-w-16 aspect-h-9 bg-black/40 rounded mb-3 flex items-center justify-center">
                  <i className="fas fa-play-circle text-4xl text-red-600"></i>
                </div>
              )}
              
              <p className="text-purple-200 mb-4">{post.content}</p>
              
              {post.link && (
                <a 
                  href={post.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-white transition-colors text-sm"
                >
                  View on {post.platform.charAt(0).toUpperCase() + post.platform.slice(1)}
                </a>
              )}
              
              {post.links && post.links.map((link, linkIndex) => (
                <a 
                  key={linkIndex}
                  href={link.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-white transition-colors text-sm block mb-2 last:mb-0"
                >
                  {link.text}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
