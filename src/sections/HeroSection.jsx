import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, PlayCircle, X } from 'lucide-react'
import schoolData from '../data/schoolData.json'

const YOUTUBE_ID = 'WzkYlKVzLLM' // Replace with your actual YouTube video ID

const galleryImages = schoolData.schoolBanner
  .flatMap(album => album.images.map(img => ({ ...img, category: album.category })))
  .slice(0, 5)

// slide variants — new slide pushes in from right, old exits to left
const slideVariants = {
  enter: { x: '100%', opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: '-100%', opacity: 0 },
}

const slideTransition = {
  duration: 1.2,
  ease: [0.4, 0, 0.2, 1],
}

export default function HeroSection() {
  const [videoOpen, setVideoOpen] = useState(false)
  // 0 = video card, 1-5 = gallery images
  const [current, setCurrent] = useState(0)
  const totalSlides = 1 + galleryImages.length // 6

  // Auto-advance every 2 seconds
  useEffect(() => {
    const t = setInterval(() => {
      setCurrent(prev => (prev + 1) % totalSlides)
    }, 5000)
    return () => clearInterval(t)
  }, [totalSlides])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setVideoOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <section className="relative bg-gradient-to-br from-[#0B3C6D] via-[#0d4a87] to-[#1a5fa3] min-h-[90vh] flex items-center overflow-hidden">
        {/* Background blobs */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#F97316] blur-3xl" />
          <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-blue-300 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* ── Left: text ───────────────────────────────────────── */}
            <div>
              <motion.div
                className="flex items-center gap-4 mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
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
                  { value: '600+', label: 'Students' },
                  { value: '30+', label: 'Teachers' },
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

            {/* ── Right: auto-advancing slideshow card ─────────────── */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {/* Floating badge */}
              <motion.div
                className="absolute -top-4 -right-4 bg-[#F97316] text-white rounded-2xl p-4 shadow-xl text-center z-20 pointer-events-none"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              >
                <p className="text-2xl font-extrabold">19+</p>
                <p className="text-xs font-medium">Years of<br />Excellence</p>
              </motion.div>

              {/* Slideshow card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <AnimatePresence initial={false} mode="sync">
                  {current === 0 ? (
                    /* ── Slide 0: School Tour video card ── */
                    <motion.div
                      key="video"
                      className="absolute inset-0 cursor-pointer group"
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={slideTransition}
                      onClick={() => setVideoOpen(true)}
                    >
                      <img
                        src="/school_kids/kids_classroom.jpg"
                        alt="Sadhana School"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B3C6D]/70 to-[#0B3C6D]/10" />

                      {/* School Tour bar — sits above the dot indicators */}
                      <div className="absolute bottom-10 left-5 right-5">
                        <div className="bg-white/95 backdrop-blur rounded-xl p-3 flex items-center gap-3 shadow-lg group-hover:bg-white transition-colors duration-200">
                          <div className="relative shrink-0">
                            <span className="absolute inset-0 rounded-lg bg-[#F97316]/40 group-hover:animate-ping" />
                            <div className="w-11 h-11 bg-[#0B3C6D] group-hover:bg-[#F97316] rounded-lg flex items-center justify-center transition-colors duration-200 relative">
                              <PlayCircle size={22} className="text-white" />
                            </div>
                          </div>
                          <div>
                            <p className="text-[#0B3C6D] font-bold text-sm leading-none mb-0.5">School Tour</p>
                            <p className="text-gray-500 text-xs">Watch our campus video</p>
                          </div>
                          <div className="ml-auto text-xs font-semibold text-[#F97316] hidden sm:block">▶ Play</div>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    /* ── Slides 1-5: gallery images ── */
                    <motion.div
                      key={current}
                      className="absolute inset-0"
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={slideTransition}
                    >
                      <img
                        src={galleryImages[current - 1].src}
                        alt={galleryImages[current - 1].alt}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                      {/* Subtle gradient + label */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B3C6D]/50 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-[#F97316] text-white text-xs font-bold px-3 py-1 rounded-full">
                          {galleryImages[current - 1].category}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Dot indicators */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                  {Array.from({ length: totalSlides }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`transition-all duration-300 rounded-full ${
                        i === current
                          ? 'w-5 h-2 bg-[#F97316]'
                          : 'w-2 h-2 bg-white/50 hover:bg-white/80'
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
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

      {/* ── Video Modal ─────────────────────────────────────────────────── */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setVideoOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-4xl"
              initial={{ scale: 0.92, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 16 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setVideoOpen(false)}
                className="absolute -top-12 right-0 w-10 h-10 bg-white/10 hover:bg-[#F97316] rounded-full flex items-center justify-center text-white transition-colors duration-200"
                aria-label="Close"
              >
                <X size={20} />
              </button>
              <div className="mb-3 flex items-center gap-2">
                <div className="w-1.5 h-5 bg-[#F97316] rounded-full" />
                <p className="text-white font-semibold text-sm">Sadhana English Medium School – Campus Tour</p>
              </div>
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0&modestbranding=1`}
                  title="Sadhana School Tour"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <p className="text-center text-white/40 text-xs mt-3">Press Esc or click outside to close</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
