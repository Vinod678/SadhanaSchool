import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight } from 'lucide-react'

const highlights = [
  'AP State Board affiliated school with 19+ years of academic excellence',
  'Classes I to X with experienced, caring faculty',
  'Focus on academics, sports, arts and character building',
  'Modern infrastructure with digital learning tools',
]

const stats = [
  { value: '500+', label: 'Students' },
  { value: '30+', label: 'Teachers' },
  { value: '19+', label: 'Years' },
  { value: '98%', label: 'Pass Rate' },
]

export default function AboutSection() {
  return (
    <section className="py-16 sm:py-24 bg-white" style={{ overflow: 'clip' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Image block ──────────────────────────────────── */}
          <motion.div
            className="relative pb-6 sm:pb-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Offset decorative frame */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-5 sm:translate-y-5 rounded-3xl bg-[#F97316]/15 -z-10" />

            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=700&q=80"
                alt="Students in classroom"
                className="w-full h-full object-cover"
              />
              {/* Dark-to-transparent gradient at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B3C6D]/65 via-[#0B3C6D]/10 to-transparent" />

              {/* School name badge inside image */}
              <div className="absolute bottom-4 left-4">
                <div className="bg-white/15 backdrop-blur-sm rounded-xl px-3 py-2 border border-white/25">
                  <p className="text-white font-bold text-sm leading-tight">Sadhana School</p>
                  <p className="text-white/70 text-xs mt-0.5">Est. 2005 · Etikoppaka, AP</p>
                </div>
              </div>
            </div>

            {/* Floating "19+" accent card */}
            <motion.div
              className="absolute bottom-0 -right-2 sm:-right-4 bg-[#0B3C6D] text-white rounded-2xl px-5 py-4 shadow-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: 'spring', stiffness: 180 }}
            >
              <p className="text-3xl font-extrabold text-[#F97316] leading-none">19+</p>
              <p className="text-blue-200 text-xs mt-1 leading-snug">Years of<br />Excellence</p>
            </motion.div>

            {/* Decorative circles */}
            <div className="absolute -top-5 -left-5 w-20 h-20 bg-orange-100 rounded-full -z-10" />
            <div className="absolute -bottom-6 -left-8 w-36 h-36 bg-blue-50 rounded-full -z-10" />
          </motion.div>

          {/* ── Right: Content ──────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {/* Badge */}
            <span className="inline-block bg-orange-100 text-[#F97316] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              About Us
            </span>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B3C6D] leading-tight mb-3">
              Committed to Excellence in Education
            </h2>

            {/* Accent bars */}
            <div className="flex gap-1 mb-5">
              <div className="h-1 w-8 rounded-full bg-[#F97316]" />
              <div className="h-1 w-4 rounded-full bg-[#0B3C6D]" />
            </div>

            {/* Description */}
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-3">
              Sadhana English Medium School, established in Etikoppaka in 2005, has been a beacon of quality education in Anakapalli district. Our school combines traditional values with modern teaching methods to prepare students for a rapidly changing world.
            </p>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
              We believe every child is unique, and our dedicated team of educators work tirelessly to unlock each student's potential — academically, creatively, and socially.
            </p>

            {/* ── Stats strip ── */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3 p-3 sm:p-4 bg-[#F0F7FF] rounded-2xl border border-blue-100/80 mb-6">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="text-center py-1"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.07 }}
                >
                  <p className="text-xl sm:text-2xl font-extrabold text-[#0B3C6D] leading-none">{s.value}</p>
                  <p className="text-gray-400 text-[10px] sm:text-xs mt-1">{s.label}</p>
                </motion.div>
              ))}
            </div>

            {/* ── Highlights ── */}
            <ul className="flex flex-col gap-2.5 mb-7">
              {highlights.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 + i * 0.08 }}
                >
                  <div className="w-5 h-5 bg-orange-50 border border-orange-200 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle size={11} className="text-[#F97316]" />
                  </div>
                  <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex justify-center lg:justify-start">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-[#0B3C6D] hover:bg-[#082d52] active:scale-[0.98] text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all shadow-md"
              >
                Read More <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
