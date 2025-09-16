import plumbingIcon from "@/assets/plumbing-icon.jpg";
import tilingIcon from "@/assets/tiling-icon.jpg";
import renovationIcon from "@/assets/renovation-icon.jpg";

const Services = () => {
  const services = [
    {
      title: "Professional Plumbing",
      icon: plumbingIcon,
      description: "Complete plumbing solutions including repairs, installations, and maintenance for residential and commercial properties.",
      features: ["Emergency Repairs", "Pipe Installation", "Leak Detection", "Water Heater Service"]
    },
    {
      title: "Expert Tiling",
      icon: tilingIcon,
      description: "Beautiful and durable tiling solutions for bathrooms, kitchens, and all areas of your home with precision installation.",
      features: ["Bathroom Tiling", "Kitchen Backsplashes", "Floor Tiling", "Custom Designs"]
    },
    {
      title: "Complete Renovations",
      icon: renovationIcon,
      description: "Full-scale renovation services transforming your spaces with quality craftsmanship and attention to detail.",
      features: ["Bathroom Remodels", "Kitchen Upgrades", "Home Improvements", "Project Management"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground fade-in">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto fade-in" style={{animationDelay: '0.2s'}}>
            Professional services delivered with expertise, reliability, and a commitment to excellence
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="service-card fade-in"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="w-16 h-16 mb-6 rounded-lg overflow-hidden shadow-soft">
                <img 
                  src={service.icon} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;