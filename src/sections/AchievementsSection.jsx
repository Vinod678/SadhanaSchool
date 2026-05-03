import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Trophy, Award, Star, Users, GraduationCap, BookOpen,
  Cpu, Calculator, CheckCircle, Medal, Flame, Crown
} from 'lucide-react'
import SectionTitle from '../components/SectionTitle'

/* ── Data ──────────────────────────────────────────────────────────── */

const institutional = [
  {
    icon: Crown,
    color: 'bg-amber-50 text-amber-600',
    ring: 'group-hover:ring-amber-200',
    title: 'APPUSMA Recognition',
    description: 'Honoured by the APPUSMA family for outstanding academic excellence and contribution to quality education.',
  },
  {
    icon: Trophy,
    color: 'bg-yellow-50 text-yellow-600',
    ring: 'group-hover:ring-yellow-200',
    title: 'State First Rank – 598 / 600',
    description: 'Secured State First Rank with an exceptional score of 598/600 — a benchmark in academic performance.',
    featured: true,
  },
  {
    icon: Medal,
    color: 'bg-orange-50 text-orange-600',
    ring: 'group-hover:ring-orange-200',
    title: 'Best Correspondent Award',
    description: 'Awarded "Best Correspondent" for visionary leadership and dedication to institutional growth.',
  },
  {
    icon: Star,
    color: 'bg-blue-50 text-blue-600',
    ring: 'group-hover:ring-blue-200',
    title: 'Best Teacher Awards',
    description: 'Recognized with multiple "Best Teacher" awards for excellence in teaching and student mentorship.',
  },
  {
    icon: Award,
    color: 'bg-green-50 text-green-600',
    ring: 'group-hover:ring-green-200',
    title: 'Academic Excellence Award',
    description: 'Received the Academic Excellence Award for maintaining consistently high academic standards.',
  },
  {
    icon: GraduationCap,
    color: 'bg-purple-50 text-purple-600',
    ring: 'group-hover:ring-purple-200',
    title: '100% SSC First Class – 3 Years',
    description: 'Achieved 100% SSC First Class results for three consecutive years under Andhra University, Visakhapatnam.',
  },
]

const student = [
  {
    icon: Users,
    color: 'bg-blue-50 text-blue-600',
    ring: 'group-hover:ring-blue-200',
    stat: '20+ Students',
    title: 'Navodaya Selections',
    description: 'Over 20 students selected consistently for the past 6 years, reflecting strong foundational learning.',
  },
  {
    icon: Cpu,
    color: 'bg-indigo-50 text-indigo-600',
    ring: 'group-hover:ring-indigo-200',
    stat: '2 Consecutive Years',
    title: 'IIIT Admissions',
    description: 'Students successfully selected for IIIT admissions for two consecutive years in a row.',
  },
  {
    icon: CheckCircle,
    color: 'bg-green-50 text-green-600',
    ring: 'group-hover:ring-green-200',
    stat: '100% Pass Rate',
    title: 'SSC Performance',
    description: 'Maintained an outstanding 100% pass percentage in SSC examinations — year after year.',
  },
  {
    icon: Calculator,
    color: 'bg-amber-50 text-amber-600',
    ring: 'group-hover:ring-amber-200',
    stat: 'Consistent Achievers',
    title: 'Mathematics Olympiad',
    description: 'Active participation and achievements in prestigious Math Olympiad competitions, showcasing analytical excellence.',
  },
]

/* ── Count-up hook ─────────────────────────────────────────────────── */

function useCountUp(target, shouldStart, duration = 1600) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!shouldStart) return
    setValue(0)
    const steps = 60
    const step = target / steps
    let current = 0
    const id = setInterval(() => {
      current += step
      if (current >= target) { setValue(target); clearInterval(id) }
      else setValue(Math.floor(current))
    }, duration / steps)
    return () => clearInterval(id)
  }, [target, duration, shouldStart])
  return value
}

/* ── Sub-components ────────────────────────────────────────────────── */

function StatBadge({ label, value, suffix = '', shouldStart }) {
  const num = parseInt(value.replace(/\D/g, ''), 10)
  const count = useCountUp(num, shouldStart)
  const prefix = value.replace(/[\d+%]/g, '').trim()

  return (
    <div className="flex flex-col items-center">
      <p className="text-3xl sm:text-4xl font-extrabold text-[#F97316] tabular-nums">
        {prefix}{count}{suffix || value.replace(/\d/g, '').trim()}
      </p>
      <p className="text-blue-200 text-xs font-medium mt-1 text-center">{label}</p>
    </div>
  )
}

function AchievementCard({ icon: Icon, color, ring, title, description, featured, stat, index }) {
  return (
    <motion.div
      className={`group relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100
        hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ring-2 ring-transparent ${ring}
        ${featured ? 'border-amber-200 bg-amber-50/30' : ''}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
    >
      {featured && (
        <div className="absolute -top-3 right-4">
          <span className="bg-[#F97316] text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
            <Flame size={11} /> Top Achievement
          </span>
        </div>
      )}

      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${color}`}>
        <Icon size={22} strokeWidth={2} />
      </div>

      {stat && (
        <p className="text-[#0B3C6D] font-extrabold text-lg leading-none mb-1">{stat}</p>
      )}

      <h3 className="text-[#0B3C6D] font-bold text-base mb-2 leading-snug">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>

      {/* Bottom accent bar on hover */}
      <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-[#0B3C6D] to-[#F97316] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
    </motion.div>
  )
}

/* ── Main Section ──────────────────────────────────────────────────── */

export default function AchievementsSection() {
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, margin: '-80px' })

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-[#0B3C6D] via-[#0d4a87] to-[#1a5fa3] relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 right-10 w-80 h-80 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-[#F97316] blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionTitle
          badge="Awards & Recognition"
          title="Achievements & Recognitions"
          subtitle="Consistent excellence across academics, leadership, and student development — recognized by prestigious bodies across Andhra Pradesh."
          light
        />

        {/* ── Count-up stats strip ──────────────────────────────── */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-8 py-7 mb-14"
        >
          <StatBadge label="State Rank Score"       value="598"  suffix="/600" shouldStart={statsInView} />
          <StatBadge label="SSC Pass Rate"           value="100"  suffix="%"   shouldStart={statsInView} />
          <StatBadge label="Navodaya Selections / yr" value="20" suffix="+"   shouldStart={statsInView} />
          <StatBadge label="Years Navodaya Streak"   value="6"   suffix="+"   shouldStart={statsInView} />
        </div>

        {/* ── Institutional Achievements ────────────────────────── */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-7">
            <div className="w-1 h-7 bg-[#F97316] rounded-full" />
            <h2 className="text-white font-extrabold text-xl">Institutional Achievements</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {institutional.map((item, i) => (
              <AchievementCard key={item.title} {...item} index={i} />
            ))}
          </div>
        </div>

        {/* ── Student Achievements ──────────────────────────────── */}
        <div>
          <div className="flex items-center gap-3 mb-7">
            <div className="w-1 h-7 bg-[#F97316] rounded-full" />
            <h2 className="text-white font-extrabold text-xl">Student Achievements</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {student.map((item, i) => (
              <AchievementCard key={item.title} {...item} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
