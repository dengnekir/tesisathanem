import plumbingIcon from "@/assets/plumbing-icon.jpg";
import tilingIcon from "@/assets/tiling-icon.jpg";
import renovationIcon from "@/assets/renovation-icon.jpg";
import { useState } from "react";
import { X } from "lucide-react";

const Services = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const openLightbox = (imageSrc: string) => {
    setLightboxImage(imageSrc);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = "auto";
  };

  const services = [
    {
      title: "Tesisat Hizmetleri",
      icon: plumbingIcon,
      description:
        "Acil onarımdan kuruluma kadar İstanbul genelinde eksiksiz tesisat çözümleri sunuyoruz.",
      features: [
        "Acil Tesisat Tamiri",
        "Boru Döşeme",
        "Kaçak Tespiti",
        "Bakım & Onarım",
        "Su Tesisatı",
      ],
    },
    {
      title: "Döşeme İşleri",
      icon: tilingIcon,
      description:
        "Banyo, mutfak ve tüm mekanlarda profesyonel döşeme hizmetleri ile estetik ve dayanıklı sonuçlar.",
      features: [
        "Banyo Döşemesi",
        "Mutfak Döşemesi",
        "Zemin Döşemesi",
        "Doğal Taş",
        "Seramik & Porselen",
        "Özel Tasarım",
      ],
    },
    {
      title: "Renovasyon",
      icon: renovationIcon,
      description:
        "Banyodan mutfağa, tam renovasyon hizmetleri ile mekanlarınızı yeniden tasarlıyoruz.",
      features: [
        "Banyo Yenileme",
        "Mutfak Renovasyonu",
        "Komple Tadilat",
        "Proje Yönetimi",
        "Dekorasyon",
        "Teknik Resim",
      ],
    },
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-primary fade-in">
            Hizmetlerimiz
          </h2>
          <div className="w-32 h-1.5 bg-gradient-accent mx-auto mb-10 rounded-full"></div>
          <p
            className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in leading-relaxed"
            style={{ animationDelay: "0.2s" }}
          >
            İstanbul genelinde profesyonel ekibimiz ve kaliteli malzemelerimizle
            mükemmel sonuçlar için çalışıyoruz
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card fade-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div
                className="w-20 h-20 mb-8 rounded-2xl overflow-hidden shadow-soft group-hover:shadow-warm transition-shadow duration-500 cursor-pointer"
                onClick={() => openLightbox(service.icon)}
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <h3 className="text-2xl font-serif font-semibold mb-6 text-primary group-hover:text-accent transition-colors duration-500">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-base">
                    <div className="w-2 h-2 bg-accent rounded-full mr-4 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-border/50">
                <button className="text-accent font-semibold hover:text-accent-dark transition-colors duration-300">
                  Detaylı Bilgi →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className="text-center mt-20 fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="bg-gradient-primary text-primary-foreground rounded-3xl p-12 shadow-strong">
            <h3 className="text-3xl font-serif font-bold mb-4">
              Acil Durum mu?
            </h3>
            <p className="text-xl opacity-90 mb-8">
              İstanbul genelinde 7/24 acil tesisat hizmetimizden yararlanın
            </p>
            <button
              onClick={() => window.open("tel:+905354703826", "_self")}
              className="btn-hero bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30"
            >
              Acil Arama: (0535) 470-3826
            </button>
          </div>
        </div>

        {/* Image Lightbox */}
        {lightboxImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div
              className="relative max-w-4xl max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-black/60 text-white flex items-center justify-center backdrop-blur-sm hover:bg-black/80 transition-all duration-300"
                aria-label="Kapat"
              >
                <X size={24} />
              </button>

              <img
                src={lightboxImage}
                alt="Hizmet görseli"
                className="max-w-full max-h-full object-contain rounded-lg shadow-strong"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
