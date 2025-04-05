// src/components/features/CommandCard.tsx
import type { BotCommand } from '../../types'; // Use index import if created

interface CommandCardProps {
  command: BotCommand;
}

const CommandCard = ({ command }: CommandCardProps) => {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white dark:bg-gray-800">
      <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-1">
        /{command.name} {/* Display with slash prefix */}
      </h3>
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
        {command.description}
      </p>
      {command.usage && (
        <p className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 rounded px-2 py-1 inline-block">
          Usage: <code className="font-mono">{command.usage}</code>
        </p>
      )}
       <span className="text-xs font-medium mt-3 inline-block bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 px-2 py-0.5 rounded-full">
          {command.category}
      </span>
    </div>
  );
};

export default CommandCard;