import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="bg-slate-medium/50 border-t border-border py-8 text-center text-muted-foreground">
        <p>© 2025 Agnes Cabrial J. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
