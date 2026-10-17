import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, MapPin, Globe } from 'lucide-react';

const About = () => {
  const languages = [
    { name: "English", level: "Professional" },
    { name: "Swedish", level: "Basic conversational" },
    { name: "French", level: "Basic conversational" },
    { name: "Amharic", level: "Native" },
    { name: "Tigrigna", level: "Native" }
  ];

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 tracking-tight sm:text-4xl">About Me</h2>
        
        <div className="grid md:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Left Column: Profile Image & Social Links */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start space-y-6">
            <div className="relative w-64 h-64 rounded-xl overflow-hidden border-4 border-primary/20 shadow-xl">
              <img 
                src="/profile.jpg"
                alt="Tukue Gebremariam" 
                className="object-cover w-full h-full"
                loading="lazy"
                decoding="async"
              />
            </div>
            
            <div className="flex flex-col space-y-2 w-full">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:tukue.geb@gmail.com" className="hover:text-primary transition-colors">
                  tukue.geb@gmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Stockholm, Sweden</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-primary" />
                <a href="https://github.com/tukue" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  github.com/tukue
                </a>
              </div>
            </div>
            
            <div className="flex gap-4 mt-4">
              <a 
                href="https://github.com/tukue" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              
              <a 
                href="https://www.linkedin.com/in/tukuegebremariam/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Right Column: Bio & Languages */}
          <div className="md:col-span-3 space-y-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Backend Developer and Platform Engineer with experience across DevOps, Site Reliability Engineering (SRE), 
                    and Cloud Engineering — building cloud-native applications, scalable backend services, and reliable platforms 
                    that enable teams to deliver software efficiently.
                  </p>
                  <p>
                    Experienced in Java, Spring Boot, Python, Node.js, AWS, Azure, Kubernetes, Docker, Terraform, Infrastructure 
                    as Code (IaC), GitOps, and CI/CD. My experience includes microservices, REST APIs, distributed systems, 
                    event-driven architectures, cloud infrastructure, automation, observability, cloud security, and developer experience.
                  </p>
                  <p>
                    I enjoy understanding business challenges and translating them into practical, scalable technical solutions. 
                    I focus on building secure and reliable systems, automating infrastructure and software delivery, and improving 
                    developer experience. I thrive in collaborative, cross-functional teams where ownership, knowledge sharing, and 
                    continuous improvement contribute to successful outcomes.
                  </p>
                  <p>
                    Alongside Backend and Platform Engineering, I continue expanding my knowledge in AI Engineering, Generative AI, 
                    Large Language Models (LLMs), AI-powered applications, and developer tools. I recently completed the AI for 
                    Technical Leaders course from Quantic, strengthening my understanding of practical AI adoption and AI strategy.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Languages</h3>
                <div className="grid grid-cols-2 gap-3">
                  {languages.map((language, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span>{language.name}</span>
                      <Badge variant="outline">{language.level}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Core Competencies</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">Backend Engineering</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">Platform Engineering</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">DevOps</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">Site Reliability Engineering (SRE)</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">Cloud Engineering</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">AWS</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">Azure</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">Kubernetes</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">Docker</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">Terraform</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">Java</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">Spring Boot</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">Python</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">Node.js</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">Microservices</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">REST APIs</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">Distributed Systems</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">Event-Driven Architecture</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">Infrastructure as Code (IaC)</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">GitOps</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">CI/CD</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">Observability</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">Automation</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">Cloud Security</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">Developer Experience (DevEx)</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">AI Engineering</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">Generative AI</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">LLMs</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
