import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [

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
    demoUrl: '#'
  },
    {
  "title": "DevOps Infrastructure Automation on AWS with Terraform, Ansible, and GitOps Tools",
  "description": "Designed and automated a complete DevOps infrastructure on AWS using Terraform, Terragrunt, Ansible, and ArgoCD. Ensured infrastructure compliance, scalability, and maintainability through Infrastructure as Code and security tooling.",
  "details": [
    "Provisioned AWS infrastructure including VPC, EC2, S3, IAM, and Route 53 using Terraform and Terragrunt",
    "Automated Jenkins setup and software provisioning with Ansible playbooks",
    "Integrated Terrascan for static code analysis and compliance scanning of IaC",
    "Used ArgoCD for GitOps-style Kubernetes deployment configuration (if applicable)",
    "Managed remote state with S3 backend and DynamoDB locking for safe IaC workflows",
    "Enabled end-to-end CI/CD pipelines using Jenkins and GitHub integrations"
  ],
  "tags": [
    "AWS", "Terraform", "Terragrunt", "Ansible", "Terrascan", "ArgoCD", "Jenkins", 
    "CI/CD", "Infrastructure as Code", "DevOps", "Automation", "Scripting", 
    "Infrastructure Management"
  ],
  "githubUrl": "https://github.com/tukue/terraform-jenkins-aws",
  "demoUrl": "#"
},
{
  "title": "Azure DevOps Automation with Terraform, Terragrunt & ArgoCD",
  "description": "Automated the provisioning and configuration of Azure infrastructure using Terraform, Terragrunt, and shell scripting. Enhanced DevSecOps practices with Terrascan and streamlined deployment pipelines with ArgoCD for GitOps-driven workflows.",
  "details": [
    "Provisioned scalable Azure infrastructure using Terraform and Terragrunt for modular, maintainable IaC",
    "Automated infrastructure configuration and software deployment via shell scripts",
    "Integrated Terrascan for continuous security and compliance scanning of infrastructure code",
    "Implemented GitOps deployment workflows using ArgoCD for Kubernetes resources",
    "Enabled DevOps tech enablement through pipeline automation and infrastructure standardization"
  ],
  "tags": [
    "Azure", "Terraform", "Terragrunt", "Shell Scripting", "Terrascan",
    "ArgoCD", "DevOps", "DevSecOps", "Infrastructure as Code", "Automation"
  ],
  "githubUrl": "https://github.com/tukue/simpleAppProvisionAzure",
  "demoUrl": "#"
},
{
  "title": "Three-Tier Azure Infrastructure with Bicep & PowerShell",
  "description": "Implemented a modular, secure three-tier architecture on Azure using Bicep templates and PowerShell scripts. The design includes network segmentation, private connectivity, and application monitoring, with a Terraform-like deployment workflow.",
  "details": [
    "Designed modular Bicep templates for reusable and maintainable infrastructure code",
    "Automated deployment using PowerShell scripts following init, plan, and apply phases",
    "Implemented network segmentation for enhanced security and private connectivity",
    "Configured application monitoring and logging to ensure operational insights",
    "Adopted Infrastructure as Code best practices for Azure cloud environments"
  ],
  "tags": [
    "Azure", "Bicep", "PowerShell", "Infrastructure as Code", "Network Segmentation",
    "Private Connectivity", "Application Monitoring", "DevOps", "Automation"
  ],
  "githubUrl": "https://github.com/tukue/AzureInfrastuctureAsCode",
  "demoUrl": "#"
},
  {
    title: 'Implementing DevOps Monitoring Solution',
    description: 'Implemented comprehensive monitoring solutions using Grafana, Prometheus, and the ELK Stack for kubernets infrastructure visibility.',
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
  "title": "Node.js REST API with Express, Sequelize & PostgreSQL",
  "description": "Developed a robust RESTful API using Node.js, Express, Sequelize ORM, and PostgreSQL. Features include JWT-based user authentication, product and order management with full CRUD operations, and comprehensive Swagger API documentation.",
  "details": [
    "Implemented secure user authentication using JSON Web Tokens (JWT)",
    "Designed and built CRUD endpoints for product and order management",
    "Used Sequelize ORM for efficient database modeling and queries",
    "Documented API endpoints and usage with Swagger for easy integration",
    "Structured code for scalability and maintainability following best practices"
  ],
  "tags": [
    "Node.js", "Express", "Sequelize", "PostgreSQL", "JWT", "REST API", "Swagger", "Backend"
  ],
  "githubUrl": "https://github.com/tukue/ecommerce-api",
  "demoUrl": "#"
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
  {
    title: 'Automated EKS Deployment for Spring Boot Microservices with Terraform & GitHub Actions',
    description: 'Provisioned infrastructure with Terraform and deployed a containerized application to AWS using a CI/CD pipeline with GitHub Actions.',
    details: [
      'Infrastructure provisioned on AWS using Terraform.',
      'CI/CD pipeline built with GitHub Actions for automated builds and testing.',
      'Deployment to Amazon EKS managed by the AWS CI/CD pipeline.',
      'Container images stored in Amazon ECR.',
      'Monitoring and logging implemented with AWS CloudWatch.'
    ],
    tags: ['Terraform', 'AWS', 'GitHub Actions', 'CI/CD', 'EKS', 'Docker', 'DevOps'],
    githubUrl: 'https://github.com/tukue/grocery-microservices',
    demoUrl: '#'
  },
{
    title: 'Automated Infrastructure provisioning for scalable web app on GCP ',
    description: 'Provisioned infrastructure with Terraform and deployed a containerized application to AWS using a CI/CD pipeline with GitHub Actions.',
    details: [
      'Infrastructure provisioned on GCP using Terraform.',
      'CI/CD pipeline built with GitHub Actions for automated builds and testing.',
      'Terraform security configuration scan using Terrascan '
    ],
    tags: ['Terraform', 'GCP', 'GitHub Actions', 'CI/CD', 'Terraform security scanning', 'DevOps'],
    githubUrl: 'https://github.com/tukue/terraform-automation',
    demoUrl: '#'
  },
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
    demoUrl: '#',
    featured: true
  }

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
                  {project.demoUrl && project.demoUrl !== '#'&& (
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
