import EcoForgeHero from "@/components/EcoForgeHero";
import EcoForgeAbout from "@/components/EcoForgeAbout";
import EcoForgeFeatures from "@/components/EcoForgeFeatures";
import EcoForgeHowItWorks from "@/components/EcoForgeHowItWorks";
import EcoForgeCTA from "@/components/EcoForgeCTA";
import EcoForgeFooter from "@/components/EcoForgeFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <EcoForgeHero />
      <EcoForgeAbout />
      <EcoForgeFeatures />
      <EcoForgeHowItWorks />
      <EcoForgeCTA />
      <EcoForgeFooter />
    </div>
  );
};

export default Index;
