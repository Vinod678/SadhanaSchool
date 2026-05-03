import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0B3C6D] to-[#1a5fa3] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#F97316] blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-white blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-[#F97316]/20 text-[#F97316] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-[#F97316]/30">
            Admissions Open 2026–27
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Give Your Child the Best{' '}
            <span className="text-[#F97316]">Start in Life</span>
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Enroll your child at Sadhana English Medium School today and be part of a community dedicated to excellence, growth, and values.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#F97316] text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-[#ea6c0a] transition-colors shadow-lg"
            >
              Enquire About Admission <ArrowRight size={18} />
            </Link>
            <a
              href="tel:+919440000000"
              className="inline-flex items-center justify-center gap-2 bg-white/15 text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-base hover:bg-white/25 transition-colors backdrop-blur-sm"
            >
              <Phone size={18} /> Call Us Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
