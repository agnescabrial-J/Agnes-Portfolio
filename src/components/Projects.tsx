import { Database, Shield, ShoppingCart, MessageSquare } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const Projects = () => {
  const projects = [
    {
      icon: Database,
      title: "Full-Stack NFC Integration",
      technologies: ["Python", "Django", "JavaScript"],
      description: "Independently developed a mobile-compatible NFC solution with tag read/write functionality using Django and JavaScript, covering the full project lifecycle from planning to client delivery.",
      features: [
        "Tag read/write functionality",
        "Cross-platform mobile compatibility",
        "Advanced browser permission handling",
        "Full project lifecycle management"
      ],
      color: "from-emerald-500/20 to-emerald-600/10"
    },
    {
      icon: Shield,
      title: "Parking management system",
      technologies: ["Django", "AWS SES", "REST API"],
      description: "Built a Parking management system with OTP-based login and password recovery using Django and AWS SES SMTP. Implemented robust session and token validation following best practices.",
      features: [
        "OTP-based authentication",
        "Secure password recovery",
        "Session & token validation",
        "Dashboard APIs development"
      ],
      color: "from-cyan-500/20 to-cyan-600/10"
    },
    {
      icon: ShoppingCart,
      title: "BigCommerce Theme Customization",
      technologies: ["PHP", "BigCommerce", "StencilJS"],
      description: "Customized 10+ BigCommerce themes with focus on widget development, responsive design, and site performance optimization. Delivered features like geo-pricing and store pickup.",
      features: [
        "10+ theme customizations",
        "Widget development",
        "Performance optimization",
        "Geo-pricing implementation"
      ],
      color: "from-orange-500/20 to-orange-600/10"
    },
    {
      icon: MessageSquare,
      title: "eCommerce Solutions",
      technologies: ["Angular", "Ionic", "PHP"],
      description: "Developed comprehensive eCommerce solutions for BigCommerce/Shopify platforms. Implemented intelligent product recommendations, GA4 tracking, and performance optimizations.",
      features: [
        "Real-time product recommendations",
        "User engagement tracking",
        "Angular form implementation",
        "Performance monitoring"
      ],
      color: "from-purple-500/20 to-purple-600/10"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary transition-all duration-500 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] group overflow-hidden relative"
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6 inline-block p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <Badge 
                        key={i}
                        variant="secondary"
                        className="bg-muted hover:bg-primary/20 border-border text-foreground px-3 py-1 text-xs transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2 mt-0.5">▸</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
