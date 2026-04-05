import { Mountain, Waves, Gem, Blocks, Package, Hammer } from "lucide-react";

const services = [
  { icon: Mountain, title: "Ballast", desc: "High-quality ballast for road and building foundations." },
  { icon: Waves, title: "Sand", desc: "Fine and coarse sand for plastering, building, and landscaping." },
  { icon: Gem, title: "Stones", desc: "Machine-cut and natural stones for all construction needs." },
  { icon: Blocks, title: "Hardcore", desc: "Durable hardcore materials for solid foundation work." },
  { icon: Package, title: "Gravel", desc: "Various grades of gravel for roads and drainage." },
  { icon: Hammer, title: "Other Materials", desc: "Cement blocks, murram, and more building supplies." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-widest text-sm">What We Transport</span>
          <h2 className="text-4xl md:text-6xl text-foreground mt-3">OUR SERVICES</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            We specialize in transporting all types of building and construction materials 
            safely and efficiently to your site.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card border border-border rounded-lg p-8 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
