import { Briefcase, Calendar } from "lucide-react";
import { Card } from "./ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Developer",
      company: "Vinsinfo Pvt Ltd",
      location: "Chennai, India",
      period: "May 2024 – Present",
      achievements: [
        "Customized 10+ BigCommerce themes focused on widget development, responsive design, and site performance optimization",
        "Resolved 15+ production bugs, improving application stability and performance",
        "Reviewed and approved Git pull requests; contributed to scalable Angular-based modules",
        "Full-Stack NFC Integration — Independently developed a mobile-compatible NFC solution with tag read/write functionality using Django and JavaScript",
        "Secure Authentication & Dashboard APIs — Built a secure authentication system with OTP-based login and password recovery using Django and AWS SES SMTP"
      ]
    },
    {
      title: "Developer",
      company: "Vinsinfo Pvt Ltd",
      location: "Chennai, India",
      period: "June 2022 – April 2024",
      achievements: [
        "Developed eCommerce solutions for BigCommerce/Shopify using PHP, JS, and Stencil.js",
        "Delivered features like geo-pricing, store pickup, and intelligent product recommendations APIs",
        "Optimized site performance using GTmetrix and PageSpeed Insights",
        "Implemented GA4 tracking for banners, videos, and product interactions"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-slate-medium/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Experience</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="p-8 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)]"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg mt-1">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                      <p className="text-lg text-primary font-medium">{exp.company}</p>
                      <p className="text-muted-foreground">{exp.location}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground mt-4 md:mt-0">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-medium">{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-3 ml-14">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-text-secondary flex items-start">
                    <span className="text-primary mr-3 mt-1.5">▸</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
