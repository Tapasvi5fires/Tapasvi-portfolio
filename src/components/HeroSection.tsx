import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Code, Brain } from 'lucide-react';

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
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
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
                variant="hero" 
                size="xl" 
                className="group"
                onClick={() => window.open('https://github.com/Tapasvi5fires', '_blank')}
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                View My Work
              </Button>
              
              <Button 
                variant="outline" 
                size="xl"
                className="border-primary/30 hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300"
                onClick={scrollToAbout}
              >
                Learn More
                <ArrowDown className="w-5 h-5 ml-2 animate-bounce" />
              </Button>
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