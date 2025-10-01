import React from "react";

const jobs = [
  {
    title: "BASINÇ DÜŞÜRÜCÜ",
    description: "Konut ve İş Yerleriniz için; Su basınç düşürücü satış ve montajı."
  },
  {
    title: "ÇAMAŞIR VE BULAŞIK MAKİNE MONTAJI",
    description: "Evlerinizdeki çamaşır makinesi ve bulaşık makinelerinin montajı."
  },
  {
    title: "BATARYA VE MUSLUK",
    description: "Mutfak, lavabo ve banyo musluklarının değişimi, tamiri ve montajı."
  },
  {
    title: "DOĞALGAZ TESİSAT (Bakım)",
    description: "Doğalgaz tesisatı ve kombi sistemlerinde sadece bakım hizmeti."
  },
  {
    title: "DUŞ SETİ",
    description: "Banyolarınız için duş seti satışı ve montajı."
  },
  {
    title: "DUŞAKABİN MONTAJ",
    description: "Cam, mika ve özel ölçü duşakabin tamir ve montajı."
  },
  {
    title: "KALORİFER TESİSAT (Bakım)",
    description: "Kalorifer tesisatı ve peteklerde sadece bakım hizmeti."
  },
  {
    title: "KAMERALI KANAL GÖRÜNTÜLEME",
    description: "Pimaş gider hatlarındaki tıkanıklık ve kaçakların tespiti için kanal görüntüleme."
  },
  {
    title: "KAMERALI SU KAÇAK TESPİTİ",
    description: "Pis su gider hatlarındaki kaçakları kameralı cihazlarla tespit ediyoruz."
  },
  {
    title: "KLOZET MUSLUĞU",
    description: "Klozetlerdeki ara muslukların satışı, montajı ve değişimi."
  },
  {
    title: "KLOZET VE REZERVUAR",
    description: "Klozet vitrifiye değişimi, lavabo montajı, rezervuar arıza-tamir-montajı."
  },
  {
    title: "KOMBİ VE PETEK TEMİZLEME (Bakım)",
    description: "Kombi ve peteklerde sadece bakım ve temizlik hizmeti."
  },
  {
    title: "OCAK GAZ HORTUMU",
    description: "Ocak gaz hortumlarının değişimi, montajı ve satışı."
  },
  {
    title: "SU KAÇAK TESPİTİ VE ONARIMI",
    description: "Kırmadan dökmeden su kaçak tespit cihazlarımız ile su kaçaklarını tespit ediyoruz."
  },
  {
    title: "SU SAATİ",
    description: "Ev ve iş yerleriniz için su saati arıza, değişim ve montaj hizmeti."
  },
  {
    title: "TIKANIKLIK AÇMA",
    description: "%100 kırmadan ve dökmeden tıkanıklık robotlarımız ile pimaş gider hattını açıyoruz."
  }
];

const JobList = () => (
  <section className="section-padding bg-background px-2 sm:px-4 md:px-8">
    <div className="container-max">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-5xl font-serif font-bold mb-6 text-primary fade-in">
          Yaptığımız İşler
        </h2>
        <div className="w-32 h-1.5 bg-gradient-accent mx-auto mb-6 rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div key={job.title} className="bg-card rounded-2xl p-6 shadow-soft border border-border/50 fade-in">
            <h3 className="text-xl font-bold text-primary mb-2">{job.title}</h3>
            <p className="text-muted-foreground text-base">{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default JobList;
