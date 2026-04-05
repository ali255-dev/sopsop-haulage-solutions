import logo from "@/assets/sopsop-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="SOPSOP" className="h-10 w-auto" loading="lazy" />
            <span className="text-background/60 text-sm">
              © {new Date().getFullYear()} SOPSOP Transport. All rights reserved.
            </span>
          </div>
          <div className="flex gap-6">
            {["Home", "Services", "Routes", "Payment", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-background/50 hover:text-primary text-sm transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
