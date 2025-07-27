import { Shield, Coins, TrendingUp, Award } from "lucide-react";

const EcoForgeHowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: <Shield className="w-8 h-8 text-eco-blue" />,
      title: "Verify Offsets",
      description: "Carbon credits are verified through oracle integration with real-world data including satellite imagery and environmental monitoring.",
      color: "eco-blue"
    },
    {
      number: "02", 
      icon: <Coins className="w-8 h-8 text-eco-green" />,
      title: "Mint EFT Tokens",
      description: "Verified offsets are tokenized into EFT tokens (1 token = 1 tonne CO2e) as ERC-20 assets on the Avalanche blockchain.",
      color: "eco-green"
    },
    {
      number: "03",
      icon: <TrendingUp className="w-8 h-8 text-eco-blue" />,
      title: "Trade & Stake",
      description: "Trade EFT tokens in low-slippage AMM pools or stake them to earn AVAX rewards and participate in yield farming.",
      color: "eco-blue"
    },
    {
      number: "04",
      icon: <Award className="w-8 h-8 text-eco-green" />,
      title: "Retire for Impact",
      description: "Permanently retire tokens to generate verifiable carbon offset certificates and track your environmental impact.",
      color: "eco-green"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How EcoForge Works
          </h2>
          <div className="w-24 h-1 bg-eco-green mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A simple four-step process to transform carbon offsets into digital assets 
            while generating sustainable yields and environmental impact.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-32 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <svg className="w-full h-4" viewBox="0 0 800 40" fill="none">
              <path 
                d="M50 20 Q200 20 250 20 Q450 20 550 20 Q700 20 750 20" 
                stroke="url(#gradient)" 
                strokeWidth="2" 
                strokeDasharray="8,4"
                className="animate-pulse"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--eco-green))" />
                  <stop offset="50%" stopColor="hsl(var(--eco-blue))" />
                  <stop offset="100%" stopColor="hsl(var(--eco-green))" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`relative text-center fade-in-delay-${index + 1} group`}
              >
                {/* Step number */}
                <div className="relative mx-auto mb-6 w-20 h-20">
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-${step.color}/20 to-${step.color}/10 border-2 border-${step.color}/30`}></div>
                  <div className="absolute inset-2 rounded-full bg-background flex items-center justify-center">
                    <span className={`text-lg font-bold text-${step.color}`}>
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Icon */}
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-xl bg-accent/50 group-hover:scale-110 transition-bounce">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-eco-green transition-smooth">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Flow diagram */}
        <div className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-eco-green/5 via-eco-blue/5 to-eco-green/5 border border-border/50">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Carbon Credit Flow
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-4 text-center">
            <div className="px-4 py-2 rounded-lg bg-eco-green/10 text-eco-green font-medium">
              Real World Offsets
            </div>
            <div className="text-muted-foreground">→</div>
            <div className="px-4 py-2 rounded-lg bg-eco-blue/10 text-eco-blue font-medium">
              Oracle Verification
            </div>
            <div className="text-muted-foreground">→</div>
            <div className="px-4 py-2 rounded-lg bg-eco-green/10 text-eco-green font-medium">
              EFT Token Mint
            </div>
            <div className="text-muted-foreground">→</div>
            <div className="px-4 py-2 rounded-lg bg-eco-blue/10 text-eco-blue font-medium">
              DeFi Integration
            </div>
            <div className="text-muted-foreground">→</div>
            <div className="px-4 py-2 rounded-lg bg-eco-green/10 text-eco-green font-medium">
              Environmental Impact
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoForgeHowItWorks;