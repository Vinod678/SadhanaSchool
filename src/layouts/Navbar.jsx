import { useState, useEffect, useRef } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Phone, Facebook, Instagram, Youtube, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo.png'
import schoolData from '../data/schoolData.json'

const navItems = [
  { label: 'Home', to: '/' },
  {
    label: 'About',
    dropdown: [
      { label: 'Overview', to: '/about', desc: 'Our story, vision & values' },
      { label: "Principal's Message", to: '/principal-message', desc: 'A word from our Principal' },
      { label: 'Faculty', to: '/about#faculty', desc: 'Meet our dedicated teachers' },
      { label: 'Facilities', to: '/facilities', desc: 'Our learning environment' },
    ],
  },
  { label: 'Academics', to: '/academics' },
  { label: 'Achievements', to: '/achievements' },
  {
    label: 'Admissions',
    dropdown: [
      { label: 'Admission Enquiry', to: '/contact', desc: 'Get in touch with us' },
      { label: 'Admission Procedure', to: '/admission-procedure', desc: 'Step-by-step process' },
      { label: 'FAQ', to: '/faq', desc: 'Common questions answered' },
    ],
  },
  // { label: 'Facilities', to: '/facilities' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'News & Events', to: '/news' },
  { label: 'Contact', to: '/contact' },
]

