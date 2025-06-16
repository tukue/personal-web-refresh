
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'AWS Event-Driven Application Development',
    description: 'Developed event-driven architecture using AWS services with focus on scalability, reliability and security best practices.',
    image: '/event-driven.jpg',
    tags: ['AWS', 'CloudFormation', 'Lambda', 'Step Functions', 'X-Ray', 'Security Hub'],
    link: '#',
    featured: true
  },
  {
    title: 'Cloud Infrastructure Automation',
    description: 'Developed infrastructure as code solutions using Terraform, implementing AWS services and Kubernetes orchestration with security best practices.',
    image: '/devops.jpg',
    tags: ['Terraform', 'AWS', 'Kubernetes', 'Docker', 'Security'],
    link: 'https://github.com/tukue/simpleAppInfraCode',
  },
  {
    title: 'Serverless React Application with AWS Amplify',
    description: 'Built a full-stack serverless application using React and AWS Amplify with Lambda functions, API Gateway, and DynamoDB.',
    image: '/serverless.jpg',
    tags: ['React', 'AWS Amplify', 'Lambda', 'API Gateway', 'DynamoDB'],
    link: 'https://github.com/tukue/reactcon',
  },
  {
    title: 'Cloud Monitoring Solution',
    description: 'Implemented comprehensive monitoring solutions using Grafana, Prometheus, and the ELK Stack for cloud infrastructure visibility.',
    image: '/monitoring.jpg',
    tags: ['Grafana', 'Prometheus', 'ELK Stack'],
    link: '#',
  },
  {
    title: 'Fullstack React AWS Amplify Application',
    description: 'Developed a modern fullstack web application using React and AWS cloud services through Amplify with secure authentication and real-time data.',
    image: '/react-amplify.jpg',
    tags: ['React', 'AWS Amplify', 'GraphQL', 'Cognito', 'DynamoDB'],
    link: 'https://github.com/tukue/todo',
  },
  {
    title: 'Microservices-based APIs',
    description: 'Designed and implemented a comprehensive enterprise-grade microservices platform using Spring Boot and cloud technologies.',
    image: '/microservices-platform.jpg',
    tags: ['Spring Boot', 'Kubernetes', 'RabbitMQ', 'Docker', 'AWS'],
    link: '#',
  },
  {
    title: 'Containerized Node.js Application on EKS',
    description: 'Developed and deployed a scalable Node.js application using containerization and infrastructure as code practices.',
    image: '/eks-nodejs.jpg',
    tags: ['Node.js', 'Docker', 'Amazon EKS', 'Terraform', 'AWS'],
    link: '#',
  },
  {
    title: 'Python Development Portfolio',
    description: 'Developed multiple Python projects demonstrating proficiency in REST APIs, game development, test automation, and data analysis.',
    image: '/python-projects.jpg',
    tags: ['Python', 'Flask', 'pytest', 'pandas', 'NumPy', 'REST APIs'],
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12 tracking-tight sm:text-4xl">My Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <a href={project.link} key={project.title} target="_blank" rel="noopener noreferrer" className="block group">
            <Card className="bg-card/50 h-full border-2 border-transparent hover:border-primary transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <img src={project.image} alt={project.title} className="rounded-t-lg mb-4 aspect-video object-cover"/>
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </CardContent>
              <CardFooter className="flex-wrap gap-2">
                {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
              </CardFooter>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
