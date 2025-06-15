
import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border/40 py-8">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-muted-foreground text-sm">&copy; {new Date().getFullYear()} Tucky. All rights reserved.</p>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <a href="https://github.com/tukue" target="_blank" rel="noopener noreferrer" aria-label="Github" className="text-muted-foreground hover:text-primary transition-colors"><Github size={20} /></a>
          <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={20} /></a>
          <a href="https://twitter.com/tucky_tan" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
