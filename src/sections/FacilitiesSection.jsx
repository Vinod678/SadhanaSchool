import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Monitor, FlaskConical, Library, Cpu, Trophy, Bus } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import schoolData from '../data/schoolData.json'

const iconMap = { Monitor, FlaskConical, Library, Cpu, Trophy, Bus }

export default function FacilitiesSection() {
  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <SectionTitle
            badge="Our Facilities"
            title="World-Class Infrastructure for Better Learning"
            subtitle="We provide state-of-the-art facilities to ensure our students have every resource they need to excel."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

        <div className="text-center mt-10">
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
