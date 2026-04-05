import { MapPin, ArrowRight } from "lucide-react";

const routes = [
  {
    county: "Kilifi County",
    paths: [
      { from: "Kilifi Town", to: "Malindi" },
      { from: "Kilifi Town", to: "Watamu" },
      { from: "Mtwapa", to: "Kilifi Town" },
      { from: "Kilifi Town", to: "Kaloleni" },
      { from: "Mariakani", to: "Kilifi Town" },
      { from: "Kilifi Town", to: "Rabai" },
    ],
  },
  {
    county: "Mombasa County",
    paths: [
      { from: "Mombasa CBD", to: "Nyali" },
      { from: "Mombasa CBD", to: "Bamburi" },
      { from: "Mombasa CBD", to: "Likoni" },
      { from: "Changamwe", to: "Mombasa CBD" },
      { from: "Mombasa CBD", to: "Kisauni" },
      { from: "Mombasa CBD", to: "Shanzu" },
    ],
  },
  {
    county: "Inter-County",
    paths: [
      { from: "Mombasa", to: "Kilifi Town" },
      { from: "Mombasa", to: "Malindi" },
      { from: "Bamburi", to: "Mtwapa" },
      { from: "Mombasa", to: "Mariakani" },
    ],
  },
];

const RoutesSection = () => {
  return (
    <section id="routes" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-widest text-sm">Where We Operate</span>
          <h2 className="text-4xl md:text-6xl text-secondary-foreground mt-3">OUR ROUTES</h2>
          <p className="text-secondary-foreground/60 mt-4 max-w-xl mx-auto">
            Serving all major routes within Kilifi and Mombasa counties with reliable 
            and timely delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {routes.map((group) => (
            <div
              key={group.county}
              className="bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-lg overflow-hidden"
            >
              <div className="bg-primary px-6 py-4">
                <h3 className="text-2xl text-primary-foreground flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  {group.county}
                </h3>
              </div>
              <div className="p-6 space-y-3">
                {group.paths.map((path, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-secondary-foreground/80 text-sm"
                  >
                    <span className="font-medium min-w-[100px]">{path.from}</span>
                    <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{path.to}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoutesSection;
