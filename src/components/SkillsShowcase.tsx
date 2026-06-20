import { useEffect, useRef, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Sparkles, Brain, Cpu, Database, Layout, ShieldAlert } from 'lucide-react';
import { TiltCard } from './TiltCard';

interface Skill {
  name: string;
  level: number; // 0-100
  proficiency: 'Expert' | 'Advanced' | 'Intermediate';
}

interface SkillCategory {
  category: string;
  icon: React.ReactNode;
  color: string;
  skills: Skill[];
}

const SkillsShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);
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

  const skillCategories: SkillCategory[] = [
    {
      category: "AI/ML & GenAI",
      icon: <Brain className="w-5 h-5" />,
      color: "text-blue-500 border-blue-500/20 bg-blue-500/5",
      skills: [
        { name: "LLMs", level: 95, proficiency: "Expert" },
        { name: "LangChain", level: 95, proficiency: "Expert" },
        { name: "LangGraph", level: 92, proficiency: "Expert" },
        { name: "RAG Systems", level: 94, proficiency: "Expert" },
        { name: "Multi-Agent Systems", level: 92, proficiency: "Expert" },
        { name: "Agentic Architectures", level: 90, proficiency: "Expert" },
        { name: "Prompt Engineering", level: 95, proficiency: "Expert" },
        { name: "PyTorch", level: 85, proficiency: "Advanced" },
        { name: "TensorFlow", level: 80, proficiency: "Advanced" },
        { name: "Scikit-learn", level: 90, proficiency: "Expert" }
      ]
    },
    {
      category: "Backend & APIs", 
      icon: <Layout className="w-5 h-5" />,
      color: "text-purple-500 border-purple-500/20 bg-purple-500/5",
      skills: [
        { name: "FastAPI", level: 94, proficiency: "Expert" },
        { name: "WebSockets", level: 92, proficiency: "Expert" },
        { name: "Apache Kafka", level: 88, proficiency: "Advanced" },
        { name: "Redis", level: 90, proficiency: "Expert" },
        { name: "Celery", level: 92, proficiency: "Expert" },
        { name: "REST APIs", level: 95, proficiency: "Expert" },
        { name: "SQLAlchemy", level: 90, proficiency: "Expert" },
        { name: "Microservices", level: 92, proficiency: "Expert" },
        { name: "Event-Driven Architecture", level: 90, proficiency: "Expert" }
      ]
    },
    {
      category: "Cloud, Databases & DevOps",
      icon: <Database className="w-5 h-5" />,
      color: "text-emerald-500 border-emerald-500/20 bg-emerald-500/5",
      skills: [
        { name: "Docker", level: 90, proficiency: "Expert" },
        { name: "Kubernetes", level: 82, proficiency: "Advanced" },
        { name: "AWS", level: 80, proficiency: "Advanced" },
        { name: "Microsoft Azure", level: 80, proficiency: "Advanced" },
        { name: "CI/CD", level: 88, proficiency: "Advanced" },
        { name: "GitHub Actions", level: 90, proficiency: "Expert" },
        { name: "Qdrant", level: 92, proficiency: "Expert" },
        { name: "FAISS", level: 90, proficiency: "Expert" },
        { name: "Nebula Graph", level: 88, proficiency: "Advanced" },
        { name: "PostgreSQL", level: 92, proficiency: "Expert" },
        { name: "Supabase", level: 90, proficiency: "Expert" }
      ]
    },
    {
      category: "Languages & Core CS",
      icon: <Cpu className="w-5 h-5" />,
      color: "text-orange-500 border-orange-500/20 bg-orange-500/5",
      skills: [
        { name: "Python", level: 96, proficiency: "Expert" },
        { name: "SQL", level: 92, proficiency: "Expert" },
        { name: "JavaScript", level: 85, proficiency: "Advanced" },
        { name: "TypeScript", level: 85, proficiency: "Advanced" },
        { name: "C / Java", level: 80, proficiency: "Intermediate" },
        { name: "Distributed Systems", level: 90, proficiency: "Expert" },
        { name: "System Design", level: 88, proficiency: "Advanced" }
      ]
    }
  ];

  const categories = ['All', ...skillCategories.map(c => c.category)];

  const filteredCategories = selectedCategory === 'All'
    ? skillCategories
    : skillCategories.filter(c => c.category === selectedCategory);

  return (
    <section id="skills" ref={sectionRef} className="py-24 relative bg-transparent">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Core <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive mapping of my development technologies and concepts. Hover for expert ratings.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                selectedCategory === cat
                  ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20 scale-105'
                  : 'bg-card text-muted-foreground border-border hover:border-primary/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Main Container */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Skill Groups */}
          <div className="lg:col-span-3 grid md:grid-cols-2 gap-6">
            {filteredCategories.map((group, groupIdx) => (
              <TiltCard
                key={group.category}
                className={`transition-all cubic-bezier(0.2, 0.8, 0.2, 1) ${
                  isVisible 
                    ? 'opacity-100 translate-y-0 [transform:perspective(1000px)_rotateX(0deg)_translateZ(0px)]' 
                    : 'opacity-0 translate-y-16 [transform:perspective(1000px)_rotateX(12deg)_translateZ(-80px)]'
                }`}
                style={{ transitionDelay: `${groupIdx * 100}ms`, transitionDuration: '1000ms' }}
              >
                <Card className="p-6 card-glow hover:shadow-2xl h-full group relative overflow-hidden">
                  {/* Decorative Icon Background */}
                  <div className={`absolute -right-4 -bottom-4 w-24 h-24 opacity-5 transition-transform duration-700 group-hover:scale-125 group-hover:rotate-12`}>
                    {group.icon}
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-6">
                      <div className={`p-2 rounded-lg border ${group.color}`}>
                        {group.icon}
                      </div>
                      <h4 className="text-lg font-bold font-cyber text-foreground">
                        {group.category}
                      </h4>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <Badge 
                          key={skill.name}
                          variant="outline"
                          className={`
                            text-sm py-1.5 px-3 bg-background/80 border border-border/80 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 hover:scale-[1.05] transition-all duration-300 cursor-pointer shadow-sm
                            ${hoveredSkill?.name === skill.name ? 'border-primary bg-primary/10 text-primary shadow-sm shadow-primary/10' : ''}
                          `}
                          onMouseEnter={() => setHoveredSkill(skill)}
                          onMouseLeave={() => setHoveredSkill(null)}
                        >
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </TiltCard>
            ))}
          </div>

          {/* Real-time Proficiency Dashboard panel */}
          <div className="lg:col-span-1">
            <Card className={`p-6 card-glow h-full flex flex-col justify-between relative lg:sticky lg:top-28 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div>
                <h4 className="text-lg font-bold font-cyber text-gradient mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                  Proficiency Meter
                </h4>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Hover over any skill tag on the left to activate full details, progress analytics, and proficiency levels.
                </p>

                {hoveredSkill ? (
                  <div className="space-y-6 animate-fade-in">
                    <div>
                      <div className="text-xs text-primary font-bold tracking-wider uppercase mb-1 font-cyber">Active Skill</div>
                      <div className="text-2xl font-bold text-foreground font-cyber">{hoveredSkill.name}</div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground font-semibold">Mastery level</span>
                        <span className="font-bold text-primary">{hoveredSkill.level}%</span>
                      </div>
                      <Progress value={hoveredSkill.level} className="h-2 bg-muted border border-border" />
                    </div>

                    <div className="p-3 bg-muted/30 rounded-lg border border-border/40">
                      <div className="text-xs text-muted-foreground uppercase font-bold mb-1">Status</div>
                      <Badge className="bg-primary/20 text-primary border-primary/30 hover:bg-primary/30">
                        {hoveredSkill.proficiency}
                      </Badge>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-16 text-center text-muted-foreground opacity-60 border-2 border-dashed border-border/50 rounded-xl">
                    <Cpu className="w-12 h-12 mb-3 text-muted-foreground/40 animate-bounce" />
                    <span className="text-xs font-semibold">Hover over a skill for metrics</span>
                  </div>
                )}
              </div>

              <div className="pt-6 mt-6 border-t border-border/40 text-[11px] text-muted-foreground font-semibold leading-relaxed">
                * Skill level ratings are formulated based on production deployment hours and open-source contributions.
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsShowcase;