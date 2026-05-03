import { useState } from 'react'
import PageWrapper from '../layouts/PageWrapper'
import SectionTitle from '../components/SectionTitle'
import ImageGrid from '../components/ImageGrid'
import schoolData from '../data/schoolData.json'

const categories = ['All', ...new Set(schoolData.gallery.map(img => img.category))]

export default function Gallery() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? schoolData.gallery
    : schoolData.gallery.filter(img => img.category === active)

  return (
    <PageWrapper title="Gallery" subtitle="Glimpses of school life, events, facilities and achievements">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Photo Gallery"
            title="Life at Sadhana School"
            subtitle="Explore our campus, events, and student activities through our photo gallery."
          />

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  active === cat
                    ? 'bg-[#0B3C6D] text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-[#0B3C6D]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <ImageGrid images={filtered} columns={3} />
        </div>
      </section>
    </PageWrapper>
  )
}
