import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

type WorkExperience = {
  title: string;
  company: string;
  period: string;
  description: string;
  bullets?: string[];
  current?: boolean;
};

const Resume = () => {
  const certifications = [
    'Certified Tester Foundation',
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
      skills: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'TypeScript'],
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

  const workExperience: WorkExperience[] = [
    {
      title: 'Independent Projects — Backend & Platform Engineering',
      company: 'Self-directed',
      period: 'November 2024 – Present',
      current: true,
      description:
        'Actively searching for senior Backend and Platform Engineering roles while shipping independent, production-grade projects.',
      bullets: [
        'Strengthening capabilities in Platform Engineering, cloud-native architectures, Kubernetes, GitOps, DevSecOps, and multicloud solutions across AWS, Azure, and GCP.',
        'Designing and developing cloud-native full-stack applications using React, Spring Boot, Node.js, and Python.',
        'Building Infrastructure as Code solutions using Terraform, CloudFormation, and Bicep.',
        'Expanding knowledge of AI Engineering through hands-on implementation of MLOps, LLMOps, and Agentic AI concepts.',
      ],
    },
    {
      title: 'Senior Cloud Engineer',
      company: 'Enigio',
      period: 'May 2024 – Oct 2024',
      description: 'Designed and delivered an event-driven ECS restart automation system for scheduled patch events, removing the need for developers to manually restart services during non-business hours across time zones.',
      bullets: [
        'Orchestrated fault-tolerant ECS service restarts with AWS EventBridge Scheduler, Lambda, and Step Functions, including retries and SNS error notifications.',
        'Delivered the solution as CloudFormation IaC for reproducible, version-controlled deployments across environments, reducing after-hours operational toil while respecting maintenance windows.',
      ],
    },
    {
      title: 'Site Reliability Engineer / DevOps Engineer',
      company: 'Digital Route',
      period: 'Jun 2023 – May 2024',
      description: 'Improved reliability, security, and operational efficiency across customer cloud environments through infrastructure automation, observability, and cloud cost management.',
      bullets: [
        'Provisioned multicloud infrastructure with Terraform and supported AWS and GCP services and Kubernetes operations.',
        'Built and managed serverless applications with AWS Lambda, plus Python cost monitoring and alerting to improve visibility and resource optimization.',
        'Created Datadog dashboards, metrics, and alerts for real-time observability and faster troubleshooting.',
        'Applied AWS Well-Architected recommendations and automated security best practices for production environments.',
      ],
    },
    {
      title: 'Cloud Developer/DevOps Engineer Consultant',
      company: 'Knowit',
      period: 'Jan 2022 – Jun 2023',
      description: 'Designed serverless AWS applications and automated cloud infrastructure and delivery for internal and client projects.',
      bullets: [
        'Developed cloud applications with AWS Lambda, API Gateway, and DynamoDB, integrating services into loosely coupled architectures.',
        'Built CI/CD pipelines and used Terraform for repeatable infrastructure provisioning and configuration.',
        'Supported migration of internal and on-premises applications to AWS, applying security best practices to strengthen data protection and platform reliability.',
      ],
    },
    {
      title: 'Backend Developer',
      company: 'DXC Technology · Telenor client',
      period: 'Dec 2017 – Jan 2022',
      description: 'Built Spring Boot REST microservices for Telenor’s BSS transformation, modernizing CRM services and enabling standardized system integration.',
      bullets: [
        'Migrated applications from monolithic to microservices architecture and implemented TM Forum Open APIs.',
        'Built Backend-for-Frontend services and deployed them to AWS EKS, with automated CI/CD pipelines.',
        'Improved reliability and troubleshooting through Prometheus and Grafana monitoring, contract testing, and integration testing.',
      ],
    },
    {
      title: 'System Engineer and Developer',
      company: 'Discovery Inc',
      period: 'Mar 2016 – Dec 2017',
      description: 'Developed and maintained business-critical Java applications and TV content-planning systems, including the WHAT’S On broadcast management system.',
      bullets: [
        'Migrated on-premises Oracle databases and applications to AWS RDS and cloud infrastructure, improving scalability and reducing maintenance overhead.',
        'Built Java, XSLT, and XPath workflows to automate content planning and data transformation; tested REST and SOAP integrations.',
        'Implemented CI/CD for the cloud-based planning application and maintained system availability through testing and troubleshooting.',
      ],
    },
    {
      title: 'LTE Software Developer',
      company: 'Ericsson AB',
      period: 'Aug 2014 – Dec 2015',
      description: 'Developed Linux-based embedded C software for 4G LTE baseband functionality, including the design and implementation of a HetNet feature to improve network capacity, coverage, and user experience.',
      bullets: [
        'Analyzed, designed, developed, and integrated baseband Layer 2 functionality and 4G HetNet features.',
        'Performed design-based and end-to-end testing, feature verification, and system-level debugging using LTE development and test tools.',
        'Supported continuous integration and deployment with Git and Jenkins, while contributing to technical roadmapping toward 5G.',
      ],
    },
  ];

  return (
    <section id="resume" className="py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Resume</h2>
          <Button variant="outline" className="mt-4 md:mt-0" asChild>
            <a href="/Tukue-Gebremariam-CV.pdf?v=20261017" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
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
            <Card key={index} className={`p-6 ${job.current ? 'border-primary/40' : ''}`}>
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h4 className="text-xl font-semibold flex items-center gap-3">
                    {job.title}
                    {job.current && (
                      <Badge className="bg-primary/10 text-primary border border-primary/30 hover:bg-primary/15">
                        <span className="relative mr-1.5 flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                        </span>
                        Open for work
                      </Badge>
                    )}
                  </h4>
                  <span className="text-muted-foreground">{job.period}</span>
                </div>
                <p className="text-lg mb-2">{job.company}</p>
                <p className="text-muted-foreground">{job.description}</p>
                {job.bullets && job.bullets.length > 0 && (
                  <ul className="list-disc pl-5 mt-3 space-y-1.5 text-sm text-muted-foreground">
                    {job.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
