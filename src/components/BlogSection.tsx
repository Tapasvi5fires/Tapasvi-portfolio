import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, Calendar, FileText, Award, ExternalLink, Bookmark } from 'lucide-react';
import { TiltCard } from './TiltCard';

interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  citations?: number;
  tags: string[];
  link: string;
  abstract: string;
}

const BlogSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
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

  const publications: Publication[] = [
    {
      title: "Deepfakes: Understanding, Detection, and Mitigation in Cyber-Politics and Cyber-Economics",
      authors: "L Thirupathi, AS Reddy, V Vardhan, T Panchagnula, NSR Miriyala, ...",
      venue: "Economic and Political Consequences of AI: Managing Creative Destruction (Springer)",
      year: "2025",
      citations: 5,
      tags: ["Deepfakes", "Cyber-Security", "Springer"],
      link: "https://www.igi-global.com/chapter/deepfakes/368106",
      abstract: "An analysis of deepfake generation tools, political and economic consequences of artificial media fabrication, and multi-modal systems for fake video detection."
    },
    {
      title: "DreamNet: A multimodal framework for semantic and emotional analysis of sleep narratives",
      authors: "T Panchagnula",
      venue: "arXiv preprint arXiv:2503.05778",
      year: "2025",
      citations: 2,
      tags: ["NLP", "Multimodal", "Sleep Narratives", "arXiv"],
      link: "https://arxiv.org/abs/2503.05778",
      abstract: "A novel neural network design developed for text and semantic representation learning, mapping qualitative dream text onto emotional vectors."
    },
    {
      title: "LinkPulse: A Hybrid Retrieval-Augmented Generation Platform for Autonomous Multi-Source Knowledge Synthesis",
      authors: "T Panchagnula, SR Alumalla, I Surya, K Divyasri, TVN Rao",
      venue: "Preprint Publication",
      year: "2026",
      tags: ["RAG", "Data Ingestion", "Qdrant"],
      link: "https://www.researchsquare.com/article/rs-9186511/v1",
      abstract: "Presents the details, indexing paradigms, and performance optimizations of the LinkPulse hybrid vector/keyword multi-agent architecture."
    },
    {
      title: "NeuralCodeFusion: A Self-Adaptive Multimodal AI Framework for Robust Emotion Recognition Across EEG, Facial, Speech, and Text",
      authors: "T Panchagnula",
      venue: "TechRxiv Preprint",
      year: "2025",
      tags: ["EEG", "Emotion Recognition", "Multimodal AI", "TechRxiv"],
      link: "https://www.techrxiv.org/doi/full/10.36227/techrxiv.174743200.06295600/v1",
      abstract: "A multi-input sensory fusion framework designed to capture human emotional signals under real-time constraints."
    },
    {
      title: "AI-Driven Code Synthesis for Hackathons: Enhancing Developer Productivity with CodeWizard-A Real-Time, Adaptive Approach",
      authors: "T Panchagnula",
      venue: "TechRxiv Preprint",
      year: "2025",
      tags: ["Code Synthesis", "Productivity", "LLMs", "TechRxiv"],
      link: "https://www.techrxiv.org/doi/full/10.36227/techrxiv.174743201.10557335/v1",
      abstract: "Documents parameters and methods of CodeWizard AI system to accelerate hackathon development speeds and ensure syntax coherence."
    },
    {
      title: "AI-Based Productivity Tracker: Multi-Modal Focus Enhancement",
      authors: "T Panchagnula",
      venue: "TechRxiv Preprint",
      year: "2025",
      tags: ["Computer Vision", "Focus Tracking", "TechRxiv"],
      link: "https://www.techrxiv.org/doi/full/10.36227/techrxiv.174235413.37105018/v1",
      abstract: "Outlines design principles, CPU optimizations, and gaze estimations of on-device fatigue tracking modules."
    }
  ];

  // Collect all unique tags
  const allTags = ['All', ...Array.from(new Set(publications.flatMap(p => p.tags)))];

  const filteredPublications = publications.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          pub.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          pub.venue.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === 'All' || pub.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <section id="blog" ref={sectionRef} className="py-24 relative overflow-hidden bg-transparent">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Research & <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Publications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Peer-reviewed papers, preprints, and research projects in artificial intelligence, multimodal models, and software agents.
          </p>
        </div>

        {/* Search, Filter & Google Scholar Link */}
        <div className="max-w-5xl mx-auto mb-12 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder="Search publications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card border-border/80 focus-visible:ring-primary"
            />
          </div>

          <div className="flex flex-wrap gap-2 w-full md:w-auto items-center">
            {allTags.slice(0, 5).map((tag) => (
              <Badge
                key={tag}
                variant={selectedTag === tag ? 'default' : 'outline'}
                onClick={() => setSelectedTag(tag)}
                className={`cursor-pointer transition-all ${
                  selectedTag === tag
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-card text-muted-foreground border-border hover:border-primary/50'
                }`}
              >
                {tag}
              </Badge>
            ))}
            
            <Button
              variant="outline"
              size="sm"
              className="border-primary/30 hover:border-primary text-primary hover:bg-primary/10 ml-2"
              onClick={() => window.open('https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=6cbEPOQAAAAJ', '_blank')}
            >
              <Award className="w-4 h-4 mr-2" />
              Google Scholar
            </Button>
          </div>
        </div>

        {/* Publications Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredPublications.map((pub, index) => (
            <TiltCard
              key={pub.title}
              className={`h-full transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card className="card-glow p-6 h-full flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground font-semibold mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      {pub.year}
                    </span>
                    {pub.citations !== undefined && (
                      <Badge variant="outline" className="text-[10px] text-yellow-500 border-yellow-500/20 bg-yellow-500/5">
                        Citations: {pub.citations}
                      </Badge>
                    )}
                  </div>

                  <h4 className="text-lg font-bold text-foreground mb-3 font-cyber line-clamp-3 group-hover:text-primary transition-colors">
                    {pub.title}
                  </h4>
                  
                  <p className="text-xs text-muted-foreground italic mb-3 font-medium">
                    {pub.authors}
                  </p>

                  <p className="text-xs text-primary font-semibold mb-4 flex items-center gap-1">
                    <Bookmark className="w-3.5 h-3.5" />
                    {pub.venue}
                  </p>
                  
                  <p className="text-muted-foreground text-xs leading-relaxed mb-6 line-clamp-3">
                    {pub.abstract}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1 mb-6">
                    {pub.tags.map(tag => (
                      <span key={tag} className="text-[9px] bg-muted px-2 py-0.5 rounded text-muted-foreground border border-border/40">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-primary/30 hover:border-primary hover:bg-primary/10 flex items-center justify-center gap-2"
                    onClick={() => window.open(pub.link, '_blank')}
                  >
                    <FileText className="w-4 h-4" />
                    View Publication
                    <ExternalLink className="w-3 h-3" />
                  </Button>
                </div>
              </Card>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
