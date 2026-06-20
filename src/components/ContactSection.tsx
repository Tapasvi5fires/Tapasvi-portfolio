import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Github, Linkedin, Send, MapPin } from 'lucide-react';
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
      { threshold: 0.1 }
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

    // Construct mailto link
    const mailtoUrl = `mailto:tapasvi5fires@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    
    // Open default mail client
    window.location.href = mailtoUrl;

    toast({
      title: "Opening Mail Client",
      description: "Directing you to send the email to tapasvi5fires@gmail.com",
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
      icon: (
        <svg className="w-6 h-6 fill-current text-green-500" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.013-5.11-2.861-6.963-1.848-1.85-4.321-2.868-6.962-2.869-5.43 0-9.854 4.417-9.858 9.853-.002 1.8.474 3.559 1.378 5.09l-.918 3.351 3.432-.901zm11.377-5.503c-.27-.136-1.602-.79-1.85-.88-.25-.09-.43-.136-.61.136-.18.27-.7 1.218-.857 1.402-.157.183-.314.204-.584.068-.27-.136-1.14-.42-2.172-1.342-.803-.717-1.346-1.604-1.503-1.876-.157-.272-.017-.419.118-.553.122-.121.272-.32.408-.478.136-.159.182-.272.272-.453.09-.182.046-.341-.022-.478-.068-.136-.61-1.474-.836-2.022-.22-.53-.443-.458-.61-.466-.16-.008-.344-.01-.528-.01-.184 0-.485.07-.74.36-.254.29-.97.948-.97 2.31 0 1.361.99 2.68 1.127 2.863.136.183 1.948 2.974 4.72 4.17.659.284 1.173.454 1.573.582.662.21 1.264.18 1.74.11.53-.079 1.602-.655 1.828-1.282.227-.627.227-1.163.16-1.282-.068-.119-.248-.182-.518-.318z"/>
        </svg>
      ),
      label: "WhatsApp",
      value: "Chat Directly (No number needed)",
      action: () => window.open('https://wa.me/919063702246', '_blank')
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
      value: "Hyderabad, Telangana, India",
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
                  placeholder="Project Collaboration / Question"
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
                    Preparing Email...
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
                {contactInfo.map((info) => (
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
              <div className="grid grid-cols-3 gap-3">
                <Button 
                  variant="cyber" 
                  size="sm" 
                  onClick={() => window.open('https://github.com/Tapasvi5fires', '_blank')}
                  className="w-full text-xs"
                >
                  <Github className="w-4 h-4 mr-1.5" />
                  GitHub
                </Button>
                <Button 
                  variant="neon" 
                  size="sm" 
                  onClick={() => window.open('https://www.linkedin.com/in/tapasvi-panchagnula-96986227b/', '_blank')}
                  className="w-full text-xs"
                >
                  <Linkedin className="w-4 h-4 mr-1.5" />
                  LinkedIn
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => window.open('https://wa.me/919063702246', '_blank')}
                  className="w-full text-xs border-green-500/30 hover:border-green-500 hover:bg-green-500/10 text-green-500"
                >
                  {/* WhatsApp SVG Icon */}
                  <svg className="w-4 h-4 mr-1.5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.013-5.11-2.861-6.963-1.848-1.85-4.321-2.868-6.962-2.869-5.43 0-9.854 4.417-9.858 9.853-.002 1.8.474 3.559 1.378 5.09l-.918 3.351 3.432-.901zm11.377-5.503c-.27-.136-1.602-.79-1.85-.88-.25-.09-.43-.136-.61.136-.18.27-.7 1.218-.857 1.402-.157.183-.314.204-.584.068-.27-.136-1.14-.42-2.172-1.342-.803-.717-1.346-1.604-1.503-1.876-.157-.272-.017-.419.118-.553.122-.121.272-.32.408-.478.136-.159.182-.272.272-.453.09-.182.046-.341-.022-.478-.068-.136-.61-1.474-.836-2.022-.22-.53-.443-.458-.61-.466-.16-.008-.344-.01-.528-.01-.184 0-.485.07-.74.36-.254.29-.97.948-.97 2.31 0 1.361.99 2.68 1.127 2.863.136.183 1.948 2.974 4.72 4.17.659.284 1.173.454 1.573.582.662.21 1.264.18 1.74.11.53-.079 1.602-.655 1.828-1.282.227-.627.227-1.163.16-1.282-.068-.119-.248-.182-.518-.318z"/>
                  </svg>
                  Chat
                </Button>
              </div>
            </Card>

            <Card className="card-glow p-8 text-center">
              <h3 className="text-xl font-bold text-gradient mb-4 font-cyber">Response Time</h3>
              <p className="text-muted-foreground text-sm">
                I typically respond to messages within <span className="text-primary font-semibold">24-48 hours</span>. 
                For urgent matters, reach out via LinkedIn or WhatsApp for faster response.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;