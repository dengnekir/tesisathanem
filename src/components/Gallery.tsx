import { useState } from "react";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Modern Bathroom Renovation",
      category: "bathroom",
      beforeImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      afterImage: "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Complete bathroom transformation with modern fixtures and elegant tiling"
    },
    {
      id: 2,
      title: "Kitchen Backsplash Installation",
      category: "tiling",
      beforeImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      afterImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Beautiful subway tile backsplash with professional grouting"
    },
    {
      id: 3,
      title: "Emergency Pipe Repair",
      category: "plumbing",
      beforeImage: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      afterImage: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Quick and efficient emergency plumbing repair service"
    },
    {
      id: 4,
      title: "Master Bathroom Remodel",
      category: "bathroom",
      beforeImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      afterImage: "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Luxury master bathroom with custom tiling and premium fixtures"
    }
  ];

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "bathroom", label: "Bathroom" },
    { key: "tiling", label: "Tiling" },
    { key: "plumbing", label: "Plumbing" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="gallery" className="section-padding bg-secondary">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground fade-in">
            Our Work
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto fade-in" style={{animationDelay: '0.2s'}}>
            See the quality and craftsmanship that sets us apart in every project we complete
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? "bg-gradient-accent text-accent-foreground shadow-medium"
                  : "bg-card text-muted-foreground border border-border hover:bg-muted"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="grid grid-cols-2 gap-1">
                <div className="relative group">
                  <img 
                    src={project.beforeImage} 
                    alt={`${project.title} - Before`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-medium">Before</span>
                  </div>
                </div>
                <div className="relative group">
                  <img 
                    src={project.afterImage} 
                    alt={`${project.title} - After`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-medium">After</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;