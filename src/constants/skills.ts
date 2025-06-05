// src/constants/skills.ts
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiJavascript, SiExpress } from 'react-icons/si';
import { IconType } from 'react-icons/lib'; // More precise import

// Define the skill type
type Skill = {
  name: string;
  icon: IconType;
  level: string;
};

// Cast each icon to IconType to ensure type safety
export const skills: Skill[] = [
   {
    name: 'Node.js',
    icon: FaNodeJs as IconType,
    level: 'Intermediate',
  },
  {
    name: 'Express.js',
    icon: SiExpress as IconType,
    level: 'Intermediate',
  },
  {
    name: 'JavaScript',
    icon: SiJavascript as IconType,
    level: 'Advanced',
  },
  {
    name: 'TypeScript',
    icon: SiTypescript as IconType,
    level: 'Advanced',
  },
  {
    name: 'React',
    icon: FaReact as IconType,
    level: 'Basic',
  },
  
  {
    name: 'Next.js',
    icon: SiNextdotjs as IconType,
    level: 'beginner',
  },
  
 
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss as IconType,
    level: 'Basic',
  },
];