import { motion } from 'framer-motion'
import { BookOpen, Users, Star, Shield, Monitor, FlaskConical, Library, Cpu, Trophy, Bus, GraduationCap, School } from 'lucide-react'

const iconMap = { BookOpen, Users, Star, Shield, Monitor, FlaskConical, Library, Cpu, Trophy, Bus, GraduationCap, School }

export default function FeatureCard({ icon, title, description, variant = 'default', index = 0 }) {
  const IconComponent = iconMap[icon] || BookOpen

  return (
    <motion.div
      className={`p-4 sm:p-6 rounded-2xl transition-all duration-300 group
        ${variant === 'filled'
          ? 'bg-[#0B3C6D] text-white hover:bg-[#082d52]'
          : 'bg-white shadow-md hover:shadow-xl border border-gray-100'
        }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-3 sm:mb-4 transition-colors duration-300
        ${variant === 'filled'
          ? 'bg-white/20 group-hover:bg-white/30'
          : 'bg-blue-50 group-hover:bg-[#0B3C6D]'
        }`}>
        <IconComponent
          size={20}
          className={variant === 'filled' ? 'text-[#F97316]' : 'text-[#0B3C6D] group-hover:text-white transition-colors duration-300'}
        />
      </div>
      <h3 className={`text-sm sm:text-lg font-bold mb-1.5 sm:mb-2 leading-snug ${variant === 'filled' ? 'text-white' : 'text-[#0B3C6D]'}`}>
        {title}
      </h3>
      <p className={`text-xs sm:text-sm leading-relaxed ${variant === 'filled' ? 'text-blue-100' : 'text-gray-500'}`}>
        {description}
      </p>
    </motion.div>
  )
}
