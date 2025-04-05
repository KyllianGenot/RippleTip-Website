import React, { useState, useMemo } from 'react';
import { SAMPLE_COMMANDS } from '../constants';
import { CommandCard } from '../components/features';
import type { BotCommand } from '../types';
import { motion } from 'framer-motion';
import { Button } from '../components/ui';
import { HiMagnifyingGlass } from 'react-icons/hi2';

const CommandsPage = () => {
  // State for the search term
  const [searchTerm, setSearchTerm] = useState('');

  // Filter commands based on search term (case-insensitive)
  const filteredCommands = useMemo(() => {
    if (!searchTerm.trim()) {
      return SAMPLE_COMMANDS; // Return all if search is empty
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return SAMPLE_COMMANDS.filter(command =>
      command.name.toLowerCase().includes(lowerCaseSearchTerm) ||
      command.description.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [searchTerm]);

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
  }, [filteredCommands]);

  // Get sorted category names from the grouped filtered commands
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
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-24 max-w-6xl mt-16">
      {/* Page Header - Styled like HeroContent */}
      <motion.div 
        className="flex flex-col items-start mb-12 max-w-xl lg:max-w-2xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-left text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight text-white"
        >
          Bot{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">
            Commands
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-left text-lg md:text-xl lg:text-2xl mb-8 text-gray-300"
        >
          Explore all available commands for RippleTip bot and enhance your Discord experience
        </motion.p>

        {/* Search Input Field */}
        <motion.div 
          variants={itemVariants}
          className="w-full mb-8"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search commands"
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full px-5 py-4 rounded-lg bg-gray-800/60 border border-gray-700 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 focus:outline-none text-white placeholder-gray-400 transition-all text-lg"
            />
            <HiMagnifyingGlass className="w-6 h-6 absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </motion.div>
      </motion.div>

      {/* Conditional Rendering based on search results */}
      {filteredCommands.length === 0 ? (
        <motion.div 
          className="text-center text-gray-300 py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="mb-4">
            <svg className="w-20 h-20 mx-auto text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-2xl font-bold">No commands found matching "<span className="text-cyan-400">{searchTerm}</span>".</p>
          <p className="mt-4 text-xl text-gray-400">Try a different search term or browse all categories.</p>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="mt-8"
            onClick={() => setSearchTerm('')}
          >
            Show All Commands
          </Button>
        </motion.div>
      ) : (
        <motion.div 
          className="grid gap-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {sortedCategories.map((category, idx) => (
            // Only render category if it has commands after filtering
            groupedCommands[category]?.length > 0 && (
              <motion.div 
                key={category}
                variants={itemVariants}
                className="category-section"
              >
                <div className="mb-8 flex items-center">
                  <h2 className="text-3xl font-bold text-white">{category}</h2>
                  <div className="ml-6 h-px bg-gradient-to-r from-blue-500/50 to-transparent flex-grow"></div>
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