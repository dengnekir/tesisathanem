import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import photo1 from "@/assets/photo1.jpg";
import photo2 from "@/assets/photo2.jpg";
import photo3 from "@/assets/photo3.jpg";
import photo4 from "@/assets/photo4.jpg";

const DecorationGallery = () => {
  const images = [
    { id: 1, src: photo1, title: "Lavabo yenilemesi" },
    { id: 2, src: photo2, title: "Fayans döşeme" },
    { id: 3, src: photo3, title: "Banyo duvarlarına fayans döşeme" },
    { id: 4, src: photo4, title: "Odaya fayans döşeme" },
  ];

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setActiveIndex(null);
  };

  const nextImage = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % images.length);
  };

  const prevImage = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, activeIndex]);

  return (
    <section id="decoration" className="section-padding bg-secondary">
      <div className="container-max">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif text-primary">
            Dekorasyon
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dekorasyon çalışmalarımızdan seçtiğimiz görseller
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <div
              key={img.id}
              className="project-card fade-in group"
              style={{ animationDelay: `${index * 0.08}s` }}
              onClick={() => openModal(index)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/15 transition-colors duration-500" />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-base font-medium text-primary">
                  {img.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {isOpen && activeIndex !== null && (
          <div
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div
              className="bg-black rounded-2xl overflow-hidden shadow-strong w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-white/90 bg-white/10 hover:bg-white/20 rounded-full p-2"
                aria-label="Kapat"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev */}
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-white/90 bg-white/10 hover:bg-white/20 rounded-full p-2"
                aria-label="Önceki"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next */}
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/90 bg-white/10 hover:bg-white/20 rounded-full p-2"
                aria-label="Sonraki"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image */}
              <img
                src={images[activeIndex].src}
                alt={images[activeIndex].title}
                className="w-full h-auto max-h-[85vh] object-contain bg-black"
              />
              <div className="p-4 text-center text-white/90 text-sm">
                {activeIndex + 1} / {images.length} —{" "}
                {images[activeIndex].title}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DecorationGallery;
