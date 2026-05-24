import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircle, Target, Eye, Heart, UserRound } from 'lucide-react'
import PageWrapper from '../layouts/PageWrapper'
import SectionTitle from '../components/SectionTitle'
import StatsSection from '../sections/StatsSection'
import CTASection from '../sections/CTASection'
import img1 from '../assets/team/principal.jpg';

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    desc: 'To provide quality English medium education that develops intellectual curiosity, moral character, and life skills in every student, preparing them for success in a rapidly changing world.',
    num: '01',
    accent: 'bg-[#F97316]',
    iconBg: 'bg-[#F97316]/10 border-[#F97316]/20',
    iconColor: 'text-[#F97316]',
    strip: 'from-[#F97316] to-[#fb923c]',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    desc: 'To be the most trusted educational institution in Anakapalli district, recognized for academic excellence, holistic development, and community impact.',
    num: '02',
    accent: 'bg-sky-500',
    iconBg: 'bg-sky-500/10 border-sky-500/20',
    iconColor: 'text-sky-500',
    strip: 'from-sky-400 to-blue-500',
  },
  {
    icon: Heart,
    title: 'Our Values',
    desc: 'Integrity, Excellence, Compassion, Innovation, and Inclusivity — the pillars that guide everything we do at Sadhana School.',
    num: '03',
    accent: 'bg-emerald-500',
    iconBg: 'bg-emerald-500/10 border-emerald-500/20',
    iconColor: 'text-emerald-500',
    strip: 'from-emerald-400 to-green-500',
  },
]

const team = [
  { name: 'Annam Bujji, M.A., B.Ed.', role: 'Principal',                  exp: '25+ years', img: img1 },
  { name: 'Vice Principal',            role: 'Vice Principal',              exp: '18+ years', img: '' },
  { name: 'Head of Science',           role: 'Science Department',          exp: '15+ years', img: '' },
  { name: 'Head of Mathematics',       role: 'Mathematics Department',      exp: '12+ years', img: '' },
  { name: 'English Faculty',           role: 'Head of English',             exp: '14+ years', img: '' },
  { name: 'Telugu Faculty',            role: 'Telugu & Regional Languages', exp: '10+ years', img: '' },
  { name: 'Hindi Faculty',             role: 'Hindi Language',              exp: '9+ years',  img: '' },
  { name: 'Social Studies Faculty',    role: 'Head of Social Studies',      exp: '11+ years', img: '' },
  { name: 'Physical Education',        role: 'PT & Sports In-charge',       exp: '8+ years',  img: '' },
  { name: 'Computer Science Faculty',  role: 'Computer Science',            exp: '7+ years',  img: '' },
  { name: 'Art & Craft Faculty',       role: 'Fine Arts',                   exp: '10+ years', img: '' },
  { name: 'Lower Primary Faculty',     role: 'Classes I & II',              exp: '12+ years', img: '' },
  { name: 'Upper Primary Faculty',     role: 'Classes III to V',            exp: '9+ years',  img: '' },
  { name: 'Biology Faculty',           role: 'Life Sciences',               exp: '8+ years',  img: '' },
]

