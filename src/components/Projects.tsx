
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of the first project, highlighting the key features and technologies used.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2071&auto=format&fit=crop',
    tags: ['React', 'Next.js', 'Tailwind CSS'],
    link: '#',
  },
  {
    title: 'Project Two',
    description: 'A brief description of the second project, showcasing different skills and challenges overcome.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop',
    tags: ['Vite', 'TypeScript', 'Shadcn/UI'],
    link: '#',
  },
  {
    title: 'Project Three',
    description: 'A summary of the third project, focusing on its impact and the learning outcomes.',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2070&auto=format&fit=crop',
    tags: ['Astro', 'Vue', 'MDX'],
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
