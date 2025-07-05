'use client';
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiDownload } from 'react-icons/fi'

export default function HeroSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Hi, I&apos;m <span className="text-primary">Nabin Thapa</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl text-secondary mb-6">
            Backend Developer
          </h2>
          <p className="text-lg mb-8">
            I build exceptional digital experiences with modern technologies. 
            Currently focused on creating accessible, user-friendly web applications.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contact Me
            </Link>
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/10 transition-colors"
            >
              Download CV <FiDownload />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}