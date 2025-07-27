import { Button } from "@/components/ui/button";
import heroForest from "@/assets/hero-forest.jpg";
import { Leaf, Link2 } from "lucide-react";

const EcoForgeHero = () => {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center parallax-bg hero-gradient"
      style={{
        backgroundImage: `linear-gradient(rgba(34, 139, 34, 0.8), rgba(51, 153, 204, 0.8)), url(${heroForest})`,
      }}
    >
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-eco-green/20 via-transparent to-eco-blue/20 animate-pulse"></div>
      
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Logo */}
        <div className="mb-8 fade-in">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="relative">
              <Leaf className="w-16 h-16 text-white glow-effect" />
              <Link2 className="w-6 h-6 text-white absolute -bottom-1 -right-1 opacity-80" />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight">
              EcoForge
            </h1>
          </div>
        </div>

        {/* Tagline */}
        <div className="mb-12 fade-in-delay-1">
          <h2 className="text-2xl md:text-4xl font-light text-white/95 mb-6 leading-relaxed">
            Forge a Sustainable Future:
          </h2>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
            Tokenize Carbon, Earn Yields, Offset Emissions
          </p>
        </div>

        {/* CTA Button */}
        <div className="fade-in-delay-2">
          <Button 
            variant="eco" 
            size="lg" 
            onClick={scrollToFeatures}
            className="text-lg px-8 py-4 rounded-xl font-semibold bg-eco-green hover:bg-eco-green/90 text-white"
          >
            Explore EcoForge
            <Leaf className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Floating indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 fade-in-delay-3">
          <div className="animate-bounce">
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
          <p className="text-sm mt-2">Scroll to explore</p>
        </div>
      </div>
    </section>
  );
};

export default EcoForgeHero;