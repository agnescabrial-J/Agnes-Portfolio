import { Mail, Phone, Linkedin } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "agnescabrial.j1111@gmail.com",
      href: "mailto:agnescabrial.j1111@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-7339051767",
      href: "tel:+917339051767"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/agnescabrial"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Get In Touch</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and collaborations. 
            Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)] group text-center"
              >
                <div className="mb-4 inline-block p-3 bg-muted rounded-lg group-hover:bg-primary/10 transition-colors duration-300">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">{contact.label}</h3>
                <a 
                  href={contact.href}
                  target={contact.label === "LinkedIn" ? "_blank" : undefined}
                  rel={contact.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                  className="text-foreground hover:text-primary transition-colors duration-300 block break-words"
                >
                  {contact.value}
                </a>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-primary hover:bg-terracotta-dark text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all duration-300"
            onClick={() => window.location.href = 'mailto:agnescabrial.j1111@gmail.com'}
          >
            <Mail className="mr-2 h-5 w-5" />
            Send Email
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
