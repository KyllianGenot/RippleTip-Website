import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../../constants';
import { HowToStepItem } from './HowToStepItem';
import { useTheme } from '../../hooks';

export const HowItWorksSection: React.FC = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <section className="relative py-20 md:pt-28 md:pb-16 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 md:mb-20 text-gray-900 dark:text-white">
          Get Started in Minutes
        </h2>

        <div className="relative">
          <div
            className={`absolute left-1/2 transform -translate-x-1/2 top-4 bottom-24 w-0.5 ${
              isDarkMode ? 'bg-gradient-to-b from-cyan-700 via-blue-600 to-cyan-700' : 'bg-gradient-to-b from-cyan-300 via-blue-400 to-cyan-300'
            } block md:block`}
          />

          <div className="relative mt-16">
            {HOW_IT_WORKS_STEPS.map((step, index) => (
              <HowToStepItem
                key={step.step}
                stepInfo={step}
                index={index}
                isLast={index === HOW_IT_WORKS_STEPS.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};