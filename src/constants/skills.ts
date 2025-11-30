// src/constants/skills.ts
import { FaReact, FaNodeJs } from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiRedis,
  SiPostman,
  SiDocker,
  SiNginx,
  SiDebian
} from 'react-icons/si';
import { DiPostgresql } from 'react-icons/di';
import { IconType } from 'react-icons/lib';
import { FaServer } from 'react-icons/fa';
import { BsGear, BsStack } from 'react-icons/bs';      // BullMQ icon alternative

// Define the skill type
type Skill = {
  name: string;
  icon: IconType;
  level: string;
};

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
    name: 'NestJS',
    icon: SiNestjs as IconType,
    level: 'Intermediate',
  },
  {
    name: 'React',
    icon: FaReact as IconType,
    level: 'Intermediate',
  },
  {
    name: 'Next.js',
    icon: SiNextdotjs as IconType,
    level: 'Beginner',
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss as IconType,
    level: 'Intermediate',
  },
  {
    name: 'TypeORM',
    icon: DiPostgresql as IconType,
    level: 'Intermediate',
  },
  {
    name: 'MongoDB',
    icon: SiMongodb as IconType,
    level: 'Intermediate',
  },
  {
    name: 'MySQL',
    icon: SiMysql as IconType,
    level: 'Intermediate',
  },
  {
    name: 'Debian VPS',
    icon: SiDebian as IconType,
    level: 'Intermediate',
  },
  {
    name: 'BullMQ',
    icon: BsStack as IconType,
    level: 'Intermediate',
  },
  {
    name: 'Redis',
    icon: SiRedis as IconType,
    level: 'Intermediate',
  },
  {
    name: 'Docker',
    icon: SiDocker as IconType,
    level: 'Beginner',
  },
  {
    name: 'Postman',
    icon: SiPostman as IconType,
    level: 'Advanced',
  },
  {
    name: 'Nginx',
    icon: SiNginx as IconType,
    level: 'Beginner',
  },
  {
    name: 'PM2',
    icon: FaServer as IconType,
    level: 'Intermediate',
  },
   {
    name: 'CI/CD',
    icon: BsGear as IconType,
    level: 'Intermediate',
  },
];
