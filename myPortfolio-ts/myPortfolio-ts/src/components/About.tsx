import { Code2, Sparkles, Zap } from "lucide-react";
import { Card } from "./ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full Stack Expertise",
      description: "Proficient in both front-end (Angular, JavaScript) and back-end (Django, PHP) development"
    },
    {
      icon: Sparkles,
      title: "eCommerce Specialist",
      description: "Expert in BigCommerce and Shopify customization with 10+ theme implementations"
    },
    {
      icon: Zap,
      title: "Performance Focused",
      description: "Passionate about optimization, clean code, and delivering exceptional user experiences"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        <Card className="p-8 md:p-12 mb-12 bg-card border-border shadow-[0_4px_24px_hsl(215_25%_8%_/_0.4)]">
          <p className="text-lg text-text-secondary leading-relaxed">
            Full Stack Developer with <span className="text-primary font-semibold">3.5+ years</span> of experience in building, testing, and deploying complete web applications across front-end and back-end technologies. 
            Skilled in <span className="text-primary font-semibold">Angular</span> for creating responsive user interfaces and <span className="text-primary font-semibold">Django/PHP</span> for developing robust server-side logic. 
            <br /><br />
            Experienced in writing clean, efficient, and scalable code while collaborating with teams to deliver reliable solutions. 
            Passionate about learning new technologies and continuously improving product performance, quality, and user experience.
          </p>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)] group"
              >
                <div className="mb-4 inline-block p-3 bg-muted rounded-lg group-hover:bg-primary/10 transition-colors duration-300">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
