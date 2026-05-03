import { motion } from 'framer-motion'
import { Monitor, FlaskConical, Library, Cpu, Trophy, Bus } from 'lucide-react'
import PageWrapper from '../layouts/PageWrapper'
import SectionTitle from '../components/SectionTitle'
import CTASection from '../sections/CTASection'
import schoolData from '../data/schoolData.json'

const iconMap = { Monitor, FlaskConical, Library, Cpu, Trophy, Bus }

export default function Facilities() {
  return (
    <PageWrapper title="Facilities" subtitle="Modern infrastructure built for the best learning experience">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Infrastructure"
            title="Our World-Class Facilities"
            subtitle="Every facility at Sadhana School is designed to support academic excellence and holistic development."
          />

          <div className="flex flex-col gap-16">
            {schoolData.facilities.map((facility, i) => {
              const IconComponent = iconMap[facility.icon] || Monitor
              const isEven = i % 2 === 1

              return (
                <motion.div
                  key={facility.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`${isEven ? 'lg:order-2' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video">
                      <img
                        src={facility.image}
                        alt={facility.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 w-12 h-12 bg-[#F97316] rounded-xl flex items-center justify-center shadow-lg">
                        <IconComponent size={22} className="text-white" />
                      </div>
                    </div>
                  </div>
                  <div className={`${isEven ? 'lg:order-1' : ''}`}>
                    <div className="inline-flex items-center gap-2 text-[#F97316] text-xs font-bold uppercase tracking-widest mb-3">
                      <div className="w-6 h-0.5 bg-[#F97316]" />
                      Facility {String(i + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#0B3C6D] mb-4">{facility.title}</h3>
                    <p className="text-gray-500 leading-relaxed text-base">{facility.description}</p>
                    <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
                      <p className="text-[#0B3C6D] text-sm font-semibold">
                        Available for all students from Class I to X
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </PageWrapper>
  )
}
