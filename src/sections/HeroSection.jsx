import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { PlayCircle, X, ArrowRight, GraduationCap, Users, Trophy, Star } from 'lucide-react'
import schoolData from '../data/schoolData.json'

const YOUTUBE_ID = 'WzkYlKVzLLM'

const galleryImages = schoolData.schoolBanner
  .flatMap(album => album.images.map(img => ({ ...img, category: album.category })))
  .slice(0, 5)

const slideVariants = {
  enter: { x: '100%', opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: '-100%', opacity: 0 },
}

const slideTransition = { duration: 1.2, ease: [0.4, 0, 0.2, 1] }

const stats = [
  { icon: Users,          value: '600+', label: 'Students'     },
  { icon: GraduationCap,  value: '30+',  label: 'Teachers'     },
  { icon: Trophy,         value: '19+',  label: 'Years'        },
  { icon: Star,           value: '98%',  label: 'Pass Rate'    },
]

export default function HeroSection() {
  const [videoOpen, setVideoOpen] = useState(false)
  const [current, setCurrent] = useState(0)
  const totalSlides = 1 + galleryImages.length

  useEffect(() => {
    // Slide 0 (video banner) gets 8 s; all other slides get 4 s
    const delay = current === 0 ? 8000 : 4000
    const t = setTimeout(() => setCurrent(p => (p + 1) % totalSlides), delay)
    return () => clearTimeout(t)
  }, [current, totalSlides])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setVideoOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = videoOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [videoOpen])

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-[#061e36] via-[#0B3C6D] to-[#0d4a87] min-h-[92vh] flex items-center overflow-hidden">

        {/* Background texture / blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#F97316]/10 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-400/10 blur-[100px]" />
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: 'repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 60px)' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* ── Left: Text ─────────────────────────────────────────── */}
            <div className="flex flex-col">

              {/* Admissions badge */}
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center gap-2 bg-[#F97316]/15 border border-[#F97316]/30 text-[#F97316] text-xs font-bold px-4 py-2 rounded-full tracking-wide uppercase">
                  <span className="w-1.5 h-1.5 bg-[#F97316] rounded-full animate-pulse" />
                  Admissions Open 2026–27
                </span>
              </motion.div>

              {/* Main heading — "Welcome to" small, school name big */}
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.1 }}
              >
                <p className="text-blue-300 text-base sm:text-lg font-medium mb-1 tracking-wide">
                  Welcome to
                </p>
                <h1 className="leading-none">
                  <span className="block text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight">
                    Sadhana
                  </span>
                  <span className="block text-xl sm:text-2xl lg:text-3xl font-bold text-[#F97316] mt-2 leading-snug">
                    English Medium School
                  </span>
                  <span className="block text-sm sm:text-base text-blue-300 font-medium mt-2 tracking-widest uppercase">
                    Etikoppaka, Anakapalli
                  </span>
                </h1>
              </motion.div>

              {/* Tagline */}
              <motion.p
                className="text-blue-100/80 text-base leading-relaxed mb-8 max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                Nurturing young minds with quality English education, strong values, and holistic development since 2005.
              </motion.p>

              {/* CTA — Admission Enquiry */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#ea6c0a] text-white px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-200 shadow-lg shadow-[#F97316]/25 hover:shadow-[#F97316]/40 hover:-translate-y-0.5"
                >
                  Enquire About Admission <ArrowRight size={17} />
                </Link>
              </motion.div>

              {/* Stats strip */}
              <motion.div
                className="grid grid-cols-4 gap-4 mt-10 pt-8 border-t border-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
              >
                {stats.map(({ icon: Icon, value, label }) => (
                  <div key={label} className="flex flex-col items-center gap-1 group">
                    <Icon size={16} className="text-[#F97316] opacity-70 group-hover:opacity-100 transition-opacity" />
                    <p className="text-xl sm:text-2xl font-extrabold text-white leading-none">{value}</p>
                    <p className="text-blue-300 text-[10px] sm:text-xs font-medium text-center">{label}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ── Right: Slideshow card ───────────────────────────────── */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Decorative ring behind the card */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#F97316]/20 to-blue-400/10 blur-xl" />

              {/* Floating badge */}
              <motion.div
                className="absolute -top-4 -right-3 sm:-right-5 bg-gradient-to-br from-[#F97316] to-[#ea6c0a] text-white rounded-2xl p-3 sm:p-4 shadow-xl shadow-[#F97316]/30 text-center z-20 pointer-events-none"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              >
                <p className="text-2xl sm:text-3xl font-extrabold leading-none">19+</p>
                <p className="text-[10px] sm:text-xs font-semibold mt-0.5 text-orange-100">Years of<br />Excellence</p>
              </motion.div>

              {/* Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] ring-1 ring-white/10">
                <AnimatePresence initial={false} mode="sync">
                  {current === 0 ? (
                    <motion.div
                      key="video"
                      className="absolute inset-0 cursor-pointer group"
                      variants={slideVariants}
                      initial="enter" animate="center" exit="exit"
                      transition={slideTransition}
                      onClick={() => setVideoOpen(true)}
                    >
                      <img
                        src="/school_kids/kids_classroom.jpg"
                        alt="Sadhana School"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#061e36]/80 via-[#0B3C6D]/20 to-transparent" />

                      {/* Play bar */}
                      <div className="absolute bottom-10 left-4 right-4">
                        <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl group-hover:bg-white transition-colors duration-200">
                          <div className="relative shrink-0">
                            <span className="absolute inset-0 rounded-xl bg-[#F97316]/30 animate-ping" />
                            <div className="relative w-10 h-10 bg-[#0B3C6D] group-hover:bg-[#F97316] rounded-xl flex items-center justify-center transition-colors duration-200">
                              <PlayCircle size={20} className="text-white" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <p className="text-[#0B3C6D] font-bold text-sm leading-none">Campus Tour</p>
                            <p className="text-gray-400 text-xs mt-0.5">Watch our school video</p>
                          </div>
                          <span className="text-xs font-bold text-[#F97316] hidden sm:block">▶ Play</span>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={current}
                      className="absolute inset-0"
                      variants={slideVariants}
                      initial="enter" animate="center" exit="exit"
                      transition={slideTransition}
                    >
                      <img
                        src={galleryImages[current - 1].src}
                        alt={galleryImages[current - 1].alt}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#061e36]/60 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-[#F97316] text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                          {galleryImages[current - 1].alt}
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
                      className={`transition-all duration-300 rounded-full ${i === current ? 'w-5 h-2 bg-[#F97316]' : 'w-2 h-2 bg-white/40 hover:bg-white/70'}`}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Bottom info strip */}
              <div className="mt-4 flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-blue-200 text-xs">AP State Board Affiliated</span>
                </div>
                <span className="text-blue-300 text-xs">Classes I – X</span>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
            <path d="M0 60L60 51.7C120 43.3 240 26.7 360 23.3C480 20 600 30 720 33.3C840 36.7 960 33.3 1080 28.3C1200 23.3 1320 16.7 1380 13.3L1440 10V60H0Z" fill="#F9FAFB" />
          </svg>
        </div>
      </section>

      {/* ── Video Modal ──────────────────────────────────────────────── */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setVideoOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-4xl"
              initial={{ scale: 0.93, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.93, opacity: 0, y: 20 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setVideoOpen(false)}
                className="absolute -top-11 right-0 w-9 h-9 bg-white/10 hover:bg-[#F97316] rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Close"
              >
                <X size={18} />
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
              <p className="text-center text-white/30 text-xs mt-3">Press Esc or tap outside to close</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
