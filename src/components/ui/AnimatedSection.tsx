// src/components/ui/AnimatedSection.tsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  // Optional: customize animation variants if needed later
}

const AnimatedSection = ({ children, className = '' }: AnimatedSectionProps) => {
  const ref = useRef(null);
  // Trigger animation when the element is scrolled into view
  // `once: true` makes it animate only the first time it enters
  // `amount: 0.2` triggers when 20% of the element is visible
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const variants = {
    hidden: { opacity: 0, y: 50 }, // Start invisible and slightly down
    visible: { opacity: 1, y: 0 },   // Fade in and move up to original position
  };

  return (
    // Use motion.section or motion.div depending on semantic needs
    <motion.section
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.6, ease: 'easeOut' }} // Customize duration/easing
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;