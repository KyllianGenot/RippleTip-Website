// src/components/features/FeatureItem.tsx
import type { FeatureInfo } from '../../constants'; // Use index import

interface FeatureItemProps {
  feature: FeatureInfo;
}

const FeatureItem = ({ feature }: FeatureItemProps) => {
  const IconComponent = feature.icon; // Get the icon component type

  return (
    <div className="text-center p-4">
      {IconComponent && ( // Render icon if provided
        <div className="mb-3 inline-flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400">
          <IconComponent className="h-6 w-6" />
        </div>
      )}
      <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">
        {feature.title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        {feature.description}
      </p>
    </div>
  );
};

export default FeatureItem;