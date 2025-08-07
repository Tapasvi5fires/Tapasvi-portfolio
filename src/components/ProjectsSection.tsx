import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Calendar, Star } from 'lucide-react';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Mental Health Mood Tracker",
      description: "AI-powered mental health application that tracks mood patterns and provides personalized insights using machine learning algorithms.",
      technologies: ["Python", "Machine Learning", "Data Analysis", "Flask"],
      githubUrl: "https://github.com/Tapasvi5fires/mentalhealthmoodtracker",
      featured: true,
      status: "Active",
      lastUpdated: "Jul 2025"
    },
    {
      title: "CodeWizard AI",
      description: "A cosmic AI-powered coding assistant that helps developers write better code with intelligent suggestions and automated code review.",
      technologies: ["Python", "AI", "Natural Language Processing", "OpenAI"],
      githubUrl: "https://github.com/Tapasvi5fires/CodeWizard-AI",
      featured: true,
      status: "Active",
      lastUpdated: "Feb 2025"
    },
    {
      title: "AI Productivity Tracker",
      description: "Advanced productivity monitoring system using webcam analysis, keyboard tracking, and machine learning for behavior insights.",
      technologies: ["Python", "Computer Vision", "ML", "Data Analytics"],
      githubUrl: "https://github.com/Tapasvi5fires/AI-Productivity-Tracker",
      featured: true,
      status: "Active",
      lastUpdated: "Feb 2025"
    },
    {
      title: "Mood to Music",
      description: "Intelligent music recommendation system that analyzes user mood and preferences to suggest personalized playlists.",
      technologies: ["Python", "Recommendation System", "Audio Analysis", "ML"],
      githubUrl: "https://github.com/Tapasvi5fires/Mood_To_Music_",
      featured: false,
      status: "Completed",
      lastUpdated: "Dec 2024"
    },
    {
      title: "Linear Regression Project",
      description: "Comprehensive implementation of linear regression from scratch with visualizations and practical applications.",
      technologies: ["Python", "NumPy", "Matplotlib", "Statistics"],
      githubUrl: "https://github.com/Tapasvi5fires/linear-regression-project",
      featured: false,
      status: "Educational",
      lastUpdated: "Dec 2024"
    },
    {
      title: "Resume Portfolio",
      description: "Interactive resume and portfolio website showcasing projects, skills, and professional experience.",
      technologies: ["HTML", "CSS", "JavaScript", "Web Design"],
      githubUrl: "https://github.com/Tapasvi5fires/Resumemain",
      featured: false,
      status: "Live",
      lastUpdated: "May 2025"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Completed': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Live': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Educational': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      default: return 'bg-muted-foreground/20 text-muted-foreground border-muted-foreground/30';
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Featured <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my latest work in AI, machine learning, and software development. 
            Each project represents a unique challenge solved through innovative technology.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gradient mb-8 font-cyber">🌟 Featured Work</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <Card 
                key={project.title}
                className={`card-glow p-6 h-full transition-all duration-1000 delay-${index * 200} group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="space-y-4">
                  {/* Project Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <Badge className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      {project.lastUpdated}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div>
                    <h4 className="text-xl font-bold text-gradient mb-3 font-cyber group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="text-xs border-border/50 hover:border-primary/50 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-border/30">
                    <Button 
                      variant="cyber" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-primary/30 hover:border-primary hover:bg-primary/10"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* All Projects */}
        <div>
          <h3 className="text-2xl font-bold text-gradient mb-8 font-cyber">💼 All Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className={`card-glow p-6 h-full transition-all duration-1000 delay-${index * 100} group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="space-y-4">
                  {/* Project Header */}
                  <div className="flex items-start justify-between">
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      {project.lastUpdated}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div>
                    <h4 className="text-lg font-bold text-gradient mb-2 font-cyber group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="text-xs border-border/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs border-border/50">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Action Button */}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-primary/30 hover:border-primary hover:bg-primary/10"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-muted-foreground mb-6">
            Want to see more of my work or collaborate on a project?
          </p>
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => window.open('https://github.com/Tapasvi5fires', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            Visit My GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;