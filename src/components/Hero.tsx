import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg-turkish.jpg";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Anadolu Tesisat Ustası - Profesyonel tesisat ve döşeme hizmetleri"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
        
        {/* Warm texture overlay */}
        <div className="absolute inset-0 bg-gradient-warm opacity-20"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
        <div className="fade-in">
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 tracking-tight">
            Anadolu Tesisat Ustası
          </h1>
        </div>
        
        <div className="fade-in" style={{animationDelay: '0.3s'}}>
          <p className="text-2xl md:text-3xl mb-6 opacity-95 font-medium">
            İstanbul'da Profesyonel Tesisat, Döşeme ve Renovasyon
          </p>
        </div>
        
        <div className="fade-in" style={{animationDelay: '0.6s'}}>
          <p className="text-lg mb-12 opacity-85 max-w-3xl mx-auto leading-relaxed">
            15+ yıllık deneyimimizle İstanbul genelinde kaliteli işçilik ve güvenilir hizmet. 
            Tesisat tamiri, banyo renovasyonu ve döşeme işleri için tek adresiniz.
          </p>
        </div>
        
        <div className="fade-in flex flex-col sm:flex-row gap-6 justify-center" style={{animationDelay: '0.9s'}}>
          <Button className="btn-hero text-xl py-6 px-12" size="lg">
            Ücretsiz Keşif
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white/40 text-white hover:bg-white/15 backdrop-blur-sm text-xl py-6 px-12 transition-all duration-500"
          >
            Hemen Ara: (0555) 123-4567
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-all duration-300 animate-bounce"
        aria-label="Aşağı kaydır"
      >
        <ArrowDown className="w-8 h-8" />
      </button>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;