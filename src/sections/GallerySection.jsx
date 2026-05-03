import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import ImageGrid from '../components/ImageGrid'
import schoolData from '../data/schoolData.json'

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

        <ImageGrid images={preview} columns={3} />

        <div className="text-center mt-10">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 bg-[#0B3C6D] text-white px-7 py-3.5 rounded-xl font-bold hover:bg-[#082d52] transition-colors shadow-md"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  )
}
