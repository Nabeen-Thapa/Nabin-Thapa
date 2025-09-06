import Link from 'next/link'
import { Project } from '@/constants/projects'
import Image from 'next/image'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-slate-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="h-48 bg-gray-200 dark:bg-slate-600 relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
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
          {/* {project.demoUrl && (
            <Link
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors"
            >
              Live Demo
            </Link>
          )} */}
          {project.codeUrl && (
            <Link
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 text-sm border border-primary text-primary px-4 py-2 rounded hover:bg-primary/10 transition-colors">
              {/* GitHub SVG Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12.02c0 5.11 3.32 9.44 7.94 10.98.58.11.79-.25.79-.56v-2.05c-3.23.7-3.9-1.4-3.9-1.4-.53-1.36-1.3-1.72-1.3-1.72-1.07-.73.08-.71.08-.71 1.18.08 1.8 1.21 1.8 1.21 1.05 1.8 2.74 1.28 3.41.98.11-.76.41-1.28.74-1.58-2.58-.29-5.3-1.29-5.3-5.75 0-1.27.45-2.31 1.2-3.13-.12-.3-.52-1.51.11-3.14 0 0 .97-.31 3.17 1.2a10.98 10.98 0 012.89-.39c.98 0 1.97.13 2.89.39 2.2-1.52 3.17-1.2 3.17-1.2.63 1.63.23 2.84.11 3.14.75.82 1.2 1.86 1.2 3.13 0 4.47-2.72 5.45-5.3 5.74.42.36.79 1.09.79 2.2v3.26c0 .31.21.68.8.56A10.5 10.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
              </svg>

              View Code
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}