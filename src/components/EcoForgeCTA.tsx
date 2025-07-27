import { Button } from "@/components/ui/button";
import { FileText, Wallet, MessageCircle, Leaf, Users, Zap } from "lucide-react";

const EcoForgeCTA = () => {
  const handleConnectWallet = () => {
    // Simulate Web3 wallet connection
    alert("MetaMask connection coming soon! 🦊");
  };

  const stats = [
    { number: "10M+", label: "Tonnes CO2e Tokenized", icon: <Leaf className="w-5 h-5" /> },
    { number: "5K+", label: "Active Users", icon: <Users className="w-5 h-5" /> },
    { number: "99.9%", label: "Uptime", icon: <Zap className="w-5 h-5" /> }
  ];

  return (
    <section className="relative py-20 px-4 hero-gradient overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-eco-green/20 via-transparent to-eco-blue/20"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Main CTA */}
        <div className="mb-16 fade-in">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join the ReFi Revolution
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Be part of the future where finance meets environmental impact. 
            Start your sustainable DeFi journey today.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in-delay-1">
            <Button 
              variant="hero" 
              size="lg"
              asChild
              className="text-lg px-8 py-4 rounded-xl font-semibold bg-white text-eco-green hover:bg-white/90"
            >
              <a href="https://drive.google.com/file/d/1l1TE2bdkwaDRNUz_TdWLM9aYf6IyZAVW/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <FileText className="w-5 h-5" />
                Read Whitepaper
              </a>
            </Button>
            
            <Button 
              variant="ecoOutline" 
              size="lg"
              onClick={handleConnectWallet}
              className="text-lg px-8 py-4 rounded-xl font-semibold border-white text-white hover:bg-white hover:text-eco-green"
            >
              <Wallet className="w-5 h-5" />
              Connect Wallet
            </Button>
            
            <Button 
              variant="ecoOutline" 
              size="lg"
              className="text-lg px-8 py-4 rounded-xl font-semibold border-white text-white hover:bg-white hover:text-eco-blue"
            >
              <MessageCircle className="w-5 h-5" />
              Join Community
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 fade-in-delay-2">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center items-center gap-2 mb-2">
                <div className="text-white/80">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-white">
                  {stat.number}
                </div>
              </div>
              <div className="text-white/80 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter signup */}
        <div className="mt-16 max-w-md mx-auto fade-in-delay-3">
          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4">
              Stay Updated
            </h3>
            <div className="flex gap-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button 
                variant="hero"
                className="px-6 py-3 bg-white text-eco-green hover:bg-white/90"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoForgeCTA;