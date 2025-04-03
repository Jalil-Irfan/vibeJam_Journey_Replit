import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function DonateSection() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate donation cards
    const donationCards = document.querySelectorAll('.donation-card');
    
    donationCards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { 
          opacity: 0,
          y: 50
        },
        { 
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 80%"
          }
        }
      );
    });
    
    // Copy UPI ID to clipboard
    const copyButton = document.getElementById('copyUpiButton');
    if (copyButton) {
      copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText('jalil.irfan@okaxis');
        
        // Show copied message
        const originalText = copyButton.innerHTML;
        copyButton.innerHTML = '<i class="fas fa-check mr-2"></i> Copied!';
        
        setTimeout(() => {
          copyButton.innerHTML = originalText;
        }, 2000);
      });
    }
  }, []);
  
  return (
    <section id="donate" className="relative py-20 md:py-32 cosmic-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-4">Support the Project</h2>
          <p className="text-lg text-purple-200 max-w-2xl mx-auto">
            If you enjoy LagRange and want to support future development, consider making a donation
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Ko-Fi */}
          <div className="donation-card bg-black/60 backdrop-blur-sm p-6 rounded-lg border border-primary/30 hover:border-primary/60 transition-all">
            <div className="text-center mb-4">
              <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-mug-hot text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-montserrat font-bold mb-2">Buy Me a Coffee</h3>
              <p className="text-purple-200 mb-4">
                Support through Ko-Fi to help me create more games and creative coding projects.
              </p>
            </div>
            
            <div className="bg-[#f9f9f9] rounded-lg mb-4 overflow-hidden">
              <iframe 
                id='kofiframe' 
                src='https://ko-fi.com/nandri/?hidefeed=true&widget=true&embed=true&preview=true' 
                style={{ border: 'none', width: '100%', padding: '4px', background: '#f9f9f9' }} 
                height='712' 
                title='nandri'
              ></iframe>
            </div>
          </div>
          
          {/* UPI */}
          <div className="donation-card bg-black/60 backdrop-blur-sm p-6 rounded-lg border border-primary/30 hover:border-primary/60 transition-all">
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-money-bill-wave text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-montserrat font-bold mb-2">Direct Support (BHIM/UPI)</h3>
              <p className="text-purple-200 mb-4">
                Support directly via BHIM/UPI payment for Indian contributors.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg mb-6 flex justify-center items-center">
              <img 
                src="/upi-qr.jpg" 
                alt="UPI QR Code" 
                className="max-w-full h-auto rounded-lg shadow-lg max-h-[400px]" 
              />
            </div>
            
            <div className="text-center">
              <button 
                id="copyUpiButton"
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition-all"
              >
                <i className="fas fa-copy mr-2"></i> Copy UPI ID
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
