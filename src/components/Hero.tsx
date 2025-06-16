
import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Hero = () => {
  return (
    <section id="home" className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center py-20">
      <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <Avatar className="h-32 w-32 mx-auto mb-6">
          <AvatarImage src="/profile-photo.jpg" alt="Tukue" />
          <AvatarFallback>TG</AvatarFallback>
        </Avatar>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
          Tukue Gebremariam Gebregergis, MSc
        </h1>
        <p className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Senior DevOps Engineer & Backend Developer
        </p>
        <p className="text-md md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          tukue.geb@gmail.com | +46 725838209
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <Button asChild size="lg">
          <a href="#contact">Contact Me</a>
        </Button>
        <Button asChild size="lg" variant="secondary">
          <a href="/Tukue-Resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
        </Button>
      </div>
      <div className="flex gap-6 mt-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <a href="https://github.com/tukue" target="_blank" rel="noopener noreferrer" aria-label="Github" className="text-muted-foreground hover:text-primary transition-colors"><Github size={24} /></a>
        <a href="https://linkedin.com/in/tukue" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={24} /></a>
        <a href="https://twitter.com/tukue_tan" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={24} /></a>
        <a href="mailto:tukue.geb@gmail.com" aria-label="Email" className="text-muted-foreground hover:text-primary transition-colors"><Mail size={24} /></a>
      </div>
    </section>
  );
};

export default Hero;
