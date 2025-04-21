import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { useTheme } from '../../hooks';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
  icon?: IconType;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, isOpen, onClick, icon: Icon }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <div className={`border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
      <button
        className="flex justify-between items-center w-full py-5 px-2 text-left focus:outline-none group"
        onClick={onClick}
      >
        <div className="flex items-center">
          {Icon && (
            <Icon className={`mr-3 h-5 w-5 flex-shrink-0 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors duration-200 group-hover:${isDarkMode ? 'text-blue-300' : 'text-blue-700'}`} />
          )}
          <span className={`text-lg font-medium ${isDarkMode ? 'text-gray-100' : 'text-gray-800'} transition-colors duration-200 group-hover:${isDarkMode ? 'text-gray-50' : 'text-gray-900'}`}>{title}</span>
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaChevronDown className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-200 group-hover:${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto', marginTop: '0px', marginBottom: '16px' },
              collapsed: { opacity: 0, height: 0, marginTop: '0px', marginBottom: '0px' },
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className={`pl-10 pr-2 pb-4 text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} whitespace-pre-line`}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface AccordionProps {
  items: Array<{ title: string; content: React.ReactNode; icon?: IconType }>;
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          icon={item.icon}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}; 