import { useState, useEffect, useCallback, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn, ArrowLeft, FolderOpen, Images } from 'lucide-react'
import PageWrapper from '../layouts/PageWrapper'
import schoolData from '../data/schoolData.json'

const CATEGORIES = ['All', 'Academics', 'Sports', 'Facilities', 'Achievements', 'Events']

const CATEGORY_COLORS = {
  Academics: 'bg-blue-100 text-blue-700',
  Sports:    'bg-green-100 text-green-700',
  Facilities:'bg-purple-100 text-purple-700',
  Awards:    'bg-yellow-100 text-yellow-700',
  Events:    'bg-orange-100 text-orange-700',
}

export default function Gallery() {
  const location = useLocation()
  const [activeCategory, setActiveCategory] = useState('All')
  const [openAlbum, setOpenAlbum] = useState(null)
  const [lightbox, setLightbox] = useState(null) // { images, index }
  const thumbStripRef = useRef(null)
  const sectionRef = useRef(null)

  const scrollToSection = () =>
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  // Auto-open an album when navigated here with state (e.g. from home page carousel)
  useEffect(() => {
    const id = location.state?.openAlbumId
    if (!id) return
    const album = schoolData.gallery.find(a => a.id === id)
    if (album) setOpenAlbum(album)
  }, [location.state?.openAlbumId])

  const handleOpenAlbum = (album) => {
    scrollToSection()
    setTimeout(() => setOpenAlbum(album), 320)
  }

  const handleCloseAlbum = () => {
    scrollToSection()
    setTimeout(() => setOpenAlbum(null), 320)
  }

  const filteredAlbums = activeCategory === 'All'
    ? schoolData.gallery
    : schoolData.gallery.filter(a => a.category === activeCategory)

  const openLightbox = useCallback((images, index) => {
    setLightbox({ images, index })
  }, [])

  const closeLightbox = useCallback(() => setLightbox(null), [])

  const navigate = useCallback((dir) => {
    setLightbox(prev => {
      if (!prev) return null
      const next = (prev.index + dir + prev.images.length) % prev.images.length
      return { ...prev, index: next }
    })
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (!lightbox) return
      if (e.key === 'ArrowRight') navigate(1)
      else if (e.key === 'ArrowLeft') navigate(-1)
      else if (e.key === 'Escape') closeLightbox()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox, navigate, closeLightbox])

  // Scroll active thumbnail into view
  useEffect(() => {
    if (!lightbox || !thumbStripRef.current) return
    const active = thumbStripRef.current.querySelector('[data-active="true"]')
    if (active) active.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [lightbox?.index])

  // Touch / swipe support
  const touchStartX = useRef(null)
  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) navigate(diff > 0 ? 1 : -1)
    touchStartX.current = null
  }

  // Lock body scroll while lightbox is open
  useEffect(() => {
    document.body.classList.toggle('menu-open', !!lightbox)
    return () => document.body.classList.remove('menu-open')
  }, [lightbox])

  const currentImage = lightbox ? lightbox.images[lightbox.index] : null

  return (
    <PageWrapper title="Life at Sadhana School" subtitle="Explore our albums of school life, events, and achievements" breadcrumb="Gallery">
      {/* ── Sticky filter bar — only shown on album grid view ──── */}
      {openAlbum === null && (
        <div className="sticky top-[60px] sm:top-[68px] z-20 bg-[#F9FAFB]/95 backdrop-blur-md border-b border-gray-200/70 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center gap-3">
              {/* Pills — scrollable on mobile, wrapping on sm+ */}
              <div className="flex gap-2 overflow-x-auto scrollbar-hide snap-x flex-1 sm:flex-wrap sm:overflow-visible">
                {CATEGORIES.map(cat => {
                  const count = cat === 'All'
                    ? schoolData.gallery.length
                    : schoolData.gallery.filter(a => a.category === cat).length
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`shrink-0 snap-start px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                        activeCategory === cat
                          ? 'bg-[#0B3C6D] text-white shadow-md'
                          : 'bg-white text-gray-600 border border-gray-200 hover:border-[#0B3C6D] hover:text-[#0B3C6D]'
                      }`}
                    >
                      {cat}
                      <span className={`ml-1 ${activeCategory === cat ? 'text-white/60' : 'text-gray-400'}`}>
                        {count}
                      </span>
                    </button>
                  )
                })}
              </div>
              {/* Results count */}
              <span className="hidden sm:block shrink-0 text-xs text-gray-400 font-medium">
                {filteredAlbums.length} {filteredAlbums.length === 1 ? 'album' : 'albums'}
              </span>
            </div>
          </div>
        </div>
      )}

      <section ref={sectionRef} className="py-8 sm:py-10 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <AnimatePresence mode="wait">
            {openAlbum === null ? (

              /* ── Album Grid View ─────────────────────────────────── */
              <motion.div
                key="album-grid"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.25 }}
              >

                {/* Album cards */}
                <motion.div
                  key={activeCategory}
                  className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {filteredAlbums.map((album, i) => (
                    <motion.div
                      key={album.id}
                      className="group cursor-pointer rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 active:scale-[0.97] sm:active:scale-100 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.06 }}
                      onClick={() => handleOpenAlbum(album)}
                    >
                      {/* Cover image — portrait on mobile, landscape on sm+ */}
                      <div className="relative aspect-[3/4] sm:aspect-[4/3] overflow-hidden">
                        <img
                          src={album.cover}
                          alt={album.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Persistent bottom gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-[#0B3C6D]/0 group-hover:bg-[#0B3C6D]/45 transition-all duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 text-white text-center">
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-2 border border-white/30">
                              <FolderOpen size={22} className="drop-shadow-lg" />
                            </div>
                            <span className="text-xs font-bold drop-shadow">Open Album</span>
                          </div>
                        </div>

                        {/* Category badge */}
                        <div className="absolute top-2.5 left-2.5">
                          <span className={`text-[10px] sm:text-xs font-bold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full ${CATEGORY_COLORS[album.category] || 'bg-gray-100 text-gray-700'}`}>
                            {album.category}
                          </span>
                        </div>
                        {/* Photo count */}
                        <div className="absolute top-2.5 right-2.5">
                          <span className="bg-black/55 backdrop-blur-sm text-white text-[10px] sm:text-xs font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full flex items-center gap-1">
                            <Images size={10} />
                            {album.images.length}
                          </span>
                        </div>
                        {/* Title overlay at bottom */}
                        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                          <h3 className="text-white font-bold text-sm sm:text-base leading-tight drop-shadow-md group-hover:text-[#F97316] transition-colors duration-200">
                            {album.title}
                          </h3>
                          <p className="text-white/65 text-[10px] sm:text-xs mt-0.5">{album.images.length} photos</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

            ) : (

              /* ── Album Detail View ───────────────────────────────── */
              <motion.div
                key={`album-${openAlbum.id}`}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ duration: 0.25 }}
              >
                {/* Header row */}
                <div className="mb-6">
                  {/* Top: back button + photo count */}
                  <div className="flex items-center justify-between mb-3">
                    <button
                      onClick={handleCloseAlbum}
                      className="flex items-center gap-2 text-[#0B3C6D] hover:text-[#F97316] font-semibold text-sm transition-colors duration-200 active:scale-95"
                    >
                      <ArrowLeft size={18} />
                      Back to Albums
                    </button>
                    <span className="text-gray-400 text-xs font-medium bg-gray-100 px-2.5 py-1 rounded-full">
                      {openAlbum.images.length} photos
                    </span>
                  </div>
                  {/* Bottom: category badge + title */}
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full shrink-0 ${CATEGORY_COLORS[openAlbum.category] || 'bg-gray-100 text-gray-700'}`}>
                      {openAlbum.category}
                    </span>
                    <h2 className="text-lg sm:text-xl font-bold text-[#0B3C6D] leading-tight">{openAlbum.title}</h2>
                  </div>
                </div>

                {/* Image grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {openAlbum.images.map((image, i) => (
                    <motion.div
                      key={image.id}
                      className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-xl active:scale-[0.97] transition-all duration-300"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.25, delay: i * 0.05 }}
                      onClick={() => openLightbox(openAlbum.images, i)}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-[#0B3C6D]/0 group-hover:bg-[#0B3C6D]/50 transition-all duration-300 flex items-center justify-center">
                        <ZoomIn size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white text-xs font-medium">{image.alt}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── Lightbox ─────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {lightbox && currentImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 shrink-0">
              <div className="flex items-center gap-3">
                {openAlbum && (
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${CATEGORY_COLORS[openAlbum.category] || 'bg-gray-100 text-gray-700'}`}>
                    {openAlbum.title}
                  </span>
                )}
                <span className="text-white/70 text-sm">{currentImage.alt}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-white/50 text-sm tabular-nums">
                  {lightbox.index + 1} / {lightbox.images.length}
                </span>
                <button
                  onClick={closeLightbox}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F97316] flex items-center justify-center text-white transition-colors duration-200"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Main image */}
            <div
              className="flex-1 relative flex items-center justify-center px-14 min-h-0"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <button
                onClick={() => navigate(-1)}
                className="absolute left-2 sm:left-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-[#F97316] flex items-center justify-center text-white transition-colors duration-200 z-10"
                aria-label="Previous"
              >
                <ChevronLeft size={24} />
              </button>

              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage.id}
                  src={currentImage.src}
                  alt={currentImage.alt}
                  className="max-h-full max-w-full object-contain rounded-xl select-none"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.22 }}
                  draggable={false}
                />
              </AnimatePresence>

              <button
                onClick={() => navigate(1)}
                className="absolute right-2 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-[#F97316] flex items-center justify-center text-white transition-colors duration-200 z-10"
                aria-label="Next"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Thumbnail strip */}
            <div
              ref={thumbStripRef}
              className="shrink-0 flex gap-2 px-4 py-3 overflow-x-auto scrollbar-hide"
            >
              {lightbox.images.map((img, i) => (
                <button
                  key={img.id}
                  data-active={i === lightbox.index ? 'true' : 'false'}
                  onClick={() => setLightbox(prev => ({ ...prev, index: i }))}
                  className={`shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    i === lightbox.index
                      ? 'border-[#F97316] scale-105 shadow-lg shadow-[#F97316]/30'
                      : 'border-transparent opacity-50 hover:opacity-80'
                  }`}
                  aria-label={img.alt}
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>

            <p className="text-center text-white/30 text-xs pb-2 shrink-0">
              ← → navigate &nbsp;·&nbsp; Esc close &nbsp;·&nbsp; Swipe on mobile
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  )
}
