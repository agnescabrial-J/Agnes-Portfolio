import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Front-End",
      skills: ["HTML5", "CSS3", "SCSS", "Bootstrap", "JavaScript", "jQuery", "Angular", "Responsive Design"]
    },
    {
      category: "Back-End & APIs",
      skills: ["Python", "Django", "PHP", "API Integration", "GraphQL", "REST APIs"]
    },
    {
      category: "E-commerce",
      skills: ["BigCommerce", "Stencil.js", "Theme Customization"]
    },
    {
      category: "Tools & Analytics",
      skills: ["Git", "Postman", "VS Code", "Visual Studio", "Swagger", "GA4", "PageSpeed Insights", "GTmetrix", "Lighthouse"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Technical Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)]"
            >
              <h3 className="text-xl font-bold mb-4 text-primary">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <Badge 
                    key={i}
                    variant="secondary"
                    className="bg-muted hover:bg-primary/20 border-border text-foreground px-3 py-1.5 text-sm transition-colors duration-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
