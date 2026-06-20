import { useEffect, useState } from 'react';
import { Brain, Code, Database, Cpu } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';
import aboutImage from '@/assets/about-bg.jpg';
import projectsImage from '@/assets/projects-bg.jpg';

interface InteractiveBackgroundProps {
  currentSection: string;
}

const InteractiveBackground = ({ currentSection }: InteractiveBackgroundProps) => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cameraAngle, setCameraAngle] = useState({ rx: 12, ry: 0, tz: -40 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    let rx = 12;
    let ry = 0;
    let tz = -40;

    switch (currentSection) {
      case 'hero':
        rx = 10; ry = -8; tz = -20;
        break;
      case 'about':
        rx = 18; ry = 8; tz = -45;
        break;
      case 'timeline':
        rx = 8; ry = -12; tz = -60;
        break;
      case 'skills':
        rx = 22; ry = 6; tz = -35;
        break;
      case 'blog':
        rx = 14; ry = -6; tz = -50;
        break;
      case 'projects':
        rx = 20; ry = 10; tz = -40;
        break;
      case 'contact':
        rx = 8; ry = 0; tz = -25;
        break;
    }
    setCameraAngle({ rx, ry, tz });
  }, [currentSection]);

  const getParallaxY = (factor: number) => {
    return (scrollY * factor) % 80;
  };

  const getActiveBg = (section: string) => {
    if (['hero', 'contact'].includes(section)) return 'hero';
    if (['about', 'timeline', 'blog'].includes(section)) return 'about';
    if (['skills', 'projects'].includes(section)) return 'projects';
    return 'hero';
  };

  const activeBg = getActiveBg(currentSection);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-background">
      {/* Hero Background */}
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
          activeBg === 'hero' ? 'opacity-25 dark:opacity-20 scale-100' : 'opacity-0 scale-105 pointer-events-none'
        }`}
        style={{ 
          backgroundImage: `url(${heroImage})`,
          transform: `perspective(1200px) rotateX(${cameraAngle.rx + mousePos.y * -4}deg) rotateY(${cameraAngle.ry + mousePos.x * -4}deg) translateZ(${cameraAngle.tz}px)`
        }}
      />

      {/* About Background */}
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
          activeBg === 'about' ? 'opacity-25 dark:opacity-20 scale-100' : 'opacity-0 scale-105 pointer-events-none'
        }`}
        style={{ 
          backgroundImage: `url(${aboutImage})`,
          transform: `perspective(1200px) rotateX(${cameraAngle.rx + mousePos.y * -4}deg) rotateY(${cameraAngle.ry + mousePos.x * -4}deg) translateZ(${cameraAngle.tz}px)`
        }}
      />

      {/* Projects Background */}
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
          activeBg === 'projects' ? 'opacity-25 dark:opacity-20 scale-100' : 'opacity-0 scale-105 pointer-events-none'
        }`}
        style={{ 
          backgroundImage: `url(${projectsImage})`,
          transform: `perspective(1200px) rotateX(${cameraAngle.rx + mousePos.y * -4}deg) rotateY(${cameraAngle.ry + mousePos.x * -4}deg) translateZ(${cameraAngle.tz}px)`
        }}
      />
      
      {/* Overlay to ensure readability and contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
      
      {/* Ambient Shifting Glow Blobs (Tilts in 3D Space) */}
      <div 
        className="absolute inset-0 pointer-events-none transition-transform duration-1000 ease-out"
        style={{ 
          transform: `perspective(1200px) rotateX(${cameraAngle.rx * 0.5 + mousePos.y * 10}deg) rotateY(${cameraAngle.ry * 0.5 + mousePos.x * 10}deg) translateZ(${cameraAngle.tz + 20}px)` 
        }}
      >
        <div className="absolute top-[10%] left-[10%] w-[350px] h-[350px] bg-primary/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[10%] w-[450px] h-[450px] bg-secondary/10 rounded-full blur-[110px]" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-accent/5 rounded-full blur-[90px]" style={{ animationDelay: '4s' }} />
      </div>

      {/* Global Interactive Parallax Floating Elements */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden select-none">
        
        {/* Floating Brain Icon */}
        <div 
          className="absolute right-[6%] top-[15%] opacity-15 dark:opacity-25 transition-transform duration-500 ease-out hidden md:block"
          style={{ 
            transform: `translate(calc(${getParallaxY(-0.1)}px + ${mousePos.x * 25}px), calc(${mousePos.y * 25}px)) rotate(calc(${scrollY * 0.01}deg + ${mousePos.x * 8}deg))` 
          }}
        >
          <Brain className="w-16 h-16 text-secondary animate-float" />
        </div>

        {/* Floating Code Icon */}
        <div 
          className="absolute left-[5%] top-[35%] opacity-15 dark:opacity-25 transition-transform duration-500 ease-out hidden md:block"
          style={{ 
            transform: `translate(calc(${getParallaxY(0.08)}px + ${mousePos.x * -20}px), calc(${mousePos.y * -20}px)) rotate(calc(${scrollY * -0.01}deg + ${mousePos.y * 6}deg))` 
          }}
        >
          <Code className="w-20 h-20 text-primary animate-float" style={{ animationDelay: '1.5s' }} />
        </div>

        {/* Floating Database Icon */}
        <div 
          className="absolute right-[8%] top-[55%] opacity-15 dark:opacity-20 transition-transform duration-500 ease-out hidden md:block"
          style={{ 
            transform: `translate(calc(${getParallaxY(-0.06)}px + ${mousePos.x * 20}px), calc(${mousePos.y * 20}px)) rotate(calc(${scrollY * 0.005}deg + ${mousePos.x * -6}deg))` 
          }}
        >
          <Database className="w-16 h-16 text-accent animate-float" style={{ animationDelay: '3s' }} />
        </div>

        {/* Floating Cpu Icon */}
        <div 
          className="absolute left-[6%] top-[70%] opacity-15 dark:opacity-20 transition-transform duration-500 ease-out hidden md:block"
          style={{ 
            transform: `translate(calc(${getParallaxY(0.06)}px + ${mousePos.x * -30}px), calc(${mousePos.y * -30}px)) rotate(calc(${scrollY * -0.008}deg + ${mousePos.y * -10}deg))` 
          }}
        >
          <Cpu className="w-14 h-14 text-secondary animate-float" style={{ animationDelay: '4.5s' }} />
        </div>

        {/* Floating Glowing Nodes (Pulsing Dots) */}
        <div 
          className="absolute left-[15%] top-[12%] w-3 h-3 bg-primary rounded-full blur-[1px] opacity-40 animate-pulse hidden md:block"
          style={{ transform: `translate(calc(${getParallaxY(0.04)}px + ${mousePos.x * 10}px), ${mousePos.y * 10}px)` }}
        />
        <div 
          className="absolute right-[22%] top-[42%] w-3.5 h-3.5 bg-accent rounded-full blur-[2px] opacity-35 animate-pulse hidden md:block"
          style={{ transform: `translate(calc(${getParallaxY(-0.04)}px + ${mousePos.x * -12}px), ${mousePos.y * -12}px)` }}
        />
        <div 
          className="absolute left-[25%] top-[82%] w-2.5 h-2.5 bg-secondary rounded-full blur-[1px] opacity-45 animate-pulse hidden md:block"
          style={{ transform: `translate(calc(${getParallaxY(0.05)}px + ${mousePos.x * 15}px), ${mousePos.y * 15}px)` }}
        />
      </div>

      {/* Grid Pattern overlay with immersive 3D grid tilt */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] transition-transform duration-1000 ease-out"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary) / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: `perspective(1000px) rotateX(${cameraAngle.rx + mousePos.y * -5}deg) rotateY(${cameraAngle.ry + mousePos.x * -5}deg) translateZ(${cameraAngle.tz - 10}px) scale(1.15)`
        }}
      />
    </div>
  );
};
export default InteractiveBackground;