import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Mail, MapPin, Clock, Award } from "lucide-react";

const Contact = () => {
  const handlePhoneClick = () => {
    window.open("tel:+905354703826", "_self");
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Merhaba! Tesisat, döşeme ve renovasyon hizmetleriniz hakkında bilgi almak istiyorum."
    );
    window.open(`https://wa.me/905354703826?text=${message}`, "_blank");
  };

  const istanbulDistricts = [
    "Adalar",
    "Arnavutköy",
    "Ataşehir",
    "Avcılar",
    "Bağcılar",
    "Bahçelievler",
    "Bakırköy",
    "Başakşehir",
    "Bayrampaşa",
    "Beşiktaş",
    "Beykoz",
    "Beylikdüzü",
    "Beyoğlu",
    "Büyükçekmece",
    "Çatalca",
    "Çekmeköy",
    "Esenler",
    "Esenyurt",
    "Eyüpsultan",
    "Fatih",
    "Gaziosmanpaşa",
    "Güngören",
    "Kadıköy",
    "Kağıthane",
    "Kartal",
    "Küçükçekmece",
    "Maltepe",
    "Pendik",
    "Sancaktepe",
    "Sarıyer",
    "Silivri",
    "Şile",
    "Şişli",
    "Sultangazi",
    "Sultanbeyli",
    "Tuzla",
    "Ümraniye",
    "Üsküdar",
    "Zeytinburnu",
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-primary fade-in">
            İletişim
          </h2>
          <div className="w-32 h-1.5 bg-gradient-accent mx-auto mb-10 rounded-full"></div>
          <p
            className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in leading-relaxed"
            style={{ animationDelay: "0.2s" }}
          >
            İstanbul genelinde hizmet veriyoruz. Hemen iletişime geçin
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="fade-in">
            <div className="bg-gradient-primary text-primary-foreground rounded-3xl p-10 shadow-strong mb-10">
              <h3 className="text-3xl font-serif font-semibold mb-8 text-center">
                İletişim Bilgileri
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                <div
                  className="flex items-center cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={handlePhoneClick}
                >
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-6 backdrop-blur-sm">
                    <Phone className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg mb-1">Telefon</div>
                    <div className="text-primary-foreground/90 text-lg hover:text-accent transition-colors">
                      (0535) 470-3826
                    </div>
                  </div>
                </div>

                <div
                  className="flex items-center cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={handleWhatsAppClick}
                >
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-6 backdrop-blur-sm">
                    <MessageCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg mb-1">WhatsApp</div>
                    <div className="text-primary-foreground/90 text-lg hover:text-green-300 transition-colors">
                      (0535) 470-3826
                    </div>
                  </div>
                </div>

                <div
                  className="flex items-center cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() =>
                    window.open("mailto:omaras4904@gmail.com", "_self")
                  }
                >
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-6 backdrop-blur-sm">
                    <Mail className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg mb-1">E-posta</div>
                    <div className="text-primary-foreground/90 text-lg hover:text-accent transition-colors">
                      omaras4904@gmail.com
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-6 backdrop-blur-sm">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg mb-1">
                      Hizmet Alanı
                    </div>
                    <div className="text-primary-foreground/90 text-lg">
                      İstanbul - Tüm İlçeler
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-6 backdrop-blur-sm">
                    <Clock className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg mb-1">
                      Çalışma Saatleri
                    </div>
                    <div className="text-primary-foreground/90 text-lg">
                      7/24 Acil Servis
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-6 backdrop-blur-sm">
                    <Award className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg mb-1">Garanti</div>
                    <div className="text-primary-foreground/90 text-lg">
                      2 Yıl İş Garantisi
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
              <Button
                onClick={handlePhoneClick}
                className="btn-primary h-16 text-lg font-semibold"
              >
                <Phone className="w-6 h-6 mr-3" />
                Hemen Ara
              </Button>
              <Button
                onClick={handleWhatsAppClick}
                className="btn-hero h-16 text-lg font-semibold bg-green-600 hover:bg-green-700"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-20 fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="bg-secondary rounded-3xl p-10">
            <h3 className="text-2xl font-serif font-semibold mb-6 text-primary text-center">
              İstanbul Genelinde Hizmet Verdiğimiz İlçeler
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm">
              {istanbulDistricts.map((district) => (
                <div
                  key={district}
                  className="text-center py-2 px-3 bg-card rounded-lg text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors duration-300"
                >
                  {district}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
