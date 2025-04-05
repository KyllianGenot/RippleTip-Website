// src/components/features/FeaturesSection.tsx
import { FEATURES_LIST } from '../../constants';
import FeatureItem from './FeatureItem';

const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 md:mb-14 text-gray-900 dark:text-white">
          Why Choose RippleTip?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {FEATURES_LIST.map((feature) => (
            <FeatureItem key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;