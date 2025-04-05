// src/components/features/HowToStepItem.tsx
import type { HowToStep } from '../../constants';

interface HowToStepItemProps {
  stepInfo: HowToStep;
}

const HowToStepItem = ({ stepInfo }: HowToStepItemProps) => {
  return (
    <div className="flex items-start space-x-4">
      {/* Step Number Bubble */}
      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-indigo-600 dark:bg-indigo-500 text-white font-bold text-lg">
        {stepInfo.step}
      </div>
      {/* Step Content */}
      <div>
        <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">
          {stepInfo.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {stepInfo.description}
        </p>
      </div>
    </div>
  );
};

export default HowToStepItem;