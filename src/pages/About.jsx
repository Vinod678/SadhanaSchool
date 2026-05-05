import { motion } from 'framer-motion'
import { CheckCircle, Target, Eye, Heart } from 'lucide-react'
import PageWrapper from '../layouts/PageWrapper'
import SectionTitle from '../components/SectionTitle'
import StatsSection from '../sections/StatsSection'
import CTASection from '../sections/CTASection'
import img1 from '../assets/team/principal.jpg';

const values = [
  { icon: Target, title: 'Our Mission', desc: 'To provide quality English medium education that develops intellectual curiosity, moral character, and life skills in every student, preparing them for success in a rapidly changing world.' },
  { icon: Eye, title: 'Our Vision', desc: 'To be the most trusted educational institution in Anakapalli district, recognized for academic excellence, holistic development, and community impact.' },
  { icon: Heart, title: 'Our Values', desc: 'Integrity, Excellence, Compassion, Innovation, and Inclusivity — the pillars that guide everything we do at Sadhana School.' },
]

const team = [
  { name: 'Annam Bujji, M.A., B.Ed.', role: 'Principal', exp: '25+ years', img: img1 },
  { name: 'P. Lakshmi Devi', role: 'Vice Principal', exp: '18+ years', img: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&q=80' },
  { name: 'M. Rajesh Kumar', role: 'Head of Science', exp: '15+ years', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80' },
  { name: 'S. Padmavathi', role: 'Head of Mathematics', exp: '12+ years', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80' },
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
                Over 19 years, we have grown from a small school with 5 classrooms to a full-fledged institution with over 600 students, 60 faculty members, and state-of-the-art infrastructure.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Our alumni are today's engineers, doctors, entrepreneurs, and social leaders — a testament to the foundation we help build in every child who walks through our doors.
              </p>
              <ul className="flex flex-col gap-3">
                {['Established in 2005 in Etikoppaka', 'AP State Board affiliated', 'Classes I to X', '600+ students enrolled', '98% board examination pass rate'].map((item, i) => (
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
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=700&q=80"
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
      <section id="faculty" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge="Leadership" title="Meet Our Dedicated Team" subtitle="Our experienced educators and administrators are committed to student success." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="aspect-square overflow-hidden">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-[#0B3C6D] text-sm">{member.name}</h4>
                  <p className="text-[#F97316] text-xs font-semibold mt-1">{member.role}</p>
                  <p className="text-gray-400 text-xs mt-1">{member.exp} Experience</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageWrapper>
  )
}
