import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react'
import logo from '../assets/logo.png'
import schoolData from '../data/schoolData.json'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Academics', to: '/academics' },
  { label: 'Facilities', to: '/facilities' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'News & Events', to: '/news' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0B3C6D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="Sadhana School Logo"
                className="w-16 h-16 rounded-full object-cover ring-2 ring-white/30 shadow-lg shrink-0"
              />
              <div>
                <p className="font-bold text-white text-base leading-snug">Sadhana English Medium School</p>
                <p className="text-blue-200 text-xs">Etikoppaka</p>
              </div>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed mb-5">
              Nurturing young minds with quality education, strong values, and a passion for excellence since 2005.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: schoolData.socialLinks.facebook, label: 'Facebook' },
                { Icon: Instagram, href: schoolData.socialLinks.instagram, label: 'Instagram' },
                { Icon: Youtube, href: schoolData.socialLinks.youtube, label: 'YouTube' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 bg-white/10 hover:bg-[#F97316] rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white text-base mb-5 relative after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-0.5 after:bg-[#F97316]">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5 mt-4">
              {quickLinks.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-blue-100 hover:text-[#F97316] text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] opacity-50 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white text-base mb-5 relative after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-0.5 after:bg-[#F97316]">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-4 mt-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#F97316] mt-0.5 shrink-0" />
                <span className="text-blue-100 text-sm leading-relaxed">
                  Etikoppaka,<br />Visakhapatnam Dist., AP – 531082
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#F97316] shrink-0" />
                <a href="tel:+919440000000" className="text-blue-100 hover:text-white text-sm transition-colors">
                  +91 99491 35613
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#F97316] shrink-0" />
                <a href="mailto:sadhanaemupschool@gmail.com" className="text-blue-100 hover:text-white text-sm transition-colors">
                  sadhanaemupschool@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Timings */}
          <div>
            <h4 className="font-bold text-white text-base mb-5 relative after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-0.5 after:bg-[#F97316]">
              School Timings
            </h4>
            <ul className="flex flex-col gap-3 mt-4 text-sm">
              {[
                { day: 'Monday – Friday', time: '8:30 AM – 4:00 PM' },
                { day: 'Saturday', time: '8:30 AM – 12:30 PM' },
                { day: 'Sunday', time: 'Closed' },
              ].map(({ day, time }) => (
                <li key={day} className="flex justify-between text-blue-100 border-b border-white/10 pb-2">
                  <span>{day}</span>
                  <span className="font-medium text-white">{time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-blue-200 text-xs">
            © {new Date().getFullYear()} Sadhana English Medium School, Etikoppaka. All rights reserved.
          </p>
          <p className="text-blue-200 text-xs">
            Affiliated to AP State Board of Secondary Education
          </p>
        </div>
      </div>
    </footer>
  )
}
