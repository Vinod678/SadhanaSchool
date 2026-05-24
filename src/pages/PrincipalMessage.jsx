import { motion } from 'framer-motion'
import { Award, BookOpen, Users, Quote } from 'lucide-react'
import PageWrapper from '../layouts/PageWrapper'
import CTASection from '../sections/CTASection'
import principalImg from '../assets/team/principal.jpg'

const highlights = [
  { icon: Award,    label: '25+ Years',      sub: 'Teaching Experience'       },
  { icon: BookOpen, label: 'M.A., B.Ed.',    sub: 'Qualifications'             },
  { icon: Users,    label: 'Best Principal', sub: 'Award Recipient'            },
]

const paragraphs = [
  'Dear students, parents, and well-wishers,',
  'It is with immense pride and gratitude that I welcome you to Sadhana English Medium School. Over the past two decades, our institution has stood as a beacon of quality education in Anakapalli district — not merely as a place of learning, but as a home where young minds are nurtured, values are instilled, and futures are shaped.',
  'Our journey began in 2005 with a simple yet powerful vision: to bring world-class English medium education within the reach of every child in Etikoppaka. Today, with over 500 students, 60 dedicated faculty members, and a track record of 100% SSC pass rates, we stand proud — but never complacent.',
  'We believe that true education goes beyond textbooks. It is about building empathy, resilience, and a lifelong love for learning. Our students have secured State First Ranks, earned Navodaya selections, and gone on to become engineers, doctors, and entrepreneurs. Their success is our greatest achievement.',
  'To our students: you are capable of more than you know. Dream big, work hard, and always carry the values Sadhana has given you. To our parents: we are your partners, and together we will build the best future for your children. To our teachers: your dedication is the foundation on which every success story is written.',
  'I look forward to another year of growth, learning, and shared achievements.',
]

export default function PrincipalMessage() {
  return (
    <PageWrapper
      title="Principal's Message"
      subtitle="Guiding Sadhana School with vision, dedication, and a passion for excellence"
    >
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ══════════════════════════════════════════════════
              MOBILE (<lg) — modern stacked layout
          ══════════════════════════════════════════════════ */}
          <div className="lg:hidden">

            {/* Photo hero banner */}
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-xl mb-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={principalImg}
                  alt="Annam Bujji – Principal"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#061e36]/90 via-[#0B3C6D]/30 to-transparent" />

              {/* 25+ badge */}
              <div className="absolute top-3 right-3 bg-[#F97316] rounded-xl px-3 py-2 text-center shadow-lg">
                <p className="text-white font-extrabold text-xl leading-none">25+</p>
                <p className="text-orange-100 text-[10px] font-medium mt-0.5">Years</p>
              </div>

              {/* Name & role overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="inline-flex items-center gap-1.5 bg-[#F97316]/20 border border-[#F97316]/40 text-[#F97316] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2">
                  <span className="w-1.5 h-1.5 bg-[#F97316] rounded-full" />
                  From the Principal's Desk
                </span>
                <h2 className="text-white font-extrabold text-xl leading-tight">Annam Bujji</h2>
                <p className="text-blue-200 text-xs mt-0.5">M.A., B.Ed. · Principal, Sadhana School</p>
              </div>
            </motion.div>

            {/* Highlights — 3-column compact */}
            <motion.div
              className="grid grid-cols-3 gap-2.5 mb-5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
            >
              {highlights.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="bg-[#F9FAFB] border border-gray-100 rounded-xl p-3 text-center">
                  <div className="w-8 h-8 bg-[#0B3C6D] rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Icon size={15} className="text-white" />
                  </div>
                  <p className="font-bold text-[#0B3C6D] text-xs leading-snug">{label}</p>
                  <p className="text-gray-400 text-[10px] mt-0.5 leading-snug">{sub}</p>
                </div>
              ))}
            </motion.div>

            {/* Pull quote */}
            <motion.div
              className="relative bg-gradient-to-br from-[#0B3C6D] to-[#1a5fa3] rounded-2xl p-5 mb-6 overflow-hidden"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.15 }}
            >
              <div className="absolute top-2 left-3 opacity-10 pointer-events-none">
                <Quote size={44} className="text-white" />
              </div>
              <p className="text-white text-sm leading-relaxed font-medium relative z-10 pl-1">
                Education is not the filling of a pail, but the lighting of a fire. At Sadhana, we kindle that fire in every child — nurturing curiosity, courage, and character.
              </p>
            </motion.div>

            {/* Message body */}
            <motion.div
              className="flex flex-col gap-4 text-gray-500 text-sm leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {paragraphs.map((p, i) => (
                <p key={i} className={i === 0 ? 'font-semibold text-[#0B3C6D] text-sm' : ''}>{p}</p>
              ))}
            </motion.div>

            {/* Signature */}
            <motion.div
              className="mt-7 pt-5 border-t border-gray-100 flex items-center gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 }}
            >
              <div className="w-11 h-11 bg-[#0B3C6D] rounded-full flex items-center justify-center text-white font-extrabold text-base shrink-0 shadow-md">
                AB
              </div>
              <div>
                <p className="font-bold text-[#0B3C6D] text-sm">Annam Bujji</p>
                <p className="text-gray-400 text-xs">Principal · M.A., B.Ed.</p>
                <p className="text-[#F97316] text-[10px] font-semibold mt-0.5">Sadhana English Medium School, Etikoppaka</p>
              </div>
            </motion.div>
          </div>

          {/* ══════════════════════════════════════════════════
              DESKTOP (lg+) — original side-by-side layout
          ══════════════════════════════════════════════════ */}
          <div className="hidden lg:grid grid-cols-5 gap-14 items-start">

            {/* Photo column */}
            <motion.div
              className="col-span-2"
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
              className="col-span-3"
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

              <div className="relative bg-gradient-to-br from-[#0B3C6D] to-[#1a5fa3] rounded-2xl p-6 mb-8 overflow-hidden">
                <div className="absolute top-3 left-4 opacity-10">
                  <Quote size={52} className="text-white" />
                </div>
                <p className="text-white text-base leading-relaxed font-medium relative z-10 pl-2">
                  Education is not the filling of a pail, but the lighting of a fire. At Sadhana, we kindle that fire in every child — nurturing curiosity, courage, and character.
                </p>
              </div>

              <div className="flex flex-col gap-5 text-gray-500 text-sm leading-relaxed">
                {paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

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
