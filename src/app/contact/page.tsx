"use client"
import ContactForm from "@/components/ContactForm"
import { motion } from "framer-motion"
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from "react-icons/fi"

export default function ContactPage() {
  return (
    <div className="pt-24 pb-12 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Let&lsquo;s Connect
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Have a question or want to work together? I&lsquo;d love to hear from you. 
              Send me a message and I&lsquo;ll respond as soon as possible.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg h-full">
                <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                      <FiMail size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <a 
                        href="mailto:nabeen2058@gmail.com" 
                        className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                      >
                        nabeen2058@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                      <FiPhone size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <a 
                        href="tel:+9779845217529" 
                        className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                      >
                        +977 9845217529
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                      <FiMapPin size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Location</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Lalitpur, Nepal
                      </p>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="pt-6">
                    <h3 className="font-semibold mb-4">Follow me</h3>
                    <div className="flex gap-4">
                      <a 
                        href="https://github.com/Nabeen-Thapa" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-100 dark:bg-slate-700 rounded-full hover:bg-primary hover:text-white transition-colors"
                        aria-label="GitHub"
                      >
                        <FiGithub size={20} />
                      </a>
                      <a 
                        href="https://linkedin.com/in/nabinthapa123/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-100 dark:bg-slate-700 rounded-full hover:bg-primary hover:text-white transition-colors"
                        aria-label="LinkedIn"
                      >
                        <FiLinkedin size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2"
            >
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg">
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}