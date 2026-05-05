import { motion } from 'framer-motion'
import { Award, BookOpen, Users, Quote } from 'lucide-react'
import PageWrapper from '../layouts/PageWrapper'
import CTASection from '../sections/CTASection'
import principalImg from '../assets/team/principal.jpg'

const highlights = [
  { icon: Award, label: '25+ Years', sub: 'of Teaching Experience' },
  { icon: BookOpen, label: 'M.A., B.Ed.', sub: 'Educational Qualifications' },
  { icon: Users, label: 'Best Principal', sub: 'Award Recipient' },
]

export default function PrincipalMessage() {
  return (
    <PageWrapper
      title="Principal's Message"
      subtitle="Guiding Sadhana School with vision, dedication, and a passion for excellence"
    >
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 items-start">

            {/* Photo column */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute -top-3 -left-3 w-full h-full rounded-2xl border-2 border-[#F97316]/40" />
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[3/4]">
                  <img
                    src={principalImg}
                    alt="Annam Bujji – Principal"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 right-4 bg-[#0B3C6D] text-white px-4 py-2 rounded-xl shadow-lg text-center">
                    <p className="text-2xl font-extrabold text-[#F97316] leading-none">25+</p>
                    <p className="text-xs font-medium text-blue-200 mt-0.5">Years of Excellence</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                {highlights.map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="flex items-center gap-4 p-4 bg-[#F9FAFB] rounded-xl border border-gray-100">
                    <div className="w-10 h-10 bg-[#0B3C6D] rounded-lg flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-[#0B3C6D] text-sm">{label}</p>
                      <p className="text-gray-400 text-xs">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Message column */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                <span className="inline-block bg-blue-50 text-[#0B3C6D] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                  From the Principal's Desk
                </span>
                <h2 className="text-3xl font-extrabold text-[#0B3C6D] leading-tight">
                  Annam Bujji
                  <span className="block text-base font-medium text-gray-400 mt-1">
                    M.A., B.Ed. &nbsp;·&nbsp; Principal, Sadhana English Medium School
                  </span>
                </h2>
              </div>

              {/* Pull quote */}
              <div className="relative bg-gradient-to-br from-[#0B3C6D] to-[#1a5fa3] rounded-2xl p-6 mb-8 overflow-hidden">
                <div className="absolute top-3 left-4 opacity-10">
                  <Quote size={52} className="text-white" />
                </div>
                <p className="text-white text-base leading-relaxed font-medium relative z-10 pl-2">
                  Education is not the filling of a pail, but the lighting of a fire. At Sadhana, we kindle that fire in every child — nurturing curiosity, courage, and character.
                </p>
              </div>

              <div className="flex flex-col gap-5 text-gray-500 text-sm leading-relaxed">
                <p>Dear students, parents, and well-wishers,</p>
                <p>
                  It is with immense pride and gratitude that I welcome you to Sadhana English Medium School. Over the past two decades, our institution has stood as a beacon of quality education in Anakapalli district — not merely as a place of learning, but as a home where young minds are nurtured, values are instilled, and futures are shaped.
                </p>
                <p>
                  Our journey began in 2005 with a simple yet powerful vision: to bring world-class English medium education within the reach of every child in Etikoppaka. Today, with over 600 students, 60 dedicated faculty members, and a track record of 100% SSC pass rates, we stand proud — but never complacent.
                </p>
                <p>
                  We believe that true education goes beyond textbooks. It is about building empathy, resilience, and a lifelong love for learning. Our students have secured State First Ranks, earned Navodaya selections, and gone on to become engineers, doctors, and entrepreneurs. Their success is our greatest achievement.
                </p>
                <p>
                  To our students: you are capable of more than you know. Dream big, work hard, and always carry the values Sadhana has given you. To our parents: we are your partners, and together we will build the best future for your children. To our teachers: your dedication is the foundation on which every success story is written.
                </p>
                <p>I look forward to another year of growth, learning, and shared achievements.</p>
              </div>

              {/* Signature */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-[#0B3C6D] rounded-full flex items-center justify-center text-white font-extrabold text-lg shrink-0">
                  AB
                </div>
                <div>
                  <p className="font-bold text-[#0B3C6D]">Annam Bujji</p>
                  <p className="text-gray-400 text-sm">Principal · M.A., B.Ed.</p>
                  <p className="text-[#F97316] text-xs font-semibold mt-0.5">Sadhana English Medium School, Etikoppaka</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </PageWrapper>
  )
}
