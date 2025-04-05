// src/pages/CommandsPage.tsx
import React, { useState, useMemo } from 'react'; // Import useState and useMemo
import { SAMPLE_COMMANDS } from '../constants';
import { CommandCard } from '../components/features';
import type { BotCommand } from '../types';

const CommandsPage = () => {
  // State for the search term
  const [searchTerm, setSearchTerm] = useState('');

  // Filter commands based on search term (case-insensitive)
  // useMemo prevents recalculating on every render unless dependencies change
  const filteredCommands = useMemo(() => {
    if (!searchTerm.trim()) {
      return SAMPLE_COMMANDS; // Return all if search is empty
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return SAMPLE_COMMANDS.filter(command =>
      command.name.toLowerCase().includes(lowerCaseSearchTerm) ||
      command.description.toLowerCase().includes(lowerCaseSearchTerm)
      // Optionally add category filtering:
      // || command.category.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [searchTerm]); // Recalculate only when searchTerm changes

  // Group the FILTERED commands by category
  const groupedCommands = useMemo(() => {
     return filteredCommands.reduce((acc, command) => {
      const category = command.category || 'Uncategorized';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(command);
      return acc;
    }, {} as Record<string, BotCommand[]>);
  }, [filteredCommands]); // Recalculate only when filteredCommands changes

  // Get sorted category names from the grouped filtered commands
  const sortedCategories = useMemo(() => Object.keys(groupedCommands).sort(), [groupedCommands]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container mx-auto px-4 py-8 pt-20 md:pt-24">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
        Bot Commands
      </h1>

      {/* Search Input Field */}
      <div className="mb-8 max-w-md mx-auto">
        <label htmlFor="command-search" className="sr-only">Search commands</label>
        <input
          type="search"
          id="command-search"
          placeholder="Search by name or description..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
        />
      </div>

      {/* Conditional Rendering based on search results */}
      {filteredCommands.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-400">
          No commands found matching "{searchTerm}".
        </p>
      ) : (
        <div className="space-y-10">
          {sortedCategories.map((category) => (
            // Only render category if it has commands after filtering
            groupedCommands[category]?.length > 0 && (
              <section key={category} aria-labelledby={`category-${category}`}>
                <h2
                  id={`category-${category}`}
                  className="text-2xl font-semibold mb-5 pb-2 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200"
                >
                  {category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {groupedCommands[category].map((command) => (
                    <CommandCard key={command.name} command={command} />
                  ))}
                </div>
              </section>
            )
          ))}
        </div>
      )}
    </div>
  );
};

export default CommandsPage;