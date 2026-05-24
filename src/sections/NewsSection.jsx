import { useRef, useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, ArrowRight, ChevronRight } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import schoolData from '../data/schoolData.json'

const categoryColors = {
  Sports:   'bg-green-100 text-green-700',
  Academic: 'bg-blue-100 text-blue-700',
  Cultural: 'bg-purple-100 text-purple-700',
}

export default function NewsSection() {
  const scrollRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const total = schoolData.events.length

  const handleScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = el.firstElementChild?.offsetWidth ?? 0
    const index = Math.min(Math.round(el.scrollLeft / (cardWidth + 12)), total - 1)
    setActiveIndex(index)
  }, [total])

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
          badge="News & Events"
          title="Stay Updated with School News"
          subtitle="Keep up with the latest happenings, events, and announcements from Sadhana School."
        />

        {/* ════════════════════════════════════════════════
            MOBILE (<md) — horizontal snap carousel
        ════════════════════════════════════════════════ */}
        <div className="md:hidden">

          {/* count + inline link */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-semibold text-gray-500 bg-white px-2.5 py-1 rounded-full border border-gray-200">
              {total} Articles
            </span>
            <Link to="/news" className="text-xs text-[#F97316] font-bold flex items-center gap-0.5 hover:text-orange-500 transition-colors">
              View all <ChevronRight size={13} />
            </Link>
          </div>

          {/* scroll strip */}
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 pb-3"
          >
            {schoolData.events.map((event) => (
              <Link
                key={event.id}
                to="/news"
                className="shrink-0 w-[78vw] max-w-[290px] snap-center bg-white rounded-2xl overflow-hidden shadow-md shadow-black/10 active:scale-[0.97] transition-transform duration-150"
              >
                {/* image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  {/* date badge */}
                  <div className="absolute top-3 left-3 bg-[#0B3C6D] text-white rounded-xl px-2.5 py-1.5 text-center shadow-lg min-w-[44px]">
                    <p className="text-sm font-extrabold leading-none">{event.day}</p>
                    <p className="text-[10px] font-semibold text-blue-200 mt-0.5">{event.month}</p>
                  </div>
                  {/* category badge */}
                  <div className="absolute top-3 right-3">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${categoryColors[event.category] || 'bg-gray-100 text-gray-600'}`}>
                      {event.category}
                    </span>
                  </div>
                </div>

                {/* content */}
                <div className="p-3.5">
                  <h3 className="font-bold text-[#0B3C6D] text-sm leading-snug line-clamp-2 mb-1.5">
                    {event.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
                    {event.description}
                  </p>
                  <p className="text-[#F97316] text-xs font-bold mt-2 flex items-center gap-1">
                    Read More <ArrowRight size={11} />
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* scroll dots */}
          <div className="flex items-center justify-center gap-1.5 mt-3">
            {Array.from({ length: total }).map((_, i) => (
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
              to="/news"
              className="inline-flex items-center gap-2 bg-[#0B3C6D] hover:bg-[#082d52] active:bg-[#061e36] text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-md active:scale-[0.98] transition-all"
            >
              All News & Events <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        {/* ════════════════════════════════════════════════
            TABLET + DESKTOP (md+) — existing grid
        ════════════════════════════════════════════════ */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {schoolData.events.map((event, i) => (
            <motion.article
              key={event.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-[#0B3C6D] text-white rounded-xl p-2 text-center min-w-[52px] shadow-lg">
                  <p className="text-lg font-extrabold leading-none">{event.day}</p>
                  <p className="text-xs font-semibold text-blue-200">{event.month}</p>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[event.category] || 'bg-gray-100 text-gray-600'}`}>
                    {event.category}
                  </span>
                  <span className="flex items-center gap-1 text-gray-400 text-xs">
                    <Calendar size={12} /> {event.year}
                  </span>
                </div>
                <h3 className="font-bold text-[#0B3C6D] text-base mb-2 group-hover:text-[#F97316] transition-colors leading-snug">
                  {event.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
                  {event.description}
                </p>
                <Link
                  to="/news"
                  className="inline-flex items-center gap-1 text-[#0B3C6D] font-semibold text-sm hover:text-[#F97316] transition-colors"
                >
                  Read More <ArrowRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA: tablet + desktop */}
        <div className="hidden md:flex justify-center mt-10">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 border-2 border-[#0B3C6D] text-[#0B3C6D] px-7 py-3 rounded-xl font-bold hover:bg-[#0B3C6D] hover:text-white transition-colors"
          >
            All News & Events
          </Link>
        </div>

      </div>
    </section>
  )
}
