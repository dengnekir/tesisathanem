const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-warm">
      <div className="container-max">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-primary fade-in">
            Fayans, Tesisat ve Dekorasyon Ercan Gökçur
          </h2>
          <div className="w-32 h-1.5 bg-gradient-accent mx-auto mb-10 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="fade-in">
            <h3 className="text-3xl font-serif font-semibold mb-6 text-primary">
              İstanbul'da 25+ Yıllık Deneyim
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              İstanbul genelinde 25 yılı aşkın süredir tesisat, döşeme ve
              renovasyon alanında hizmet veren Fayans, Tesisat ve Dekorasyon
              Ercan Gökçur olarak, kaliteli işçilik ve müşteri memnuniyeti
              odaklı yaklaşımımızla sektörde öncü konumdayız.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Acil tesisat tamirlerinden komple banyo renovasyonlarına, her
              projeyi titizlikle ele alıyor ve zamanında teslim ediyoruz.
              Lisanslı ekibimiz ve kaliteli malzemelerimizle uzun ömürlü
              çözümler sunuyoruz.
            </p>

            <div className="grid grid-cols-3 gap-8 mb-10">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-3">350+</div>
                <div className="text-sm text-muted-foreground font-medium">
                  Tamamlanan Proje
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-3">24/7</div>
                <div className="text-sm text-muted-foreground font-medium">
                  Acil Servis
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-3">25+</div>
                <div className="text-sm text-muted-foreground font-medium">
                  Yıl Deneyim
                </div>
              </div>
            </div>
          </div>

          <div className="slide-in-left" style={{ animationDelay: "0.4s" }}>
            <div className="bg-card rounded-3xl p-10 shadow-warm">
              <h4 className="text-2xl font-serif font-semibold mb-6 text-primary">
                Neden Bizi Seçmelisiniz?
              </h4>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-accent rounded-full mr-4 mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">
                      Lisanslı ve Sigortalı Ekip
                    </div>
                    <div className="text-muted-foreground text-sm">
                      Profesyonel sertifikalara sahip uzman ekip
                    </div>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-accent rounded-full mr-4 mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">
                      Kaliteli Malzeme Garantisi
                    </div>
                    <div className="text-muted-foreground text-sm">
                      Sadece A+ kalite malzemeler kullanıyoruz
                    </div>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-accent rounded-full mr-4 mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">
                      Şeffaf Fiyatlandırma
                    </div>
                    <div className="text-muted-foreground text-sm">
                      Ücretsiz keşif ve net fiyat garantisi
                    </div>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-accent rounded-full mr-4 mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">
                      İş Garantisi
                    </div>
                    <div className="text-muted-foreground text-sm">
                      Tüm işlerimizde 2 yıl garanti
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
