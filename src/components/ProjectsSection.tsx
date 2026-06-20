import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { ExternalLink, Github, Calendar, Star, Info, Target, Sparkles, CheckCircle2 } from 'lucide-react';
import mentalHealthBg from '@/assets/mental-health-bg.jpg';
import codeWizardBg from '@/assets/codewizard-bg.jpg';
import productivityBg from '@/assets/productivity-bg.jpg';
import { TiltCard } from './TiltCard';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
  status: string;
  lastUpdated: string;
  backgroundImage?: string;
  details?: {
    challenge: string;
    solution: string;
    metrics: string[];
    fullStack: string[];
  };
}

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects: Project[] = [
    {
      title: "LinkPulse",
      description: "Autonomous Web-to-Knowledge AI Platform. Ingests, structures, and processes complex data feeds from PDFs, repositories, web pages, and transcripts into an ultra-fast hybrid RAG pipeline.",
      technologies: ["Next.js 14", "FastAPI", "Qdrant", "PostgreSQL", "Supabase", "Celery", "Docker"],
      githubUrl: "https://github.com/Tapasvi5fires/LinkPulse",
      demoUrl: "https://linkpulse-eta.vercel.app/",
      featured: true,
      status: "Live",
      lastUpdated: "May 2025",
      details: {
        challenge: "Ingesting noisy, unstructured data from diverse sources (YouTube transcript extraction, web crawling via Playwright, GitHub files) and indexing it for real-time RAG queries without loss of context.",
        solution: "Configured a hybrid retrieval engine combining dense vector search (Qdrant) and sparse keyword retrieval (BM25). Orchestrated processing workloads using asynchronous Celery tasks, Upstash Redis brokers, and Supabase database triggers.",
        metrics: [
          "Sub-100ms unified retrieval latency",
          "Automated YouTube, Instagram, GitHub, and Playwright crawl pipelines",
          "Interactive 2D Knowledge Graph visualization of indexed items"
        ],
        fullStack: ["Next.js 14", "FastAPI", "Qdrant Vector DB", "Supabase (PostgreSQL 16)", "Upstash Redis", "Celery", "Docker", "Playwright"]
      }
    },
    {
      title: "AI Career Mentor",
      description: "Multi-Agent LLM Platform that parses resumes, identifies knowledge gaps, and dynamically maps personalized learning roadmaps with structured contracts.",
      technologies: ["Python", "FastAPI", "Streamlit", "Gemini API", "FAISS", "Docker"],
      githubUrl: "https://github.com/Tapasvi5fires/AI-CAREER-MENTOR",
      demoUrl: "https://ai-career-mentor-frontend-2u2q.onrender.com",
      featured: true,
      status: "Live",
      lastUpdated: "Aug 2025",
      details: {
        challenge: "Managing multi-agent dependencies (extraction, gap checking, roadmap builder) while keeping LLM token budgets low and response structures standardized.",
        solution: "Programmed structured JSON Schema output contracts with Gemini agents. Created localized FAISS vector indices for superfast semantic search across job-to-skill templates.",
        metrics: [
          "Complete parsing and resume analysis in under 3 seconds",
          "Produces structured skill radar data and strength metrics",
          "Generates granular multi-stage capstones and mini-projects"
        ],
        fullStack: ["Python", "FastAPI", "Streamlit", "Gemini API", "FAISS Vector DB", "Docker"]
      }
    },
    {
      title: "Mental Health Mood Tracker",
      description: "AI-powered mental health application that tracks mood patterns and provides personalized insights using machine learning algorithms.",
      technologies: ["Python", "Machine Learning", "Data Analysis", "Flask"],
      githubUrl: "https://github.com/Tapasvi5fires/mentalhealthmoodtracker",
      demoUrl: "https://github.com/Tapasvi5fires/mentalhealthmoodtracker",
      featured: true,
      status: "Active",
      lastUpdated: "Jul 2025",
      backgroundImage: mentalHealthBg,
      details: {
        challenge: "Developing an accurate mood prediction model from highly sparse, self-reported user sentiment data without violating user privacy.",
        solution: "Implemented privacy-first, on-device NLP using local lightweight sentiment analyzers and federated model tuning to predict mood shifts dynamically.",
        metrics: [
          "89% mood classification accuracy",
          "Zero personal identifier storage",
          "Over 500 early test users with positive feedback"
        ],
        fullStack: ["Python", "Flask", "Scikit-Learn", "NLTK", "Tailwind CSS", "SQLite"]
      }
    },
    {
      title: "CodeWizard AI",
      description: "A cosmic AI-powered coding assistant that helps developers write better code with intelligent suggestions and automated code review.",
      technologies: ["Python", "AI", "Natural Language Processing", "OpenAI"],
      githubUrl: "https://github.com/Tapasvi5fires/CodeWizard-AI",
      demoUrl: "https://github.com/Tapasvi5fires/CodeWizard-AI",
      featured: false,
      status: "Active",
      lastUpdated: "Feb 2025",
      backgroundImage: codeWizardBg,
      details: {
        challenge: "Handling complex multi-file code dependencies within a constrained token limit for real-time suggestions.",
        solution: "Engineered a custom abstract syntax tree (AST) parser to build localized code context graphs, feeding only relevant node maps to the LLM agent.",
        metrics: [
          "45% average reduction in debugging time for test projects",
          "Sub-150ms suggestion latency",
          "Support for 12 programming languages"
        ],
        fullStack: ["Python", "FastAPI", "OpenAI GPT-4o", "Tree-Sitter", "TypeScript", "Vite"]
      }
    },
    {
      title: "AI Productivity Tracker",
      description: "Advanced productivity monitoring system using webcam analysis, keyboard tracking, and machine learning for behavior insights.",
      technologies: ["Python", "Computer Vision", "ML", "Data Analytics"],
      githubUrl: "https://github.com/Tapasvi5fires/AI-Productivity-Tracker",
      demoUrl: "https://github.com/Tapasvi5fires/AI-Productivity-Tracker",
      featured: false,
      status: "Active",
      lastUpdated: "Feb 2025",
      backgroundImage: productivityBg,
      details: {
        challenge: "Real-time visual tracking of focus behaviors (blink rate, head pose) without consuming excessive CPU power on standard user laptops.",
        solution: "Designed a multi-threaded OpenCV pipeline using lightweight MediaPipe models combined with local keyboard/mouse frequency analytics.",
        metrics: [
          "CPU usage optimized down to under 4% active utilization",
          "Accurate detection of fatigue cycles",
          "Detailed CSV and visual dashboard export for productivity analytics"
        ],
        fullStack: ["Python", "OpenCV", "MediaPipe", "Pandas", "Tkinter", "Matplotlib"]
      }
    },
    {
      title: "Mood to Music",
      description: "Intelligent music recommendation system that analyzes user mood and preferences to suggest personalized playlists.",
      technologies: ["Python", "Recommendation System", "Audio Analysis", "ML"],
      githubUrl: "https://github.com/Tapasvi5fires/Mood_To_Music_",
      featured: false,
      status: "Completed",
      lastUpdated: "Dec 2024",
      details: {
        challenge: "Mapping dynamic, multi-modal human emotions directly to complex acoustic properties (energy, valence, tempo).",
        solution: "Trained an ensemble classifier to parse Spotify API audio features and match them against user-selected emotions.",
        metrics: [
          "Seamless integration with Spotify Developer Web Playback API",
          "92% positive rating on playlist matches during trials",
          "Real-time audio feature feature extraction"
        ],
        fullStack: ["Python", "Spotify Web API", "Librosa", "Scikit-Learn", "HTML5/CSS3"]
      }
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
    <section id="projects" ref={sectionRef} className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Personal <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A selection of my personal software engineering and artificial intelligence projects. 
            Click on any card to view detailed case studies, challenges, and live URLs.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gradient mb-8 font-cyber">🌟 Featured Work</h3>
          <div className="space-y-12">
            {projects.filter(p => p.featured).map((project, index) => {
              const isEven = index % 2 === 0;
              const keyStats = project.title === "LinkPulse" 
                ? { highlight: "Sub-100ms", label: "Unified RAG Latency", bg: "from-blue-500/10 to-primary/10 border-primary/20 text-primary" }
                : project.title === "AI Career Mentor"
                ? { highlight: "< 3 Sec", label: "Resume Parsing & Roadmap", bg: "from-purple-500/10 to-accent/10 border-accent/20 text-accent" }
                : { highlight: "89%", label: "Mood Classification Accuracy", bg: "from-emerald-500/10 to-secondary/10 border-secondary/20 text-secondary" };

              return (
                <TiltCard 
                  key={project.title}
                  className={`transition-all cubic-bezier(0.2, 0.8, 0.2, 1) ${
                    isVisible 
                      ? 'opacity-100 translate-y-0 [transform:perspective(1200px)_rotateX(0deg)_translateZ(0px)]' 
                      : 'opacity-0 translate-y-16 [transform:perspective(1200px)_rotateX(15deg)_translateZ(-100px)]'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms`, transitionDuration: '1200ms' }}
                >
                  <Card className="card-glow overflow-hidden relative border border-border/80 p-0">
                    <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-stretch min-h-[350px]`}>
                      {/* Left/Right Showcase Metric Panel */}
                      <div className={`md:w-2/5 bg-gradient-to-br ${keyStats.bg.split(' ')[0]} ${keyStats.bg.split(' ')[1]} p-8 flex flex-col justify-center items-center text-center border-b md:border-b-0 ${isEven ? 'md:border-r' : 'md:border-l'} border-border/40 relative overflow-hidden group`}>
                        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-foreground via-transparent to-transparent pointer-events-none" />
                        
                        <div className="relative z-10 space-y-3">
                          <Star className="w-8 h-8 text-yellow-400 fill-current animate-bounce mx-auto mb-2" />
                          <div className="text-4xl md:text-5xl font-black font-cyber tracking-tight text-gradient">
                            {keyStats.highlight}
                          </div>
                          <div className="text-xs uppercase font-bold tracking-wider text-muted-foreground max-w-[200px] mx-auto">
                            {keyStats.label}
                          </div>
                        </div>

                        <div className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full bg-primary/5 blur-2xl group-hover:scale-150 transition-transform duration-700" />
                      </div>

                      {/* Content Panel */}
                      <div className="md:w-3/5 p-8 flex flex-col justify-between relative z-10 bg-card/40">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <Badge className={getStatusColor(project.status)}>
                              {project.status}
                            </Badge>
                            <div className="flex items-center gap-2 text-muted-foreground text-xs font-semibold">
                              <Calendar className="w-4 h-4" />
                              {project.lastUpdated}
                            </div>
                          </div>

                          <div>
                            <h4 className="text-2xl font-bold text-foreground mb-3 font-cyber flex items-center gap-2 hover:text-primary transition-colors">
                              {project.title}
                              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                            </h4>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                              {project.description}
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-1.5 pt-2">
                            {project.technologies.map((tech) => (
                              <Badge 
                                key={tech} 
                                variant="outline" 
                                className="text-xs bg-background/80 border-border/80 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 hover:scale-105 transition-all duration-300 shadow-sm cursor-default"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Action buttons */}
                        <div className="flex gap-4 pt-6 mt-8 border-t border-border/30 z-20" onClick={(e) => e.stopPropagation()}>
                          <Button 
                            variant="cyber" 
                            size="default" 
                            className="flex-1"
                            onClick={() => window.open(project.githubUrl, '_blank')}
                          >
                            <Github className="w-4 h-4 mr-2" />
                            GitHub Code
                          </Button>
                          <Button 
                            variant="outline" 
                            size="default"
                            className="border-primary/30 hover:border-primary hover:bg-primary/10 flex-1"
                            onClick={() => setSelectedProject(project)}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Read Case Study
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </TiltCard>
              );
            })}
          </div>
        </div>

        {/* All Projects */}
        <div>
          <h3 className="text-2xl font-bold text-gradient mb-8 font-cyber">💼 All Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <TiltCard
                key={project.title}
                className={`h-full transition-all cubic-bezier(0.2, 0.8, 0.2, 1) ${
                  isVisible 
                    ? 'opacity-100 translate-y-0 [transform:perspective(1000px)_rotateX(0deg)_translateZ(0px)]' 
                    : 'opacity-0 translate-y-16 [transform:perspective(1000px)_rotateX(12deg)_translateZ(-80px)]'
                }`}
                style={{ transitionDelay: `${index * 100}ms`, transitionDuration: '1200ms' }}
              >
                <Card 
                  className="card-glow p-6 h-full cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="space-y-4 flex flex-col justify-between h-full">
                    <div>
                      {/* Project Header */}
                      <div className="flex items-start justify-between mb-3">
                        <Badge className={getStatusColor(project.status)}>
                          {project.status}
                        </Badge>
                        <div className="flex items-center gap-2 text-muted-foreground text-xs font-semibold">
                          <Calendar className="w-4.5 h-4.5" />
                          {project.lastUpdated}
                        </div>
                      </div>

                      {/* Project Content */}
                      <div>
                        <h4 className="text-lg font-bold text-gradient mb-2 font-cyber group-hover:text-primary transition-colors flex items-center gap-2">
                          {project.title}
                          <Info className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                        </h4>
                        <p className="text-muted-foreground text-xs leading-relaxed mb-3 line-clamp-2">
                          {project.description}
                        </p>
                      </div>
                    </div>
                    <div>
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="outline" 
                            className="text-[10px] bg-background/80 border-border/80 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 hover:scale-105 transition-all duration-300 shadow-sm cursor-default"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge 
                            variant="outline" 
                            className="text-[10px] bg-background/80 border-border/80 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 hover:scale-105 transition-all duration-300 shadow-sm cursor-default"
                          >
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>

                      {/* Action Button */}
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full border-primary/30 hover:border-primary hover:bg-primary/10"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.githubUrl, '_blank');
                        }}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Button>
                    </div>
                  </div>
                </Card>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-1000 ${
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

      {/* Project Detail Modal */}
      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <DialogContent className="max-w-2xl bg-card border border-border/80 backdrop-blur-xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <Badge className={getStatusColor(selectedProject.status)}>
                  {selectedProject.status}
                </Badge>
                <span className="text-xs text-muted-foreground font-semibold flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  Last Updated: {selectedProject.lastUpdated}
                </span>
              </div>
              <DialogTitle className="text-3xl font-bold font-cyber text-gradient">
                {selectedProject.title}
              </DialogTitle>
              <DialogDescription className="text-muted-foreground text-sm leading-relaxed mt-2">
                {selectedProject.description}
              </DialogDescription>
            </DialogHeader>

            {/* Case Study Details */}
            {selectedProject.details && (
              <div className="space-y-6 my-6 text-foreground">
                {/* Challenge */}
                <div className="space-y-2">
                  <h5 className="font-bold font-cyber text-sm flex items-center gap-2 text-primary">
                    <Target className="w-4 h-4" />
                    The Challenge
                  </h5>
                  <p className="text-muted-foreground text-sm leading-relaxed bg-muted/20 p-3 rounded-lg border border-border/40">
                    {selectedProject.details.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="space-y-2">
                  <h5 className="font-bold font-cyber text-sm flex items-center gap-2 text-secondary">
                    <Sparkles className="w-4 h-4" />
                    The Solution
                  </h5>
                  <p className="text-muted-foreground text-sm leading-relaxed bg-muted/20 p-3 rounded-lg border border-border/40">
                    {selectedProject.details.solution}
                  </p>
                </div>

                {/* Key Metrics / Achievements */}
                <div className="space-y-2">
                  <h5 className="font-bold font-cyber text-sm flex items-center gap-2 text-accent">
                    <CheckCircle2 className="w-4 h-4" />
                    Key Results & Metrics
                  </h5>
                  <ul className="grid gap-2 text-sm text-muted-foreground">
                    {selectedProject.details.metrics.map((metric, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Full Stack / Technologies Used */}
                <div className="space-y-2">
                  <h5 className="font-bold text-sm font-cyber text-foreground">
                    Full Tech Stack
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.details.fullStack.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="bg-secondary/10 text-secondary border border-secondary/20 hover:bg-secondary/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Modal Actions */}
            <div className="flex gap-4 pt-4 border-t border-border/50">
              <Button 
                variant="cyber"
                className="flex-1"
                onClick={() => window.open(selectedProject.githubUrl, '_blank')}
              >
                <Github className="w-4 h-4 mr-2" />
                View Code Base
              </Button>
              {selectedProject.demoUrl && (
                <Button 
                  variant="outline"
                  className="flex-1 border-primary/30 hover:border-primary hover:bg-primary/10"
                  onClick={() => window.open(selectedProject.demoUrl, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demonstration
                </Button>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default ProjectsSection;