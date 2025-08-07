import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Brain, Database, Zap } from 'lucide-react';

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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      icon: <Brain className="w-6 h-6 text-primary" />,
      title: "AI & Machine Learning",
      description: "Developing intelligent systems using deep learning, neural networks, and advanced algorithms.",
      technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"]
    },
    {
      icon: <Database className="w-6 h-6 text-secondary" />,
      title: "Data Science",
      description: "Extracting insights from complex datasets through statistical analysis and visualization.",
      technologies: ["Pandas", "NumPy", "Matplotlib", "Jupyter"]
    },
    {
      icon: <Code2 className="w-6 h-6 text-accent" />,
      title: "Full-Stack Development",
      description: "Building end-to-end applications with modern frameworks and technologies.",
      technologies: ["React", "Node.js", "TypeScript", "MongoDB"]
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "AI Applications",
      description: "Creating practical AI solutions for real-world problems and business needs.",
      technologies: ["OpenAI", "Computer Vision", "NLP", "MLOps"]
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate about bridging the gap between artificial intelligence and practical applications. 
            I specialize in creating intelligent systems that solve complex real-world problems.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Personal Info */}
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <Card className="card-glow p-8">
              <h3 className="text-2xl font-bold text-gradient mb-4 font-cyber">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  As an AI Developer and Data Scientist, I'm driven by the endless possibilities 
                  that emerge when cutting-edge technology meets creative problem-solving. My journey 
                  began with a fascination for how machines can learn and adapt, much like humans do.
                </p>
                <p>
                  I've worked on diverse projects ranging from mental health tracking applications 
                  to productivity enhancement tools, always focusing on creating solutions that 
                  genuinely improve people's lives through intelligent automation and insights.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring the latest research in AI, 
                  contributing to open-source projects, or experimenting with new frameworks 
                  and technologies that push the boundaries of what's possible.
                </p>
              </div>
            </Card>
          </div>

          {/* Right Column - Skills Highlight */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <Card className="card-glow p-8">
              <h3 className="text-2xl font-bold text-gradient mb-6 font-cyber">Core Technologies</h3>
              <div className="space-y-4">
                {[
                  { category: "AI/ML", skills: ["Python", "TensorFlow", "PyTorch", "OpenAI"] },
                  { category: "Data Science", skills: ["Pandas", "NumPy", "Scikit-learn", "Jupyter"] },
                  { category: "Web Dev", skills: ["React", "TypeScript", "Node.js", "MongoDB"] },
                  { category: "Tools", skills: ["Git", "Docker", "AWS", "Linux"] }
                ].map((skillGroup, index) => (
                  <div key={skillGroup.category}>
                    <h4 className="text-primary font-semibold mb-2">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.skills.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="secondary" 
                          className="bg-secondary/20 text-secondary border-secondary/30 hover:bg-secondary/30 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, index) => (
            <Card 
              key={exp.title}
              className={`card-glow p-6 h-full transition-all duration-1000 delay-${index * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-muted/20 mb-4">
                  {exp.icon}
                </div>
                <h4 className="text-lg font-bold text-gradient mb-3 font-cyber">
                  {exp.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {exp.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="text-xs border-border/50 hover:border-primary/50 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;