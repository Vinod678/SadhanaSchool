import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, PlayCircle } from 'lucide-react'
import logo from '../assets/logo.png'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#0B3C6D] via-[#0d4a87] to-[#1a5fa3] min-h-[90vh] flex items-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#F97316] blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-blue-300 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            {/* Logo + badge row */}
            <motion.div
              className="flex items-center gap-4 mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={logo}
                alt="Sadhana School Logo"
                className="w-16 h-16 rounded-full object-cover ring-2 ring-white/50 shadow-xl"
              />
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-[#F97316] rounded-full animate-pulse" />
                Admissions Open 2026–27
              </div>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Welcome to{' '}
              <span className="text-[#F97316]">Sadhana</span>{' '}
              English Medium School
            </motion.h1>

            <motion.p
              className="text-blue-100 text-lg leading-relaxed mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Nurturing young minds with quality education, strong values, and holistic development since 2005 in the heart of Etikoppaka.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-white text-[#0B3C6D] px-7 py-3.5 rounded-xl font-bold text-base hover:bg-blue-50 transition-colors shadow-lg"
              >
                Learn More <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#F97316] text-white px-7 py-3.5 rounded-xl font-bold text-base hover:bg-[#ea6c0a] transition-colors shadow-lg"
              >
                Admission Enquiry
              </Link>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              className="flex flex-wrap gap-6 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {[
                { value: '1200+', label: 'Students' },
                { value: '60+', label: 'Teachers' },
                { value: '19+', label: 'Years' },
                { value: '98%', label: 'Pass Rate' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="text-2xl font-extrabold text-[#F97316]">{value}</p>
                  <p className="text-blue-200 text-xs font-medium">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right – image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80"
                alt="Sadhana School"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B3C6D]/60 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-white/95 backdrop-blur rounded-xl p-4 flex items-center gap-3 shadow-lg">
                  <div className="w-12 h-12 bg-[#0B3C6D] rounded-lg flex items-center justify-center shrink-0">
                    <PlayCircle size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[#0B3C6D] font-bold text-sm">School Tour</p>
                    <p className="text-gray-500 text-xs">Watch our campus video</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -top-4 -right-4 bg-[#F97316] text-white rounded-2xl p-4 shadow-xl text-center"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            >
              <p className="text-2xl font-extrabold">19+</p>
              <p className="text-xs font-medium">Years of<br />Excellence</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L60 51.7C120 43.3 240 26.7 360 23.3C480 20 600 30 720 33.3C840 36.7 960 33.3 1080 28.3C1200 23.3 1320 16.7 1380 13.3L1440 10V60H0Z" fill="#F9FAFB" />
        </svg>
      </div>
    </section>
  )
}
