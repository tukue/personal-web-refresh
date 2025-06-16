
import React from 'react';

const About = () => {
  const skills = ['AWS', 'Terraform', 'Docker', 'Kubernetes', 'CI/CD', 'Java', 'Spring Boot', 'Python', 'Node.js', 'Cloud Security'];
  
  const experience = [
    {
      company: 'Enigio',
      position: 'Senior Cloud Engineer',
      period: 'May 2024 – Oct 2024',
      description: 'Implemented event-driven applications using AWS CloudFormation, Lambda functions, and integrated various AWS cloud services.'
    },
    {
      company: 'Digital Route',
      position: 'DevOps Engineer / SRE',
      period: 'Jun 2023 – Oct 2024',
      description: 'Infrastructure as code using Terraform, AWS services development, Kubernetes, operational automation, and AWS security implementations.'
    },
    {
      company: 'Knowit',
      position: 'Cloud Developer/DevOps Engineer Consultant',
      period: 'Jan 2021 – May 2023',
      description: 'Cloud migration, infrastructure automation, AWS serverless development, and CI/CD implementation using Azure DevOps.'
    }
  ];

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            I am an experienced Senior DevOps Engineer and Backend Developer with extensive background in cloud computing and IP networking. I specialize in developing robust cloud solutions, implementing infrastructure as code, and building scalable backend systems using Java, Python, and Node.js.
          </p>
        </div>
        
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <h3 className="text-xl font-bold mb-4">Skills</h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 text-base font-semibold leading-7 sm:grid-cols-3 md:flex lg:gap-x-10">
            {skills.map((skill) => (
              <span key={skill} className="text-primary">{skill}</span>
            ))}
          </div>
        </div>
        
        <div className="mx-auto mt-12 max-w-2xl lg:mx-0 lg:max-w-none">
          <h3 className="text-xl font-bold mb-4">Experience</h3>
          <div className="grid gap-8 mt-6">
            {experience.map((job, index) => (
              <div key={index} className="border-l-2 border-primary pl-4">
                <h4 className="font-bold">{job.position} | {job.company}</h4>
                <p className="text-sm text-muted-foreground">{job.period}</p>
                <p className="mt-2">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
