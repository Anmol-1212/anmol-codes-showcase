const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-primary bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating innovative solutions through code
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-background rounded-2xl p-8 md:p-12 shadow-soft animate-slide-up">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  Hello! I'm Anmol Sharma
                </h3>
                
                <div className="space-y-4 text-foreground/80 text-lg leading-relaxed">
                  <p>
                    I am an aspiring software developer currently pursuing my Diploma in Computer Science 
                    at Amity University, Greater Noida. My journey in technology is driven by a deep 
                    fascination with Artificial Intelligence and Machine Learning.
                  </p>
                  
                  <p>
                    I specialize in Python development and have hands-on experience with web technologies 
                    including HTML5, CSS3, and the Django framework. My passion lies in creating 
                    efficient, user-friendly applications that solve real-world problems.
                  </p>
                  
                  <p>
                    Through various projects, I've developed expertise in machine learning algorithms, 
                    database management with MongoDB and PostgreSQL, and building full-stack web applications. 
                    I'm always eager to learn new technologies and take on challenging projects.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-card rounded-xl shadow-soft">
                  <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                    2+
                  </div>
                  <div className="text-muted-foreground text-sm">Years Learning</div>
                </div>
                
                <div className="text-center p-6 bg-card rounded-xl shadow-soft">
                  <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                    5+
                  </div>
                  <div className="text-muted-foreground text-sm">Projects Built</div>
                </div>
                
                <div className="text-center p-6 bg-card rounded-xl shadow-soft">
                  <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                    8+
                  </div>
                  <div className="text-muted-foreground text-sm">Technologies</div>
                </div>
                
                <div className="text-center p-6 bg-card rounded-xl shadow-soft">
                  <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                    24/7
                  </div>
                  <div className="text-muted-foreground text-sm">Learning Mode</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;