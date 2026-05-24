import SectionTitle from '../components/SectionTitle'
import FeatureCard from '../components/FeatureCard'
import schoolData from '../data/schoolData.json'

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Why Choose Us"
          title="Building Excellence in Every Student"
          subtitle="We provide an environment where every child can discover their potential and grow into a confident, capable individual."
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {schoolData.features.map((feature, i) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
