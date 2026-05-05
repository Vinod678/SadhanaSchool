import { motion } from 'framer-motion'
import { Phone, ArrowRight, FileCheck, MessageCircle, School, FileText, ClipboardCheck, PartyPopper } from 'lucide-react'
import PageWrapper from '../layouts/PageWrapper'

const steps = [
  {
    step: 1,
    icon: MessageCircle,
    title: 'Enquiry Submission',
    desc: 'Contact our admissions office by phone, email, or by visiting the school. Our team will provide details about available classes, fee structure, and school timings.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    step: 2,
    icon: School,
    title: 'School Visit',
    desc: 'Schedule a campus visit to tour our facilities, meet the faculty, and get a first-hand experience of the Sadhana learning environment.',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    step: 3,
    icon: FileText,
    title: 'Application Form',
    desc: 'Collect and fill out the application form from the school office. Ensure all fields are completed accurately and the form is signed by a parent or guardian.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    step: 4,
    icon: ClipboardCheck,
    title: 'Document Verification',
    desc: 'Submit the completed application along with required documents. Our admissions team will verify all submitted documents and inform you of the outcome.',
    color: 'bg-green-50 text-green-600',
  },
  {
    step: 5,
    icon: PartyPopper,
    title: 'Admission Confirmation',
    desc: 'Upon successful verification and fee payment, the student is officially admitted. You will receive a welcome kit with timetables, uniform details, and all necessary information.',
    color: 'bg-amber-50 text-amber-600',
  },
]

const documents = [
  'Birth Certificate (original + photocopy)',
  'Previous Academic Records / Report Card',
  '4 Passport-size Photographs',
  'Transfer Certificate (for students from other schools)',
  'Aadhar Card of student and parent / guardian',
  'Residence Proof (any government-issued ID)',
  'Caste Certificate (if applicable)',
  'Medical / Vaccination Records (for LKG / UKG)',
]

export default function AdmissionProcedure() {
  return (
    <PageWrapper
      title="Admission Procedure"
      subtitle="A simple, transparent process to join the Sadhana family"
    >
      {/* Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-blue-50 text-[#0B3C6D] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
              Step by Step
            </span>
            <h2 className="text-3xl font-extrabold text-[#0B3C6D]">How to Apply</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
              Follow these five simple steps to secure admission for your child at Sadhana English Medium School.
            </p>
          </div>

          <div className="flex flex-col">
            {steps.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={s.step}
                  className="flex gap-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  {/* Timeline indicator */}
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#0B3C6D] text-white font-extrabold text-lg flex items-center justify-center shadow-lg ring-4 ring-blue-100 z-10">
                      {s.step}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-0.5 flex-1 min-h-8 bg-gradient-to-b from-[#0B3C6D] to-blue-100 my-2" />
                    )}
                  </div>

                  {/* Card */}
                  <div className="flex-1 pb-8">
                    <div className="bg-[#F9FAFB] rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${s.color}`}>
                        <Icon size={20} />
                      </div>
                      <h3 className="font-bold text-[#0B3C6D] text-base mb-2">{s.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block bg-orange-50 text-[#F97316] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
              Documents Required
            </span>
            <h2 className="text-3xl font-extrabold text-[#0B3C6D]">What to Bring</h2>
            <p className="text-gray-500 mt-3 text-sm">
              Please carry originals along with one set of photocopies for all documents.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {documents.map((doc, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <FileCheck size={15} className="text-[#0B3C6D]" />
                </div>
                <p className="text-gray-600 text-sm font-medium leading-snug">{doc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#0B3C6D] to-[#1a5fa3]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Ready to Take the First Step?
            </h2>
            <p className="text-blue-200 text-sm mb-8">
              Contact our admissions office or visit us today. Our team is happy to guide you through every step.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+919949135613"
                className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#ea6c0a] text-white px-6 py-3 rounded-xl font-bold text-sm transition-colors shadow-lg"
              >
                <Phone size={15} /> Call +91 99491 35613
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-xl font-bold text-sm transition-colors"
              >
                Send Enquiry <ArrowRight size={15} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
