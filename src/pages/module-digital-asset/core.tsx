import SectionTitle from '@/components/SectionTitle.tsx';

function CoreFeatures({ features, title }: {
  features: Array<{ icon: string, title: string, description: string }>
  title: string
}) {
  return (
    <div className="mx-auto w-[80vw] bg-white py-20">
      <SectionTitle
        title={title}
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl bg-white p-8 text-center shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="mb-6 flex justify-center rounded-full">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-[50px] object-cover"
              />
            </div>
            <h3 className="mb-4 text-lg text-gray-900 font-semibold leading-snug">
              {feature.title}
            </h3>
            <p className="m-0 text-sm text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoreFeatures;
