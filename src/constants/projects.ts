export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  demoUrl?: string
  codeUrl?: string
  image: string
  isDeployed?: boolean
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'A-Z ELECTRICAL AND ELECTRONIC',
    description: 'A full stack ecommerce platform for electronic shop with react, typescript, postgres',
    technologies: ['React + TypeScript', 'Node.js + TypeScript', 'Express', 'PostgreSQL'],
    demoUrl: 'https://www.a2zelectricmarmat.com',
    codeUrl: '#',
    image: "/Assets/atoz.png",
    isDeployed: true

  },
  {
    id: '2',
    title: 'Note Keeping System - iKeepMy',
    description: 'A MERN-stack note keeping platform with React, Node.js,ExpressJS, and MongoDB.',
    technologies: ['React', 'ExpressJS', 'MongooDB'],
    demoUrl: 'https://ikeepmy.nabinthapa99.com.np',
    codeUrl: '#',
    image: "/Assets/inotebook.png",
    isDeployed: true
  },
  {
    id: '3',
    title: 'student Attendance system',
    description: 'A full stack attendance platform with React, TypeScript, Express, PostgreSQL, Tailwind CSS',
    technologies: ['PHP', 'css', 'MySQL'],
    demoUrl: '#',
    codeUrl: 'https://github.com/Nabeen-Thapa/Attendance-system-project',
    image: "/Assets/attendance.png",
    isDeployed: false
  },
  
  {
    id: '4',
    title: 'E-commerce Platform-smartJHOLA',
    description: 'A backend (backend only) e-commerce platform with React, Node.js, and typeORM',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    demoUrl: '#',
    codeUrl: 'https://github.com/Nabeen-Thapa/smartJHOLA',
    image: "/Assets/smartjhola.png",
    isDeployed: false
  },
  {
    id: '5',
    title: 'E-commerce Platform - fruit selling system',
    description: 'A full-Stack e-commerce platform with React, Node.js, and typeORM',
    technologies: ['React', 'Node.js', "Typescript", 'TypeORM'],
    demoUrl: '#',
    codeUrl: 'https://github.com/Nabeen-Thapa/fruit-Selling-System',
    image: "/Assets/falful.png",
    isDeployed: false
  },
  {
    id: '6',
    title: 'Passowrd managet',
    description: 'A simple password manager platform with react, typescript, typeORM',
    technologies: ['React', 'typescript', 'typeORM'],
    demoUrl: '#',
    codeUrl: 'https://github.com/Nabeen-Thapa/password_manager',
    image: "/Assets/password-manager.png",
    isDeployed: false
  },
  {
    id: '7',
    title: 'News portal',
    description: 'A simple News platform using news API with React',
    technologies: ['React'],
    demoUrl: '#',
    codeUrl: 'https://github.com/Nabeen-Thapa/reactJS/tree/main/newsapp',
    image: "/Assets/newsPortal.png",
    isDeployed: false
  },
  {
    id: '8',
    title: 'text editor',
    description: 'A simple real time text editor/colaborator platform with React Soecket.io',
    technologies: ['React', 'SocketIO'],
    demoUrl: '#',
    codeUrl: 'https://github.com/Nabeen-Thapa/text-editor',
    image: "/Assets/text-editor.png",
    isDeployed: false
  }
  ,
  {
    id: '9',
    title: 'Email service',
    description: 'A simple mail service where a sender can send mail to multiple email at once',
    technologies: [ 'React + TypeScript', 'Express + TypeScript','Redis', 'BullMQ', 'Docker'],
    demoUrl: '#',
    codeUrl: 'https://github.com/Nabeen-Thapa/email-service',
    image: "/Assets/emailService.png",
    isDeployed: false
  }
]