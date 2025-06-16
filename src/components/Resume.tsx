import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

const Resume = () => {
  const certifications = [
    'System verification - ISTQB Certified Tester Foundation',
    'Java design pattern certification',
    'Certified AWS Cloud Practitioner',
    'Certified AWS Solution Architect Associate',
    'Microsoft Certified Azure Fundamentals',
    'Terraform Certified Associate',
    'AWS Developer Associate',
    'Certified Scrum Product Owner',
    'AWS Certified AI Practitioner',
  ];

  const skillCategories = [
    {
      title: 'Programming',
      skills: ['C', 'C++', 'Java', 'Python', 'JavaScript'],
    },
    {
      title: 'Backend Technologies',
      skills: ['Spring Framework', 'Spring Boot', 'Node.js', 'Flask', 'Express.js', 'Django'],
    },
    {
      title: 'Frontend Technologies',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap'],
    },
    {
      title: 'Cloud Experience',
      skills: ['AWS', 'Azure', 'Google Cloud'],
    },
  ];

  const workExperience = [
    {
      title: 'Senior Cloud Engineer',
      company: 'Enigio',
      period: 'May 2024 – Oct 2024',
      description: 'Implemented event-driven applications using AWS CloudFormation, Lambda functions, and integrated various AWS cloud services. Focused on security scanning using Security Hub.',
    },
    {
      title: 'DevOps Engineer / SRE',
      company: 'Digital Route',
      period: 'Jun 2023 – Oct 2024',
      description: 'Infrastructure as code using Terraform, AWS services development, Kubernetes, operational automation, and AWS security implementations.',
    },
    {
      title: 'Cloud Developer/DevOps Engineer Consultant',
      company: 'Knowit',
      period: 'Jan 2021 – May 2023',
      description: 'Cloud migration, infrastructure automation, AWS serverless development, and CI/CD implementation using Azure DevOps.',
    },
    {
      title: 'Backend Developer',
      company: 'DXC Technology',
      period: 'Jan 2016 – Jan 2021',
      description: 'Developed backend Restful APIs for CRM application using spring boot Framework, hibernate following TmForum standard for interoperability as part of the Digital.',
    },
    {
      title: 'System Developer',
      company: 'Discovery Network Sweden',
      period: 'Mar 2016 – Dec 2017',
      description: 'Developed java applications that integrate with TV planning apps. Testing and deploying a new release of the TV planning system. Troubleshooting system failure, and migrated apps to AWS cloud (DNS, network architecture designs).',
    },
    {
      title: 'System Developer',
      company: 'Ericsson AB',
      period: 'Aug 2014 – Dec 2015',
      description: 'Embedded system feature development using C for a Hetnet feature in 4G software; end to end testing, and feature verification; detailed LTE system knowledge; scrum and continuous integration; good programming skill in Java and python.',
    },
  ];

  return (
    <section id="resume" className="py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Resume</h2>
          <Button variant="outline" className="mt-4 md:mt-0" asChild>
            <a href="/Tukue-Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              View Full Resume
            </a>
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Certifications */}
          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-4">Certifications</h3>
            <ul className="space-y-2">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Technical Skills */}
          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-4">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories.map((category, index) => (
                <div key={index}>
                  <h4 className="text-lg font-semibold mb-2">{category.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Work Experience */}
        <h3 className="text-2xl font-bold mb-6">Work Experience</h3>
        <div className="space-y-8">
          {workExperience.map((job, index) => (
            <Card key={index} className="p-6">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h4 className="text-xl font-semibold">{job.title}</h4>
                  <span className="text-muted-foreground">{job.period}</span>
                </div>
                <p className="text-lg mb-2">{job.company}</p>
                <p className="text-muted-foreground">{job.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;