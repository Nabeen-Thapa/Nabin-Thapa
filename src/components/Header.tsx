"use client";
import { useState, useEffect } from 'react'
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Qualifications', path: '/qualifications' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Nabin Thapa
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item, index) => (
              <motion.li
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={item.path}
                  className="relative group font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          {/* <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-slate-700 transition-colors"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <motion.div
              animate={{ rotate: darkMode ? 180 : 0 }}
              transition={{ duration: 0.5 }}
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </motion.div>
          </motion.button> */}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-dark dark:text-light p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-800 overflow-hidden"
          >
            <ul className="flex flex-col py-4 px-4">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={item.path}
                    className="block py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}