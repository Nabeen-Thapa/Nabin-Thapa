'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiBook, FiBriefcase, FiMapPin, FiCalendar, FiGlobe, FiMail } from 'react-icons/fi';

export default function QualificationsSection() {
  const [activeTab, setActiveTab] = useState<'education' | 'experience'>('education');
  
  const education = [
    {
      id: 1,
      degree: 'School Level (SLC)',
      institution: 'Bal Vinod Secondary School',
      period: 'Completed',
      location: 'Natole, Lalitpur, Nepal',
      icon: <FiBook className="text-blue-500" />
    },
    {
      id: 2,
      degree: '+2 Level',
      institution: 'Tripadma Vidhyashram Secondary School',
      period: 'Completed',
      location: 'Pulchok, Lalitpur, Nepal',
      icon: <FiBook className="text-blue-500" />
    },
    {
      id: 3,
      degree: 'Bachelor of Computer Application (BCA)',
      institution: 'Patan Multiple Campus',
      period: '2021 - Present (7th Semester)',
      location: 'Patan Dhoka, Lalitpur, Nepal',
      icon: <FiBook className="text-blue-500" />
    }
  ];

  const experiences = [
    {
      id: 1,
      role: 'Backend Development Training',
      company: 'Nepdev',
      period: '2023 - 2024',
      description: 'Learned JavaScript, Node.js, Express.js, TypeScript and other backend technologies',
      icon: <FiBriefcase className="text-purple-500" />,
      companyDetails: {
        address: 'Tarkeshowr 02, Kathmandu',
        website: 'https://nepdev.com.np/',
        email: 'info@nepdevtech.com'
      }
    },
    {
      id: 2,
      role: 'DevOps Training',
      company: 'Nepdev',
      period: '2025 - Ongoing',
      description: 'Currently learning DevOps practices and tools',
      icon: <FiBriefcase className="text-purple-500" />,
      companyDetails: {
        address: 'Tarkeshowr 02, Kathmandu',
        website: 'https://nepdev.com.np/',
        email: 'info@nepdevtech.com'
      }
    }
  ];


  return (
    <section id="qualifications" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Qualifications</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My educational background and professional training that have shaped my skills as a developer.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 dark:bg-slate-800 p-1 rounded-xl inline-flex">
            <button
              onClick={() => setActiveTab('education')}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                activeTab === 'education'
                  ? 'bg-white dark:bg-slate-700 text-blue-600 shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Education
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                activeTab === 'experience'
                  ? 'bg-white dark:bg-slate-700 text-blue-600 shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Experience
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'education' && (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-1 gap-6"
              >
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 dark:bg-slate-800 p-6 rounded-2xl border border-gray-200 dark:border-slate-700 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-xl">
                        {edu.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 font-medium mb-3">
                          {edu.institution}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center gap-2">
                            <FiCalendar size={14} />
                            <span>{edu.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FiMapPin size={14} />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === 'experience' && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-1 gap-6"
              >
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 dark:bg-slate-800 p-6 rounded-2xl border border-gray-200 dark:border-slate-700 hover:shadow-md transition-shadow group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-xl group-hover:scale-110 transition-transform">
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {exp.role}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 font-medium mb-3">
                          {exp.company}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
                          <FiCalendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {exp.description}
                        </p>
                        
                        {/* Company Details */}
                        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-slate-700">
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                            Company Details:
                          </h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                              <FiMapPin size={14} className="flex-shrink-0" />
                              <span>{exp.companyDetails.address}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <FiGlobe size={14} className="flex-shrink-0 text-gray-600 dark:text-gray-400" />
                              <a 
                                href={exp.companyDetails.website} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-600 dark:text-blue-400 hover:underline"
                              >
                                {exp.companyDetails.website}
                              </a>
                            </div>
                            <div className="flex items-center gap-3">
                              <FiMail size={14} className="flex-shrink-0 text-gray-600 dark:text-gray-400" />
                              <a 
                                href={`mailto:${exp.companyDetails.email}`}
                                className="text-blue-600 dark:text-blue-400 hover:underline"
                              >
                                {exp.companyDetails.email}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          
        </div>
      </div>
    </section>
  );
}