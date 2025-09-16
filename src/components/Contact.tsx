import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MessageCircle, Mail, MapPin, Clock, Award } from "lucide-react";

const Contact = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Merhaba! Tesisat, döşeme ve renovasyon hizmetleriniz hakkında bilgi almak istiyorum.");
    window.open(`https://wa.me/905551234567?text=${message}`, "_blank");
  };

  const handlePhoneClick = () => {
    window.open("tel:+905551234567", "_self");
  };

  const istanbulDistricts = [
    "Adalar", "Arnavutköy", "Ataşehir", "Avcılar", "Bağcılar", "Bahçelievler", 
    "Bakırköy", "Başakşehir", "Bayrampaşa", "Beşiktaş", "Beykoz", "Beylikdüzü", 
    "Beyoğlu", "Büyükçekmece", "Çatalca", "Çekmeköy", "Esenler", "Esenyurt", 
    "Eyüpsultan", "Fatih", "Gaziosmanpaşa", "Güngören", "Kadıköy", "Kağıthane", 
    "Kartal", "Küçükçekmece", "Maltepe", "Pendik", "Sancaktepe", "Sarıyer", 
    "Silivri", "Şile", "Şişli", "Sultangazi", "Sultanbeyli", "Tuzla", 
    "Ümraniye", "Üsküdar", "Zeytinburnu"
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-primary fade-in">
            İletişim
          </h2>
          <div className="w-32 h-1.5 bg-gradient-accent mx-auto mb-10 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in leading-relaxed" style={{animationDelay: '0.2s'}}>
            İstanbul genelinde hizmet veriyoruz. Ücretsiz keşif için hemen iletişime geçin
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="fade-in">
            <div className="bg-gradient-primary text-primary-foreground rounded-3xl p-10 shadow-strong mb-10">
              <h3 className="text-3xl font-serif font-semibold mb-8">İletişim Bilgileri</h3>
              
              <div className="space-y-8">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-6 backdrop-blur-sm">
                    <Phone className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg mb-1">Telefon</div>
                    <div className="text-primary-foreground/90 text-lg">(0555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-6 backdrop-blur-sm">
                    <MessageCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg mb-1">WhatsApp</div>
                    <div className="text-primary-foreground/90 text-lg">(0555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-6 backdrop-blur-sm">
                    <Mail className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg mb-1">E-posta</div>
                    <div className="text-primary-foreground/90 text-lg">info@anadolutesisat.com</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-6 backdrop-blur-sm">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg mb-1">Hizmet Alanı</div>
                    <div className="text-primary-foreground/90 text-lg">İstanbul - Tüm İlçeler</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-6 backdrop-blur-sm">
                    <Clock className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg mb-1">Çalışma Saatleri</div>
                    <div className="text-primary-foreground/90 text-lg">7/24 Acil Servis</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-6 backdrop-blur-sm">
                    <Award className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg mb-1">Garanti</div>
                    <div className="text-primary-foreground/90 text-lg">2 Yıl İş Garantisi</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 gap-6">
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

          {/* Contact Form */}
          <div className="fade-in" style={{animationDelay: '0.4s'}}>
            <div className="bg-card rounded-3xl p-10 shadow-warm">
              <h3 className="text-3xl font-serif font-semibold mb-8 text-primary">Ücretsiz Keşif Talep Edin</h3>
              
              <form className="space-y-8">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-base font-semibold text-foreground mb-3">
                      Ad
                    </label>
                    <Input placeholder="Adınız" className="bg-background h-12 text-base rounded-xl" />
                  </div>
                  <div>
                    <label className="block text-base font-semibold text-foreground mb-3">
                      Soyad
                    </label>
                    <Input placeholder="Soyadınız" className="bg-background h-12 text-base rounded-xl" />
                  </div>
                </div>

                <div>
                  <label className="block text-base font-semibold text-foreground mb-3">
                    Telefon
                  </label>
                  <Input type="tel" placeholder="(05__) ___-____" className="bg-background h-12 text-base rounded-xl" />
                </div>

                <div>
                  <label className="block text-base font-semibold text-foreground mb-3">
                    İlçe (İstanbul)
                  </label>
                  <select className="w-full px-4 py-3 bg-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-ring text-base">
                    <option>İlçe seçiniz</option>
                    {istanbulDistricts.map((district) => (
                      <option key={district} value={district}>{district}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-base font-semibold text-foreground mb-3">
                    Hizmet Türü
                  </label>
                  <select className="w-full px-4 py-3 bg-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-ring text-base">
                    <option>Hizmet türü seçiniz</option>
                    <option>Tesisat Tamiri</option>
                    <option>Banyo Renovasyonu</option>
                    <option>Döşeme İşleri</option>
                    <option>Acil Servis</option>
                    <option>Komple Tadilat</option>
                    <option>Diğer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-base font-semibold text-foreground mb-3">
                    Proje Detayları
                  </label>
                  <Textarea 
                    placeholder="Proje detaylarınızı, ihtiyaçlarınızı ve sorularınızı buraya yazabilirsiniz..."
                    className="bg-background min-h-[140px] text-base rounded-xl"
                  />
                </div>

                <Button className="btn-hero w-full h-14 text-lg font-semibold">
                  Ücretsiz Keşif Talep Et
                </Button>
                
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  * Keşif tamamen ücretsizdir ve size herhangi bir yükümlülük getirmez. 
                  24 saat içinde sizinle iletişime geçeceğiz.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-20 fade-in" style={{animationDelay: '0.6s'}}>
          <div className="bg-secondary rounded-3xl p-10">
            <h3 className="text-2xl font-serif font-semibold mb-6 text-primary text-center">
              İstanbul Genelinde Hizmet Verdiğimiz İlçeler
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm">
              {istanbulDistricts.map((district) => (
                <div key={district} className="text-center py-2 px-3 bg-card rounded-lg text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors duration-300">
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