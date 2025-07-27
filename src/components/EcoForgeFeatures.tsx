import { 
  Coins, 
  TrendingUp, 
  Zap, 
  Shield, 
  Users, 
  BarChart3,
  Leaf,
  Recycle
} from "lucide-react";

const EcoForgeFeatures = () => {
  const features = [
    {
      icon: <Coins className="w-8 h-8 text-eco-green" />,
      title: "Tokenization",
      description: "Convert verified carbon offsets into ERC-20/NFT assets with full transparency and immutable records.",
      gradient: "from-eco-green/10 to-eco-green/5"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-eco-blue" />,
      title: "Trading",
      description: "Low-slippage AMM pools for instant trades with minimal fees on Avalanche's high-speed network.",
      gradient: "from-eco-blue/10 to-eco-blue/5"
    },
    {
      icon: <Zap className="w-8 h-8 text-eco-green" />,
      title: "Yield Farming",
      description: "Stake EFT tokens to earn AVAX rewards and eco-fees while supporting environmental initiatives.",
      gradient: "from-eco-green/10 to-eco-green/5"
    },
    {
      icon: <Shield className="w-8 h-8 text-eco-blue" />,
      title: "Verification",
      description: "Oracle-integrated real-world data including satellite imagery for authenticated carbon credits.",
      gradient: "from-eco-blue/10 to-eco-blue/5"
    },
    {
      icon: <Users className="w-8 h-8 text-eco-green" />,
      title: "Governance",
      description: "DAO voting system for green project selection and protocol improvements with community input.",
      gradient: "from-eco-green/10 to-eco-green/5"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-eco-blue" />,
      title: "Dashboard",
      description: "Track your carbon footprint, portfolio performance, and environmental impact in real-time.",
      gradient: "from-eco-blue/10 to-eco-blue/5"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-accent/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Revolutionary Features
          </h2>
          <div className="w-24 h-1 bg-eco-green mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the innovative tools that make EcoForge the leading platform for 
            sustainable DeFi and carbon credit management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`group relative p-8 rounded-2xl bg-gradient-to-br ${feature.gradient} border border-border/50 hover-lift hover-glow transition-smooth`}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="inline-flex p-4 rounded-xl bg-background/50 group-hover:scale-110 transition-bounce">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-eco-green transition-smooth">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-smooth">
                <Leaf className="w-6 h-6 text-eco-green" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 fade-in-delay-3">
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <Recycle className="w-5 h-5 text-eco-green" />
            <span>Powered by Avalanche for fast, sustainable transactions</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoForgeFeatures;