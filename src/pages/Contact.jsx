import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ExternalLink, Navigation, MessageSquare } from 'lucide-react'
import PageWrapper from '../layouts/PageWrapper'

const phones = [
  { value: '+91 99491 35613', href: 'tel:+919949135613' },
  { value: '+91 93932 14811', href: 'tel:+919393214811' },
  { value: '+91 98493 91614', href: 'tel:+919849391614' },
]

// Consistent field styling — bigger touch target (py-3.5) for mobile
const inputClass = [
  'w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white text-sm',
  'focus:outline-none focus:border-[#0B3C6D] focus:ring-2 focus:ring-blue-100',
  'transition-all placeholder:text-gray-400',
].join(' ')
const labelClass = 'block text-xs font-semibold text-gray-500 mb-1.5'

// Use y-axis animation — x animations look jittery on narrow mobile screens
const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } }

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1500)
  }

  const resetForm = () => {
    setSubmitted(false)
    setForm({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <PageWrapper title="Contact Us" subtitle="We'd love to hear from you. Reach out with any questions.">

      {/* ── Contact Info + Form ─────────────────────────────────────── */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Mobile quick-dial strip — shown above everything on small screens */}
          <div className="grid grid-cols-2 gap-3 mb-8 lg:hidden">
            <a
              href="tel:+919949135613"
              className="flex items-center justify-center gap-2 bg-[#0B3C6D] hover:bg-[#082d52] active:scale-95 text-white text-sm font-bold py-3.5 px-4 rounded-xl transition-all shadow-md"
            >
              <Phone size={15} /> Call Now
            </a>
            <a
              href="mailto:sadhanaemupschool@gmail.com"
              className="flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#ea6c0a] active:scale-95 text-white text-sm font-bold py-3.5 px-4 rounded-xl transition-all shadow-md"
            >
              <Mail size={15} /> Email Us
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

            {/* ── Left: Contact Info ──────────────────────────────── */}
            <motion.div {...fadeUp}>
              <p className="text-[#F97316] text-xs font-bold uppercase tracking-widest mb-2">Get In Touch</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B3C6D] mb-3 leading-tight">
                We're Here to Help
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-md">
                Whether it's admissions, academics, or a general question — our team is happy to assist. Visit us, call us, or drop a message.
              </p>

              {/* Desktop quick-dial buttons */}
              <div className="hidden lg:grid grid-cols-2 gap-3 mb-6">
                <a
                  href="tel:+919949135613"
                  className="flex items-center justify-center gap-2 bg-[#0B3C6D] hover:bg-[#082d52] text-white text-sm font-bold py-3 px-4 rounded-xl transition-colors shadow-md"
                >
                  <Phone size={15} /> Call Now
                </a>
                <a
                  href="mailto:sadhanaemupschool@gmail.com"
                  className="flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#ea6c0a] text-white text-sm font-bold py-3 px-4 rounded-xl transition-colors shadow-md"
                >
                  <Mail size={15} /> Email Us
                </a>
              </div>

              {/* Info cards */}
              <div className="flex flex-col gap-3">

                {/* Address — full card is a tap target */}
                <a
                  href="https://maps.google.com/?q=Sadhana+English+Medium+School+Etikoppaka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-[#F9FAFB] rounded-xl border border-gray-100 hover:border-[#0B3C6D]/25 hover:shadow-md active:scale-[0.99] transition-all group"
                >
                  <div className="w-10 h-10 bg-[#0B3C6D] rounded-lg flex items-center justify-center shrink-0">
                    <MapPin size={17} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={labelClass}>Address</p>
                    <p className="text-[#0B3C6D] font-medium text-sm leading-snug group-hover:text-[#F97316] transition-colors">
                      Etikoppaka Village, Yelamanchili Md,<br />Anakapalli Dt – AP 531082
                    </p>
                    <p className="text-[#F97316] text-xs mt-1.5 font-semibold">Tap to open in Maps →</p>
                  </div>
                </a>

                {/* Phone numbers */}
                <div className="flex items-start gap-4 p-4 bg-[#F9FAFB] rounded-xl border border-gray-100">
                  <div className="w-10 h-10 bg-[#0B3C6D] rounded-lg flex items-center justify-center shrink-0">
                    <Phone size={17} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={labelClass}>Phone</p>
                    <div className="flex flex-col gap-2">
                      {phones.map(p => (
                        <a
                          key={p.href}
                          href={p.href}
                          className="inline-flex items-center gap-2 text-[#0B3C6D] font-semibold text-sm hover:text-[#F97316] active:text-[#F97316] transition-colors py-0.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]/60 shrink-0" />
                          {p.value}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Email — full card is a tap target */}
                <a
                  href="mailto:sadhanaemupschool@gmail.com"
                  className="flex items-center gap-4 p-4 bg-[#F9FAFB] rounded-xl border border-gray-100 hover:border-[#F97316]/30 hover:shadow-md active:scale-[0.99] transition-all group"
                >
                  <div className="w-10 h-10 bg-[#0B3C6D] rounded-lg flex items-center justify-center shrink-0">
                    <Mail size={17} className="text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className={labelClass}>Email</p>
                    <p className="text-[#0B3C6D] font-medium text-sm group-hover:text-[#F97316] transition-colors break-all leading-snug">
                      sadhanaemupschool@gmail.com
                    </p>
                  </div>
                </a>

                {/* Office Hours */}
                <div className="flex items-start gap-4 p-4 bg-[#F9FAFB] rounded-xl border border-gray-100">
                  <div className="w-10 h-10 bg-[#0B3C6D] rounded-lg flex items-center justify-center shrink-0">
                    <Clock size={17} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className={labelClass}>Office Hours</p>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 text-sm">Mon – Fri</span>
                        <span className="text-[#0B3C6D] font-semibold text-sm">8:00 AM – 5:00 PM</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 text-sm">Saturday</span>
                        <span className="text-[#0B3C6D] font-semibold text-sm">8:00 AM – 1:00 PM</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 text-sm">Sunday</span>
                        <span className="text-red-400 font-semibold text-sm">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* ── Right: Form ─────────────────────────────────────── */}
            <motion.div
              className="bg-[#F9FAFB] rounded-2xl p-5 sm:p-8 border border-gray-100 shadow-sm"
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {submitted ? (
                <div className="text-center py-12 sm:py-16">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5"
                  >
                    <CheckCircle size={32} className="text-green-600" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-[#0B3C6D] mb-2">Message Sent!</h3>
                  <p className="text-gray-500 text-sm max-w-xs mx-auto leading-relaxed">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={resetForm}
                    className="mt-6 inline-flex items-center gap-1.5 text-[#F97316] font-semibold text-sm hover:underline"
                  >
                    <MessageSquare size={14} /> Send another message
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-1 h-6 bg-[#F97316] rounded-full" />
                    <h3 className="text-lg font-extrabold text-[#0B3C6D]">Send Us a Message</h3>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {/* Name + Phone side by side on sm+ */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Full Name *</label>
                        <input
                          name="name" value={form.name} onChange={handleChange}
                          required autoComplete="name"
                          placeholder="Your full name"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Phone Number</label>
                        <input
                          name="phone" value={form.phone} onChange={handleChange}
                          inputMode="tel" autoComplete="tel"
                          placeholder="+91 XXXXX XXXXX"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Email Address *</label>
                      <input
                        name="email" type="email" value={form.email} onChange={handleChange}
                        required inputMode="email" autoComplete="email"
                        placeholder="your@email.com"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>Subject *</label>
                      <select
                        name="subject" value={form.subject} onChange={handleChange}
                        required className={inputClass}
                      >
                        <option value="">Select a subject</option>
                        <option>Admission Enquiry</option>
                        <option>Fee Structure</option>
                        <option>Academics</option>
                        <option>Transport</option>
                        <option>General Enquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className={labelClass}>Message *</label>
                      <textarea
                        name="message" value={form.message} onChange={handleChange}
                        required rows={4}
                        placeholder="Write your message here…"
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="flex items-center justify-center gap-2 bg-[#0B3C6D] hover:bg-[#082d52] active:scale-[0.98] disabled:opacity-60 text-white px-6 py-4 rounded-xl font-bold text-sm transition-all shadow-md hover:shadow-lg"
                    >
                      {loading
                        ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        : <><Send size={15} /> Send Message</>
                      }
                    </button>
                  </form>
                </>
              )}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Map ──────────────────────────────────────────────────────── */}
      <section className="pb-12 sm:pb-16 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp}>

            {/* Header bar */}
            <div className="bg-gradient-to-r from-[#0B3C6D] to-[#1a5fa3] rounded-2xl px-5 py-4 mb-4 flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="flex items-center gap-3 flex-1">
                <div className="w-9 h-9 bg-white/15 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={17} className="text-white" />
                </div>
                <div>
                  <p className="text-[#F97316] text-[10px] font-bold uppercase tracking-widest">Location</p>
                  <h2 className="text-white font-extrabold text-base leading-tight">How to Reach Us</h2>
                </div>
              </div>
              <div className="flex gap-2 shrink-0">
                <a
                  href="https://maps.google.com/?q=Sadhana+English+Medium+School+Etikoppaka"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-white/15 hover:bg-white/25 border border-white/20 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors"
                >
                  <ExternalLink size={12} /> Open Maps
                </a>
                <a
                  href="https://maps.google.com/maps/dir/?api=1&destination=Sadhana+English+Medium+School+Etikoppaka"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#F97316] hover:bg-[#ea6c0a] text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors"
                >
                  <Navigation size={12} /> Get Directions
                </a>
              </div>
            </div>

            {/* Map — taller on mobile for better usability */}
            <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100 h-72 sm:h-80 lg:h-[420px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.379592799764!2d82.7389447784064!3d17.489384057119505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39a2d7dbff5093%3A0xfc145658f7452548!2sSadhana%20English%20Medium%20School%20Etikoppaka!5e0!3m2!1sen!2sin!4v1777831437594!5m2!1sen!2sin"
                width="100%" height="100%"
                style={{ border: 0 }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sadhana English Medium School – Etikoppaka"
              />
            </div>

          </motion.div>
        </div>
      </section>

    </PageWrapper>
  )
}
