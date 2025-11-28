import { Mail, Linkedin, Download, FileText } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-5xl mx-auto text-center space-y-8 animate-in fade-in duration-1000">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Agnes Cabrial J
          </h1>
          <div className="h-1 w-32 bg-primary mx-auto rounded-full" />
          <p className="text-2xl md:text-3xl text-muted-foreground font-medium">
            Full Stack Developer
          </p>
        </div>
        
        <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
          3.5+ years of experience building robust web applications with Angular, Django, and PHP. 
          Specialized in eCommerce solutions and creating scalable, user-focused digital experiences.
        </p>

        <div className="flex flex-col items-center gap-6 pt-6">
          {/* Primary CTAs */}
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Button 
              variant="default" 
              size="lg"
              className="bg-primary hover:bg-terracotta-dark text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            
            <a 
              href="https://www.linkedin.com/in/agnescabrial" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                variant="outline" 
                size="lg"
                className="border-border hover:bg-muted hover:border-primary transition-all duration-300"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </a>
          </div>

          {/* Download Resume Button */}
          <a 
            href="/Agnes-Portfolio/resume.pdf" 
            download="Agnes_Cabrial_Resume.pdf"
            className="group inline-flex items-center gap-3 px-5 py-2.5 bg-card/50 backdrop-blur-sm border border-border rounded-lg hover:bg-card hover:border-primary/50 transition-all duration-300"
          >
            <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-md group-hover:bg-primary/20 transition-colors">
              <Download className="h-4 w-4 text-primary group-hover:translate-y-0.5 transition-transform duration-300" />
            </div>
            <span className="font-medium text-foreground">Download Resume</span>
            <FileText className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;