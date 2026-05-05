import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'

const highlights = [
  'AP State Board affiliated school with 19+ years of academic excellence',
  'Classes I to X with experienced, caring faculty',
  'Focus on academics, sports, arts and character building',
  'Modern infrastructure with digital learning tools',
]

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left – image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=700&q=80"
                alt="Students studying"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Accent card */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-[#0B3C6D] text-white rounded-2xl p-5 shadow-xl max-w-[180px]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-4xl font-extrabold text-[#F97316]">19+</p>
              <p className="text-sm text-blue-200 leading-tight mt-1">Years of Quality Education</p>
            </motion.div>
            {/* Decorative shapes */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#F97316]/10 rounded-full -z-10" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-100 rounded-full -z-10" />
          </motion.div>

          {/* Right – content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              badge="About Us"
              title="Committed to Excellence in Education"
              align="left"
            />
            <p className="text-gray-500 leading-relaxed mb-6">
              Sadhana English Medium School, established in Etikoppaka in 2005, has been a beacon of quality education in Anakapalli district. Our school combines traditional values with modern teaching methods to prepare students for a rapidly changing world.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              We believe every child is unique, and our dedicated team of educators work tirelessly to unlock each student's potential — academically, creatively, and socially.
            </p>

            <ul className="flex flex-col gap-3 mb-8">
              {highlights.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 text-gray-600 text-sm"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <CheckCircle size={18} className="text-[#F97316] shrink-0 mt-0.5" />
                  {item}
                </motion.li>
              ))}
            </ul>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-[#0B3C6D] text-white px-7 py-3.5 rounded-xl font-bold text-base hover:bg-[#082d52] transition-colors shadow-md"
            >
              Read More <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
