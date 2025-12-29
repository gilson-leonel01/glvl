const skills = [
  { name: "React", level: 95 },
  { name: "Next.js", level: 90 },
  { name: "TypeScript", level: 90 },
  { name: "JavaScript", level: 95 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Java", level: 95 },
  { name: "Spring", level: 85 },
  { name: "Dart", level: 90 },
  { name: "Flutter", level: 85 },
  { name: "PostgreSQL", level: 90 },
  { name: "MySQL", level: 90 },
  { name: "Git", level: 90 },
  { name: "GitHub", level: 100 },
  { name: "Docker", level: 85 },
  { name: "Figma", level: 100 },
  { name: "Adobe Photoshop", level: 100 },
  { name: "Adobe Illustrator", level: 95 },
];

const technologies = [
  "Node.js",    
  "Nestjs",       
  "Express.js",      
  "React Native",      
  "Vue.js",   
  "Angular",         
  "Redux",            
  "Prisma",            
  "Supabase",         
  "Firebase",     
  "Vitest",
  "Jest",              
  "Cypress",           
];

export default function Skills () {
  return (
    <section id="skills" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">Minha Especialidade</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Habilidades e Tecnologias
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Trabalho com diversas tecnologias modernas para construir aplicações escaláveis e de alto desempenho.
            </p>
          </div> 

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-bold text-foreground mb-6">
                Habilidades Essenciais
              </h3>
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-primary font-medium">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-primary rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-6">
                Tecnologias
              </h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-5 py-3 bg-gradient-card border border-border/50 rounded-xl text-foreground font-medium hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
