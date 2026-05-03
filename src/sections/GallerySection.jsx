import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FolderOpen, Images } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import schoolData from '../data/schoolData.json'

const CATEGORY_COLORS = {
  Academics:  'bg-blue-100 text-blue-700',
  Sports:     'bg-green-100 text-green-700',
  Facilities: 'bg-purple-100 text-purple-700',
  Events:     'bg-orange-100 text-orange-700',
}

export default function GallerySection() {
  const preview = schoolData.gallery.slice(0, 6)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Gallery"
          title="Life at Sadhana School"
          subtitle="Glimpses of our vibrant campus life — academics, events, sports and more."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {preview.map((album, i) => (
            <motion.div
              key={album.id}
              className="group cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
            >
              <Link to="/gallery">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={album.cover}
                    alt={album.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#0B3C6D]/0 group-hover:bg-[#0B3C6D]/40 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                      <FolderOpen size={28} className="mx-auto mb-1 drop-shadow-lg" />
                      <span className="text-xs font-semibold drop-shadow">View Album</span>
                    </div>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${CATEGORY_COLORS[album.category] || 'bg-gray-100 text-gray-700'}`}>
                      {album.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-black/60 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
                      <Images size={11} />
                      {album.images.length}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-[#0B3C6D] font-bold text-base group-hover:text-[#F97316] transition-colors duration-200 leading-tight">
                    {album.title}
                  </h3>
                  <p className="text-gray-400 text-xs mt-1">{album.images.length} photos</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 bg-[#0B3C6D] text-white px-7 py-3.5 rounded-xl font-bold hover:bg-[#082d52] transition-colors shadow-md"
          >
            View All Albums
          </Link>
        </div>
      </div>
    </section>
  )
}
