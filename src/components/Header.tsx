
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
        <a href="#" className="text-lg font-bold tracking-tighter">
          Tukue
        </a>
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a key={link.title} href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {link.title}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
