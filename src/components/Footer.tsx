import { Phone, Mail, MapPin, Clock, Award, Shield } from "lucide-react";

const Footer = () => {
  const services = [
    "Acil Tesisat Tamiri",
    "Banyo Renovasyonu", 
    "Profesyonel Döşeme",
    "Boru Döşeme",
    "Kaçak Tespiti",
    "Kombi Servisi",
    "Mutfak Renovasyonu",
    "Doğalgaz Tesisatı"
  ];

  const districts = [
    "Beşiktaş", "Şişli", "Kadıköy", "Üsküdar", "Fatih", "Beyoğlu",
    "Bakırköy", "Maltepe", "Sarıyer", "Avcılar", "Pendik", "Kartal"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <h3 className="text-3xl font-serif font-bold mb-6">Anadolu Tesisat Ustası</h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              İstanbul genelinde 15+ yıllık deneyimimizle tesisat, döşeme ve renovasyon 
              hizmetlerinde kaliteli işçilik garantisi sunuyoruz.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-sm">
                <Shield className="w-4 h-4 mr-2 text-accent" />
                <span>Lisanslı & Sigortalı</span>
              </div>
              <div className="flex items-center text-sm">
                <Award className="w-4 h-4 mr-2 text-accent" />
                <span>2 Yıl Garanti</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-serif font-semibold mb-6">Hizmetlerimiz</h4>
            <ul className="space-y-3 text-primary-foreground/80 text-sm">
              {services.map((service) => (
                <li key={service} className="hover:text-accent transition-colors duration-300 cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-serif font-semibold mb-6">İletişim</h4>
            <div className="space-y-4 text-primary-foreground/80 text-sm">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-accent flex-shrink-0" />
                <span>(0555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-accent flex-shrink-0" />
                <span>info@anadolutesisat.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 text-accent flex-shrink-0 mt-0.5" />
                <span>İstanbul - Tüm İlçeler</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-3 text-accent flex-shrink-0" />
                <span>7/24 Acil Servis</span>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-xl font-serif font-semibold mb-6">Hizmet Alanlarımız</h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-primary-foreground/70">
              {districts.map((district) => (
                <div key={district} className="hover:text-accent transition-colors duration-300 cursor-pointer">
                  {district}
                </div>
              ))}
              <div className="col-span-2 text-accent font-semibold mt-2">
                + İstanbul'un tüm ilçeleri
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-accent/10 rounded-3xl p-8 mb-12 text-center">
          <h3 className="text-2xl font-serif font-bold mb-4">
            Acil Durum mu? Hemen Arayın!
          </h3>
          <p className="text-primary-foreground/80 mb-6">
            İstanbul genelinde 7/24 acil tesisat hizmetimiz mevcuttur
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.open("tel:+905551234567", "_self")}
              className="bg-accent hover:bg-accent-dark text-accent-foreground px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            >
              📞 Acil Arama: (0555) 123-4567
            </button>
            <button 
              onClick={() => {
                const message = encodeURIComponent("Acil tesisat sorunu var. Hemen yardım gerekiyor!");
                window.open(`https://wa.me/905551234567?text=${message}`, "_blank");
              }}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            >
              💬 WhatsApp Acil
            </button>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center text-primary-foreground/60 text-sm">
            <p>
              © 2024 Anadolu Tesisat Ustası. Tüm hakları saklıdır. | Lisanslı ve Sigortalı
            </p>
            <div className="mt-4 md:mt-0">
              <span className="text-accent">İstanbul</span> genelinde kaliteli hizmet
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;