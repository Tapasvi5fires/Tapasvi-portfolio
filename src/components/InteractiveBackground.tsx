import { useEffect, useState } from 'react';
import heroImage from '@/assets/hero-bg.jpg';
import aboutImage from '@/assets/about-bg.jpg';
import projectsImage from '@/assets/projects-bg.jpg';

interface InteractiveBackgroundProps {
  currentSection: string;
}

const InteractiveBackground = ({ currentSection }: InteractiveBackgroundProps) => {
  const [backgroundImage, setBackgroundImage] = useState(heroImage);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    
    const timer = setTimeout(() => {
      switch (currentSection) {
        case 'hero':
          setBackgroundImage(heroImage);
          break;
        case 'about':
          setBackgroundImage(aboutImage);
          break;
        case 'projects':
          setBackgroundImage(projectsImage);
          break;
        default:
          setBackgroundImage(heroImage);
      }
      setIsTransitioning(false);
    }, 150);

    return () => clearTimeout(timer);
  }, [currentSection]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Main Background Image */}
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ${
          isTransitioning ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
        }`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Overlay for Professional Look */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/95" />
      
      {/* Animated Geometric Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Professional Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
};

export default InteractiveBackground;