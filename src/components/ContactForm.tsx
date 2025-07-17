'use client'
import { useState } from 'react'
import { FiMail, FiMapPin, FiPhone, FiGithub, FiLinkedin } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Replace with your actual form submission logic
      // For example, using Formspree, Netlify Forms, or your own API
      console.log('Form submitted:', formData)
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-12">
      <div>
        <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="text-primary mt-1">
              <FiMail size={20} />
            </div>
            <div>
              <h3 className="font-medium">Email</h3>
              <a 
                href="mailto:nabeen2058@gmail.com" 
                className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
              >
                nabeen2058@gmail.com
              </a>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="text-primary mt-1">
              <FiPhone size={20} />
            </div>
            <div>
              <h3 className="font-medium">Phone</h3>
              <a 
                href="tel:+9779845217529" 
                className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
              >
               9845217529
              </a>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="text-primary mt-1">
              <FiMapPin size={20} />
            </div>
            <div>
              <h3 className="font-medium">Location</h3>
              <p className="text-gray-600 dark:text-gray-400">
               Lalitpur, Nepal
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="text-primary mt-1">
              <FiLinkedin size={20} />
            </div>
            <div>
              <h3 className="font-medium">LinkedIn</h3>
              <a 
                href="https://www.linkedin.com/in/nabinthapa123/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
              >
                Nabin Thapa
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="text-primary mt-1">
              <FiGithub size={20} />
            </div>
            <div>
              <h3 className="font-medium">GitHub</h3>
              <a 
                href="https://github.com/Nabeen-Thapa" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
              >
                Nabeen-Thapa
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg"
            >
              Thank you for your message! I&apos;ll get back to you soon.
            </motion.div>
          )}
          
          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg"
            >
              Something went wrong. Please try again later.
            </motion.div>
          )}
          
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-slate-700"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-slate-700"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block mb-1 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-slate-700"
            ></textarea>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors w-full disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  )
}