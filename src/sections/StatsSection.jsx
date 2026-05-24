import { motion } from 'framer-motion'
import { Users, GraduationCap, Award, TrendingUp } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: '500+',
    label: 'Happy Students',
    accent: 'from-[#F97316] to-[#fb923c]',
    iconBg: 'bg-[#F97316]/20 border-[#F97316]/30',
    glow: 'group-hover:shadow-[#F97316]/20',
  },
  {
    icon: GraduationCap,
    value: '30+',
    label: 'Expert Teachers',
    accent: 'from-sky-400 to-blue-500',
    iconBg: 'bg-sky-400/20 border-sky-400/30',
    glow: 'group-hover:shadow-sky-400/20',
  },
  {
    icon: Award,
    value: '19+',
    label: 'Years of Excellence',
    accent: 'from-emerald-400 to-green-500',
    iconBg: 'bg-emerald-400/20 border-emerald-400/30',
    glow: 'group-hover:shadow-emerald-400/20',
  },
  {
    icon: TrendingUp,
    value: '98%',
    label: 'Pass Rate',
    accent: 'from-violet-400 to-purple-500',
    iconBg: 'bg-violet-400/20 border-violet-400/30',
    glow: 'group-hover:shadow-violet-400/20',
  },
]

export default function StatsSection() {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-[#061e36] via-[#0B3C6D] to-[#0d4a87] relative overflow-hidden">

      {/* Background blobs */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-10 right-0 w-72 h-72 rounded-full bg-[#F97316] blur-3xl" />
        <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-sky-400 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                className={`group relative bg-white/8 backdrop-blur-sm border border-white/12 rounded-2xl p-4 sm:p-6 overflow-hidden transition-shadow duration-300 hover:shadow-xl flex flex-col items-center ${stat.glow}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                whileHover={{ y: -3 }}
              >
                {/* Colored top strip */}
                <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${stat.accent} rounded-t-2xl`} />

                {/* Icon pill */}
                <div className={`w-10 h-10 sm:w-12 sm:h-12 ${stat.iconBg} border rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4`}>
                  <Icon size={19} className="text-white" strokeWidth={2} />
                </div>

                {/* Stat value */}
                <p className="text-3xl sm:text-4xl font-extrabold text-white leading-none tracking-tight mb-1 text-center">
                  {stat.value}
                </p>

                {/* Label */}
                <p className="text-blue-200/75 text-xs sm:text-sm font-medium leading-snug text-center">
                  {stat.label}
                </p>

                {/* Subtle inner glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.accent} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-300 rounded-2xl pointer-events-none`} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
