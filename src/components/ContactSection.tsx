import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-widest text-sm">Get In Touch</span>
          <h2 className="text-4xl md:text-6xl text-secondary-foreground mt-3">CONTACT US</h2>
          <p className="text-secondary-foreground/60 mt-4 max-w-xl mx-auto">
            Ready to move your materials? Reach out for a quote or any inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { icon: Phone, title: "Phone", info: "+254 700 000 000", sub: "+254 711 000 000" },
            { icon: Mail, title: "Email", info: "info@sopsop.co.ke", sub: "orders@sopsop.co.ke" },
            { icon: MapPin, title: "Location", info: "Mombasa, Kenya", sub: "Kilifi, Kenya" },
            { icon: Clock, title: "Working Hours", info: "Mon - Sat: 6AM - 6PM", sub: "Sunday: Closed" },
          ].map((item) => (
            <div
              key={item.title}
              className="text-center p-8 bg-secondary-foreground/5 rounded-lg border border-secondary-foreground/10"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl text-secondary-foreground mb-3">{item.title}</h3>
              <p className="text-secondary-foreground/80 text-sm">{item.info}</p>
              <p className="text-secondary-foreground/60 text-sm mt-1">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
