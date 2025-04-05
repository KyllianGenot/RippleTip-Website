// src/components/hero/HeroTransactionDemo.tsx
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../../hooks'; // Adjust path

// Sub-components defined within the same file as per prompt
const DemoMessage: React.FC<{ username: string, message: string, delay: number }> = ({ username, message, delay }) => {
    const { theme } = useTheme();
    const isDarkMode = theme === 'dark';
    return (
        <motion.div
        className={`mb-4 text-sm md:text-base ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.4, ease: "easeOut" }}
        >
        <span className="font-semibold text-blue-500 dark:text-blue-400">{username}: </span>
        <code className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded text-xs md:text-sm">{message}</code>
        </motion.div>
    );
};

const DemoResponse: React.FC<{ botName: string, message: string, delay: number }> = ({ botName, message, delay }) => {
    const { theme } = useTheme();
    const isDarkMode = theme === 'dark';
    return (
        <motion.div
        className={`mb-4 text-sm md:text-base ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.4, ease: "easeOut" }}
        >
        <span className="font-semibold text-cyan-500 dark:text-cyan-400">{botName}: </span>
        <span>{message}</span>
        </motion.div>
    );
};

const DemoNotification: React.FC<{ content: string, detail: string, delay: number }> = ({ content, detail, delay }) => {
    const { theme } = useTheme();
    const isDarkMode = theme === 'dark';
    return (
        <motion.div
        className={`p-3 md:p-4 rounded-lg mt-4 ${isDarkMode ? 'bg-gray-700/80' : 'bg-gray-100/90'} backdrop-blur-sm`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
            delay,
            duration: 0.4,
            type: "spring",
            stiffness: 200,
            damping: 15
        }}
        >
        <p className="font-semibold text-sm md:text-base">{content}</p>
        <p className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{detail}</p>
        </motion.div>
    );
};


export const HeroTransactionDemo: React.FC = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2 // Trigger animation when 20% is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className={`relative rounded-xl shadow-2xl overflow-hidden w-full max-w-lg lg:max-w-md border ${isDarkMode ? 'bg-gray-800/70 border-gray-700' : 'bg-white/80 border-gray-200'} backdrop-blur-md`}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, scale: 0.95, y: 20 },
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: "easeOut",
            delay: 0.2 // Start slightly after HeroContent
          }
        }
      }}
    >
      {/* Mock Title Bar */}
      <div className={`p-2 px-3 ${isDarkMode ? 'bg-gray-900/80' : 'bg-gray-100/90'} border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="flex items-center space-x-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>

      {/* Chat content */}
      <div className="p-4 md:p-6 min-h-[200px]"> {/* Added min-height */}
        <DemoMessage
          username="User123"
          message="/tip @friendUser 5 RLUSD" // Command format example
          delay={0.5} // Animation delay after container visible
        />

        <DemoResponse
          botName="RippleTip"
          message="Transaction confirmed! Sent 5 RLUSD to @friendUser."
          delay={1.2} // Staggered delay
        />

        <DemoNotification
          content="💰 Transaction Successful!"
          detail="5 RLUSD • Remaining Balance: 23.5 RLUSD"
          delay={1.8} // Staggered delay
        />
      </div>
    </motion.div>
  );
};