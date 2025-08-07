import ParticleBackground from '@/components/ParticleBackground';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border/30 py-8 text-center text-muted-foreground">
        <div className="container mx-auto px-6">
          <p className="text-sm">
            © 2024 Tapasvi Panchagnula. Crafted with ❤️ and cutting-edge technology.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
