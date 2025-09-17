import plumbingIcon from "@/assets/plumbing-icon.jpg";
import tilingIcon from "@/assets/tiling-icon.jpg";
import renovationIcon from "@/assets/renovation-icon.jpg";

const Services = () => {
  const services = [
    {
      title: "Fayans Döşeme ve Yenileme",
      icon: tilingIcon,
      description: "Banyo, mutfak ve tüm mekanlarda profesyonel döşeme hizmetleri ile estetik ve dayanıklı sonuçlar. Uzman ekibimiz ile kaliteli malzemeler kullanarak mükemmel sonuçlar garantiliyoruz.",
      features: ["Banyo Döşemesi", "Mutfak Döşemesi", "Zemin Döşemesi", "Duvar Kaplaması", "Doğal Taş Uygulaması", "Seramik & Porselen", "Özel Tasarım", "Eski Döşeme Söküm"],
      highlight: true
    },
    {
      title: "Tesisat İşleri",
      icon: plumbingIcon,
      description: "Acil onarımdan kuruluma kadar İstanbul genelinde eksiksiz tesisat çözümleri. Sorumlu usta Ercan Gökçur ile kaliteli ve güvenilir hizmet garantisi.",
      professional: "Sorumlu Usta: Ercan Gökçur",
      features: ["Acil Tesisat Tamiri", "Su Tesisatı Kurulum", "Kaçak Tespiti ve Onarım", "Kombi Servisi", "Doğalgaz Tesisatı", "Boru Döşeme", "Sıhhi Tesisat", "24/7 Acil Servis"],
      highlight: true
    }
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-primary fade-in">
            Hizmetlerimiz
          </h2>
          <div className="w-32 h-1.5 bg-gradient-accent mx-auto mb-10 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in leading-relaxed" style={{animationDelay: '0.2s'}}>
            İstanbul genelinde profesyonel ekibimiz ve kaliteli malzemelerimizle 
            mükemmel sonuçlar için çalışıyoruz
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="service-card fade-in group"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="w-24 h-24 mb-8 rounded-2xl overflow-hidden shadow-soft group-hover:shadow-warm transition-shadow duration-500">
                <img 
                  src={service.icon} 
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <h3 className="text-3xl font-serif font-semibold mb-4 text-primary group-hover:text-accent transition-colors duration-500">
                {service.title}
              </h3>
              
              {service.professional && (
                <div className="mb-6 p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
                  <p className="text-accent font-semibold text-lg">
                    {service.professional}
                  </p>
                </div>
              )}
              
              <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-base">
                    <div className="w-2 h-2 bg-accent rounded-full mr-4 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto pt-6 border-t border-border/50">
                <button className="text-accent font-semibold hover:text-accent-dark transition-colors duration-300 text-lg">
                  Detaylı Bilgi →
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-20 fade-in" style={{animationDelay: '0.8s'}}>
          <div className="bg-gradient-primary text-primary-foreground rounded-3xl p-12 shadow-strong">
            <h3 className="text-3xl font-serif font-bold mb-4">
              Acil Durum mu?
            </h3>
            <p className="text-xl opacity-90 mb-8">
              İstanbul genelinde 7/24 acil tesisat hizmetimizden yararlanın
            </p>
            <button 
              onClick={() => window.open("tel:+905551234567", "_self")}
              className="btn-hero bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30"
            >
              Acil Arama: (0555) 123-4567
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;