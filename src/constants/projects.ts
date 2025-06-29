export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  demoUrl?: string
  codeUrl?: string
  image:string
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    demoUrl: '#',
    codeUrl: 'https://github.com/Nabeen-Thapa/myPortfilio',
    image: "/Assets/portfolio.png"
  },
  {
    id: '2',
    title: 'studnet Attendance system',
    description: 'A full stack sttendance platform with html, css, PHP with MySql',
    technologies: ['PHP', 'css', 'MySQL'],
    demoUrl: '#',
    codeUrl: 'https://github.com/Nabeen-Thapa/Attendance-system-project',
    image: "/Assets/attendance.png"
  },
  {
    id: '3',
    title: 'Note Keeping System - iKeepMy',
    description: 'A MERN-stack note keeping platform with React, Node.js,ExpressJS, and MongoDB.',
    technologies: ['React', 'ExpressJS', 'MongooDB'],
    demoUrl: '#',
    codeUrl: 'https://github.com/Nabeen-Thapa/iNoteBook',
    image: "/Assets/attendance.png"
  },
  {
    id: '4',
    title: 'E-commerce Platform-smartJHOLA',
    description: 'A backend (backend only) e-commerce platform with React, Node.js, and typeORM',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    demoUrl: '#',
    codeUrl: 'https://github.com/Nabeen-Thapa/smartJHOLA',
    image: "/Assets/smartjhola.png"
  },
  {
    id: '5',
    title: 'E-commerce Platform - fruit selling system',
    description: 'A full-Stack e-commerce platform with React, Node.js, and typeORM',
    technologies: ['React', 'Node.js', "Typescript", 'TypeORM'],
    demoUrl: '#',
    codeUrl: 'https://github.com/Nabeen-Thapa/fruit-Selling-System',
    image: "/Assets/faldul.png"
  },
  {
    id: '6',
    title: 'Passowrd managet',
    description: 'A simple password manager platform with react, typescript, typeORM',
    technologies: ['React', 'typescript', 'typeORM'],
    demoUrl: '#',
    codeUrl: 'https://github.com/Nabeen-Thapa/password_manager',
    image: "/Assets/password-manager.png"
  },
  {
    id: '7',
    title: 'News portal',
    description: 'A simple News platform using news API with React',
    technologies: ['React'],
    demoUrl: '#',
    codeUrl: 'https://github.com/Nabeen-Thapa/reactJS/tree/main/newsapp',
    image: "/Assets/attendance.png"
  },
  {
    id: '8',
    title: 'text editor',
    description: 'A simple real time text editor/colaborator platform with React Soecket.io',
    technologies: ['React', 'SocketIO'],
    demoUrl: '#',
    codeUrl: 'https://github.com/Nabeen-Thapa/text-editor',
    image:"/Assets/attendance.png"
  }
  
  // Add more projects as needed
]