export default function About() {
  return (
    <PageWrapper
      title="About Us"
      subtitle="Know our story, vision, and the team behind Sadhana School"
    >
      {/* Story section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle badge="Our Story" title="Two Decades of Shaping Young Minds" align="left" />
              <p className="text-gray-500 leading-relaxed mb-4">
                Founded in 2005 by a group of passionate educators in Etikoppaka, Sadhana English Medium School was established with a single vision: to bring quality English medium education to the children of Anakapalli district.
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                Over 19 years, we have grown from a small school with 5 classrooms to a full-fledged institution with over 500 students, 60 faculty members, and state-of-the-art infrastructure.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Our alumni are today's engineers, doctors, entrepreneurs, and social leaders — a testament to the foundation we help build in every child who walks through our doors.
              </p>
              <ul className="flex flex-col gap-3">
                {['Established in 2005 in Etikoppaka', 'AP State Board affiliated', 'Classes I to X', '500+ students enrolled', '98% board examination pass rate'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-[#F97316] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="src\assets\school_kids\school_prayer.jpg"
                alt="School campus"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge="Our Foundation" title="Mission, Vision & Values" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow border-t-4 border-[#0B3C6D] group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="w-14 h-14 bg-blue-50 group-hover:bg-[#0B3C6D] rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon size={26} className="text-[#0B3C6D] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-[#0B3C6D] text-lg mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Leadership team */}
      <section id="faculty" className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge="Leadership" title="Meet Our Dedicated Team" subtitle="Our experienced educators and administrators are committed to student success." />

          {/* ── MOBILE (<sm) ─────────────────────────────────────────── */}
          <div className="sm:hidden">

            {/* Principal — featured banner card */}
            {team.filter(m => m.role === 'Principal').map(member => (
              <Link key={member.name} to="/principal-message" className="block mb-5">
                <motion.div
                  className="relative rounded-2xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="aspect-[16/8] overflow-hidden">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061e36]/90 via-[#0B3C6D]/40 to-transparent" />
                  {/* Top badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#F97316] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                      Principal
                    </span>
                  </div>
                  {/* Bottom info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
                    <div>
                      <h4 className="text-white font-extrabold text-base leading-tight">{member.name}</h4>
                      <p className="text-blue-200 text-xs mt-0.5">{member.exp} Experience</p>
                    </div>
                    <span className="shrink-0 bg-white/15 backdrop-blur-sm border border-white/30 text-white text-xs font-bold px-3 py-1.5 rounded-xl">
                      View Message →
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))}

            {/* Rest of faculty — 2-column compact grid */}
            <div className="grid grid-cols-2 gap-3">
              {team.filter(m => m.role !== 'Principal').map((member, i) => (
                <motion.div
                  key={member.name}
                  className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                >
                  {/* Circular avatar */}
                  <div className="w-14 h-14 rounded-full mx-auto mb-3 overflow-hidden bg-gradient-to-br from-[#EEF5FF] to-[#dbeafe] flex items-center justify-center border-2 border-[#0B3C6D]/10 shrink-0">
                    {member.img ? (
                      <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                      <UserRound size={26} className="text-[#0B3C6D]/40" strokeWidth={1.5} />
                    )}
                  </div>
                  <h4 className="font-bold text-[#0B3C6D] text-xs leading-snug">{member.name}</h4>
                  <p className="text-[#F97316] text-[10px] font-semibold mt-0.5 leading-snug">{member.role}</p>
                  <p className="text-gray-400 text-[10px] mt-0.5">{member.exp}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── DESKTOP (sm+) ────────────────────────────────────────── */}
          <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => {
              const isPrincipal = member.role === 'Principal'
              const CardWrapper = ({ children }) => isPrincipal
                ? <Link to="/principal-message" className="block">{children}</Link>
                : <>{children}</>

              return (
                <motion.div
                  key={member.name}
                  className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group text-center${isPrincipal ? ' cursor-pointer ring-0 hover:ring-2 hover:ring-[#F97316]/50' : ''}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  whileHover={{ y: -4 }}
                >
                  <CardWrapper>
                    <div className="aspect-square overflow-hidden">
                      {member.img ? (
                        <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[#EEF5FF] to-[#dbeafe] flex items-center justify-center">
                          <div className="flex flex-col items-center gap-2">
                            <div className="w-16 h-16 rounded-full bg-[#0B3C6D]/10 flex items-center justify-center">
                              <UserRound size={36} className="text-[#0B3C6D]/40" strokeWidth={1.5} />
                            </div>
                            <span className="text-[10px] text-[#0B3C6D]/30 font-medium tracking-wide">No Photo</span>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <h4 className="font-bold text-[#0B3C6D] text-sm">{member.name}</h4>
                      <p className="text-[#F97316] text-xs font-semibold mt-1">{member.role}</p>
                      <p className="text-gray-400 text-xs mt-1">{member.exp} Experience</p>
                      {isPrincipal && (
                        <p className="text-[#F97316] text-[10px] font-semibold mt-2 flex items-center justify-center gap-1">
                          View Message →
                        </p>
                      )}
                    </div>
                  </CardWrapper>
                </motion.div>
              )
            })}
          </div>

        </div>
      </section>

      <CTASection />
    </PageWrapper>
  )
}
