import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Clock } from 'lucide-react'
import logo from '../assets/logo.png'
import schoolData from '../data/schoolData.json'

const quickLinks = [
  { label: 'Home',         to: '/' },
  { label: 'About',        to: '/about' },
  { label: 'Academics',    to: '/academics' },
  { label: 'Achievements', to: '/achievements' },
  { label: 'Facilities',   to: '/facilities' },
  { label: 'Gallery',      to: '/gallery' },
  { label: 'News & Events',to: '/news' },
  { label: 'Contact',      to: '/contact' },
]

const socials = [
  { Icon: Facebook,  href: schoolData.socialLinks.facebook,  label: 'Facebook' },
  { Icon: Instagram, href: schoolData.socialLinks.instagram, label: 'Instagram' },
  { Icon: Youtube,   href: schoolData.socialLinks.youtube,   label: 'YouTube' },
]

const timings = [
  { day: 'Mon – Fri', time: '8:30 AM – 4:00 PM', open: true },
  { day: 'Saturday',  time: '8:30 AM – 12:30 PM', open: true },
  { day: 'Sunday',    time: 'Closed',              open: false },
]

export default function Footer() {
  return (
    <footer className="bg-[#061e36] text-white">

      {/* Orange top accent */}
      <div className="h-1 bg-gradient-to-r from-[#F97316] via-[#fb923c] to-[#F97316]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* ── Brand ──────────────────────────────────────────────── */}
          <div className="lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="Sadhana School Logo"
                className="w-14 h-14 rounded-full object-cover ring-2 ring-[#F97316]/40 shadow-lg shrink-0"
              />
              <div>
                <p className="font-extrabold text-white text-sm leading-snug">
                  <span className="text-[#F97316]">Sadhana</span> English<br />Medium School
                </p>
                <p className="text-blue-300 text-[11px] mt-0.5">Etikoppaka · Est. 2005</p>
              </div>
            </div>

            <p className="text-blue-200 text-sm leading-relaxed mb-5 max-w-xs">
              A School with a Difference. <br/> Nurturing young minds since 2005 in the heart of Etikoppaka.
            </p>

            {/* Social links */}
            <div className="flex gap-2.5">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 bg-white/10 hover:bg-[#F97316] rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Quick Links ─────────────────────────────────────────── */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-[#F97316] rounded-full" />
              Quick Links
            </h4>
            {/* 2-column grid on mobile, single col on lg */}
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-2.5">
              {quickLinks.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="text-blue-200 hover:text-[#F97316] text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]/50 group-hover:bg-[#F97316] transition-colors shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ─────────────────────────────────────────────── */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-[#F97316] rounded-full" />
              Contact Us
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="https://maps.google.com/?q=Etikoppaka,Anakapalli,AP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                >
                  <MapPin size={15} className="text-[#F97316] mt-0.5 shrink-0" />
                  <span className="text-blue-200 text-xs leading-relaxed group-hover:text-white transition-colors">
                    Etikoppaka, Anakapalli Dist,<br />Andhra Pradesh – 531082
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919949135613"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-[#F97316]/20 transition-colors group"
                >
                  <Phone size={15} className="text-[#F97316] shrink-0" />
                  <span className="text-blue-200 text-sm font-medium group-hover:text-white transition-colors">
                    +91 99491 35613
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:sadhanaemupschool@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-[#F97316]/20 transition-colors group"
                >
                  <Mail size={15} className="text-[#F97316] shrink-0" />
                  <span className="text-blue-200 text-xs group-hover:text-white transition-colors break-all">
                    sadhanaemupschool@gmail.com
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* ── Timings ─────────────────────────────────────────────── */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-[#F97316] rounded-full" />
              School Timings
            </h4>
            <ul className="flex flex-col gap-2.5">
              {timings.map(({ day, time, open }) => (
                <li
                  key={day}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5"
                >
                  <div className="flex items-center gap-2">
                    <Clock size={13} className="text-blue-300/60" />
                    <span className="text-blue-200 text-xs">{day}</span>
                  </div>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                    open
                      ? 'bg-white/8 text-blue-200'
                      : 'bg-white/5 text-white/35'
                  }`}>
                    {time}
                  </span>
                </li>
              ))}
            </ul>

            {/* Mobile CTA */}
            <a
              href="tel:+919949135613"
              className="mt-5 w-full flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#ea6c0a] text-white text-sm font-bold py-3 rounded-xl transition-colors shadow-lg shadow-[#F97316]/20"
            >
              <Phone size={15} /> Call Us Now
            </a>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ───────────────────────────────────────────────── */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-1.5 text-center">
          <p className="text-blue-300 text-xs">
            © {new Date().getFullYear()} Sadhana English Medium School, Etikoppaka. All rights reserved.
          </p>
          <p className="text-blue-400 text-xs">
            Affiliated to AP State Board of Secondary Education
          </p>
        </div>
      </div>

    </footer>
  )
}
