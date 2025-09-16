import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5551234567?text=Hello! I'd like to get a quote for your services.", "_blank");
  };

  const handlePhoneClick = () => {
    window.open("tel:+15551234567", "_self");
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground fade-in">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto fade-in" style={{animationDelay: '0.2s'}}>
            Ready to start your project? Contact us today for a free consultation and quote
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="fade-in">
            <div className="bg-card rounded-xl p-8 shadow-medium mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Phone</div>
                    <div className="text-muted-foreground">(555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <div className="text-muted-foreground">info@proflowservices.com</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Service Area</div>
                    <div className="text-muted-foreground">Greater Metropolitan Area</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Hours</div>
                    <div className="text-muted-foreground">24/7 Emergency Service</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <Button 
                onClick={handlePhoneClick}
                className="btn-primary h-14 text-lg font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
              <Button 
                onClick={handleWhatsAppClick}
                className="btn-hero h-14 text-lg font-semibold"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in" style={{animationDelay: '0.3s'}}>
            <div className="bg-card rounded-xl p-8 shadow-medium">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Request a Quote</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input placeholder="John" className="bg-background" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input placeholder="Doe" className="bg-background" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input type="email" placeholder="john@example.com" className="bg-background" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone
                  </label>
                  <Input type="tel" placeholder="(555) 123-4567" className="bg-background" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Service Needed
                  </label>
                  <select className="w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring">
                    <option>Select a service</option>
                    <option>Plumbing Repair</option>
                    <option>Bathroom Renovation</option>
                    <option>Tiling Work</option>
                    <option>Emergency Service</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project Details
                  </label>
                  <Textarea 
                    placeholder="Please describe your project or issue in detail..."
                    className="bg-background min-h-[120px]"
                  />
                </div>

                <Button className="btn-hero w-full h-12 text-lg font-semibold">
                  Send Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;