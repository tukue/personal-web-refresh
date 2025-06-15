
import React from 'react';

const About = () => {
  const skills = ['React', 'Node.js', 'Typescript', 'Next.js', 'GraphQL', 'PostgreSQL'];

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            I am a full-stack developer from Thailand with a passion for creating beautiful and functional web applications. I have experience in building applications with JavaScript, React, Node.js, and more.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 text-base font-semibold leading-7 sm:grid-cols-3 md:flex lg:gap-x-10">
            {skills.map((skill) => (
              <span key={skill} className="text-primary">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
