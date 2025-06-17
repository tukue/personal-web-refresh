import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'AWS Event-Driven Application Development',
    description: 'Developed event-driven architecture using AWS services with focus on scalability, reliability and security best practices.',
    details: [
      'Implementing ECS restarting logic using Lambda function',
      'AWS Event bus for integrating communication between lambdas',
      'Step Functions for orchestrating complex workflows',
      'X-Ray for distributed tracing and debugging',
      'CloudFormation for infrastructure as code',
      'Security Hub for security findings and compliance'
    ],
    tags: ['AWS', 'CloudFormation', 'Lambda', 'Step Functions', 'X-Ray', 'Security Hub'],
    githubUrl: null,
    demoUrl: '#',
    featured: true
  },
  {
    title: 'Cloud Infrastructure Automation',
    description: 'Developed infrastructure as code solutions using Terraform, implementing AWS services and Kubernetes orchestration with security best practices.',
    details: [],
    tags: ['Terraform', 'AWS', 'Kubernetes', 'Docker', 'Security'],
    githubUrl: 'https://github.com/tukue/simpleAppInfraCode',
    demoUrl: '#'
  },
  {
    title: 'Serverless React Application with AWS Amplify',
    description: 'Built a full-stack serverless application using React and AWS Amplify with Lambda functions, API Gateway, and DynamoDB.',
    details: [
      'Serverless backend with AWS Lambda functions and API Gateway',
      'Data persistence using DynamoDB with Amplify DataStore',
      'Authentication and authorization with Amazon Cognito',
      'Automated deployments through Amplify Console'
    ],
    tags: ['React', 'AWS Amplify', 'Lambda', 'API Gateway', 'DynamoDB'],
    githubUrl: 'https://github.com/tukue/reactcon',
    demoUrl: '#'
  },
  {
    title: 'Cloud Monitoring Solution',
    description: 'Implemented comprehensive monitoring solutions using Grafana, Prometheus, and the ELK Stack for cloud infrastructure visibility.',
    details: [],
    tags: ['Grafana', 'Prometheus', ],
    githubUrl: 'https://github.com/tukue/simpleApplication',
    demoUrl: '#'
  },
  {
    title: 'Fullstack React AWS Amplify Application',
    description: 'Developed a modern fullstack web application using React and AWS cloud services through Amplify with secure authentication and real-time data.',
    details: [
      'Secure user authentication and authorization using Amazon Cognito',
      'Real-time data synchronization with GraphQL API and AppSync',
      'Serverless backend with DynamoDB for data persistence',
      'Responsive UI with AWS Amplify UI components',
      'Automated CI/CD pipeline for continuous deployment'
    ],
    tags: ['React', 'AWS Amplify', 'GraphQL', 'Cognito', 'DynamoDB'],
    githubUrl: 'https://github.com/tukue/todo',
    demoUrl: '#'
  },
  {
    title: 'Microservices-based APIs',
    description: 'Designed and implemented a comprehensive enterprise-grade microservices platform using Spring Boot and cloud technologies.',
    details: [
      'Scalable microservices architecture using Spring Boot and Spring Cloud',
      'Service orchestration and container management with Kubernetes',
      'Message-driven architecture using RabbitMQ for service integration',
      'API Gateway implementation with Spring Cloud Gateway'
    ],
    tags: ['Spring Boot', 'Kubernetes', 'RabbitMQ', 'Docker', 'AWS'],
    githubUrl: null,
    demoUrl: '#'
  },
  {
    title: 'Containerized Node.js Application on EKS',
    description: 'Developed and deployed a scalable Node.js application using containerization and infrastructure as code practices.',
    details: [
      'Containerized Node.js application with Docker multi-stage builds',
      'Infrastructure provisioning using Terraform',
      'Kubernetes deployments with replica sets for high availability',
      'CI/CD pipeline for automated builds and deployments'
    ],
    tags: ['Node.js', 'Docker', 'Amazon EKS', 'Terraform', 'AWS'],
    githubUrl: 'https://github.com/tukue/simpleAppInfraCode',
    demoUrl: '#'
  },
  {
    title: 'Python Development Portfolio',
    description: 'Developed multiple Python projects demonstrating proficiency in REST APIs, game development, test automation, and data analysis.',
    details: [
      'RESTful API Development with Flask framework and SQLAlchemy',
      'Automated test suites using pytest and Selenium',
      'Data processing pipelines using pandas and NumPy',
      'Data visualization using matplotlib and seaborn'
    ],
    tags: ['Python', 'Flask', 'pytest', 'pandas', 'NumPy', 'REST APIs'],
    githubUrl: 'https://github.com/tukue/simple_api',
    demoUrl: '#'
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12 tracking-tight sm:text-4xl">My Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col h-full border-2 border-transparent hover:border-primary/30 dark:hover:border-primary/20 transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">
                  {project.title}
                </CardTitle>
                <div className="flex space-x-2">
                  {project.githubUrl ? (
                    <a 
                      href={project.githubUrl}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  ) : (
                    <span className="text-muted-foreground/40 cursor-not-allowed">
                      <Github className="h-5 w-5" />
                    </span>
                  )}
                  {project.demoUrl && project.demoUrl !== '#' && (
                    <a 
                      href={project.demoUrl}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow pb-6">
              <p className="text-muted-foreground mb-4">{project.description}</p>
              {project.details && project.details.length > 0 && (
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  {project.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              )}
            </CardContent>
            <CardFooter className="flex flex-col gap-4 pt-0">
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="font-normal text-xs">{tag}</Badge>
                ))}
              </div>
              {project.githubUrl && (
                <Button variant="outline" size="sm" className="w-full mt-2" asChild>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    View Code
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
