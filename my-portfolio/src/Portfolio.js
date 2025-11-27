import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, Linkedin, ChevronRight, Code, Database, Globe, Award, Briefcase, GraduationCap, Github } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'certification', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const skills = {
    frontend: ['HTML5', 'CSS3', 'SCSS', 'Bootstrap', 'JavaScript', 'jQuery', 'Angular', 'Responsive Design'],
    backend: ['Python', 'Django', 'PHP', 'API Integration', 'GraphQL'],
    ecommerce: ['BigCommerce', 'Shopify', 'StencilJS'],
    tools: ['Git', 'Postman', 'VS Code', 'Visual Studio', 'Swagger', 'GA4', 'PageSpeed Insights', 'GTmetrix', 'Lighthouse']
  };

  const experiences = [
    {
      title: 'Senior Developer',
      company: 'Vinsinfo Pvt Ltd',
      location: 'Chennai, India',
      period: 'May 2024 – Present',
      achievements: [
        'Customized 10+ BigCommerce themes focused on widget development, responsive design, and site performance optimization',
        'Resolved 15+ production bugs, improving application stability and performance',
        'Reviewed and approved Git pull requests; contributed to scalable Angular-based modules',
        'Full-Stack NFC Integration — Independently developed a mobile-compatible NFC solution with tag read/write functionality using Django and JavaScript',
        'Secure Authentication & Dashboard APIs — Built secure authentication system with OTP-based login and password recovery using Django and AWS SES SMTP'
      ]
    },
    {
      title: 'Developer',
      company: 'Vinsinfo Pvt Ltd',
      location: 'Chennai, India',
      period: 'June 2022 – April 2024',
      achievements: [
        'Developed eCommerce solutions for BigCommerce/Shopify using PHP, JS, and Stencil.js',
        'Delivered features like geo-pricing, store pickup, and intelligent product recommendations APIs',
        'Optimized site performance using GTmetrix and PageSpeed Insights',
        'Implemented GA4 tracking for banners, videos, and product interactions'
      ]
    }
  ];

  const projects = [
    {
      title: 'Full-Stack NFC Integration',
      tech: 'Python (Django)',
      description: 'Independently developed a mobile-compatible NFC solution with tag read/write functionality. Implemented advanced browser permission handling and ensured seamless cross-platform performance on mobile devices.',
      highlights: ['Tag read/write functionality', 'Cross-platform mobile compatibility', 'Advanced browser permission handling'],
      color: 'emerald',
      icon: Database,
      tags: ['Python', 'Django', 'JavaScript']
    },
    {
      title: 'Secure Authentication System',
      tech: 'Django',
      description: 'Built a secure authentication system with OTP-based login and password recovery. Developed dashboard APIs with robust session and token validation following best practices.',
      highlights: ['OTP-based authentication', 'Secure password recovery', 'Session & token validation'],
      color: 'cyan',
      icon: Code,
      tags: ['Django', 'AWS SES', 'REST API']
    },
    {
      title: 'BigCommerce Theme Customization',
      tech: 'PHP',
      description: 'Customized 10+ BigCommerce themes with focus on widget development, responsive design, and performance optimization. Implemented geo-pricing and intelligent product recommendations.',
      highlights: ['10+ theme customizations', 'Widget development', 'Performance optimization'],
      color: 'orange',
      icon: Globe,
      tags: ['BigCommerce', 'StencilJS', 'PHP']
    },
    {
      title: 'Social Media Application',
      tech: 'Angular',
      description: 'Developed a social media application with features such as posting, liking, commenting, sharing, and user authentication. Worked on Angular frontend implementation including authentication and forms.',
      highlights: ['Real-time messaging', 'User authentication', 'Angular form implementation'],
      color: 'purple',
      icon: Code,
      tags: ['Angular', 'Ionic', 'PHP']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="flex min-h-screen">
        {/* Left Sidebar - Fixed */}
        <aside className="hidden lg:flex lg:w-64 xl:w-72 fixed left-0 top-0 h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-r border-emerald-500/20 flex-col p-6">
          {/* Profile Section */}
          <div className="flex flex-col items-center mb-8 mt-4">
            <div className="w-28 h-28 rounded-full border-2 border-emerald-500 p-1 mb-4 relative overflow-hidden bg-slate-800">
              <div className="w-full h-full rounded-full flex items-center justify-center text-xs text-emerald-400 font-medium">
                Agnes Cabrial
              </div>
            </div>
            <h3 className="text-xl font-bold text-white text-center">Agnes Cabrial J</h3>
          </div>
          
          {/* Navigation Menu */}
          <nav className="flex-1 space-y-2">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Skills' },
              { id: 'experience', label: 'Experience' },
              { id: 'projects', label: 'Projects' },
              { id: 'education', label: 'Education' },
              { id: 'certification', label: 'Certification' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-5 py-2.5 transition-all duration-300 flex items-center space-x-2 ${
                  activeSection === item.id
                    ? 'bg-emerald-500 text-white font-medium'
                    : 'text-gray-300 hover:bg-slate-700/50 hover:text-white'
                }`}
              >
                <span className={activeSection === item.id ? 'opacity-100' : 'opacity-0'}>▪</span>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Mobile Header */}
        <nav className={`lg:hidden fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
          <div className="px-4 sm:px-6">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 flex items-center justify-center">
                  <span className="text-slate-900 font-bold text-lg">AC</span>
                </div>
                <span className="ml-3 text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Agnes Cabrial J
                </span>
              </div>

              <button
                className="p-2 rounded-lg hover:bg-slate-800"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="bg-slate-900/98 backdrop-blur-md">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Certification', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`block w-full text-left px-3 py-2 rounded-lg ${
                      activeSection === item.toLowerCase()
                        ? 'bg-emerald-500 text-white'
                        : 'text-gray-300 hover:bg-slate-800'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Main Content Area */}
        <main className="flex-1 lg:ml-64 xl:ml-72">

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-16 lg:pt-0 px-4">
        <div className="max-w-6xl mx-auto w-full">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">Full Stack Developer</h1>
              {/* <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-emerald-400">& Angular Specialist</h2> */}
            </div>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-4xl">
              Building, testing, and deploying complete web applications with 3.5+ years of experience. 
              Skilled in creating responsive user interfaces with Angular and developing robust server-side 
              logic with Django/PHP. Passionate about delivering reliable solutions and continuously improving user experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-emerald-500 font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 border-2 border-emerald-500 font-semibold hover:bg-emerald-500/10 transition-all duration-300"
              >
                View My Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-emerald-400">Full Stack Developer</h3>
              <p className="text-gray-300 leading-relaxed">
                With 3.5+ years of hands-on experience in building, testing, and deploying complete web applications 
                across front-end and back-end technologies. I specialize in Angular for creating responsive user 
                interfaces and Django/PHP for developing robust server-side logic.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I'm experienced in writing clean, efficient, and scalable code while collaborating with teams to 
                deliver reliable solutions. My expertise spans JavaScript, Angular, Python/Django, PHP, API 
                development, and cloud platforms.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Passionate about learning new technologies and continuously improving product performance, quality, 
                and user experience.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-cyan-400">Key Strengths</h3>
              <div className="space-y-4">
                {[
                  'Full-Stack Development',
                  'Angular & Reactive Forms',
                  'Django & API Integration',
                  'E-commerce Solutions',
                  'Performance Optimization',
                  'Clean & Scalable Code'
                ].map((strength, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors">
                    <ChevronRight className="text-cyan-400" size={20} />
                    <span className="text-gray-300">{strength}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">
            Technical <span className="text-emerald-400">Skills</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Front-End */}
            <div className="bg-slate-800/80 rounded-2xl p-6 border-l-4 border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-5">
                <Code className="text-emerald-400" size={24} />
                <h3 className="text-lg font-bold text-emerald-400">Front-End</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill, index) => (
                  <span key={index} className="px-3 py-1.5 bg-slate-700/60 text-emerald-300 rounded-md text-sm hover:bg-emerald-500/20 transition-colors border border-slate-600">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Back-End */}
            <div className="bg-slate-800/80 rounded-2xl p-6 border-l-4 border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-5">
                <Database className="text-cyan-400" size={24} />
                <h3 className="text-lg font-bold text-cyan-400">Back-End</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill, index) => (
                  <span key={index} className="px-3 py-1.5 bg-slate-700/60 text-cyan-300 rounded-md text-sm hover:bg-cyan-500/20 transition-colors border border-slate-600">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* E-Commerce */}
            <div className="bg-slate-800/80 rounded-2xl p-6 border-l-4 border-purple-500 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-5">
                <Globe className="text-purple-400" size={24} />
                <h3 className="text-lg font-bold text-purple-400">E-Commerce</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.ecommerce.map((skill, index) => (
                  <span key={index} className="px-3 py-1.5 bg-slate-700/60 text-purple-300 rounded-md text-sm hover:bg-purple-500/20 transition-colors border border-slate-600">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-slate-800/80 rounded-2xl p-6 border-l-4 border-orange-500 hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-5">
                <Award className="text-orange-400" size={24} />
                <h3 className="text-lg font-bold text-orange-400">Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, index) => (
                  <span key={index} className="px-3 py-1.5 bg-slate-700/60 text-orange-300 rounded-md text-sm hover:bg-orange-500/20 transition-colors border border-slate-600">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Work <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-slate-900/50 rounded-xl p-6 md:p-8 border border-slate-700 hover:border-emerald-500 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-emerald-500/10 rounded-lg">
                    <Briefcase className="text-emerald-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-emerald-400 mb-2">{exp.title}</h3>
                    <p className="text-xl text-gray-300 mb-1">{exp.company}</p>
                    <p className="text-gray-400 mb-4">{exp.location} | {exp.period}</p>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <ChevronRight className="text-cyan-400 flex-shrink-0 mt-1" size={18} />
                          <span className="text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">
            Featured <span className="text-emerald-400">Projects</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => {
              const Icon = project.icon;
              const colorClasses = {
                emerald: {
                  gradient: 'from-emerald-500 to-emerald-600',
                  text: 'text-emerald-400',
                  tag: 'bg-slate-700/60 text-emerald-300 border-slate-600',
                  hover: 'hover:border-emerald-500'
                },
                cyan: {
                  gradient: 'from-cyan-500 to-cyan-600',
                  text: 'text-cyan-400',
                  tag: 'bg-slate-700/60 text-cyan-300 border-slate-600',
                  hover: 'hover:border-cyan-500'
                },
                orange: {
                  gradient: 'from-orange-500 to-orange-600',
                  text: 'text-orange-400',
                  tag: 'bg-slate-700/60 text-orange-300 border-slate-600',
                  hover: 'hover:border-orange-500'
                },
                purple: {
                  gradient: 'from-purple-500 to-purple-600',
                  text: 'text-purple-400',
                  tag: 'bg-slate-700/60 text-purple-300 border-slate-600',
                  hover: 'hover:border-purple-500'
                }
              };
              
              const colors = colorClasses[project.color];
              
              return (
                <div key={index} className={`bg-slate-800/80 rounded-2xl overflow-hidden border border-slate-700 ${colors.hover} transition-all duration-300`}>
                  <div className={`w-full h-40 bg-gradient-to-br ${colors.gradient} flex items-center justify-center`}>
                    <Icon size={56} className="text-white opacity-90" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                    <p className={`text-sm ${colors.text} mb-3 font-semibold`}>{project.tech}</p>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tech, idx) => (
                        <span key={idx} className={`px-3 py-1 ${colors.tag} rounded-md text-xs border`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <ChevronRight className={`${colors.text} flex-shrink-0 mt-0.5`} size={16} />
                          <span className="text-xs text-gray-400">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Education & Certification Section */}
      <section id="education" className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">
            Education & <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Education */}
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-emerald-500 transition-all duration-300">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-emerald-500/10 rounded-lg">
                  <GraduationCap className="text-emerald-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-emerald-400 mb-1">Bachelor of Technology</h3>
                  <p className="text-base text-gray-300 mb-1">Information Technology</p>
                  <p className="text-sm text-gray-400 mb-1">Sethu Institute of Technology (SIT)</p>
                  <p className="text-sm text-gray-400">Madurai, India</p>
                  <p className="text-sm text-cyan-400 mt-2">Aug 2018 – July 2022</p>
                </div>
              </div>
            </div>

            {/* Certification */}
            <div id="certification" className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-cyan-500/10 rounded-lg">
                  <Award className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-1">Angular Bootcamp</h3>
                  <p className="text-base text-gray-300 mb-2">Dive Deep into Front-End Development</p>
                  <p className="text-sm text-emerald-400">Completed: July 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Get In <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-emerald-500 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-emerald-500/10 rounded-lg">
                  <Phone className="text-emerald-400" size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a href="tel:+917339051767" className="text-xl text-gray-200 hover:text-emerald-400 transition-colors">
                    +91-7339051767
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <Mail className="text-cyan-400" size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a href="mailto:agnescabrial.j1111@gmail.com" className="text-xl text-gray-200 hover:text-cyan-400 transition-colors break-all">
                    agnescabrial.j1111@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-emerald-500 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-emerald-500/10 rounded-lg">
                  <Linkedin className="text-emerald-400" size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">LinkedIn</p>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-200 hover:text-emerald-400 transition-colors">
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-purple-500/10 rounded-lg">
                  <Github className="text-purple-400" size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">GitHub</p>
                  <a href="https://github.com/agnescabrial" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-200 hover:text-purple-400 transition-colors">
                    View My Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Agnes Cabrial J. All rights reserved.
          </p>
        </div>
      </footer>
        </main>
      </div>
    </div>
  );
}