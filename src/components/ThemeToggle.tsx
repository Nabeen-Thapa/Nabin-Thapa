'use client'
import { useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true' || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches && !localStorage.getItem('darkMode'))
    setDarkMode(isDark)
    
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    localStorage.setItem('darkMode', String(newMode))
    
    if (newMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={toggleDarkMode}
      className="relative p-2 rounded-full bg-gray-200 dark:bg-slate-700 transition-colors"
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        animate={{ rotate: darkMode ? 180 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
      </motion.div>
      
      {/* Animated background circle */}
      <motion.span
        className="absolute inset-0 bg-primary rounded-full -z-10"
        initial={false}
        animate={{ scale: darkMode ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  )
}