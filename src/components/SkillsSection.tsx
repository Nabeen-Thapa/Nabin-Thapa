'use client'
import { motion } from 'framer-motion'
import { skills } from '@/constants/skills'

export default function SkillsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              My <span className="text-primary">Skills</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here are the technologies and tools I work with to create amazing digital experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center group cursor-pointer"
                >
                  <div className="text-4xl mb-4 text-primary group-hover:scale-110 transition-transform">
                    <Icon />
                  </div>
                  <h3 className="font-semibold text-lg text-center mb-2">
                    {skill.name}
                  </h3>
                  <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-1000"
                      style={{ 
                        width: skill.level === 'Advanced' ? '90%' : 
                               skill.level === 'Intermediate' ? '75%' : 
                               skill.level === 'Basic' ? '60%' : '40%' 
                      }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    {skill.level}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}