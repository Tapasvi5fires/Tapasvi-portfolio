import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Briefcase, Award, GraduationCap } from 'lucide-react';

interface TimelineItem {
  date: string;
  title: string;
  subtitle: string;
  description: string;
  type: 'work' | 'education' | 'milestone';
  skills?: string[];
}

interface TimelineCardProps {
  item: TimelineItem;
  index: number;
  isEven: boolean;
}

const TimelineCard = ({ item, index, isEven }: TimelineCardProps) => {
  const [isCardVisible, setIsCardVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsCardVisible(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getIcon = (type: TimelineItem['type']) => {
    switch (type) {
      case 'work': return <Briefcase className="w-5 h-5 text-primary" />;
      case 'education': return <GraduationCap className="w-5 h-5 text-secondary" />;
      case 'milestone': return <Award className="w-5 h-5 text-yellow-500" />;
    }
  };

  return (
    <div 
      ref={cardRef}
      className={`flex flex-col md:flex-row items-stretch relative ${
        isEven ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Timeline Dot/Icon */}
      <div className={`absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full border border-border bg-card shadow-lg transition-all duration-500 ${
        isCardVisible ? 'border-primary scale-110 shadow-primary/20' : 'scale-75'
      }`}>
        {getIcon(item.type)}
      </div>

      {/* Spacer / Content Side Grid */}
      <div className="w-full md:w-1/2" />
      
      {/* Card Content Side */}
      <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
        <Card className={`card-glow p-6 transition-all duration-700 hover:scale-[1.03] hover:shadow-xl hover:border-primary/50 ${
          isCardVisible 
            ? (isEven ? 'animate-roll-right' : 'animate-roll-left') 
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
        style={{ transformOrigin: isEven ? 'right center' : 'left center' }}
        >
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2 text-primary font-bold text-sm">
              <Calendar className="w-4 h-4" />
              {item.date}
            </div>
            <Badge variant="outline" className="capitalize text-xs">
              {item.type}
            </Badge>
          </div>

          <h3 className="text-xl font-bold text-foreground mb-1 font-cyber">
            {item.title}
          </h3>
          <h4 className="text-sm font-semibold text-muted-foreground mb-4">
            {item.subtitle}
          </h4>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {item.description}
          </p>

          {item.skills && (
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/30">
              {item.skills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary"
                  className="text-xs bg-secondary/10 text-secondary hover:bg-secondary/20 border-secondary/20 font-medium"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

const TimelineSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const items: TimelineItem[] = [
    {
      date: 'Sep 2025 - Present',
      title: 'AI Engineer Intern',
      subtitle: 'Techsophy (Onsite)',
      description: 'Architecting CNS distributed microservices using FastAPI, Redis broker, Celery, and WebSockets. Formulated Microsoft Graph API SOP ingestion ETL into Nebula Graph, reducing ingestion times by 85%. Designed Kafka sync bridge to resolve database race conditions.',
      type: 'work',
      skills: ['FastAPI', 'Apache Kafka', 'Celery', 'Nebula Graph', 'Redis', 'Docker']
    },
    {
      date: 'May 2025 - Aug 2025',
      title: 'Tech Lead Intern',
      subtitle: 'Viswam.AI',
      description: 'Owned end-to-end delivery of custom AI/ML model pipelines, deployments, and model evaluations. Implemented full CI/CD deployment logic and accelerated model deployment cycle speeds by 40%. Led code reviews and architecture design.',
      type: 'work',
      skills: ['ML Pipelines', 'CI/CD Pipelines', 'Model Selection', 'Git']
    },
    {
      date: 'Aug 2022 - May 2026',
      title: 'B.Tech in Artificial Intelligence & Machine Learning',
      subtitle: 'Sreenidhi Institute of Science and Technology',
      description: 'Studying core methodologies of artificial intelligence, databases, advanced ML, and computer science. Maintaining high academic achievements.',
      type: 'education',
      skills: ['CGPA: 9.25 / 10', 'Deep Learning', 'System Design', 'Algorithms']
    },
    {
      date: '2020 - 2022',
      title: 'Intermediate (MPC)',
      subtitle: 'Sri Gayatri Junior College',
      description: 'Focused studies in Mathematics, Physics, and Chemistry. Achieved top-tier score among state boards.',
      type: 'education',
      skills: ['Score: 966 / 1000', 'Mathematics', 'Physics', 'Chemistry']
    },
    {
      date: '2020',
      title: 'Schooling (Secondary Education)',
      subtitle: 'Sri Chaitanya Techno School',
      description: 'Successfully completed early school qualifications with perfect academic grades.',
      type: 'education',
      skills: ['GPA: 10 / 10']
    }
  ];

  return (
    <section id="timeline" ref={sectionRef} className="py-24 relative overflow-hidden bg-transparent">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            My <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A chronological timeline of my academic studies, internships, and engineering roles.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border/80" />

          {/* Timeline Items */}
          <div className="space-y-16">
            {items.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <TimelineCard 
                  key={item.title + item.date}
                  item={item}
                  index={index}
                  isEven={isEven}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
