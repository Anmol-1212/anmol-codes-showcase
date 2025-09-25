import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python"],
    },
    {
      category: "Web Technologies",
      skills: ["HTML5", "CSS3"],
    },
    {
      category: "Frameworks & Libraries",
      skills: ["Django", "Django REST Framework"],
    },
    {
      category: "Databases",
      skills: ["MongoDB", "PostgreSQL"],
    },
    {
      category: "Specializations",
      skills: ["Machine Learning", "Artificial Intelligence"],
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "PyCharm", "Jupyter Notebook"],
    },
  ];

  const skillColors = [
    "bg-primary text-primary-foreground",
    "bg-accent text-accent-foreground", 
    "bg-secondary text-secondary-foreground",
    "bg-muted text-muted-foreground",
    "bg-success text-success-foreground",
    "bg-primary/20 text-primary border border-primary/30",
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-primary bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The tools and technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={category.category}
                className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${categoryIndex * 100}ms` }}
              >
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {category.category}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skill}
                      className={`${skillColors[categoryIndex]} hover:scale-105 transition-transform duration-200 text-sm py-1 px-3`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-card rounded-2xl p-8 shadow-soft max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
              Always Learning
            </h3>
            <p className="text-foreground/80 text-lg">
              I'm constantly expanding my skill set and staying up-to-date with the latest 
              technologies in AI, ML, and web development. Currently exploring advanced 
              machine learning algorithms and modern web frameworks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;