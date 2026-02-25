import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from './useInView';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageColor: string;
}

const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with payment integration, inventory management, and real-time order tracking.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    githubUrl: 'https://github.com/yourusername/project1',
    liveUrl: 'https://project1.example.com',
    imageColor: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management application with drag-and-drop interface, real-time updates, and team features.',
    technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yourusername/project2',
    liveUrl: 'https://project2.example.com',
    imageColor: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Weather Dashboard',
    description: 'Beautiful weather dashboard with location-based forecasts, interactive maps, and historical data visualization.',
    technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'Express'],
    githubUrl: 'https://github.com/yourusername/project3',
    liveUrl: 'https://project3.example.com',
    imageColor: 'from-green-500 to-teal-500',
  },
  {
    title: 'Social Media Analytics',
    description: 'Analytics dashboard for tracking social media metrics, engagement rates, and audience insights across platforms.',
    technologies: ['Next.js', 'MongoDB', 'D3.js', 'Node.js'],
    githubUrl: 'https://github.com/yourusername/project4',
    imageColor: 'from-orange-500 to-red-500',
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div 
        className={`h-48 bg-gradient-to-br ${project.imageColor} flex items-center justify-center text-white text-4xl relative overflow-hidden`}
        animate={{ scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 0.6 }}
        >
          {project.title.split(' ').map(word => word[0]).join('')}
        </motion.div>
      </motion.div>
      
      <div className="p-6">
        <h3 className="text-2xl mb-3">{project.title}</h3>
        <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <motion.span
              key={i}
              className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + i * 0.05 }}
              whileHover={{ scale: 1.1 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
        
        <div className="flex gap-4">
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
              whileHover={{ x: 5 }}
            >
              <Github size={18} />
              <span>Code</span>
            </motion.a>
          )}
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
              whileHover={{ x: 5 }}
            >
              <ExternalLink size={18} />
              <span>Live Demo</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="projects" className="min-h-screen py-20 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl mb-12 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
