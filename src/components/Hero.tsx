import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg-turkish.jpg";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-2 sm:px-4 md:px-8">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Fayans, Tesisat ve Dekorasyon Ercan Gökçur - Profesyonel hizmetler"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>

        {/* Warm texture overlay */}
        <div className="absolute inset-0 bg-gradient-warm opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-2 sm:px-6 md:px-10">
        <div className="fade-in">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-serif font-bold mb-6 sm:mb-8 tracking-tight leading-tight sm:leading-tight">
            Fayans, Tesisat ve Dekorasyon Ercan Gökçur
          </h1>
        </div>

        <div className="fade-in" style={{ animationDelay: "0.3s" }}>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 sm:mb-6 opacity-95 font-medium">
            İstanbul'da Profesyonel Tesisat, Döşeme ve Renovasyon
          </p>
        </div>

        <div className="fade-in" style={{ animationDelay: "0.6s" }}>
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 opacity-85 max-w-3xl mx-auto leading-relaxed">
            25+ yıllık deneyimimizle İstanbul genelinde kaliteli işçilik ve
            güvenilir hizmet. Tesisat tamiri, banyo renovasyonu ve döşeme işleri
            için tek adresiniz.
          </p>
        </div>

        <div
          className="fade-in flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
          style={{ animationDelay: "0.9s" }}
        >
          <Button
            className="btn-hero text-base sm:text-xl py-4 sm:py-6 px-6 sm:px-12"
            size="lg"
            onClick={scrollToContact}
          >
            İletişime Geç
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-primary/40 text-primary hover:bg-primary/10 hover:text-primary-dark backdrop-blur-sm text-base sm:text-xl py-4 sm:py-6 px-6 sm:px-12 transition-all duration-500"
          >
            Hemen Ara: (0535) 470-3826
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-all duration-300 animate-bounce"
        aria-label="Aşağı kaydır"
      >
        <ArrowDown className="w-8 h-8" />
      </button>

      {/* Decorative Elements */}
      <div className="hidden sm:block absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="hidden sm:block absolute bottom-20 right-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
