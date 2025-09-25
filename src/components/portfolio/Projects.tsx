import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Brain, Activity, Ship, TrendingUp, Building } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Jarvis AI Assistant",
      description: "An intelligent personal AI assistant built with Python, featuring natural language processing and task automation capabilities for seamless user interaction.",
      icon: Brain,
      technologies: ["Python", "AI/ML", "Natural Language Processing"],
      category: "Artificial Intelligence",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Diabetes Prediction System",
      description: "Machine learning model that analyzes patient data to predict diabetes risk, helping in early diagnosis and prevention with high accuracy rates.",
      icon: Activity,
      technologies: ["Python", "Machine Learning", "Data Analysis", "Scikit-learn"],
      category: "Healthcare ML",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Titanic Survival Prediction",
      description: "Classification model analyzing passenger data from the Titanic dataset to predict survival probability using various ML algorithms.",
      icon: Ship,
      technologies: ["Python", "Pandas", "NumPy", "Classification"],
      category: "Data Science",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "SUV Purchase Prediction",
      description: "ML-based prediction model that analyzes customer demographics and behavior to predict SUV purchase likelihood for targeted marketing.",
      icon: TrendingUp,
      technologies: ["Python", "Machine Learning", "Customer Analytics"],
      category: "Business Intelligence",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "College Hostel Management System",
      description: "Comprehensive full-stack web application for managing college hostel operations, including room allocation, student management, and administrative tasks.",
      icon: Building,
      technologies: ["HTML5", "CSS3", "JavaScript", "Django"],
      category: "Web Development",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in machine learning, AI, and web development
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 bg-background border-border animate-scale-in overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="relative">
                  {/* Icon with gradient background */}
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.gradient} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="w-full h-full text-white" />
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <Badge variant="secondary" className="mb-3">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardDescription className="text-foreground/70 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-4">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 hover:bg-primary/10 hover:border-primary group/btn"
                      >
                        <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-200" />
                        Code
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 hover:bg-primary/10 hover:border-primary group/btn"
                      >
                        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-200" />
                        Demo
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-background rounded-2xl p-8 shadow-soft max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Want to see more?
              </span>
            </h3>
            <p className="text-foreground/80 text-lg mb-6">
              Check out my GitHub for more projects and contributions to open source
            </p>
            <Button asChild size="lg" className="gradient-primary text-white hover:scale-105 transition-all duration-300">
              <a href="https://github.com/Anmol-1212" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                Visit GitHub Profile
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;