import { useState, useMemo } from 'react';
import { SAMPLE_COMMANDS } from '../constants';
import { CommandCard } from '../components/features';
import type { BotCommand } from '../types';
import { motion } from 'framer-motion';
import { Button } from '../components/ui';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { useTheme } from '../hooks';

const CommandsPage = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const [searchTerm, setSearchTerm] = useState('');

  const filteredCommands = useMemo(() => {
    if (!searchTerm.trim()) {
      return SAMPLE_COMMANDS;
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return SAMPLE_COMMANDS.filter(
      (command) =>
        command.name.toLowerCase().includes(lowerCaseSearchTerm) ||
        command.description.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [searchTerm]);

  const groupedCommands = useMemo(() => {
    return filteredCommands.reduce((acc, command) => {
      const category = command.category || 'Uncategorized';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(command);
      return acc;
    }, {} as Record<string, BotCommand[]>);
  }, [filteredCommands]);

  const sortedCategories = useMemo(() => Object.keys(groupedCommands).sort(), [groupedCommands]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <div className="container mx-auto px-4 py-24 max-w-6xl mt-16">
      {/* Page Header */}
      <motion.div
        className="flex flex-col items-start mb-12 max-w-xl lg:max-w-2xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className={`text-left text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}
        >
          Bot{' '}
          <span
            className={`text-transparent bg-clip-text bg-gradient-to-r ${
              isDarkMode ? 'from-cyan-400 to-blue-500' : 'from-cyan-500 to-blue-600'
            }`}
          >
            Commands
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className={`text-left text-lg md:text-xl lg:text-2xl mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
        >
          Explore all available commands for RippleTip bot and enhance your Discord experience
        </motion.p>

        {/* Updated Search Input Field - Cleaner Design */}
        <motion.div variants={itemVariants} className="w-full mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search commands..."
              value={searchTerm}
              onChange={handleSearchChange}
              className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition-all text-base ${
                isDarkMode
                  ? 'bg-gray-900 border-gray-800 text-gray-200 placeholder-gray-500 focus:ring-blue-500'
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-blue-400'
              }`}
            />
            <HiMagnifyingGlass
              className={`w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 ${
                isDarkMode ? 'text-gray-500' : 'text-gray-400'
              }`}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Conditional Rendering */}
      {filteredCommands.length === 0 ? (
        <motion.div
          className={`text-center py-16 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="mb-4">
            <svg
              className={`w-20 h-20 mx-auto ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            No commands found matching "<span className={`text-${isDarkMode ? 'cyan-400' : 'cyan-500'}`}>{searchTerm}</span>".
          </p>
          <p className={`mt-4 text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Try a different search term or browse all categories.
          </p>
          <Button
            variant="outline"
            size="lg"
            className={`mt-8 ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-200'}`}
            onClick={() => setSearchTerm('')}
          >
            Show All Commands
          </Button>
        </motion.div>
      ) : (
        <motion.div className="grid gap-16" variants={containerVariants} initial="hidden" animate="visible">
          {sortedCategories.map((category, _) => (
            groupedCommands[category]?.length > 0 && (
              <motion.div key={category} variants={itemVariants} className="category-section">
                <div className="mb-8 flex items-center">
                  <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{category}</h2>
                  <div
                    className={`ml-6 h-px bg-gradient-to-r flex-grow ${
                      isDarkMode ? 'from-blue-500/50 to-transparent' : 'from-blue-400/50 to-transparent'
                    }`}
                  ></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {groupedCommands[category].map((command, index) => (
                    <CommandCard key={command.name} command={command} index={index} />
                  ))}
                </div>
              </motion.div>
            )
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default CommandsPage;