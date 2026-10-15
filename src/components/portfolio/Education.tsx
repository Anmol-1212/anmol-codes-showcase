import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Diploma in Computer Science",
      institution: "Amity University",
      location: "Greater Noida",
      duration: "2023 - 2026",
      status: "Completed",
      description: "Focused on software development, data structures, algorithms, and machine learning. Active participation in coding competitions and technical projects.",
      highlights: [
        "Computer Science Fundamentals",
        "Python Programming",
        "Machine Learning",
        "Web Development",
        "Database Management"
      ],
      gradient: "from-blue-500 to-purple-500"
    },
    {
      degree: "High School",
      institution: "Elite New Generation International School",
      location: "Mathura",
      duration: "2022 - 2023",
      status: "Completed",
      description: "Strong foundation in mathematics and science with early exposure to computer programming and technology.",
      highlights: [
        "Mathematics Excellence",
        "Science Foundation",
        "Early Programming",
        "Academic Achievement"
      ],
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic journey in computer science and technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary to-accent"></div>
            
            {educationData.map((edu, index) => (
              <div 
                key={edu.degree}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse md:justify-end'
                } animate-slide-up`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 shadow-medium"></div>
                
                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? '' : 'md:ml-auto'}`}>
                  <Card className="bg-card hover:shadow-strong transition-all duration-300 hover:-translate-y-1 border-border">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${edu.gradient}`}>
                          <GraduationCap className="w-5 h-5 text-white" />
                        </div>
                        <Badge variant={edu.status === "Pursuing" ? "default" : "secondary"}>
                          {edu.status}
                        </Badge>
                      </div>
                      
                      <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                      <CardDescription className="text-base">{edu.institution}</CardDescription>
                      
                      <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-foreground/80 mb-4 leading-relaxed">
                        {edu.description}
                      </p>
                      
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">Key Areas of Study</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.highlights.map((highlight) => (
                            <Badge key={highlight} variant="outline" className="text-xs">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="bg-background shadow-soft max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Continuous Learning
                </span>
              </h3>
              <p className="text-foreground/80 text-lg leading-relaxed">
                Beyond formal education, I actively pursue online courses, participate in coding 
                challenges, and contribute to open-source projects. I believe in lifelong learning 
                and staying current with emerging technologies in the rapidly evolving field of 
                computer science and artificial intelligence.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
