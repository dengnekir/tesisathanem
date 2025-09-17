import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "Hakkımızda" },
    { href: "#services", label: "Hizmetlerimiz" },
    { href: "#gallery", label: "Projelerimiz" },
    { href: "#contact", label: "İletişim" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`${
        isScrolled ? "nav-sticky" : "fixed top-0 left-0 right-0 z-40"
      } transition-all duration-500`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-20 px-6">
          {/* Logo */}
          <div className="flex items-center">
            <h1
              className={`text-2xl font-serif font-bold transition-colors duration-500 ${
                isScrolled ? "text-primary" : "text-white"
              }`}
            >
              Fayans, Tesisat ve Dekorasyon Ercan Gökçur
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`font-medium transition-all duration-500 hover:text-accent relative group ${
                  isScrolled ? "text-foreground" : "text-white/95"
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <Button
              className={`${
                isScrolled
                  ? "btn-primary"
                  : "border-primary/40 text-primary hover:bg-primary/10 hover:text-primary-dark backdrop-blur-sm"
              } transition-all duration-500`}
              variant={isScrolled ? "default" : "outline"}
              onClick={() => window.open("tel:+905354703826", "_self")}
            >
              <Phone className="w-4 h-4 mr-2" />
              Hemen Ara
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors duration-500 ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border/50">
            <div className="py-6 space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-6 py-3 text-foreground hover:text-accent transition-colors duration-300 font-medium text-lg"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-6">
                <Button
                  className="btn-primary w-full text-lg py-4"
                  onClick={() => window.open("tel:+905354703826", "_self")}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Hemen Ara
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
