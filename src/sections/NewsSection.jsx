import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, ArrowRight, Tag } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import schoolData from '../data/schoolData.json'

const categoryColors = {
  Sports: 'bg-green-100 text-green-700',
  Academic: 'bg-blue-100 text-blue-700',
  Cultural: 'bg-purple-100 text-purple-700',
}

export default function NewsSection() {
  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="News & Events"
          title="Stay Updated with School News"
          subtitle="Keep up with the latest happenings, events, and announcements from Sadhana School."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

        <div className="text-center mt-10">
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
