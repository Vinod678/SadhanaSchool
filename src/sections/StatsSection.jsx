import { motion } from 'framer-motion'
import { Users, GraduationCap, Award, TrendingUp } from 'lucide-react'

const iconMap = { Users, GraduationCap, Award, TrendingUp }

const stats = [
  { icon: 'Users', value: '600+', label: 'Happy Students' },
  { icon: 'GraduationCap', value: '30+', label: 'Expert Teachers' },
  { icon: 'Award', value: '19+', label: 'Years of Excellence' },
  { icon: 'TrendingUp', value: '98%', label: 'Pass Rate' },
]

export default function StatsSection() {
  return (
    <section className="py-16 bg-[#0B3C6D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const IconComponent = iconMap[stat.icon]
            return (
              <motion.div
                key={stat.label}
                className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="w-14 h-14 bg-[#F97316]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent size={28} className="text-[#F97316]" />
                </div>
                <p className="text-4xl font-extrabold text-white mb-1">{stat.value}</p>
                <p className="text-blue-200 text-sm font-medium">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
