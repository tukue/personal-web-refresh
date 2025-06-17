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
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg";
                }}
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
                    I'm a DevOps Engineer and Backend Developer with a background in cloud computing and networking. 
                    I've been fortunate to work with companies like Ericsson, Discovery Network Sweden, and Digital Route 
                    where I've contributed to developing cloud solutions, implementing infrastructure as code, and building 
                    scalable backend systems.
                  </p>
                  <p>
                    Throughout my career, I've worked with AWS, Azure, and Google Cloud platforms, gaining experience with 
                    containerization, orchestration, and CI/CD pipelines. I enjoy working with Java, Python, and Node.js 
                    for backend development, and I've implemented infrastructure automation using Terraform and CloudFormation
                    to provision and manage cloud resources.
                  </p>
                  <p>
                    My goal is to build resilient, secure, and scalable systems that solve real business problems. I believe 
                    in combining technical solutions with business understanding to deliver value to stakeholders.
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
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">Cloud Architecture</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">Infrastructure as Code</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">CI/CD Pipelines</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">Containerization</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">Kubernetes</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">Microservices</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">AWS Services</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">Terraform</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">API Development</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">Backend Systems</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">Security Best Practices</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">Monitoring & Observability</Badge>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">DevSecOps</Badge>
                  

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