const socialLinks = [
  { Icon: Facebook, href: schoolData.socialLinks.facebook, label: 'Facebook' },
  { Icon: Instagram, href: schoolData.socialLinks.instagram, label: 'Instagram' },
  { Icon: Youtube, href: schoolData.socialLinks.youtube, label: 'YouTube' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const closeTimer = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setMobileExpanded(null)
  }, [location.pathname])

  const handleLogoClick = (e) => {
    e.preventDefault()
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
    }
  }

  const openDropdown = (label) => {
    clearTimeout(closeTimer.current)
    setActiveDropdown(label)
  }

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 150)
  }

  const isDropdownActive = (dropdown) =>
    dropdown.some(item => location.pathname === item.to.split('#')[0])

  const linkBase = 'px-2.5 py-1.5 text-[13px] font-medium rounded-lg transition-colors duration-200 whitespace-nowrap'

  return (
    <>
      {/* Top info bar */}
      <div className="bg-[#0B3C6D] text-white text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="text-blue-200">
            Sadhana English Medium School, Etikoppaka – Nurturing Minds, Building Futures
          </span>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <Phone size={11} />
              <span>+91 99491 35613</span>
            </div>
            <span className="text-white/20">|</span>
            <div className="flex items-center gap-2.5">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-blue-200 hover:text-white transition-colors duration-200"
                >
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white'}`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <a href="/" onClick={handleLogoClick} className="flex items-center gap-3 group shrink-0">
              <img
                src={logo}
                alt="Sadhana School Logo"
                className="w-11 h-11 rounded-full object-cover shadow-md ring-2 ring-[#0B3C6D] group-hover:ring-[#F97316] transition-all duration-300"
              />
              <div className="leading-tight">
                <p className="font-bold text-[#0B3C6D] text-xs sm:text-sm">Sadhana English Medium School</p>
                <p className="text-gray-500 text-xs hidden sm:block">Etikoppaka</p>
              </div>
            </a>

            {/* Desktop nav — xl (1280px+) */}
            <div className="hidden xl:flex items-center gap-0.5">
              {navItems.map(item => {
                if (item.dropdown) {
                  const active = isDropdownActive(item.dropdown)
                  return (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => openDropdown(item.label)}
                      onMouseLeave={scheduleClose}
                    >
                      <button
                        className={`${linkBase} flex items-center gap-1 ${
                          active
                            ? 'text-[#0B3C6D] bg-blue-50 font-semibold'
                            : 'text-gray-600 hover:text-[#0B3C6D] hover:bg-blue-50'
                        }`}
                      >
                        {item.label}
                        <ChevronDown
                          size={13}
                          className={`transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`}
                        />
                      </button>

                      <AnimatePresence>
                        {activeDropdown === item.label && (
                          <motion.div
                            className="absolute top-full left-0 mt-1.5 w-60 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                            initial={{ opacity: 0, y: -6, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -6, scale: 0.97 }}
                            transition={{ duration: 0.15 }}
                            onMouseEnter={() => openDropdown(item.label)}
                            onMouseLeave={scheduleClose}
                          >
                            {item.dropdown.map(sub => (
                              <NavLink
                                key={sub.label}
                                to={sub.to}
                                onClick={() => setActiveDropdown(null)}
                                className="flex flex-col px-4 py-2.5 hover:bg-blue-50 transition-colors group/sub"
                              >
                                <span className={`text-sm font-semibold group-hover/sub:text-[#0B3C6D] transition-colors ${
                                  location.pathname === sub.to.split('#')[0] ? 'text-[#F97316]' : 'text-gray-700'
                                }`}>
                                  {sub.label}
                                </span>
                                <span className="text-xs text-gray-400 mt-0.5">{sub.desc}</span>
                              </NavLink>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }

                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === '/'}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className={({ isActive }) =>
                      `${linkBase} ${isActive ? 'text-[#0B3C6D] bg-blue-50 font-semibold' : 'text-gray-600 hover:text-[#0B3C6D] hover:bg-blue-50'}`
                    }
                  >
                    {item.label}
                  </NavLink>
                )
              })}
            </div>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-2 shrink-0">
              <NavLink
                to="/contact"
                className="hidden md:inline-flex items-center gap-1.5 bg-[#F97316] hover:bg-[#ea6c0a] text-white px-4 py-2 rounded-lg text-xs font-semibold transition-colors duration-200 shadow-sm whitespace-nowrap"
              >
                Admission Enquiry
              </NavLink>
              <button
                className="xl:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
              >
                {open ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile / tablet menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              className="xl:hidden bg-white border-t border-gray-100 shadow-xl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
                {navItems.map(item => {
                  if (item.dropdown) {
                    const isExpanded = mobileExpanded === item.label
                    return (
                      <div key={item.label}>
                        <button
                          onClick={() => setMobileExpanded(isExpanded ? null : item.label)}
                          className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
                        >
                          {item.label}
                          <ChevronDown
                            size={16}
                            className={`transition-transform duration-200 ${isExpanded ? 'rotate-180 text-[#F97316]' : ''}`}
                          />
                        </button>
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 pb-2 flex flex-col gap-0.5">
                                {item.dropdown.map(sub => (
                                  <NavLink
                                    key={sub.label}
                                    to={sub.to}
                                    onClick={() => { setOpen(false); setMobileExpanded(null) }}
                                    className={({ isActive }) =>
                                      `flex flex-col px-4 py-2.5 text-sm rounded-lg transition-colors border-l-2 ml-2 ${
                                        isActive
                                          ? 'border-[#F97316] bg-blue-50 text-[#0B3C6D]'
                                          : 'border-gray-100 text-gray-600 hover:bg-gray-50 hover:border-blue-200'
                                      }`
                                    }
                                  >
                                    <span className="font-medium">{sub.label}</span>
                                    <span className="text-xs text-gray-400 mt-0.5">{sub.desc}</span>
                                  </NavLink>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  }

                  return (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      end={item.to === '/'}
                      onClick={() => { setOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                      className={({ isActive }) =>
                        `px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                          isActive ? 'bg-blue-50 text-[#0B3C6D] font-semibold' : 'text-gray-600 hover:bg-gray-50'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  )
                })}

                <div className="flex items-center gap-3 px-4 pt-2 pb-1 border-t border-gray-100 mt-1">
                  {socialLinks.map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-8 h-8 bg-[#0B3C6D] text-white rounded-lg flex items-center justify-center hover:bg-[#F97316] transition-colors"
                    >
                      <Icon size={14} />
                    </a>
                  ))}
                </div>

                <NavLink
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-1 flex items-center justify-center gap-2 bg-[#F97316] text-white px-4 py-3 rounded-lg text-sm font-semibold"
                >
                  Admission Enquiry
                </NavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
