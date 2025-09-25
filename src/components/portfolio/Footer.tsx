import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Anmol-1212",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/anmol-sharma-879ab6385",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:anmoll.sharma.12@gmail.com",
      label: "Email"
    }
  ];

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
              Anmol Sharma
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Aspiring software developer passionate about AI, ML, and creating 
              innovative solutions through code.
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((link) => (
                <Button
                  key={link.label}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="hover:text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>📧 anmoll.sharma.12@gmail.com</p>
              <p>📱 +91 7818947710</p>
              <p>📍 India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <span>© {currentYear} Anmol Sharma. Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>and lots of ☕</span>
          </div>
          
          <div className="mt-4 md:mt-0 text-sm text-muted-foreground">
            <span>Built with React, TypeScript & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;