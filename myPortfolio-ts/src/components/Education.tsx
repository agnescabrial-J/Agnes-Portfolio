import { GraduationCap, Award } from "lucide-react";
import { Card } from "./ui/card";

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-slate-medium/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Education & Certification</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-8 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)]">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Bachelor of Technology</h3>
                <p className="text-primary font-medium">Information Technology</p>
                <p className="text-muted-foreground">Sethu Institute of Technology (SIT)</p>
                <p className="text-muted-foreground">Madurai, India</p>
                <p className="text-sm text-text-secondary mt-2">Aug 2018 – July 2022</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)]">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Angular Bootcamp</h3>
                <p className="text-primary font-medium">Dive Deep into Front-End Development</p>
                <p className="text-sm text-text-secondary mt-2">July 2025</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
