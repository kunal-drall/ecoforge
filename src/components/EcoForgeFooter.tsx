import { Leaf, Github, Twitter, FileText, MessageCircle } from "lucide-react";

const EcoForgeFooter = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    {
      title: "Protocol",
      items: [
        { name: "Whitepaper", href: "#", icon: <FileText className="w-4 h-4" /> },
        { name: "Documentation", href: "#" },
        { name: "Tokenomics", href: "#" },
        { name: "Roadmap", href: "#" }
      ]
    },
    {
      title: "Community",
      items: [
        { name: "Discord", href: "#", icon: <MessageCircle className="w-4 h-4" /> },
        { name: "Twitter", href: "#", icon: <Twitter className="w-4 h-4" /> },
        { name: "Telegram", href: "#" },
        { name: "Blog", href: "#" }
      ]
    },
    {
      title: "Developers",
      items: [
        { name: "GitHub", href: "#", icon: <Github className="w-4 h-4" /> },
        { name: "API Docs", href: "#" },
        { name: "Smart Contracts", href: "#" },
        { name: "Bug Bounty", href: "#" }
      ]
    },
    {
      title: "Resources",
      items: [
        { name: "Carbon Markets", href: "#" },
        { name: "DeFi Guide", href: "#" },
        { name: "Sustainability", href: "#" },
        { name: "FAQ", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main footer content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <Leaf className="w-8 h-8 text-eco-green" />
              </div>
              <span className="text-2xl font-bold">EcoForge</span>
            </div>
            <p className="text-background/80 leading-relaxed mb-6 max-w-sm">
              The future of sustainable finance. Tokenize carbon credits, 
              earn yields, and create environmental impact through DeFi.
            </p>
            <div className="flex items-center gap-2 text-sm text-background/70">
              <img 
                src="https://cryptologos.cc/logos/avalanche-avax-logo.svg" 
                alt="Avalanche" 
                className="w-5 h-5"
              />
              <span>Powered by Avalanche</span>
            </div>
          </div>

          {/* Links sections */}
          {links.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-background mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a 
                      href={item.href}
                      className="flex items-center gap-2 text-background/70 hover:text-eco-green transition-smooth"
                    >
                      {item.icon}
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-background/70 text-sm">
              © {currentYear} EcoForge Protocol. All rights reserved.
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="p-2 rounded-lg bg-background/10 text-background/70 hover:text-eco-green hover:bg-background/20 transition-smooth"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg bg-background/10 text-background/70 hover:text-eco-blue hover:bg-background/20 transition-smooth"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg bg-background/10 text-background/70 hover:text-eco-green hover:bg-background/20 transition-smooth"
                aria-label="Discord"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>

            {/* Legal links */}
            <div className="flex items-center gap-6 text-sm text-background/70">
              <a href="#" className="hover:text-background transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-background transition-smooth">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EcoForgeFooter;