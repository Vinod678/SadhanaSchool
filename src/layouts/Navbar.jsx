import { useState, useEffect, useRef } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import {
  Menu, X, Phone, Facebook, Instagram, Youtube, ChevronDown,
  Home, Info, BookOpen, Trophy, ClipboardList, Image, Newspaper, PhoneCall, ChevronRight,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo.png'
import schoolData from '../data/schoolData.json'

const navItems = [
  { label: 'Home',        to: '/',             icon: Home },
  {
    label: 'About',
    icon: Info,
    dropdown: [
      { label: 'Overview',            to: '/about',              desc: 'Our story, vision & values' },
      { label: "Principal's Message", to: '/principal-message',  desc: 'A word from our Principal' },
      { label: 'Faculty',             to: '/about#faculty',      desc: 'Meet our dedicated teachers' },
      { label: 'Facilities',          to: '/facilities',         desc: 'Our learning environment' },
    ],
  },
  { label: 'Academics',   to: '/academics',    icon: BookOpen },
  { label: 'Achievements',to: '/achievements', icon: Trophy },
  {
    label: 'Admissions',
    icon: ClipboardList,
    dropdown: [
      { label: 'Admission Enquiry',   to: '/contact',             desc: 'Get in touch with us' },
      { label: 'Admission Procedure', to: '/admission-procedure', desc: 'Step-by-step process' },
      { label: 'FAQ',                 to: '/faq',                 desc: 'Common questions answered' },
    ],
  },
  { label: 'Gallery',     to: '/gallery',      icon: Image },
  { label: 'News & Events',to: '/news',        icon: Newspaper },
  { label: 'Contact',     to: '/contact',      icon: PhoneCall },
]

const socialLinks = [
  { Icon: Facebook,  href: schoolData.socialLinks.facebook,  label: 'Facebook'  },
  { Icon: Instagram, href: schoolData.socialLinks.instagram, label: 'Instagram' },
  { Icon: Youtube,   href: schoolData.socialLinks.youtube,   label: 'YouTube'   },
]

export default function Navbar() {
  const [open, setOpen]                   = useState(false)
  const [scrolled, setScrolled]           = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const closeTimer = useRef(null)
  const location   = useLocation()
  const navigate   = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setMobileExpanded(null)
  }, [location.pathname])

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => () => clearTimeout(closeTimer.current), [])

  const handleLogoClick = (e) => {
    e.preventDefault()
    if (location.pathname === '/') window.scrollTo({ top: 0, behavior: 'smooth' })
    else navigate('/')
  }

  const openDropdown  = (label) => { clearTimeout(closeTimer.current); setActiveDropdown(label) }
  const scheduleClose = () => { closeTimer.current = setTimeout(() => setActiveDropdown(null), 150) }

  const isDropdownActive = (dropdown) =>
    dropdown.some(item => location.pathname === item.to.split('#')[0])

  const linkBase = 'px-2.5 py-1.5 text-[13px] font-medium rounded-lg transition-colors duration-200 whitespace-nowrap'

  return (
    <>
      {/* Top info bar — desktop only */}
      <div className="bg-[#0B3C6D] text-white text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="text-blue-200">
            Sadhana English Medium School, Etikoppaka — A School with a Difference
          </span>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <Phone size={11} />
              <span>+91 99491 35613</span>
            </div>
            <span className="text-white/20">|</span>
            <div className="flex items-center gap-2.5">
              {socialLinks.map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={label} className="text-blue-200 hover:text-white transition-colors duration-200">
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <header className={`sticky top-0 z-40 w-full bg-white transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <a href="/" onClick={handleLogoClick} className="flex items-center gap-3 group shrink-0">
              <img src={logo} alt="Sadhana School Logo"
                className="w-12 h-12 rounded-full object-cover shadow-md ring-2 ring-[#0B3C6D] group-hover:ring-[#F97316] transition-all duration-300" />
              <div className="leading-tight">
                <p className="font-extrabold text-[#0B3C6D] text-sm sm:text-base leading-none">
                  <span className="text-[#F97316]">Sadhana</span> English Medium School
                </p>
                <p className="text-gray-400 text-[11px] font-medium mt-0.5 tracking-wide">Etikoppaka · Est. 2005</p>
              </div>
            </a>

            {/* Desktop nav */}
            <div className="hidden xl:flex flex-1 justify-center items-center gap-0.5 pl-16 pr-2">
              {navItems.map(item => {
                if (item.dropdown) {
                  const active = isDropdownActive(item.dropdown)
                  return (
                    <div key={item.label} className="relative"
                      onMouseEnter={() => openDropdown(item.label)}
                      onMouseLeave={scheduleClose}>
                      <button className={`${linkBase} flex items-center gap-1 ${active ? 'text-[#0B3C6D] bg-blue-50 font-semibold' : 'text-gray-600 hover:text-[#0B3C6D] hover:bg-blue-50'}`}>
                        {item.label}
                        <ChevronDown size={13} className={`transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
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
                              <NavLink key={sub.label} to={sub.to}
                                onClick={() => setActiveDropdown(null)}
                                className="flex flex-col px-4 py-2.5 hover:bg-blue-50 transition-colors group/sub">
                                <span className={`text-sm font-semibold group-hover/sub:text-[#0B3C6D] transition-colors ${location.pathname === sub.to.split('#')[0] ? 'text-[#F97316]' : 'text-gray-700'}`}>
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
                  <NavLink key={item.to} to={item.to} end={item.to === '/'}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className={({ isActive }) => `${linkBase} ${isActive ? 'text-[#0B3C6D] bg-blue-50 font-semibold' : 'text-gray-600 hover:text-[#0B3C6D] hover:bg-blue-50'}`}>
                    {item.label}
                  </NavLink>
                )
              })}
            </div>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-2 shrink-0">
              <NavLink to="/contact"
                className="hidden md:inline-flex items-center gap-1.5 bg-[#F97316] hover:bg-[#ea6c0a] text-white px-4 py-2 rounded-lg text-xs font-semibold transition-colors duration-200 shadow-sm whitespace-nowrap">
                Admission Enquiry
              </NavLink>
              <button
                className="xl:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-[#0B3C6D] text-white hover:bg-[#F97316] transition-colors duration-200 shadow-sm"
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* ── Mobile drawer ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="xl:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={() => setOpen(false)}
            />

            {/* Drawer panel */}
            <motion.div
              className="xl:hidden fixed top-0 right-0 h-full w-[82vw] max-w-[320px] z-50 flex flex-col bg-gradient-to-b from-[#061e36] via-[#0B3C6D] to-[#0d4a87] shadow-2xl overflow-hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
            >
              {/* Decorative blob */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#F97316]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-20 left-0 w-32 h-32 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-white/10 shrink-0">
                <div className="flex items-center gap-3">
                  <img src={logo} alt="Sadhana School Logo"
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-[#F97316]/60 shadow-md" />
                  <div>
                    <p className="font-extrabold text-white text-sm leading-none">
                      <span className="text-[#F97316]">Sadhana</span> School
                    </p>
                    <p className="text-blue-300 text-[10px] mt-0.5">Etikoppaka · Est. 2005</p>
                  </div>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                  aria-label="Close menu"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Nav items */}
              <div className="flex-1 overflow-y-auto px-3 py-3">
                {navItems.map((item, idx) => {
                  const NavIcon = item.icon
                  if (item.dropdown) {
                    const isExpanded = mobileExpanded === item.label
                    const active     = isDropdownActive(item.dropdown)
                    return (
                      <div key={item.label}>
                        <button
                          onClick={() => setMobileExpanded(isExpanded ? null : item.label)}
                          className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-semibold transition-all duration-200 mb-0.5 ${
                            active || isExpanded
                              ? 'bg-white/15 text-white'
                              : 'text-white/70 hover:bg-white/10 hover:text-white'
                          }`}
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${active || isExpanded ? 'bg-[#F97316]' : 'bg-white/10'}`}>
                            <NavIcon size={15} />
                          </div>
                          <span className="flex-1 text-left">{item.label}</span>
                          <ChevronDown size={14} className={`transition-transform duration-200 opacity-60 ${isExpanded ? 'rotate-180 text-[#F97316] opacity-100' : ''}`} />
                        </button>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.18 }}
                              className="overflow-hidden"
                            >
                              <div className="ml-11 mb-1 flex flex-col gap-0.5">
                                {item.dropdown.map(sub => (
                                  <NavLink
                                    key={sub.label}
                                    to={sub.to}
                                    onClick={() => { setOpen(false); setMobileExpanded(null) }}
                                    className={({ isActive }) =>
                                      `flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-colors ${
                                        isActive
                                          ? 'bg-[#F97316]/20 text-[#F97316]'
                                          : 'text-white/55 hover:bg-white/10 hover:text-white'
                                      }`
                                    }
                                  >
                                    <span>{sub.label}</span>
                                    <ChevronRight size={11} className="opacity-40 shrink-0" />
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
                        `flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-semibold transition-all duration-200 mb-0.5 ${
                          isActive
                            ? 'bg-white/15 text-white'
                            : 'text-white/70 hover:bg-white/10 hover:text-white'
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${isActive ? 'bg-[#F97316]' : 'bg-white/10'}`}>
                            <NavIcon size={15} />
                          </div>
                          <span className="flex-1">{item.label}</span>
                          {isActive && <div className="w-1.5 h-1.5 bg-[#F97316] rounded-full shrink-0" />}
                        </>
                      )}
                    </NavLink>
                  )
                })}
              </div>

              {/* Drawer footer */}
              <div className="px-5 pb-6 pt-4 border-t border-white/10 shrink-0 space-y-4">
                {/* Social links */}
                <div className="flex items-center gap-2.5">
                  <span className="text-white/40 text-[10px] font-medium uppercase tracking-widest">Follow us</span>
                  <div className="flex-1 h-px bg-white/10" />
                  {socialLinks.map(({ Icon, href, label }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                      aria-label={label}
                      className="w-8 h-8 bg-white/10 hover:bg-[#F97316] rounded-lg flex items-center justify-center text-white transition-colors duration-200">
                      <Icon size={14} />
                    </a>
                  ))}
                </div>

                {/* CTA */}
                <NavLink
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-[#F97316] hover:bg-[#ea6c0a] text-white py-3.5 rounded-xl text-sm font-bold transition-colors shadow-lg shadow-[#F97316]/25"
                >
                  Enquire About Admission
                </NavLink>

                {/* Phone */}
                <div className="flex items-center justify-center gap-2 text-blue-300/70 text-xs">
                  <Phone size={11} />
                  <span>+91 99491 35613</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
