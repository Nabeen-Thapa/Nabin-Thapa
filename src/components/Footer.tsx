import { FiGithub, FiLinkedin } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-white dark:bg-slate-900 py-8 border-t border-gray-200 dark:border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Nabin Thapa. All rights reserved.
          </p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a 
              href="https://github.com/Nabeen-Thapa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/nabinthapa123/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}