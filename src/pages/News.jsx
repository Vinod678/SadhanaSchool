import { motion } from 'framer-motion'
import { Calendar, Tag, ArrowRight } from 'lucide-react'
import PageWrapper from '../layouts/PageWrapper'
import SectionTitle from '../components/SectionTitle'
import CTASection from '../sections/CTASection'
import schoolData from '../data/schoolData.json'

const categoryColors = {
  Sports: 'bg-green-100 text-green-700',
  Academic: 'bg-blue-100 text-blue-700',
  Cultural: 'bg-purple-100 text-purple-700',
}

const announcements = [
  { title: 'Admission Form 2026–27 Now Available', date: 'May 1, 2026', type: 'Admission' },
  { title: 'Class X Board Results: 100% Pass Rate', date: 'Apr 28, 2026', type: 'Achievement' },
  { title: 'Summer Vacation: May 25 – June 7, 2026', date: 'Apr 20, 2026', type: 'Notice' },
  { title: 'Parent-Teacher Meeting – May 20, 2026', date: 'Apr 15, 2026', type: 'Meeting' },
  { title: 'Sports Day Registration Open', date: 'Apr 10, 2026', type: 'Sports' },
]

export default function News() {
  return (
    <PageWrapper title="News & Events" subtitle="Stay informed about school activities, events, and announcements">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Events */}
            <div className="lg:col-span-2">
              <SectionTitle badge="Events" title="Upcoming & Recent Events" align="left" />
              <div className="flex flex-col gap-6">
                {schoolData.events.map((event, i) => (
                  <motion.article
                    key={event.id}
                    className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group flex flex-col sm:flex-row"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="sm:w-48 shrink-0 aspect-video sm:aspect-auto overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${categoryColors[event.category] || 'bg-gray-100 text-gray-600'}`}>
                          {event.category}
                        </span>
                        <span className="flex items-center gap-1 text-gray-400 text-xs">
                          <Calendar size={12} /> {event.day} {event.month} {event.year}
                        </span>
                      </div>
                      <h3 className="font-bold text-[#0B3C6D] text-lg mb-2 group-hover:text-[#F97316] transition-colors">{event.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{event.description}</p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

            {/* Announcements sidebar */}
            <div>
              <SectionTitle badge="Notices" title="Announcements" align="left" />
              <div className="bg-[#F9FAFB] rounded-2xl p-5 border border-gray-100">
                <ul className="flex flex-col divide-y divide-gray-200">
                  {announcements.map((item, i) => (
                    <motion.li
                      key={i}
                      className="py-4 first:pt-0 last:pb-0"
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#F97316] mt-2 shrink-0" />
                        <div>
                          <p className="text-[#0B3C6D] font-semibold text-sm leading-snug mb-1 hover:text-[#F97316] cursor-pointer transition-colors">
                            {item.title}
                          </p>
                          <div className="flex items-center gap-2">
                            <span className="text-gray-400 text-xs flex items-center gap-1">
                              <Calendar size={10} /> {item.date}
                            </span>
                            <span className="text-[#F97316] text-xs font-semibold">{item.type}</span>
                          </div>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </PageWrapper>
  )
}
