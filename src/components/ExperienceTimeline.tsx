import { FiBriefcase } from 'react-icons/fi'

const experiences = [
  {
    id: 1,
    role: 'Backend Developer',
    company: 'Tech Company',
    period: '2021 - Present',
    description: 'Developed and maintained web applications using React and TypeScript. Collaborated with designers and backend developers to create seamless user experiences.',
  },
  {
    id: 2,
    role: 'Junior Developer',
    company: 'Startup Inc',
    period: '2019 - 2021',
    description: 'Worked on various projects including internal tools and customer-facing applications. Gained experience with modern JavaScript frameworks.',
  },
  // Add more experiences as needed
]

export default function ExperienceTimeline() {
  return (
    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gray-200 dark:before:bg-slate-700 before:bg-opacity-70">
      {experiences.map((experience) => (
        <div key={experience.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <FiBriefcase />
          </div>
          
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-800 p-4 rounded border border-gray-200 dark:border-slate-700 shadow-sm">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <h3 className="font-bold text-gray-900 dark:text-white">
                {experience.role}
              </h3>
              <time className="font-caveat font-medium text-primary">
                {experience.period}
              </time>
            </div>
            <h4 className="text-gray-600 dark:text-gray-400 mb-2">
              {experience.company}
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              {experience.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}