import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Github, Linkedin, Send, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "tapasvi5fires@gmail.com",
      action: () => window.open('mailto:tapasvi5fires@gmail.com', '_blank')
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "@Tapasvi5fires",
      action: () => window.open('https://github.com/Tapasvi5fires', '_blank')
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Tapasvi Panchagnula",
      action: () => window.open('https://www.linkedin.com/in/tapasvi-panchagnula-96986227b/', '_blank')
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "India",
      action: null
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Let's <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on your next AI project? Have a question about my work? 
            I'd love to hear from you. Let's build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className={`card-glow p-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <h3 className="text-2xl font-bold text-gradient mb-6 font-cyber">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="bg-muted/20 border-border/50 focus:border-primary focus:bg-muted/30 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-muted/20 border-border/50 focus:border-primary focus:bg-muted/30 transition-all"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project Collaboration / Question / Opportunity"
                  required
                  className="bg-muted/20 border-border/50 focus:border-primary focus:bg-muted/30 transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project, question, or how we can work together..."
                  rows={6}
                  required
                  className="bg-muted/20 border-border/50 focus:border-primary focus:bg-muted/30 transition-all resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className={`space-y-6 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <Card className="card-glow p-8">
              <h3 className="text-2xl font-bold text-gradient mb-6 font-cyber">Get in Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={info.label}
                    className={`flex items-center gap-4 p-4 rounded-lg border border-border/30 hover:border-primary/30 transition-all duration-300 ${
                      info.action ? 'cursor-pointer hover:bg-muted/20' : ''
                    }`}
                    onClick={info.action || undefined}
                  >
                    <div className="text-primary">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      <div className="font-medium text-foreground">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="card-glow p-8">
              <h3 className="text-xl font-bold text-gradient mb-4 font-cyber">Quick Connect</h3>
              <p className="text-muted-foreground mb-6">
                Prefer a more direct approach? Connect with me on your favorite platform.
              </p>
              <div className="flex gap-4">
                <Button 
                  variant="cyber" 
                  size="lg" 
                  onClick={() => window.open('https://github.com/Tapasvi5fires', '_blank')}
                  className="flex-1"
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
                <Button 
                  variant="neon" 
                  size="lg" 
                  onClick={() => window.open('https://www.linkedin.com/in/tapasvi-panchagnula-96986227b/', '_blank')}
                  className="flex-1"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </Card>

            <Card className="card-glow p-8 text-center">
              <h3 className="text-xl font-bold text-gradient mb-4 font-cyber">Response Time</h3>
              <p className="text-muted-foreground">
                I typically respond to messages within <span className="text-primary font-semibold">24-48 hours</span>. 
                For urgent matters, reach out via LinkedIn for faster response.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;