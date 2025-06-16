
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 sm:py-32 text-center">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Get In Touch</h2>
      <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
        I'm currently open to new opportunities and collaborations. If you have a project in mind or just want to say hi, feel free to reach out.
      </p>
      <div className="flex flex-col items-center">
        <Button asChild size="lg" className="mb-8">
          <a href="mailto:tukue.geb@gmail.com">Say Hello</a>
        </Button>
        
        <div className="flex gap-6 mt-4">
          <a 
            href="https://github.com/tukue" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={24} />
            <span>GitHub</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/tukuegebremariam/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={24} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
