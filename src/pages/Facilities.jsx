import { motion } from 'framer-motion'
import {
  Monitor, FlaskConical, Library, Cpu, Trophy, Bus,
  MapPin, Shield, Camera, Home, MapPinned, Phone, CheckCircle,
  Wifi, Volume2, Wind, BookOpen, TestTube, Microscope, PackageOpen, GraduationCap,
  Newspaper, Globe, Users, Search, Star, Code, Printer,
  Circle, Gamepad2, Timer, Projector, PersonStanding, Leaf
} from 'lucide-react'
import PageWrapper from '../layouts/PageWrapper'
import SectionTitle from '../components/SectionTitle'
import CTASection from '../sections/CTASection'
import schoolData from '../data/schoolData.json'

const iconMap = {
  Monitor, FlaskConical, Library, Cpu, Trophy, Bus,
  MapPin, Shield, Camera, Home, MapPinned, Phone, CheckCircle,
  Wifi, Volume2, Wind, BookOpen, TestTube, Microscope, PackageOpen, GraduationCap,
  Newspaper, Globe, Users, Search, Star, Code, Printer,
  Circle, Gamepad2, Timer, Projector, PersonStanding, Leaf,
}

const featureAccents = [
  'bg-blue-50   text-blue-600   border-blue-100',
  'bg-orange-50 text-orange-600 border-orange-100',
  'bg-green-50  text-green-600  border-green-100',
  'bg-purple-50 text-purple-600 border-purple-100',
  'bg-amber-50  text-amber-600  border-amber-100',
  'bg-rose-50   text-rose-600   border-rose-100',
]

/* Mobile card for each facility */
function MobileFacilityCard({ facility, index }) {
  const IconComponent = iconMap[facility.icon] || Monitor
  const hasFeatures = facility.features && facility.features.length > 0

  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      {/* Image header with overlay */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={facility.image}
          alt={facility.title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        {/* Icon badge */}
        <div className="absolute top-3 left-3 w-9 h-9 bg-[#F97316] rounded-xl flex items-center justify-center shadow-lg">
          <IconComponent size={17} className="text-white" />
        </div>

        {/* Facility number */}
        <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
          Facility {String(index + 1).padStart(2, '0')}
        </div>

        {/* Title overlaid on image */}
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="text-white font-extrabold text-lg leading-tight drop-shadow-md">{facility.title}</h3>
        </div>
      </div>

      {/* Card body */}
      <div className="p-4">
        <p className="text-gray-500 text-sm leading-relaxed mb-4">{facility.description}</p>

        {/* Feature chips — compact 2-col grid, icon + label only */}
        {hasFeatures ? (
          <div className="grid grid-cols-2 gap-2">
            {facility.features.map((feat, fi) => {
              const FeatIcon = iconMap[feat.icon] || CheckCircle
              const accent = featureAccents[fi % featureAccents.length]
              const [bg, text] = accent.split(' ')
              return (
                <div
                  key={feat.label}
                  className={`flex items-center gap-2 ${bg} rounded-xl px-3 py-2.5 border ${accent.split(' ')[2]}`}
                >
                  <div className={`shrink-0 ${text}`}>
                    <FeatIcon size={13} />
                  </div>
                  <span className="text-[#0B3C6D] font-semibold text-xs leading-snug">{feat.label}</span>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="p-3 bg-blue-50 rounded-xl border border-blue-100">
            <p className="text-[#0B3C6D] text-xs font-semibold flex items-center gap-2">
              <CheckCircle size={13} className="text-[#F97316] shrink-0" />
              Available for all students from Class I to X
            </p>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function Facilities() {
  return (
    <PageWrapper title="Facilities" subtitle="Modern infrastructure built for the best learning experience">
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Infrastructure"
            title="Our World-Class Facilities"
            subtitle="Every facility at Sadhana School is designed to support academic excellence and holistic development."
          />

          {/* ════════════════════════════════════════════════
              MOBILE (<sm) — compact facility cards
          ════════════════════════════════════════════════ */}
          <div className="sm:hidden flex flex-col gap-5">
            {schoolData.facilities.map((facility, i) => (
              <MobileFacilityCard key={facility.id} facility={facility} index={i} />
            ))}
          </div>

          {/* ════════════════════════════════════════════════
              TABLET + DESKTOP (sm+) — alternating layout
          ════════════════════════════════════════════════ */}
          <div className="hidden sm:flex flex-col gap-16">
            {schoolData.facilities.map((facility, i) => {
              const IconComponent = iconMap[facility.icon] || Monitor
              const isEven = i % 2 === 1
              const hasFeatures = facility.features && facility.features.length > 0

              return (
                <motion.div
                  key={facility.id}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Image */}
                  <div className={isEven ? 'lg:order-2' : ''}>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video">
                      <img
                        src={facility.image}
                        alt={facility.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute top-4 left-4 w-12 h-12 bg-[#F97316] rounded-xl flex items-center justify-center shadow-lg">
                        <IconComponent size={22} className="text-white" />
                      </div>
                      <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">
                        Facility {String(i + 1).padStart(2, '0')}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={isEven ? 'lg:order-1' : ''}>
                    <div className="inline-flex items-center gap-2 text-[#F97316] text-xs font-bold uppercase tracking-widest mb-3">
                      <div className="w-6 h-0.5 bg-[#F97316]" />
                      Facility {String(i + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#0B3C6D] mb-4">{facility.title}</h3>
                    <p className="text-gray-500 leading-relaxed text-base mb-5">{facility.description}</p>

                    {hasFeatures ? (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {facility.features.map((feat, fi) => {
                          const FeatIcon = iconMap[feat.icon] || CheckCircle
                          const accent = featureAccents[fi % featureAccents.length]
                          return (
                            <motion.div
                              key={feat.label}
                              className={`flex flex-col gap-2 p-3.5 rounded-xl border ${accent} transition-shadow hover:shadow-md`}
                              initial={{ opacity: 0, y: 12 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: fi * 0.07 }}
                            >
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${accent.split(' ')[0]} border ${accent.split(' ')[2]}`}>
                                <FeatIcon size={15} />
                              </div>
                              <div>
                                <p className="font-bold text-[#0B3C6D] text-xs leading-snug">{feat.label}</p>
                                <p className="text-gray-400 text-[11px] mt-0.5 leading-snug">{feat.desc}</p>
                              </div>
                            </motion.div>
                          )
                        })}
                      </div>
                    ) : (
                      <div className="mt-2 p-4 bg-blue-50 rounded-xl border border-blue-100">
                        <p className="text-[#0B3C6D] text-sm font-semibold flex items-center gap-2">
                          <CheckCircle size={15} className="text-[#F97316] shrink-0" />
                          Available for all students from Class I to X
                        </p>
                      </div>
                    )}
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
