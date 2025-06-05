'use client';
import { motion } from 'framer-motion';
import { skills } from '@/constants/skills';

export default function SkillsSection() {
  return (
    <section className="py-20 bg-red-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            My <span className="text-primary">Skills</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div 
                  key={skill.name}
                  className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow flex flex-col items-center"
                >
                  <div className="text-4xl mb-3 text-primary">
                    <Icon />
                  </div>
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    {skill.level}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}