const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground fade-in">
            About ProFlow Services
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              15+ Years of Excellence
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              With over 15 years of experience in the plumbing and renovation industry, 
              ProFlow Services has built a reputation for delivering exceptional quality 
              and professional service. Our team of certified professionals is dedicated 
              to providing reliable solutions that stand the test of time.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              From emergency plumbing repairs to complete bathroom renovations, we handle 
              every project with meticulous attention to detail and a commitment to 
              customer satisfaction.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">1000+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Emergency Service</div>
              </div>
            </div>
          </div>
          
          <div className="fade-in" style={{animationDelay: '0.3s'}}>
            <div className="bg-card rounded-xl p-8 shadow-medium">
              <h4 className="text-xl font-semibold mb-4 text-primary">Why Choose Us?</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Licensed & Insured Professionals</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Quality Materials & Workmanship</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Transparent Pricing & Free Quotes</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Customer Satisfaction Guarantee</span>
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