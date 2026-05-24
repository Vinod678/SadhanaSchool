import { useRef, useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Monitor, FlaskConical, Library, Cpu, Trophy, Bus, ArrowRight, ChevronRight } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import schoolData from '../data/schoolData.json'

const iconMap = { Monitor, FlaskConical, Library, Cpu, Trophy, Bus }

export default function FacilitiesSection() {
  const scrollRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const totalCards = schoolData.facilities.length

  const handleScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = el.firstElementChild?.offsetWidth ?? 0
    const index = Math.min(Math.round(el.scrollLeft / (cardWidth + 12)), totalCards - 1)
    setActiveIndex(index)
  }, [totalCards])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', handleScroll, { passive: true })
    return () => el.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <section className="py-16 sm:py-20 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Our Facilities"
          title="World-Class Infrastructure for Better Learning"
          subtitle="We provide state-of-the-art facilities to ensure our students have every resource they need to excel."
        />

        {/* ════════════════════════════════════════════════
            MOBILE (<sm) — horizontal snap carousel
        ════════════════════════════════════════════════ */}
        <div className="sm:hidden">

          {/* inline link */}
          <div className="flex justify-end mb-3">
            <Link to="/facilities" className="text-xs text-[#F97316] font-bold flex items-center gap-0.5 hover:text-orange-500 transition-colors">
              View all <ChevronRight size={13} />
            </Link>
          </div>

          {/* scroll strip */}
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 pb-3"
          >
            {schoolData.facilities.map((facility) => {
              const IconComponent = iconMap[facility.icon] || Monitor
              return (
                <Link
                  key={facility.id}
                  to="/facilities"
                  className="shrink-0 w-[72vw] max-w-[260px] snap-center rounded-2xl overflow-hidden shadow-lg shadow-black/20 active:scale-[0.97] transition-transform duration-150"
                >
                  <div className="relative aspect-[3/4]">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                    {/* icon badge */}
                    <div className="absolute top-3 left-3 w-9 h-9 bg-[#F97316] rounded-xl flex items-center justify-center shadow-lg">
                      <IconComponent size={17} className="text-white" />
                    </div>

                    {/* title + description */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-bold text-sm leading-tight mb-1">{facility.title}</h3>
                      <p className="text-white/60 text-[11px] leading-snug line-clamp-2">{facility.description}</p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* scroll dots */}
          <div className="flex items-center justify-center gap-1.5 mt-3">
            {Array.from({ length: totalCards }).map((_, i) => (
              <div
                key={i}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'w-5 bg-[#0B3C6D]' : 'w-1.5 bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* mobile CTA */}
          <div className="mt-6 text-center">
            <Link
              to="/facilities"
              className="inline-flex items-center gap-2 bg-[#0B3C6D] hover:bg-[#082d52] active:bg-[#061e36] text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-md active:scale-[0.98] transition-all"
            >
              View All Facilities <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        {/* ════════════════════════════════════════════════
            TABLET + DESKTOP (sm+) — existing grid
        ════════════════════════════════════════════════ */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {schoolData.facilities.map((facility, i) => {
            const IconComponent = iconMap[facility.icon] || Monitor
            return (
              <motion.div
                key={facility.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B3C6D]/70 to-transparent" />
                  <div className="absolute top-4 left-4 w-10 h-10 bg-[#F97316] rounded-xl flex items-center justify-center shadow-lg">
                    <IconComponent size={20} className="text-white" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#0B3C6D] text-base mb-2">{facility.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{facility.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA: tablet + desktop */}
        <div className="hidden sm:flex justify-center mt-10">
          <Link
            to="/facilities"
            className="inline-flex items-center gap-2 border-2 border-[#0B3C6D] text-[#0B3C6D] px-7 py-3 rounded-xl font-bold hover:bg-[#0B3C6D] hover:text-white transition-colors"
          >
            View All Facilities
          </Link>
        </div>

      </div>
    </section>
  )
}
