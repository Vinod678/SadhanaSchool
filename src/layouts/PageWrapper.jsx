import { motion } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import logo from '../assets/logo.png'

export default function PageWrapper({ children, title, subtitle, bgImage }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {(title || bgImage) && (
        <div
          className="relative py-20 bg-[#0B3C6D] text-white overflow-hidden"
          style={bgImage ? { backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
        >
          {bgImage && <div className="absolute inset-0 bg-[#0B3C6D]/75" />}
          {/* Decorative glow */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-[#F97316] blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-white blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Logo */}
            <motion.div
              className="flex justify-center mb-5"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={logo}
                alt="Sadhana School Logo"
                className="w-20 h-20 rounded-full object-cover ring-4 ring-white/30 shadow-2xl"
              />
            </motion.div>

            <motion.h1
              className="text-3xl md:text-5xl font-bold mb-3"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {title}
            </motion.h1>
            {subtitle && (
              <motion.p
                className="text-blue-100 text-lg max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {subtitle}
              </motion.p>
            )}
            <motion.div
              className="flex items-center justify-center gap-2 mt-4 text-sm text-blue-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span>/</span>
              <span className="text-[#F97316]">{title}</span>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-[#F9FAFB]" style={{ clipPath: 'ellipse(55% 100% at 50% 100%)' }} />
        </div>
      )}

      <main className="flex-1">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
