// src/components/features/HowItWorksSection.tsx
import { HOW_IT_WORKS_STEPS } from '../../constants';
import HowToStepItem from './HowToStepItem';

const HowItWorksSection = () => {
  return (
    <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 md:mb-14 text-gray-900 dark:text-white">
          Get Started in Minutes
        </h2>

        {/* Grid layout for steps - adjust grid-cols if you have a different number of steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {HOW_IT_WORKS_STEPS.map((step) => (
            <HowToStepItem key={step.step} stepInfo={step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;