
import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center py-20">
      <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
          Tucky
        </h1>
        <p className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          A full-stack developer who loves to build things for the web.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <Button asChild size="lg">
          <a href="#contact">Contact Me</a>
        </Button>
        <Button asChild size="lg" variant="secondary">
          <a href="https://github.com/tukue/personalwebsite/raw/main/public/Tucky_Resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
        </Button>
      </div>
      <div className="flex gap-6 mt-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <a href="https://github.com/tukue" target="_blank" rel="noopener noreferrer" aria-label="Github" className="text-muted-foreground hover:text-primary transition-colors"><Github size={24} /></a>
        <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={24} /></a>
        <a href="https://twitter.com/tucky_tan" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={24} /></a>
      </div>
    </section>
  );
};

export default Hero;
