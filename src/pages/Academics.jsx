import { motion } from 'framer-motion'
import { BookOpen, School, GraduationCap, CheckCircle } from 'lucide-react'
import PageWrapper from '../layouts/PageWrapper'
import SectionTitle from '../components/SectionTitle'
import CTASection from '../sections/CTASection'
import schoolData from '../data/schoolData.json'

const iconMap = { BookOpen, School, GraduationCap }

const activities = [
  { title: 'Science Club', desc: 'Hands-on experiments and science fairs to ignite curiosity.' },
  { title: 'Math Olympiad', desc: 'Competitions to sharpen problem-solving and analytical thinking.' },
  { title: 'Literary Club', desc: 'Debates, elocution, and creative writing to build communication skills.' },
  { title: 'Cultural Arts', desc: 'Music, dance, and drama to nurture creative expression.' },
  { title: 'Sports Teams', desc: 'Cricket, volleyball, kabaddi, and athletics teams for all students.' },
  { title: 'Community Service', desc: 'Programs that build empathy and social responsibility.' },
]

export default function Academics() {
  return (
    <PageWrapper title="Academics" subtitle="A comprehensive curriculum designed for the 21st century learner">
      {/* Curriculum sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Curriculum"
            title="Programs for Every Stage of Learning"
            subtitle="Our structured academic program from Class I through X ensures continuity and progressive development."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {schoolData.academics.map((program, i) => {
              const IconComponent = iconMap[program.icon] || BookOpen
              return (
                <motion.div
                  key={program.id}
                  className="bg-[#F9FAFB] rounded-2xl p-8 border-l-4 border-[#0B3C6D] hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="w-14 h-14 bg-[#0B3C6D] rounded-xl flex items-center justify-center mb-5 shadow-md">
                    <IconComponent size={26} className="text-white" />
                  </div>
                  <span className="text-xs font-bold text-[#F97316] uppercase tracking-widest">{program.classes}</span>
                  <h3 className="font-bold text-[#0B3C6D] text-xl mt-1 mb-3">{program.level}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{program.description}</p>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Subjects</p>
                    <div className="flex flex-wrap gap-2">
                      {program.subjects.map(sub => (
                        <span key={sub} className="text-xs bg-white border border-gray-200 text-gray-600 px-3 py-1 rounded-full">
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Teaching methodology */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionTitle badge="Methodology" title="How We Teach" align="left" />
              <p className="text-gray-500 leading-relaxed mb-6">
                Our teaching methodology blends traditional instruction with modern, activity-based and experiential learning. We use smart boards, project-based learning, and regular assessments to ensure every child understands and retains knowledge.
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  'Interactive smart classroom sessions',
                  'Activity-based and project-based learning',
                  'Regular formative and summative assessments',
                  'Remedial classes for students needing extra support',
                  'Parent-teacher communication every month',
                  'Digital learning resources and e-library access',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-[#F97316] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3]"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=700&q=80"
                alt="Classroom"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Co-curricular */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Beyond Academics"
            title="Co-Curricular Activities"
            subtitle="We believe in nurturing every dimension of a child's personality."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {activities.map((act, i) => (
              <motion.div
                key={act.title}
                className="bg-[#F9FAFB] rounded-xl p-6 border border-gray-100 hover:border-[#0B3C6D] hover:shadow-md transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <div className="w-2 h-8 bg-[#F97316] rounded-full mb-3" />
                <h4 className="font-bold text-[#0B3C6D] text-base mb-2">{act.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{act.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageWrapper>
  )
}
