"use client";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import Image from "next/image";
import { useState } from "react";

export default function HeroSection() {
  const [imageHovered, setImageHovered] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800"></div>

      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto flex flex-col items-center gap-8"
        >
          {/* Profile Image at the top */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              duration: 0.7, 
              type: "spring", 
              stiffness: 100 
            }}
            whileHover={{ 
              scale: 1.05,
              rotate: 5,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setImageHovered(true)}
            onHoverEnd={() => setImageHovered(false)}
            className="relative w-40 h-40 md:w-40 md:h-40 flex-shrink-0 mb-6 cursor-pointer"
          >
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white dark:border-slate-800 shadow-2xl">
              <Image
                src="/Assets/nabin-thapa.png"
                alt="Nabin Thapa"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Floating circles animation */}
            {imageHovered && (
              <>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full"
                />
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-500 rounded-full"
                />
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="absolute -bottom-3 -right-3 w-5 h-5 bg-pink-500 rounded-full"
                />
              </>
            )}
            
            {/* Animated rings */}
            <motion.div 
              className="absolute -inset-4 border-2 border-blue-400 rounded-full"
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity }
              }}
            />
            <motion.div 
              className="absolute -inset-6 border border-purple-400 rounded-full opacity-70"
              animate={{ 
                rotate: -360,
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity }
              }}
            />
          </motion.div>

          {/* Text Content */}
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Hi, I&apos;m <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Nabin Thapa</span>
            </motion.h1>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8"
            >
              Backend Developer
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto"
            >
              I build exceptional digital experiences with modern technologies. Currently focused on creating accessible, user-friendly web applications.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.a
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300"
              >
                Contact Me
              </motion.a>
              <motion.a
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                href="/Assets/resume.pdf"
                download
                className="flex items-center gap-2 border border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Download CV <FiDownload />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            ></motion.div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}