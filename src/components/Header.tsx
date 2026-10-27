
import React from 'react';

const Header = () => {
  const navLinks = [
    { title: 'Home', href: '#home' },
    { title: 'Resume', href: '#resume' },
    { title: 'Education', href: '#education' },
    { title: 'Projects', href: '#projects' },
    { title: 'About', href: '#about' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <a href="#" className="text-lg font-bold tracking-tighter text-foreground">
          Tukue
        </a>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <a key={link.title} href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                {link.title}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary transition-colors hover:bg-primary/15"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Open for work
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
