import { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

const SkillsShowcase = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      category: "AI & Machine Learning",
      color: "from-blue-400 to-purple-600",
      skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenAI", "Computer Vision"]
    },
    {
      category: "Data Science & Analytics", 
      color: "from-green-400 to-blue-500",
      skills: ["Pandas", "NumPy", "SQL", "Power BI", "Tableau", "Jupyter", "Statistics"]
    },
    {
      category: "Full-Stack Development",
      color: "from-purple-400 to-pink-600", 
      skills: ["React", "TypeScript", "Node.js", "FastAPI", "MongoDB", "AI Integration"]
    },
    {
      category: "Tools & Platforms",
      color: "from-orange-400 to-red-500",
      skills: ["Git", "Docker", "AWS", "Linux", "MLOps", "CI/CD"]
    }
  ];

  return (
    <div className="w-full py-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <Card 
            key={category.category}
            className="p-6 card-glow hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            {/* Animated background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
            
            <div className="relative z-10">
              <h4 className={`text-lg font-bold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.category}
              </h4>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skill}
                    variant="outline"
                    className={`
                      text-xs border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer
                      hover:scale-105 hover:shadow-lg animate-slide-up
                      ${hoveredSkill === skill ? 'border-primary bg-primary/10 text-primary' : ''}
                    `}
                    style={{ animationDelay: `${(index * 200) + (skillIndex * 100)}ms` }}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SkillsShowcase;