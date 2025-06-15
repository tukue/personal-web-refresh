
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            I'm a passionate frontend developer with a knack for creating beautiful and functional user interfaces. With a strong foundation in modern web technologies like React, TypeScript, and Tailwind CSS, I enjoy turning complex problems into simple, elegant solutions.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 sm:grid-cols-2 md:flex lg:gap-x-10">
            <span className="text-primary">React</span>
            <span className="text-primary">TypeScript</span>
            <span className="text-primary">Next.js</span>
            <span className="text-primary">Tailwind CSS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
