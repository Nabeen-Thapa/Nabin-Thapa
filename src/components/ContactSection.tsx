'use client';
import { motion } from 'framer-motion'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'

export default function ContactSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            Get In <span className="text-primary">Touch</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <p className="mb-6">
                Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-primary mt-1">
                    <FiMail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a 
                      href="mailto:your.email@example.com" 
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
                    <h4 className="font-medium">Phone</h4>
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
                    <h4 className="font-medium">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Lalitpur, Nepal
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
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
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-slate-700"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}