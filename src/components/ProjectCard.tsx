import Link from 'next/link'
import { Project } from '@/constants/projects'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-slate-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="h-48 bg-gray-200 dark:bg-slate-600 relative overflow-hidden">
        {/* Replace with actual project image */}
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-gray-500 dark:text-gray-400">Project Image</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="text-xs bg-gray-100 dark:bg-slate-600 text-gray-800 dark:text-gray-200 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {project.demoUrl && (
            <Link
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors"
            >
              Live Demo
            </Link>
          )}
          {project.codeUrl && (
            <Link
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm border border-primary text-primary px-4 py-2 rounded hover:bg-primary/10 transition-colors">
              View Code
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}