import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import RoutesSection from "@/components/RoutesSection";
import PaymentSection from "@/components/PaymentSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <RoutesSection />
      <PaymentSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
