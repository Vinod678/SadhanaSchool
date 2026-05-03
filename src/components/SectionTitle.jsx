import { motion } from 'framer-motion'

export default function SectionTitle({ badge, title, subtitle, align = 'center', light = false }) {
  const alignClass = {
    center: 'text-center items-center',
    left: 'text-left items-start',
    right: 'text-right items-end',
  }[align]

  return (
    <motion.div
      className={`flex flex-col gap-3 mb-12 ${alignClass}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {badge && (
        <span className="inline-block bg-orange-100 text-[#F97316] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full w-fit">
          {badge}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold leading-tight ${light ? 'text-white' : 'text-[#0B3C6D]'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg max-w-2xl leading-relaxed ${light ? 'text-blue-100' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
      <div className="flex gap-1 mt-1">
        <div className="h-1 w-8 rounded-full bg-[#F97316]" />
        <div className="h-1 w-4 rounded-full bg-[#0B3C6D]" />
      </div>
    </motion.div>
  )
}
