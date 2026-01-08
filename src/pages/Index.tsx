import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import EmpathySection from "@/components/sections/EmpathySection";
import MethodologySection from "@/components/sections/MethodologySection";
import TrustSection from "@/components/sections/TrustSection";
import FAQSection from "@/components/sections/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <EmpathySection />
        <MethodologySection />
        <TrustSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
