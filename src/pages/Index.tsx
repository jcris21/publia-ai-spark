import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import MethodologySection from "@/components/MethodologySection";
import ImpactSection from "@/components/ImpactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <CapabilitiesSection />
    <MethodologySection />
    <ImpactSection />
    <FooterSection />
  </div>
);

export default Index;
