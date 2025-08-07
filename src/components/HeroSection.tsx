import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Code, Brain, Github, Linkedin, Instagram } from 'lucide-react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "AI Developer & Data Scientist";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Professional Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-32 w-3 h-3 bg-primary rounded-full animate-pulse opacity-60" />
        <div className="absolute top-64 right-40 w-2 h-2 bg-secondary rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-48 w-4 h-4 bg-accent rounded-full animate-pulse opacity-50" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Floating Icons */}
          <div className="relative mb-8">
            <div className="absolute -top-10 -left-10 opacity-20">
              <Code className="w-12 h-12 text-primary animate-float" />
            </div>
            <div className="absolute -top-5 -right-5 opacity-20">
              <Brain className="w-10 h-10 text-secondary animate-float" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-8 animate-zoom-in">
            <h1 className="text-5xl md:text-7xl font-cyber font-bold">
              <span className="text-gradient">TAPASVI</span>
              <br />
              <span className="text-foreground">PANCHAGNULA</span>
            </h1>

            <div className="h-16 flex items-center justify-center">
              <p className="text-2xl md:text-3xl text-muted-foreground font-code">
                {displayText}
                <span className="animate-pulse">|</span>
              </p>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Crafting intelligent solutions through cutting-edge AI, machine learning, 
              and data science. Transforming complex problems into elegant code.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
              <Button 
                variant="default" 
                size="lg" 
                className="group bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://github.com/Tapasvi5fires', '_blank')}
              >
                <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                View My Work
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary/50 hover:border-primary hover:bg-primary/10 text-foreground hover:text-primary transition-all duration-300 px-8 py-4 rounded-xl font-semibold"
                onClick={scrollToAbout}
              >
                Learn More
                <ArrowDown className="w-5 h-5 ml-2 animate-bounce" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center mt-8">
              {[
                { icon: Github, url: 'https://github.com/Tapasvi5fires', label: 'GitHub' },
                { icon: Linkedin, url: 'https://www.linkedin.com/in/tapasvi-panchagnula-96986227b/', label: 'LinkedIn' },
                { icon: Instagram, url: 'https://www.instagram.com/tapasvi_5fires/', label: 'Instagram' }
              ].map((social, index) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="sm"
                  className="p-3 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => window.open(social.url, '_blank')}
                >
                  <social.icon className="w-6 h-6" />
                  <span className="sr-only">{social.label}</span>
                </Button>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border/30">
              {[
                { label: 'Projects', value: '15+' },
                { label: 'Technologies', value: '20+' },
                { label: 'Experience', value: '3+ Years' },
                { label: 'Contributions', value: '500+' }
              ].map((stat, index) => (
                <div 
                  key={stat.label} 
                  className="text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-gradient font-cyber mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;