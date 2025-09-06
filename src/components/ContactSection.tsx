'use client';
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
                    <FiMail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Email</h4>
                    <a 
                      href="mailto:nabeen2058@gmail.com" 
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      nabeen2058@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
                    <FiPhone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Phone</h4>
                    <a 
                      href="tel:+9779845217529" 
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      +977 9845217529
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
                    <FiMapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Lalitpur, Nepal
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <a 
                    href="https://github.com/Nabeen-Thapa" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 dark:bg-slate-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
                    aria-label="GitHub"
                  >
                    <FiGithub size={20} />
                  </a>
                  <a 
                    href="https://linkedin.com/in/nabinthapa123/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 dark:bg-slate-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FiLinkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium text-gray-900 dark:text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium text-gray-900 dark:text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium text-gray-900 dark:text-white">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                  ></textarea>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}