import { CheckCircle, Globe, TrendingUp, Shield } from "lucide-react";

const EcoForgeAbout = () => {
  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-eco-green" />,
      title: "Transparent Offsets",
      description: "Blockchain-verified carbon credits with full traceability"
    },
    {
      icon: <Globe className="w-6 h-6 text-eco-blue" />,
      title: "Global Accessibility", 
      description: "Democratizing carbon markets for everyone worldwide"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-eco-green" />,
      title: "Yield Generation",
      description: "Earn rewards while contributing to environmental impact"
    },
    {
      icon: <Shield className="w-6 h-6 text-eco-blue" />,
      title: "ESG Alignment",
      description: "Perfect for organizations meeting sustainability goals"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Bridging Carbon Markets with DeFi
          </h2>
          <div className="w-24 h-1 bg-eco-green mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Description */}
          <div className="fade-in-delay-1">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              EcoForge bridges traditional carbon markets with DeFi, allowing users to mint 
              <span className="font-semibold text-eco-green"> EFT tokens</span> (pegged to 1 tonne CO2e), 
              trade in liquidity pools, stake for yields, and retire credits via DAO governance—all on 
              Avalanche's fast, low-fee network.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Transform your environmental impact into financial opportunity while contributing 
              to a sustainable future through verified, transparent carbon offsetting.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 fade-in-delay-2">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="card-gradient p-6 rounded-xl hover-lift eco-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-2 rounded-lg bg-accent/50">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoForgeAbout;