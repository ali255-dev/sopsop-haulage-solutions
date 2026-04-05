import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/sopsop-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Routes", href: "#routes" },
    { label: "Payment", href: "#payment" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="SOPSOP Logo" className="h-12 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-secondary-foreground/80 hover:text-primary transition-colors font-medium text-sm uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="tel:+254700000000"
          className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md font-semibold text-sm hover:bg-primary/90 transition-colors"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-secondary-foreground"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-secondary border-t border-border">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-6 py-3 text-secondary-foreground/80 hover:text-primary hover:bg-secondary/50 transition-colors text-sm uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+254700000000"
            className="block mx-4 mb-4 mt-2 text-center bg-primary text-primary-foreground px-5 py-2.5 rounded-md font-semibold text-sm"
          >
            Call Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
