import { useRef, useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FolderOpen, Images, ArrowRight, ChevronRight, LayoutGrid } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import schoolData from '../data/schoolData.json'

const CATEGORY_COLORS = {
  Academics:  'bg-blue-100 text-blue-700',
  Sports:     'bg-green-100 text-green-700',
  Facilities: 'bg-purple-100 text-purple-700',
  Events:     'bg-orange-100 text-orange-700',
}

const preview     = schoolData.gallery.slice(0, 6)
const totalPhotos = schoolData.gallery.reduce((sum, a) => sum + a.images.length, 0)
const TOTAL_CARDS = preview.length + 1

/* ── Shared overlay content used in tablet + desktop cards ────── */
function AlbumCardInner({ album, featured = false }) {
  return (
    <>
      <img
        src={album.cover} alt={album.title} loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-[#0B3C6D]/0 group-hover:bg-[#0B3C6D]/50 transition-all duration-300 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 text-white text-center">
          <div className="w-13 h-13 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-2 border border-white/30 p-3">
            <FolderOpen size={22} className="drop-shadow-lg" />
          </div>
          <span className="text-xs font-bold drop-shadow">View Album</span>
        </div>
      </div>

      {/* Category badge */}
      <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full ${CATEGORY_COLORS[album.category] || 'bg-gray-100 text-gray-700'}`}>
        {album.category}
      </span>

      {/* Photo count */}
      <span className="absolute top-3 right-3 bg-black/55 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
        <Images size={11} /> {album.images.length}
      </span>

      {/* Title */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className={`text-white font-bold leading-tight drop-shadow-md group-hover:text-[#F97316] transition-colors duration-200 ${featured ? 'text-xl lg:text-2xl' : 'text-sm lg:text-base'}`}>
          {album.title}
        </h3>
        <p className="text-white/60 text-xs mt-0.5">{album.images.length} photos</p>
      </div>
    </>
  )
}

export default function GallerySection() {
  const scrollRef   = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = el.firstElementChild?.offsetWidth ?? 0
    const index = Math.min(Math.round(el.scrollLeft / (cardWidth + 12)), TOTAL_CARDS - 1)
    setActiveIndex(index)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', handleScroll, { passive: true })
    return () => el.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #EEF5FF 0%, #F9FAFB 55%, #FFF5EE 100%)',
        overflowX: 'clip',
      }}
    >
      {/* Soft colour-wash glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F97316]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0B3C6D]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionTitle
          badge="Gallery"
          title="Life at Sadhana School"
          subtitle="Glimpses of our vibrant campus life — academics, events, sports and more."
        />

        {/* ════════════════════════════════════════════════════
            MOBILE  (<sm) — horizontal snap carousel
        ════════════════════════════════════════════════════ */}
        <div className="sm:hidden">

          {/* Stats + inline link */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold text-gray-500 bg-white px-2.5 py-1 rounded-full border border-gray-200">
                {schoolData.gallery.length} Albums
              </span>
              <span className="text-[11px] font-semibold text-gray-500 bg-white px-2.5 py-1 rounded-full border border-gray-200">
                {totalPhotos} Photos
              </span>
            </div>
            <Link to="/gallery" className="text-xs text-[#F97316] font-bold flex items-center gap-0.5 hover:text-orange-500 transition-colors">
              View all <ChevronRight size={13} />
            </Link>
          </div>

          {/* Scroll strip */}
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 pb-3"
          >
            {preview.map((album) => (
              <Link
                key={album.id}
                to="/gallery"
                state={{ openAlbumId: album.id }}
                className="shrink-0 w-[62vw] max-w-[240px] snap-center rounded-2xl overflow-hidden shadow-lg shadow-black/30 active:scale-[0.97] transition-transform duration-150"
              >
                <div className="relative aspect-[3/4]">
                  <img src={album.cover} alt={album.title} loading="lazy" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <span className={`absolute top-2.5 left-2.5 text-[10px] font-bold px-2 py-0.5 rounded-full ${CATEGORY_COLORS[album.category] || 'bg-gray-100 text-gray-700'}`}>
                    {album.category}
                  </span>
                  <span className="absolute top-2.5 right-2.5 bg-black/50 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Images size={9} /> {album.images.length}
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 className="text-white font-bold text-sm leading-tight line-clamp-2">{album.title}</h3>
                    <p className="text-white/55 text-[11px] mt-0.5">{album.images.length} photos</p>
                  </div>
                </div>
              </Link>
            ))}

            {/* "View All" end card */}
            <Link
              to="/gallery"
              className="shrink-0 w-[62vw] max-w-[240px] snap-center rounded-2xl overflow-hidden active:scale-[0.97] transition-transform duration-150"
              style={{ aspectRatio: '3/4' }}
            >
              <div className="w-full h-full bg-gradient-to-br from-[#F97316] to-[#c2550d] flex flex-col items-center justify-center gap-4 p-6">
                <div className="w-14 h-14 bg-white/20 border border-white/25 rounded-2xl flex items-center justify-center">
                  <LayoutGrid size={26} className="text-white" />
                </div>
                <div className="text-center">
                  <p className="text-white font-extrabold text-base leading-tight">View All<br />Albums</p>
                  <p className="text-white/70 text-xs mt-1">{schoolData.gallery.length} albums · {totalPhotos} photos</p>
                </div>
                <div className="flex items-center gap-1.5 bg-white/20 text-white text-xs font-bold px-4 py-2 rounded-xl border border-white/20">
                  Explore <ArrowRight size={12} />
                </div>
              </div>
            </Link>
          </div>

          {/* Scroll progress dots */}
          <div className="flex items-center justify-center gap-1.5 mt-3">
            {Array.from({ length: TOTAL_CARDS }).map((_, i) => (
              <div
                key={i}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'w-5 bg-[#0B3C6D]' : 'w-1.5 bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="mt-6 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 bg-[#0B3C6D] hover:bg-[#082d52] active:bg-[#061e36] text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-md active:scale-[0.98] transition-all"
            >
              <LayoutGrid size={15} /> Browse All Albums
            </Link>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════
            TABLET  (sm–lg) — 2-column grid
        ════════════════════════════════════════════════════ */}
        <div className="hidden sm:grid lg:hidden grid-cols-2 gap-4">
          {preview.map((album, i) => (
            <motion.div
              key={album.id}
              className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
            >
              <Link to="/gallery" state={{ openAlbumId: album.id }} className="group relative block h-full">
                <AlbumCardInner album={album} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ════════════════════════════════════════════════════
            DESKTOP  (lg+) — mosaic layout
        ════════════════════════════════════════════════════ */}
        <div className="hidden lg:block">

          {/* Top: featured (2/3) + 2 stacked (1/3) */}
          <div className="flex gap-5 mb-5 items-stretch">
            <motion.div
              className="flex-[2] aspect-[16/10] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <Link to="/gallery" state={{ openAlbumId: preview[0].id }} className="group relative block h-full">
                <AlbumCardInner album={preview[0]} featured />
              </Link>
            </motion.div>

            <div className="flex-1 flex flex-col gap-5">
              {preview.slice(1, 3).map((album, i) => (
                <motion.div
                  key={album.id}
                  className="flex-1 min-h-0 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: (i + 1) * 0.1 }}
                >
                  <Link to="/gallery" state={{ openAlbumId: album.id }} className="group relative block h-full">
                    <AlbumCardInner album={album} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom: 3 equal cards */}
          <div className="grid grid-cols-3 gap-5">
            {preview.slice(3).map((album, i) => (
              <motion.div
                key={album.id}
                className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link to="/gallery" state={{ openAlbumId: album.id }} className="group relative block h-full">
                  <AlbumCardInner album={album} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── CTA (tablet + desktop) ───────────────────────────── */}
        <div className="hidden sm:flex justify-center mt-10">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2.5 bg-[#0B3C6D] hover:bg-[#082d52] text-white px-8 py-4 rounded-xl font-bold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            <LayoutGrid size={16} /> View All Albums
            <ArrowRight size={15} />
          </Link>
        </div>

      </div>
    </section>
  )
}
