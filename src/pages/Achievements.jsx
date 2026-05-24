import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Trophy, Award, Star, Users, GraduationCap, BookOpen,
  Cpu, Calculator, CheckCircle, Medal, Crown, Flame, Quote
} from 'lucide-react'
import PageWrapper from '../layouts/PageWrapper'
import SectionTitle from '../components/SectionTitle'
import CTASection from '../sections/CTASection'

/* ── Data ──────────────────────────────────────────────────────────── */

const institutional = [
  {
    icon: Crown,
    color: 'bg-amber-50 text-amber-600',
    border: 'hover:border-amber-200',
    title: 'APPUSMA Recognition',
    description: 'Honoured by the APPUSMA family for outstanding academic excellence and contribution to quality education in the region.',
  },
  {
    icon: Trophy,
    color: 'bg-yellow-50 text-yellow-600',
    border: 'hover:border-yellow-300',
    title: 'State First Rank – 598 / 600',
    description: 'Secured State First Rank with an exceptional score of 598/600 — setting a benchmark in academic performance across Andhra Pradesh.',
    featured: true,
  },
  {
    icon: Medal,
    color: 'bg-orange-50 text-orange-600',
    border: 'hover:border-orange-200',
    title: 'Best Correspondent Award',
    description: 'Awarded "Best Correspondent" for visionary leadership and unwavering dedication to institutional growth and excellence.',
  },
  {
    icon: Star,
    color: 'bg-blue-50 text-blue-600',
    border: 'hover:border-blue-200',
    title: 'Best Teacher Awards',
    description: 'Recognized with multiple "Best Teacher" awards for excellence in teaching methodology, innovation, and student mentorship.',
  },
  {
    icon: Award,
    color: 'bg-green-50 text-green-600',
    border: 'hover:border-green-200',
    title: 'Academic Excellence Award',
    description: 'Received the Academic Excellence Award for maintaining consistently high academic standards and results over the years.',
  },
  {
    icon: GraduationCap,
    color: 'bg-purple-50 text-purple-600',
    border: 'hover:border-purple-200',
    title: '100% SSC First Class – 3 Years steak',
    description: 'Achieved 100% SSC First Class results for three consecutive years under Andhra University, Visakhapatnam.',
  },
]

const student = [
  {
    icon: Users,
    color: 'bg-blue-50 text-blue-600',
    stat: '5+',
    statLabel: 'Students / Year',
    title: 'Navodaya Selections',
    description: 'Over 20 students selected consistently for the past 6 years, reflecting strong foundational learning and preparation.',
  },
  {
    icon: Cpu,
    color: 'bg-indigo-50 text-indigo-600',
    stat: '2+',
    statLabel: 'Consecutive Years',
    title: 'IIIT Admissions',
    description: 'Students successfully selected for IIIT admissions for two consecutive years — a testament to exceptional academic preparation.',
  },
  {
    icon: CheckCircle,
    color: 'bg-green-50 text-green-600',
    stat: '100%',
    statLabel: 'Pass Rate',
    title: 'SSC Examinations',
    description: 'Maintained an outstanding 100% pass percentage in SSC examinations, year after year without exception.',
  },
  {
    icon: Calculator,
    color: 'bg-amber-50 text-amber-600',
    stat: '🏅',
    statLabel: 'Consistent Achievers',
    title: 'Mathematics Olympiad',
    description: 'Active participation and achievements in prestigious Math Olympiad competitions, showcasing strong analytical excellence.',
  },
]

const keyStats = [
  { value: 598, suffix: '/600', label: 'State Rank Score' },
  { value: 100, suffix: '%',    label: 'SSC Pass Rate' },
  { value: 20,  suffix: '+',   label: 'Navodaya / Year' },
  { value: 6,   suffix: '+',   label: 'Years Navodaya Streak' },
]

/* ── Count-up hook ─────────────────────────────────────────────────── */

function useCountUp(target, shouldStart, duration = 1800) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!shouldStart) return
    setValue(0)
    const steps = 60
    const increment = target / steps
    let current = 0
    const id = setInterval(() => {
      current += increment
      if (current >= target) { setValue(target); clearInterval(id) }
      else setValue(Math.floor(current))
    }, duration / steps)
    return () => clearInterval(id)
  }, [target, duration, shouldStart])
  return value
}

