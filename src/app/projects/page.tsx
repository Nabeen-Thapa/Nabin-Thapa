'use client'
import { useState } from 'react'
import { projects } from '@/constants/projects'
import ProjectCard from '@/components/ProjectCard'
import { motion } from 'framer-motion'
import { FiFilter, FiX } from 'react-icons/fi'

const allTechnologies = Array.from(
  new Set(projects.flatMap(project => project.technologies))
)

export default function ProjectsPage() {
  const [selectedTech, setSelectedTech] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)

  const toggleTech = (tech: string) => {
    setSelectedTech(prev =>
      prev.includes(tech)
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    )
  }

  const filteredProjects = selectedTech.length === 0
    ? projects
    : projects.filter(project =>
        selectedTech.some(tech => project.technologies.includes(tech))
      )

  return (
    <div className="pt-24 pb-12 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              My Projects
            </h1>
            
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
            >
              {showFilters ? <FiX size={18} /> : <FiFilter size={18} />}
              Filter Technologies
            </button>
          </div>

          {/* Filter Section */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mb-8 p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm"
            >
              <h3 className="text-lg font-semibold mb-4">Filter by Technology</h3>
              <div className="flex flex-wrap gap-3">
                {allTechnologies.map(tech => (
                  <button
                    key={tech}
                    onClick={() => toggleTech(tech)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedTech.includes(tech)
                        ? 'bg-primary text-white shadow-lg'
                        : 'bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600'
                    }`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
              {selectedTech.length > 0 && (
                <button
                  onClick={() => setSelectedTech([])}
                  className="mt-4 text-sm text-primary hover:underline"
                >
                  Clear all filters
                </button>
              )}
            </motion.div>
          )}

          {/* Projects Grid */}
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No projects match the selected filters.
              </p>
            </div>
          ) : (
            <motion.div 
              layout
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  layout
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
}