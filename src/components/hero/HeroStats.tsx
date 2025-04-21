import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../../hooks';
import { CountUp } from '../ui/CountUp';

export const HeroStats: React.FC = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  const targetVolume = 500000;
  const targetUsers = 5000;
  const feePercentage = 1;
  
  const stats = [
    { 
      label: "Targeted Volume Generated", 
      value: targetVolume,
      prefix: "$",
      suffix: "",
      decimals: 0
    },
    { 
      label: "Targeted Unique Users in 3 Months", 
      value: targetUsers,
      prefix: "",
      suffix: "",
      decimals: 0
    },
    { 
      label: "Success Fee", 
      value: feePercentage,
      prefix: "",
      suffix: "%",
      decimals: 0
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <motion.div
      ref={ref}
      className={`mt-16 md:mt-24 py-8 px-6 rounded-xl ${
        isDarkMode ? 'bg-gray-800/60' : 'bg-white/80'
      } backdrop-blur-sm border ${
        isDarkMode ? 'border-gray-700/50' : 'border-gray-200/80'
      }`}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center"
            variants={itemVariants}
          >
            <div
              className={`text-3xl md:text-4xl font-bold mb-2 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              {inView ? (
                <>
                  {stat.prefix}
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    separator=","
                    decimals={stat.decimals}
                  />
                  {stat.suffix}
                </>
              ) : (
                `${stat.prefix}0${stat.suffix}`
              )}
            </div>
            <p
              className={`text-sm md:text-base ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};