function StatCard({ value, suffix, label, shouldStart, index }) {
  const count = useCountUp(value, shouldStart)
  return (
    <motion.div
      className="flex flex-col items-center bg-white rounded-2xl p-6 shadow-sm border border-blue-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <p className="text-4xl md:text-5xl font-extrabold text-[#0B3C6D] tabular-nums leading-none">
        {count}<span className="text-[#F97316]">{suffix}</span>
      </p>
      <p className="text-gray-500 text-sm font-medium mt-2 text-center">{label}</p>
    </motion.div>
  )
}

function InstitutionalCard({ icon: Icon, color, border, title, description, featured, index }) {
  return (
    <motion.div
      className={`group relative bg-white rounded-2xl p-6 shadow-sm border-2 border-transparent ${border}
        hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300
        ${featured ? 'ring-2 ring-amber-300 ring-offset-2' : ''}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
    >
      {featured && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="bg-[#F97316] text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 whitespace-nowrap shadow">
            <Flame size={11} /> Top Achievement
          </span>
        </div>
      )}
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${color}`}>
        <Icon size={22} strokeWidth={2} />
      </div>
      <h3 className="text-[#0B3C6D] font-bold text-base mb-2 leading-snug">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-[#0B3C6D] to-[#F97316] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
    </motion.div>
  )
}

function StudentCard({ icon: Icon, color, stat, statLabel, title, description, index }) {
  return (
    <motion.div
      className="group bg-white rounded-2xl p-6 shadow-sm border-2 border-transparent hover:border-blue-100
        hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${color}`}>
          <Icon size={22} strokeWidth={2} />
        </div>
        <div>
          <p className="text-2xl font-extrabold text-[#0B3C6D] leading-none">{stat}</p>
          <p className="text-[#F97316] text-xs font-semibold mt-0.5">{statLabel}</p>
        </div>
      </div>
      <h3 className="text-[#0B3C6D] font-bold text-base mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-[#0B3C6D] to-[#F97316] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
    </motion.div>
  )
}

/* ── Page ──────────────────────────────────────────────────────────── */

export default function Achievements() {
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, margin: '-60px' })

  return (
    <PageWrapper
      title="Achievements & Recognitions"
      subtitle="Celebrating excellence in academics, leadership, and student accomplishments"
    >

      {/* ── Key Stats ──────────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-b from-[#EFF6FF] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {keyStats.map((s, i) => (
              <StatCard key={s.label} {...s} shouldStart={statsInView} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Institutional Achievements ─────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Institutional Honours"
            title="Institutional Achievements"
            subtitle="Prestigious awards and recognitions received by Sadhana School for its commitment to academic excellence and quality education."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {institutional.map((item, i) => (
              <InstitutionalCard key={item.title} {...item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Student Achievements ───────────────────────────────────── */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Student Excellence"
            title="Student Achievements"
            subtitle="Our students continue to excel and make the institution proud through remarkable academic and competitive accomplishments."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {student.map((item, i) => (
              <StudentCard key={item.title} {...item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing Quote ──────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-[#0B3C6D] to-[#1a5fa3] rounded-3xl p-10 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-4 left-6 opacity-10">
              <Quote size={72} className="text-white" />
            </div>
            <div className="absolute bottom-4 right-6 opacity-10 rotate-180">
              <Quote size={72} className="text-white" />
            </div>
            <p className="text-white text-lg md:text-xl leading-relaxed font-medium relative z-10">
              Sadhana English Medium School remains committed to nurturing talent, inspiring excellence, and shaping future leaders through quality education and dedicated mentorship.
            </p>
            <div className="mt-6 flex items-center justify-center gap-2">
              <div className="h-0.5 w-8 bg-[#F97316] rounded-full" />
              <p className="text-blue-200 text-sm font-semibold">Sadhana English Medium School, Etikoppaka</p>
              <div className="h-0.5 w-8 bg-[#F97316] rounded-full" />
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </PageWrapper>
  )
}
