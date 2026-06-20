import ParticleBackground from '@/components/ParticleBackground';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TimelineSection from '@/components/TimelineSection';
import SkillsShowcase from '@/components/SkillsShowcase';
import ProjectsSection from '@/components/ProjectsSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import InteractiveBackground from '@/components/InteractiveBackground';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { ScrollProgress } from '@/components/ScrollProgress';
import { CursorTrail } from '@/components/CursorTrail';

const Index = () => {
  const activeSection = useScrollSpy(['hero', 'about', 'timeline', 'skills', 'blog', 'projects', 'contact']);

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden transition-colors duration-300">
      {/* Scroll Progress Neon Line */}
      <ScrollProgress />

      {/* Professional Interactive Cursor Trail */}
      <CursorTrail />

      {/* Interactive Background */}
      <InteractiveBackground currentSection={activeSection} />
      
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-20">
        <HeroSection />
        <AboutSection />
        <TimelineSection />
        <SkillsShowcase />
        <BlogSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border/30 py-8 text-center text-muted-foreground bg-card/20">
        <div className="container mx-auto px-6">
          <p className="text-sm">
            © 2026 Tapasvi Panchagnula. Crafted with ❤️ and cutting-edge technology.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
