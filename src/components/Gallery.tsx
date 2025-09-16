import { useState } from "react";
import Lightbox from "./Lightbox";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Beşiktaş Banyo Renovasyonu",
      category: "bathroom",
      location: "Beşiktaş, İstanbul",
      beforeImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      afterImage: "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Modern fayans ve armatürlerle komple banyo yenileme"
    },
    {
      id: 2,
      title: "Kadıköy Mutfak Döşemesi",
      category: "tiling",
      location: "Kadıköy, İstanbul",
      beforeImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      afterImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Özel tasarım seramik ile mutfak duvar döşemesi"
    },
    {
      id: 3,
      title: "Şişli Acil Tesisat",
      category: "plumbing",
      location: "Şişli, İstanbul",
      beforeImage: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      afterImage: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "24 saat içinde tamamlanan acil tesisat onarımı"
    },
    {
      id: 4,
      title: "Üsküdar Lüks Banyo",
      category: "bathroom",
      location: "Üsküdar, İstanbul",
      beforeImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      afterImage: "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Doğal taş ve premium armatürlerle lüks banyo tasarımı"
    },
    {
      id: 5,
      title: "Beyoğlu Zemin Döşemesi",
      category: "tiling",
      location: "Beyoğlu, İstanbul",
      beforeImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      afterImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Geniş alanlarda profesyonel zemin seramik döşemesi"
    },
    {
      id: 6,
      title: "Sarıyer Komple Renovasyon",
      category: "renovation",
      location: "Sarıyer, İstanbul",
      beforeImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      afterImage: "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Tesisat, döşeme ve dekorasyon ile tam renovasyon"
    }
  ];

  const filters = [
    { key: "all", label: "Tüm Projeler" },
    { key: "bathroom", label: "Banyo" },
    { key: "tiling", label: "Döşeme" },
    { key: "plumbing", label: "Tesisat" },
    { key: "renovation", label: "Renovasyon" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const lightboxImages = filteredProjects.map(project => ({
    before: project.beforeImage,
    after: project.afterImage,
    title: project.title
  }));

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % lightboxImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);
  };

  return (
    <section id="gallery" className="section-padding bg-secondary">
      <div className="container-max">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-primary fade-in">
            Projelerimiz
          </h2>
          <div className="w-32 h-1.5 bg-gradient-accent mx-auto mb-10 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in leading-relaxed" style={{animationDelay: '0.2s'}}>
            İstanbul'un her ilçesinde gerçekleştirdiğimiz kaliteli işlerimizi keşfedin
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-8 py-3 rounded-2xl font-medium transition-all duration-500 ${
                activeFilter === filter.key
                  ? "bg-gradient-accent text-accent-foreground shadow-warm scale-105"
                  : "bg-card text-muted-foreground border border-border hover:bg-muted hover:shadow-soft hover:scale-102"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card fade-in group"
              style={{animationDelay: `${index * 0.1}s`}}
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden">
                <div className="grid grid-cols-2 gap-0.5">
                  <div className="relative">
                    <img 
                      src={project.beforeImage} 
                      alt={`${project.title} - Önce`}
                      loading="lazy"
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-3 bg-red-600/90 text-white px-2 py-1 rounded-lg text-xs font-medium backdrop-blur-sm">
                      Önce
                    </div>
                  </div>
                  <div className="relative">
                    <img 
                      src={project.afterImage} 
                      alt={`${project.title} - Sonra`}
                      loading="lazy"
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-3 bg-green-600/90 text-white px-2 py-1 rounded-lg text-xs font-medium backdrop-blur-sm">
                      Sonra
                    </div>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white font-semibold bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                    Büyük Görüntüle
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-serif font-semibold mb-2 text-primary group-hover:text-accent transition-colors duration-500">
                  {project.title}
                </h3>
                <div className="text-accent font-medium text-sm mb-3">
                  📍 {project.location}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        <Lightbox
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          images={lightboxImages}
          currentIndex={currentImageIndex}
          onNext={nextImage}
          onPrev={prevImage}
        />
      </div>
    </section>
  );
};

export default Gallery;