import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Brain, Database, Zap, Cpu, Settings } from 'lucide-react';
import { TiltCard } from './TiltCard';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const domains = [
    {
      icon: <Brain className="w-6 h-6 text-primary animate-pulse" />,
      title: "AI Engineering & Generative AI",
      description: "Designing and deploying production-grade AI systems using Large Language Models, Retrieval-Augmented Generation (RAG), and multi-agent orchestration frameworks.",
      technologies: ["LangChain", "LangGraph", "OpenAI", "RAG", "Multi-Agent Systems", "Prompt Engineering"]
    },
    {
      icon: <Settings className="w-6 h-6 text-secondary" />,
      title: "Backend & Distributed Systems",
      description: "Building scalable microservices, event-driven architectures, and real-time enterprise platforms.",
      technologies: ["FastAPI", "Apache Kafka", "Redis", "Celery", "WebSockets", "PostgreSQL"]
    },
    {
      icon: <Cpu className="w-6 h-6 text-accent" />,
      title: "Cloud, DevOps & Platform Engineering",
      description: "Deploying and operating cloud-native applications through containerization, orchestration, automation, and CI/CD practices.",
      technologies: ["Docker", "Kubernetes", "AWS", "Azure", "GitHub Actions", "CI/CD"]
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Data & AI Platforms",
      description: "Developing intelligent data pipelines, vector search systems, and knowledge platforms for large-scale AI applications.",
      technologies: ["Qdrant", "FAISS", "SQL", "ETL Pipelines", "Vector Databases", "Data Engineering"]
    }
  ];

  const experiences = [
    {
      icon: <Brain className="w-6 h-6 text-primary" />,
      title: "AI Engineer Intern",
      subtitle: "Techsophy • Sep 2025 - Present",
      description: "Architected CNS - a distributed microservices platform with FastAPI services, Celery, Redis broker, and WebSocket gateways supporting 10k+ concurrent connections. Designed Kafka event synchronization bridge eliminating 100% of Nebula Graph state race conditions. Built SOP ingestion pipeline reducing onboarding time by 85% (12 hrs to <2 min).",
      technologies: ["FastAPI", "Apache Kafka", "Celery", "Redis", "Nebula Graph", "Docker", "Kubernetes", "Microsoft Graph API"]
    },
    {
      icon: <Code2 className="w-6 h-6 text-secondary" />,
      title: "Tech Lead Intern",
      subtitle: "Viswam.AI • May 2025 - Aug 2025",
      description: "Owned end-to-end delivery of enterprise AI/ML solutions across cross-functional teams: requirement analysis, model selection, pipeline development, evaluation, and CI/CD-integrated deployment. Successfully reduced the model deployment cycle by 40%. Directed architecture decisions and code reviews.",
      technologies: ["Python", "ML Pipelines", "CI/CD", "Model Selection", "Git", "System Architecture", "Evaluation"]
    }
  ];
  return (
    <section id="about" ref={sectionRef} className="py-24 relative bg-transparent">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            AI Engineer passionate about building production-grade AI platforms, distributed systems, and intelligent automation solutions.
          </p>
        </div>

        {/* Main Content Container */}
        <div className="mb-20">
          {/* Personal Info */}
          <div className="flex flex-col">
            <TiltCard 
              className={`flex-1 flex flex-col transition-all cubic-bezier(0.2, 0.8, 0.2, 1) ${
                isVisible 
                  ? 'opacity-100 translate-y-0 [transform:perspective(1200px)_rotateX(0deg)_translateZ(0px)]' 
                  : 'opacity-0 translate-y-16 [transform:perspective(1200px)_rotateX(10deg)_translateZ(-80px)]'
              }`}
              style={{ transitionDelay: '300ms', transitionDuration: '1200ms' }}
            >
              <Card className="card-glow p-8 flex-1 flex flex-col justify-between h-full border border-border/80">
                <div>
                  <h3 className="text-2xl font-bold text-gradient mb-6 font-cyber">My Journey</h3>
                  
                  {/* Split Layout for visual richness */}
                  <div className="grid md:grid-cols-5 gap-8 items-start">
                    
                    {/* Left Column: Narrative paragraphs with highlighted keywords */}
                    <div className="md:col-span-3 space-y-4 text-muted-foreground text-sm leading-relaxed">
                      <p>
                        I am an AI Engineer with hands-on experience designing and deploying 
                        <span className="text-foreground font-semibold border-b border-primary/20 bg-primary/5 px-1 rounded">distributed microservices</span>, 
                        <span className="text-foreground font-semibold border-b border-primary/20 bg-primary/5 px-1 rounded">multi-agent RAG systems</span>, and 
                        <span className="text-foreground font-semibold border-b border-primary/20 bg-primary/5 px-1 rounded">LLM-powered enterprise applications</span>. 
                        My work focuses on building reliable, scalable, and production-ready solutions that combine modern AI capabilities with robust software engineering principles.
                      </p>
                      <p>
                        Currently, I work as an AI Engineer Intern at Techsophy, where I architect event-driven systems using 
                        <span className="text-foreground font-medium">FastAPI, Kafka, Redis, Celery</span>, and 
                        <span className="text-foreground font-medium">WebSockets</span> while developing enterprise AI workflows powered by Large Language Models and knowledge graph technologies. My contributions include intelligent document processing pipelines, real-time communication platforms, and distributed workflow orchestration systems.
                      </p>
                      <p>
                        Alongside my industry experience, I actively pursue research in Artificial Intelligence and Machine Learning. My work has been published in 
                        <span className="text-foreground font-semibold">ArXiv</span> and 
                        <span className="text-foreground font-semibold">Springer LNCS</span>, with additional research under review at IEEE and JAIR, focusing on intelligent systems, machine learning applications, and semantic knowledge representations.
                      </p>
                    </div>

                    {/* Right Column: Glassmorphic Philosophy & Principles Sidebar */}
                    <div className="md:col-span-2 space-y-4 bg-muted/20 p-5 rounded-xl border border-border/40">
                      <div className="border-l-2 border-primary pl-3">
                        <span className="text-xs uppercase font-bold text-primary tracking-wider">Engineering Creed</span>
                        <p className="text-xs italic text-foreground mt-1 font-medium leading-relaxed">
                          "Architecting intelligent, decoupled backend platforms that align real-time state, minimize inference cost, and scale predictably under enterprise load."
                        </p>
                      </div>
                      
                      <div className="pt-2">
                        <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider block mb-2">Core Architectures</span>
                        <ul className="text-xs space-y-1.5 text-muted-foreground">
                          <li className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                            Event-driven consensus patterns (Kafka)
                          </li>
                          <li className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                            Sub-100ms vector search retrieval
                          </li>
                          <li className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                            JSON Schema contract enforcement
                          </li>
                          <li className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                            Decoupled worker task state systems
                          </li>
                        </ul>
                      </div>
                    </div>

                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-border/40">
                  <h4 className="text-xs font-bold text-primary uppercase mb-2 tracking-wider">Education</h4>
                  <div className="space-y-2">
                    <div className="font-bold text-foreground text-sm">B.Tech in Artificial Intelligence & Machine Learning</div>
                    <div className="text-xs text-muted-foreground">Sreenidhi Institute of Science and Technology (SNIST) • Aug 2022 – May 2026</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">
                      Graduated with a B.Tech in Artificial Intelligence & Machine Learning, building a strong foundation in machine learning, distributed systems, databases, and software engineering.
                    </div>
                    <div className="text-xs font-semibold text-secondary">CGPA: 9.25/10</div>
                  </div>
                </div>
              </Card>
            </TiltCard>
          </div>
        </div>

        {/* Focus Areas / Expertise */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gradient font-cyber">🧠 Areas of Expertise</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {domains.map((dom, index) => (
            <TiltCard 
              key={dom.title}
              className={`h-full transition-all cubic-bezier(0.2, 0.8, 0.2, 1) ${
                isVisible 
                  ? 'opacity-100 translate-y-0 [transform:perspective(1000px)_rotateX(0deg)_translateZ(0px)]' 
                  : 'opacity-0 translate-y-16 [transform:perspective(1000px)_rotateX(12deg)_translateZ(-80px)]'
              }`}
              style={{ transitionDelay: `${index * 150}ms`, transitionDuration: '1000ms' }}
            >
              <Card className="card-glow p-6 h-full flex flex-col justify-between">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-muted/20 mb-4 transition-transform duration-500 hover:rotate-12">
                    {dom.icon}
                  </div>
                  <h4 className="text-base font-bold text-gradient mb-3 font-cyber">
                    {dom.title}
                  </h4>
                  <p className="text-muted-foreground text-xs mb-4 leading-relaxed h-24 overflow-hidden">
                    {dom.description}
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {dom.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="text-[10px] bg-background/80 border-border/80 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 hover:scale-105 transition-all duration-300 shadow-sm cursor-default"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </TiltCard>
          ))}
        </div>

        {/* Experience Header */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gradient font-cyber">💼 Professional Experience</h3>
        </div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <TiltCard 
              key={exp.title}
              className={`h-full transition-all cubic-bezier(0.2, 0.8, 0.2, 1) ${
                isVisible 
                  ? 'opacity-100 translate-y-0 [transform:perspective(1000px)_rotateX(0deg)_translateZ(0px)]' 
                  : 'opacity-0 translate-y-16 [transform:perspective(1000px)_rotateX(12deg)_translateZ(-80px)]'
              }`}
              style={{ transitionDelay: `${index * 200}ms`, transitionDuration: '1000ms' }}
            >
              <Card className="card-glow p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-muted/20">
                      {exp.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground font-cyber leading-tight">
                        {exp.title}
                      </h4>
                      <span className="text-xs text-primary font-semibold">{exp.subtitle}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/30">
                  {exp.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="text-[10px] bg-background/80 border-border/80 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 hover:scale-105 transition-all duration-300 shadow-sm cursor-default"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;