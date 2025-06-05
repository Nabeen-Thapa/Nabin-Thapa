import { StaticImport } from "next/dist/shared/lib/get-img-props"

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  imagePath?: string
  demoUrl?: string | StaticImport;
  codeUrl?: string
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    imagePath: '/images/projects/portfolio.jpg',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    id: '2',
    title: 'studnet Attendance system',
    description: 'A full stack sttendance platform with html, css, PHP with MySql',
    technologies: ['PHP', 'css', 'MySQL'],
    imagePath: '/images/projects/portfolio.jpg',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    id: '3',
    title: 'Note Keeping System - iKeepMy',
    description: 'A MERN-stack note keeping platform with React, Node.js,ExpressJS, and MongoDB.',
    technologies: ['React', 'ExpressJS', 'MongooDB'],
    imagePath: '/images/projects/portfolio.jpg',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    id: '4',
    title: 'E-commerce Platform',
    description: 'A backend e-commerce platform with React, Node.js, and typeORM',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    imagePath: '/images/projects/portfolio.jpg',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    id: '5',
    title: 'E-commerce Platform',
    description: 'A full-Stack e-commerce platform with React, Node.js, and typeORM',
    technologies: ['React', 'Node.js', "Typescript", 'TypeORM'],
    imagePath: '/images/projects/portfolio.jpg',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    id: '6',
    title: 'News portal',
    description: 'A simple News platform using news API with React',
    technologies: ['React'],
    imagePath: '/images/projects/portfolio.jpg',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    id: '7',
    title: 'text editor',
    description: 'A simple real time text editor/colaborator platform with React Soecket.io',
    technologies: ['React', 'SocketIO'],
    imagePath: '/images/projects/portfolio.jpg',
    demoUrl: '#',
    codeUrl: '#',
  }
]