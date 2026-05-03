import { motion } from 'framer-motion'
import { useState } from 'react'
import { X, ZoomIn } from 'lucide-react'

export default function ImageGrid({ images, columns = 3 }) {
  const [selected, setSelected] = useState(null)

  const gridCols = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4',
  }[columns] || 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'

  return (
    <>
      <div className={`grid ${gridCols} gap-4`}>
        {images.map((img, i) => (
          <motion.div
            key={img.id || i}
            className="relative overflow-hidden rounded-2xl cursor-pointer group aspect-video"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            onClick={() => setSelected(img)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-[#0B3C6D]/0 group-hover:bg-[#0B3C6D]/50 transition-all duration-300 flex items-center justify-center">
              <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
            </div>
            {img.category && (
              <span className="absolute top-3 left-3 bg-[#F97316] text-white text-xs font-semibold px-3 py-1 rounded-full">
                {img.category}
              </span>
            )}
          </motion.div>
        ))}
      </div>

      {selected && (
        <motion.div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelected(null)}
        >
          <motion.div
            className="relative max-w-4xl w-full"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute -top-12 right-0 text-white hover:text-[#F97316] transition-colors"
              onClick={() => setSelected(null)}
            >
              <X size={32} />
            </button>
            <img src={selected.src} alt={selected.alt} className="w-full rounded-2xl shadow-2xl" />
            {selected.alt && (
              <p className="text-white text-center mt-4 text-sm">{selected.alt}</p>
            )}
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
