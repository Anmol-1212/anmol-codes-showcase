import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-muted opacity-50"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-primary bg-clip-text text-transparent">
              Anmol Sharma
            </span>
          </h1>
          
          {/* Tagline */}
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium">
            Aspiring Software Developer | Python & ML Enthusiast
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Aspiring developer with a strong interest in Artificial Intelligence, Machine Learning, 
            and full-stack web development. Focused on creating efficient and user-friendly applications.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              asChild
              size="lg" 
              className="gradient-primary text-white hover:scale-105 transition-all duration-300 shadow-medium"
            >
              <a href="#projects">View My Work</a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              asChild
              className="hover:bg-primary/10 hover:border-primary transition-all duration-300"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <Button
              variant="ghost"
              size="lg"
              asChild
              className="hover:text-primary hover:bg-primary/10 transition-all duration-300 group"
            >
              <a href="https://github.com/Anmol-1212" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </Button>
            
            <Button
              variant="ghost"
              size="lg"
              asChild
              className="hover:text-primary hover:bg-primary/10 transition-all duration-300 group"
            >
              <a href="https://linkedin.com/in/anmol-sharma-879ab6385" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </Button>
            
            <Button
              variant="ghost"
              size="lg"
              asChild
              className="hover:text-primary hover:bg-primary/10 transition-all duration-300 group"
            >
              <a href="mailto:anmoll.sharma.12@gmail.com">
                <Mail className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button variant="ghost" size="sm" asChild>
          <a href="#about">
            <ArrowDown className="h-5 w-5" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;