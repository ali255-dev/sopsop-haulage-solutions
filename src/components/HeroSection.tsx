import heroImg from "@/assets/hero-truck.jpg";
import { Truck, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="SOPSOP transport truck carrying building materials"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/70 to-transparent" />
      </div>

      <div className="relative container mx-auto px-4 pt-24">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <Truck className="w-6 h-6 text-primary" />
            <span className="text-primary font-semibold uppercase tracking-widest text-sm">
              Kilifi & Mombasa Counties
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl text-secondary-foreground leading-none mb-6">
            BUILDING MATERIALS
            <br />
            <span className="text-primary">DELIVERED</span>
          </h1>

          <p className="text-secondary-foreground/70 text-lg md:text-xl max-w-lg mb-10 font-light leading-relaxed">
            Reliable transportation of ballast, sand, stones, and all construction 
            materials across Kilifi and Mombasa. On time, every time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold text-lg hover:bg-primary/90 transition-colors"
            >
              Get a Quote
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 border-2 border-secondary-foreground/30 text-secondary-foreground px-8 py-4 rounded-md font-semibold text-lg hover:border-primary hover:text-primary transition-colors"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
