'use client';
import QualificationsSection from '@/components/QualificationsSection';
import { motion } from 'framer-motion';
import { skills } from '@/constants/skills';

export default function QualificationsPage() {
  // Convert the skill levels from text to percentage values
  const getSkillPercentage = (level: string) => {
    switch (level) {
      case 'Advanced': return 85;
      case 'Intermediate': return 70;
      case 'Basic': return 55;
      case 'Beginner': return 40;
      default: return 50;
    }
  };

  return (
    <div className="pt-20">
      <QualificationsSection/>
      
      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-16 container mx-auto px-4"
      >
        <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Technical Skills
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => {
            const percentage = getSkillPercentage(skill.level);
            
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-slate-800 p-4 rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-900 dark:text-white">
                    {skill.name}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {skill.level}
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percentage}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}