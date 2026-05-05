import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle, Phone, Mail } from 'lucide-react'
import PageWrapper from '../layouts/PageWrapper'

const faqs = [
  {
    q: 'What is the age criteria for admission to Class I?',
    a: 'Children must be at least 5 years and 6 months old as of June 1st of the academic year to be eligible for admission to Class I. Age proof in the form of a birth certificate is mandatory at the time of admission.',
  },
  {
    q: 'What is the fee structure for the current academic year?',
    a: 'Our fee structure varies by class and is updated each academic year. Please contact the school office directly at +91 99491 35613 for the most up-to-date fee details. We also offer convenient instalment payment options for parents.',
  },
  {
    q: 'Does the school provide transportation facilities?',
    a: 'Yes, Sadhana School provides safe and reliable transportation for students across nearby villages and areas. Route details, pickup/drop timings, and transport fees are available at the school office.',
  },
  {
    q: 'What are the school timings?',
    a: 'School timings are Monday to Friday: 8:30 AM – 4:00 PM, and Saturday: 8:30 AM – 12:30 PM. The school is closed on Sundays and all gazetted public holidays.',
  },
  {
    q: 'What is the medium of instruction?',
    a: 'Sadhana English Medium School follows English as the primary medium of instruction for all subjects. We are affiliated with the Andhra Pradesh State Board of Secondary Education (AP SCERT).',
  },
  {
    q: 'Which documents are required for admission?',
    a: "You will need the student's birth certificate, previous academic records, 4 passport-size photographs, Aadhar card of the student and parent, Transfer Certificate (for students joining from other schools), and a residence proof. Visit our Admission Procedure page for the complete list.",
  },
  {
    q: 'Does the school have hostel facilities?',
    a: 'Currently, Sadhana School does not have on-campus hostel facilities. However, our administrative team can assist families in finding suitable nearby accommodation options in the Etikoppaka area.',
  },
  {
    q: 'What co-curricular activities are offered?',
    a: 'We offer a wide range of co-curricular activities including sports, cultural events (dance, music, drama), science exhibitions, mathematics olympiads, debate competitions, and creative arts programs. Student participation is actively encouraged as part of holistic development.',
  },
]

function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <button
        className="w-full flex items-start gap-4 px-6 py-5 text-left hover:bg-blue-50/40 transition-colors group"
        onClick={() => setOpen(!open)}
      >
        <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-200 ${
          open ? 'bg-[#F97316] text-white' : 'bg-blue-50 text-[#0B3C6D]'
        }`}>
          <HelpCircle size={15} />
        </div>
        <span className={`flex-1 font-semibold text-sm leading-snug transition-colors duration-200 ${
          open ? 'text-[#F97316]' : 'text-[#0B3C6D]'
        }`}>
          {q}
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 mt-0.5 transition-transform duration-300 ${
            open ? 'rotate-180 text-[#F97316]' : 'text-gray-400'
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-5 pl-[60px] border-t border-gray-50">
              <p className="text-gray-500 text-sm leading-relaxed pt-4">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <PageWrapper
      title="Frequently Asked Questions"
      subtitle="Quick answers to the most common questions about admissions, academics, and school life"
    >
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4">
            {faqs.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions CTA */}
      <section className="pb-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-gradient-to-br from-[#0B3C6D] to-[#1a5fa3] rounded-3xl p-10 text-center shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-extrabold text-white mb-2">Still Have Questions?</h3>
            <p className="text-blue-200 text-sm mb-7">
              Our admissions team is happy to help. Reach out to us directly and we'll get back to you promptly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+919949135613"
                className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#ea6c0a] text-white px-5 py-3 rounded-xl font-bold text-sm transition-colors shadow"
              >
                <Phone size={15} /> +91 99491 35613
              </a>
              <a
                href="mailto:sadhanaemupschool@gmail.com"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 py-3 rounded-xl font-bold text-sm transition-colors"
              >
                <Mail size={15} /> sadhanaemupschool@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
