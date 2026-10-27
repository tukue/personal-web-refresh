
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const Hero = () => {
  return (
    <section id="home" className="hero-surface flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center py-20">
      <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/15"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
          </span>
          Open for work — actively seeking Senior Backend &amp; Platform Engineering roles
        </a>
      </div>
      <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <Avatar className="h-32 w-32 mx-auto mb-6 ring-1 ring-primary/30 shadow-xl shadow-primary/10">
          <AvatarFallback>TG</AvatarFallback>
        </Avatar>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-3 text-foreground">
          Tukue Gebremariam Gebregergis, MSc
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-semibold mb-8 max-w-2xl mx-auto">
          Senior DevOps Engineer & Backend Developer
        </p>
        <p className="text-md md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Stockholm, Sweden · Open to work
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/15">
          <a href="#contact">Contact Me</a>
        </Button>
        <Button asChild size="lg" variant="secondary">
          <a href="/Tukue-Gebremariam-CV.pdf?v=20261017" target="_blank" rel="noopener noreferrer">View Resume</a>
        </Button>
      </div>
      <div className="flex gap-6 mt-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <a href="https://github.com/tukue" target="_blank" rel="noopener noreferrer" aria-label="Github" className="text-muted-foreground hover:text-primary transition-colors"><Github size={24} /></a>
        <a href="https://www.linkedin.com/in/tukuegebremariam/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={24} /></a>
        <a href="mailto:tukue.geb@gmail.com" aria-label="Email" className="text-muted-foreground hover:text-primary transition-colors"><Mail size={24} /></a>
      </div>
    </section>
  );
};

export default Hero
