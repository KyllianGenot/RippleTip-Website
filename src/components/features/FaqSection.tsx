import React from 'react';
import { FAQ_LIST } from '../../constants';
import { Accordion } from '../ui';
import { useTheme } from '../../hooks';

export const FaqSection: React.FC = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const accordionItems = FAQ_LIST.map((faq) => ({
    title: faq.question,
    content: faq.answer,
    icon: faq.icon,
  }));

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 md:mb-20 text-gray-900 dark:text-white">
          Frequently Asked Questions
        </h2>

        <Accordion items={accordionItems} />
      </div>
    </section>
  );
}; 