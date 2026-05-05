import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import PageWrapper from '../layouts/PageWrapper'
import SectionTitle from '../components/SectionTitle'

const contactInfo = [
  { icon: MapPin, label: 'Address', value: 'Etikoppaka Village Yelamanchili Md Anakapalli Dt - Pin: 531082 - Andhra Pradesh', href: null },
  {
    icon: Phone,
    label: 'Phone',
    phones: [
      { value: '+91 99491 35613', href: 'tel:+919949135613' },
      { value: '+91 93932 14811', href: 'tel:+919393214811' },
      { value: '+91 98493 91614', href: 'tel:+919849391614' },
    ],
  },
  { icon: Mail, label: 'Email', value: 'sadhanaemupschool@gmail.com', href: 'mailto:sadhanaemupschool@gmail.com' },
  { icon: Clock, label: 'Office Hours', value: 'Mon–Fri: 8 AM – 5 PM | Sat: 8 AM – 1 PM', href: null },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <PageWrapper title="Contact Us" subtitle="We'd love to hear from you. Reach out with any questions.">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <SectionTitle badge="Get In Touch" title="We're Here to Help" align="left" />
              <p className="text-gray-500 leading-relaxed mb-8">
                Whether you have questions about admissions, academics, or general enquiries, our team is ready to assist you. Visit us, call us, or send us a message.
              </p>

              <div className="flex flex-col gap-5 mb-8">
                {contactInfo.map(({ icon: Icon, label, value, href, phones }) => (
                  <motion.div
                    key={label}
                    className="flex items-start gap-4 p-4 bg-[#F9FAFB] rounded-xl border border-gray-100"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-10 h-10 bg-[#0B3C6D] rounded-lg flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{label}</p>
                      {phones
                        ? <div className="flex flex-col gap-1">
                            {phones.map(p => (
                              <a key={p.href} href={p.href} className="text-[#0B3C6D] font-medium text-sm hover:text-[#F97316] transition-colors">
                                {p.value}
                              </a>
                            ))}
                          </div>
                        : href
                          ? <a href={href} className="text-[#0B3C6D] font-medium text-sm hover:text-[#F97316] transition-colors">{value}</a>
                          : <p className="text-[#0B3C6D] font-medium text-sm">{value}</p>
                      }
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>

            {/* Form */}
            <motion.div
              className="bg-[#F9FAFB] rounded-2xl p-8 shadow-sm border border-gray-100"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B3C6D] mb-2">Message Sent!</h3>
                  <p className="text-gray-500 text-sm">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }) }}
                    className="mt-6 text-[#F97316] font-semibold text-sm hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-[#0B3C6D] mb-6">Send Us a Message</h3>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 mb-1.5">Full Name *</label>
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-[#0B3C6D] focus:ring-2 focus:ring-blue-100 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 mb-1.5">Phone Number</label>
                        <input
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-[#0B3C6D] focus:ring-2 focus:ring-blue-100 transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5">Email Address *</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-[#0B3C6D] focus:ring-2 focus:ring-blue-100 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5">Subject *</label>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-[#0B3C6D] focus:ring-2 focus:ring-blue-100 transition-all"
                      >
                        <option value="">Select subject</option>
                        <option>Admission Enquiry</option>
                        <option>Fee Structure</option>
                        <option>Academics</option>
                        <option>Transport</option>
                        <option>General Enquiry</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5">Message *</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        placeholder="Write your message here..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-[#0B3C6D] focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex items-center justify-center gap-2 bg-[#0B3C6D] hover:bg-[#082d52] disabled:opacity-70 text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-colors shadow-md"
                    >
                      {loading ? (
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <><Send size={16} /> Send Message</>
                      )}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Google Maps ──────────────────────────────────────────────── */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Section header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#0B3C6D] rounded-xl flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-white" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest">Location</p>
                <h2 className="text-xl font-extrabold text-[#0B3C6D] leading-tight">How to Reach Us</h2>
              </div>
              <a
                href="https://maps.google.com/?q=Sadhana+English+Medium+School+Etikoppaka"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto inline-flex items-center gap-2 text-xs font-semibold text-[#0B3C6D] hover:text-[#F97316] transition-colors"
              >
                Open in Google Maps ↗
              </a>
            </div>

            {/* Map iframe */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100" style={{ height: '450px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.379592799764!2d82.7389447784064!3d17.489384057119505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39a2d7dbff5093%3A0xfc145658f7452548!2sSadhana%20English%20Medium%20School%20Etikoppaka!5e0!3m2!1sen!2sin!4v1777831437594!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sadhana English Medium School – Etikoppaka"
              />
            </div>

            {/* Address strip below map */}
            <div className="mt-4 flex flex-wrap items-center gap-4 px-1">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <MapPin size={14} className="text-[#F97316] shrink-0" />
                Etikoppaka Village, Yelamanchili Md, Anakapalli Dt – AP 531082
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Phone size={14} className="text-[#F97316] shrink-0" />
                <a href="tel:+919949135613" className="hover:text-[#0B3C6D] transition-colors">+91 99491 35613</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
