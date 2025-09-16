import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional plumbing and renovation services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in">
          ProFlow Services
        </h1>
        <p className="text-xl md:text-2xl mb-4 opacity-90 fade-in" style={{animationDelay: '0.2s'}}>
          Professional Plumbing, Tiling & Renovation
        </p>
        <p className="text-lg mb-8 opacity-80 max-w-2xl mx-auto fade-in" style={{animationDelay: '0.4s'}}>
          Trusted by homeowners across the region for quality workmanship and reliable service. 
          Your complete solution for all plumbing and renovation needs.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in" style={{animationDelay: '0.6s'}}>
          <Button className="btn-hero" size="lg">
            Get Free Quote
          </Button>
          <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
            Call Now: (555) 123-4567
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;